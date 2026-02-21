import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import contactMainImage from "../assets/contactusmainimage/vlcsnap-2025-08-25-09h48m17s104 (1).png";

const ContactUsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    name: '',
    phone: '',
    description: ''
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Get selected date from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const dateFromUrl = urlParams.get('selectedDate');
    if (dateFromUrl) {
      setSelectedDate(decodeURIComponent(dateFromUrl));
    }
  }, [location]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectDate = () => {
    // Navigate to home page with scroll to calendar instruction
    navigate('/', { state: { scrollToCalendar: true } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.subject || !formData.name) {
      setSubmitMessage(t('contactUsPage.requiredFields'));
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Use the same backend as home page
      const response = await fetch('https://molotov-backend.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selectedDate: selectedDate || 'No specific date selected',
          email: formData.email,
          subject: formData.subject,
          name: formData.name,
          phone: formData.phone,
          description: formData.description
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage(t('contactUsPage.success'));
        setFormData({
          email: '',
          subject: '',
          description: '',
          phone: '',
          name: ''
        });
        // Clear the date from URL after successful submission
        window.history.replaceState({}, document.title, "/contuct-us");
        setSelectedDate('');
      } else {
        setSubmitMessage(t('contactUsPage.failure'));
      }
      
    } catch (error) {
      setSubmitMessage(t('contactUsPage.connectionError'));
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      {/* HERO IMAGE BANNER */}
      <section className="contact-hero-banner">
        <img 
          src={contactMainImage} 
          alt="Contact Us" 
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            display: "block"
          }}
        />
      </section>

      {/* PROFESSIONAL CONTACT SECTION */}
      <section className="contact_us" style={{ padding: "80px 0", backgroundColor: "#000000" }}>
        <div className="container">
          {/* SECTION HEADER */}
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mb-5">
              <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#ffffff", marginBottom: "20px" }}>
                {t('contactUsPage.heroHeading')}
              </h1>
              <p style={{ fontSize: "18px", color: "#cccccc", maxWidth: "600px", margin: "0 auto" }}>
                {t('contactUsPage.heroSubheading')}
              </p>
              {selectedDate ? (
                <div style={{ 
                  backgroundColor: "#6b8e23", 
                  color: "#fff", 
                  padding: "15px 30px", 
                  borderRadius: "8px", 
                  marginTop: "20px",
                  display: "inline-block",
                  fontSize: "16px",
                  fontWeight: "600"
                }}>
                  {t('contactUsPage.selectedDate')} {selectedDate}
                </div>
              ) : (
                <div style={{ marginTop: "20px" }}>
                  <button
                    onClick={handleSelectDate}
                    style={{
                      backgroundColor: "#6b8e23",
                      color: "#fff",
                      padding: "15px 30px",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#556b2f";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#6b8e23";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    {t('contactUsPage.selectDateButton')}
                  </button>
                  <p style={{ 
                    fontSize: "14px", 
                    color: "#999", 
                    marginTop: "10px",
                    fontStyle: "italic"
                  }}>
                    {t('contactUsPage.selectDateHint')}
                  </p>
                </div>
              )}
                </div>
              </div>
          
          {/* MAIN CONTENT - CENTERED FORM */}
          <div className="row justify-content-center">
            {/* CENTERED CONTACT FORM */}
            <div className="col-lg-10 col-xl-8">
              <div className="contact_form" style={{
                backgroundColor: "#fff",
                padding: "50px",
                borderRadius: "15px",
                boxShadow: "0 15px 40px rgba(255,255,255,0.1)",
                margin: "0 auto"
              }}>
                <h3 style={{ 
                  fontSize: "32px", 
                  fontWeight: "700", 
                  color: "#333", 
                  marginBottom: "30px" 
                }}>
                  {t('contactUsPage.formHeading')}
                </h3>

                {/* Submit Message */}
                {submitMessage && (
                  <div style={{
                    padding: "15px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                    backgroundColor: submitMessage.includes('✅') ? "#d4edda" : "#f8d7da",
                    color: submitMessage.includes('✅') ? "#155724" : "#721c24",
                    border: `1px solid ${submitMessage.includes('✅') ? "#c3e6cb" : "#f5c6cb"}`
                  }}>
                    {submitMessage}
            </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <label style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px", display: "block" }}>
                          {t('contactUsPage.fullName')}
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder={t('contactUsPage.fullNamePlaceholder')}
                          required
                      style={{
                            height: "55px",
                            fontSize: "16px",
                            border: "2px solid #e9ecef",
                            borderRadius: "8px",
                            padding: "0 20px"
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <label style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px", display: "block" }}>
                          {t('contactUsPage.emailLabel')}
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder={t('contactUsPage.emailPlaceholder')}
                          required
                          style={{
                            height: "55px",
                            fontSize: "16px",
                            border: "2px solid #e9ecef",
                            borderRadius: "8px",
                            padding: "0 20px"
                          }}
                        />
                </div>
              </div>
            </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <label style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px", display: "block" }}>
                          {t('contactUsPage.phoneLabel')}
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder={t('contactUsPage.phonePlaceholder')}
                          style={{
                            height: "55px",
                            fontSize: "16px",
                            border: "2px solid #e9ecef",
                            borderRadius: "8px",
                            padding: "0 20px"
                          }}
                        />
                </div>
              </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-4">
                        <label style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px", display: "block" }}>
                          {t('contactUsPage.subjectLabel')}
                      </label>
                      <input
                        type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                        className="form-control"
                          placeholder={t('contactUsPage.subjectPlaceholder')}
                          required
                          style={{
                            height: "55px",
                            fontSize: "16px",
                            border: "2px solid #e9ecef",
                            borderRadius: "8px",
                            padding: "0 20px"
                          }}
                      />
                    </div>
                    </div>
                    </div>
                  
                  <div className="form-group mb-4">
                    <label style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "10px", display: "block" }}>
                      {t('contactUsPage.messageLabel')}
                      </label>
                      <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                        className="form-control"
                      rows="6" 
                      placeholder={t('contactUsPage.messagePlaceholder')}
                      required
                      style={{
                        fontSize: "16px",
                        border: "2px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "20px",
                        resize: "vertical"
                      }}
                      ></textarea>
                    </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn"
                    style={{
                      backgroundColor: isSubmitting ? "#ccc" : "#6b8e23",
                      color: "#fff",
                      padding: "15px 40px",
                      fontSize: "18px",
                      fontWeight: "600",
                      border: "none",
                      borderRadius: "8px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {isSubmitting ? t('contactUsPage.submitting') : t('contactUsPage.submitButton')}
                    </button>
                  </form>
                </div>
            </div>
     
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
