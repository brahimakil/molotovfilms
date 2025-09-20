import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import contactMainImage from "../assets/contactusmainimage/vlcsnap-2025-08-25-09h48m17s104 (1).png";

const ContactUsPage = () => {
  const location = useLocation();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.subject || !formData.name) {
      setSubmitMessage('❌ Email, name, and subject are required');
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
        setSubmitMessage('✅ Your message has been sent successfully! We\'ll contact you soon.');
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
        setSubmitMessage('❌ Failed to send message. Please try again.');
      }
      
    } catch (error) {
      setSubmitMessage('❌ Connection error. Please check your internet and try again.');
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
      <section className="contact_us" style={{ padding: "80px 0", backgroundColor: "#f8f9fa" }}>
        <div className="container">
          {/* SECTION HEADER */}
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#333", marginBottom: "20px" }}>
                Contact Us
              </h1>
              <p style={{ fontSize: "18px", color: "#666", maxWidth: "600px", margin: "0 auto" }}>
                Get in touch with our team for any inquiries about our film production services.
              </p>
              {selectedDate && (
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
                  📅 Selected Date: {selectedDate}
                </div>
              )}
            </div>
          </div>
          
          {/* MAIN CONTENT - FORM LEFT, MAP RIGHT */}
          <div className="row">
            {/* LEFT SIDE - CONTACT FORM */}
            <div className="col-lg-8">
              <div className="contact_form" style={{
                backgroundColor: "#fff",
                padding: "50px",
                borderRadius: "15px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
              }}>
                <h3 style={{ 
                  fontSize: "32px", 
                  fontWeight: "700", 
                  color: "#333", 
                  marginBottom: "30px" 
                }}>
                  Send us a Message
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
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder="Your Full Name"
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
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder="your.email@example.com"
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
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder="+1 (555) 123-4567"
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
                          Subject *
                        </label>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-control" 
                          placeholder="Project inquiry, consultation, etc."
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
                      Tell us about your project *
                    </label>
                    <textarea 
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="form-control" 
                      rows="6" 
                      placeholder="Tell us about your project, budget, timeline, and any specific requirements..."
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
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
            
            {/* RIGHT SIDE - MAP & CONTACT INFO */}
            <div className="col-lg-4">
              {/* CONTACT INFO */}
              <div className="contact_info" style={{
                backgroundColor: "#fff",
                padding: "40px",
                borderRadius: "15px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
                marginBottom: "30px"
              }}>
                <h4 style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#333", 
                  marginBottom: "25px" 
                }}>
                  Get In Touch
                </h4>
                
                <div className="info_item" style={{ marginBottom: "20px", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ 
                    backgroundColor: "#6b8e23", 
                    color: "#fff", 
                    width: "45px", 
                    height: "45px", 
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginRight: "15px",
                    flexShrink: "0"
                  }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h6 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "5px" }}>
                      Address
                    </h6>
                    <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                      123 Film Studio Lane<br />
                      Los Angeles, CA 90210<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="info_item" style={{ marginBottom: "20px", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ 
                    backgroundColor: "#6b8e23", 
                    color: "#fff", 
                    width: "45px", 
                    height: "45px", 
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginRight: "15px",
                    flexShrink: "0"
                  }}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "5px" }}>
                      Phone
                    </h6>
                    <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="info_item" style={{ marginBottom: "20px", display: "flex", alignItems: "flex-start" }}>
                  <div style={{ 
                    backgroundColor: "#6b8e23", 
                    color: "#fff", 
                    width: "45px", 
                    height: "45px", 
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginRight: "15px",
                    flexShrink: "0"
                  }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h6 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "5px" }}>
                      Email
                    </h6>
                    <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                      info@molotovfilms.com<br />
                      projects@molotovfilms.com
                    </p>
                  </div>
                </div>
                
                <div className="info_item" style={{ display: "flex", alignItems: "flex-start" }}>
                  <div style={{ 
                    backgroundColor: "#6b8e23", 
                    color: "#fff", 
                    width: "45px", 
                    height: "45px", 
                    borderRadius: "50%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginRight: "15px",
                    flexShrink: "0"
                  }}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h6 style={{ fontSize: "16px", fontWeight: "600", color: "#333", marginBottom: "5px" }}>
                      Business Hours
                    </h6>
                    <p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* MAP SECTION */}
              <div className="map_section" style={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.1)"
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.398!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1648484721123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;