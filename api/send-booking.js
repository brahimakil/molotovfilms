// api/send-booking.js
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const OWNER_EMAIL = process.env.OWNER_EMAIL || 'Filmsmolotov@gmail.com';
const SITE_URL = process.env.SITE_URL || 'https://filmsmolotov.com';

const wrapEmail = (title, bodyHtml) => `
  <div style="font-family:Segoe UI,Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #e9ecef">
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      <tr>
        <td style="background:linear-gradient(135deg,#6B7A47,#8B9A5A);padding:18px 20px">
          <table width="100%" style="border-collapse:collapse">
            <tr>
              <td style="width:48px;vertical-align:middle">
                <img src="cid:molotovLogo" width="44" height="44" style="display:block;border-radius:6px" alt="Molotov Films" />
              </td>
              <td style="padding-left:12px;vertical-align:middle">
                <div style="color:#fff;font-size:18px;font-weight:700;line-height:1">${title}</div>
                <div style="color:rgba(255,255,255,.9);font-size:12px;margin-top:2px">Molotov Films</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr><td style="padding:24px 22px;background:#fff">${bodyHtml}</td></tr>
      <tr>
        <td style="padding:18px 22px;background:#f8f9fa;border-top:1px solid #eef1f4;text-align:center">
          <a href="${SITE_URL}" style="display:inline-block;padding:10px 18px;border-radius:8px;background:#6B7A47;color:#fff;text-decoration:none;font-weight:600">Visit Website</a>
          <div style="color:#6c757d;font-size:12px;margin-top:8px">${SITE_URL}</div>
        </td>
      </tr>
    </table>
  </div>
`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).end(); return; }
  const { selectedDate, email, subject, name, phone, description } = req.body || {};

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: OWNER_EMAIL, pass: process.env.GMAIL_APP_PASSWORD }
  });

  const detailsHtml = `
    <div style="border-left:4px solid #6B7A47;padding-left:14px;margin-bottom:16px">
      <div style="color:#111;font-weight:700">Selected Date</div>
      <div style="color:#6B7A47;font-weight:700;margin-top:2px">${selectedDate || '-'}</div>
    </div>
    <div style="margin-bottom:12px">
      <div style="color:#111;font-weight:700;margin-bottom:8px">Client Information</div>
      <table width="100%" style="font-size:14px;border-collapse:collapse">
        <tr><td style="color:#666;padding:6px 0;width:120px">Subject:</td><td style="color:#111">${subject || '-'}</td></tr>
        <tr><td style="color:#666;padding:6px 0">Email:</td><td style="color:#111">${email || '-'}</td></tr>
        ${name ? `<tr><td style="color:#666;padding:6px 0">Name:</td><td style="color:#111">${name}</td></tr>` : ''}
        ${phone ? `<tr><td style="color:#666;padding:6px 0">Phone:</td><td style="color:#111">${phone}</td></tr>` : ''}
      </table>
    </div>
    ${description ? `<div style="margin-top:14px"><div style="color:#111;font-weight:700;margin-bottom:6px">Message</div><div style="background:#f8f9fa;border:1px solid #eef1f4;border-radius:8px;padding:12px;color:#111;line-height:1.6">${description}</div></div>` : ''}
  `;

  const logoPath = path.join(process.cwd(), 'public', 'email-logo.png'); // see step 2
  const logo = fs.existsSync(logoPath) ? fs.readFileSync(logoPath) : null;

  const ownerMail = {
    from: `Molotov Films <${OWNER_EMAIL}>`,
    to: OWNER_EMAIL,
    replyTo: email || undefined,
    subject: `New Booking Request: ${subject || 'No subject'}`,
    html: wrapEmail('New Booking Request', detailsHtml),
    attachments: logo ? [{ filename: 'email-logo.png', content: logo, cid: 'molotovLogo' }] : []
  };

  const userBody = `
    <p style="margin:0 0 10px;color:#111;font-size:15px">Hi${name ? ` ${name}` : ''},</p>
    <p style="margin:0 0 12px;color:#444;font-size:14px">We’ve received your booking request${selectedDate ? ` for <strong>${selectedDate}</strong>` : ''}. Our team will reach out shortly.</p>
    ${detailsHtml}
    <p style="margin:14px 0 0;color:#444;font-size:13px">— Molotov Films</p>
  `;
  const userMail = email ? {
    from: `Molotov Films <${OWNER_EMAIL}>`,
    to: email,
    subject: 'We received your booking request ✅',
    html: wrapEmail('Thanks for your request', userBody),
    attachments: logo ? [{ filename: 'email-logo.png', content: logo, cid: 'molotovLogo' }] : []
  } : null;

  try {
    await Promise.all([transporter.sendMail(ownerMail), userMail ? transporter.sendMail(userMail) : Promise.resolve()]);
    res.status(200).json({ success: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false });
  }
};
