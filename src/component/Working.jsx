import React, { useState, useEffect } from "react";
import workingThumb from "../assets/images/working_thumb.webp";
import workingPos1 from "../assets/images/working-pos-one.svg";
import workingPos2 from "../assets/images/working_pos_thumb-two.svg";
import heroUnion from "../assets/images/hero-union.png";

const Working = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    description: '',
    phone: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar grid for the current month
  const generateCalendarGrid = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === currentMonth;
      const isToday = date.getTime() === today.getTime();
      const isPast = date < today;
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 5; // Sunday or Friday
      const isAvailable = isCurrentMonth && !isPast && !isWeekend;

      days.push({
        date: date.getDate(),
        fullDate: new Date(date),
        isCurrentMonth,
        isToday,
        isPast,
        isWeekend,
        isAvailable
      });
    }

    return days;
  };

  const calendarDays = generateCalendarGrid();

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
    setSelectedDate(null);
  };

  const handleDateSelect = (day) => {
    if (day.isAvailable) {
      setSelectedDate(day);
      setSubmitMessage('');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedDate) {
      setSubmitMessage('❌ Please select a date first');
      return;
    }
    
    if (!formData.email || !formData.subject) {
      setSubmitMessage('❌ Email and subject are required');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formattedDate = selectedDate.fullDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedDate: formattedDate,
          email: formData.email,
          subject: formData.subject,
          name: formData.name,
          phone: formData.phone,
          description: formData.description
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage('✅ Booking request sent successfully! We\'ll contact you soon.');
        setFormData({
          email: '',
          subject: '',
          description: '',
          phone: '',
          name: ''
        });
        setSelectedDate(null);
      } else {
        setSubmitMessage('❌ Failed to send booking request. Please try again.');
      }
      
    } catch (error) {
      setSubmitMessage('❌ Connection error. Please check your internet and try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="working" style={{
      // Extend the dark blue background to cover both text and calendar
      paddingBottom: isMobile ? '60px' : '200px' // Much bigger padding for desktop
    }}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xxl-6">
              <div className="working_head">
                <h2 className="main_titel">
                  Let's create powerful videos that <span>inspire, engage, and convert</span>
                </h2>

                <p>
                  We align creativity with your marketing goals, delivering cinematic storytelling that inspires, engages, and converts your audience.
                </p>

                <h6>🚀 Ready to bring your brand story to life?</h6>
              </div>

              <div className="working_btn">
                <a href="/contuct-us" className="sara-btn">
                  👉 Start Your Project
                </a>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="working_thumb_main">
                <div className="working_thumb">
                  <img src={workingThumb} alt="thumb" />
                </div>
                <div className="working_pos_thumb">
                  <img src={workingPos1} alt="thumb" />
                </div>
                <div className="working_pos_thumb_two">
                  <img src={workingPos2} alt="thumb" />
                </div>
                <div className="working_pos_thumb_three">
                  <img src={heroUnion} alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL CALENDAR BOOKING SYSTEM - RESPECTS WORKING SECTION CSS */}
        <div className="row working_mt">
          <div className="col-12">
            <div className="booking-system-container" style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '25px',
              padding: isMobile ? '25px 15px' : '40px 30px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              zIndex: 10,
              maxWidth: '100%',
              overflow: 'hidden'
            }}>
              {/* Glassmorphism background effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(107, 122, 71, 0.05) 0%, rgba(139, 154, 90, 0.03) 100%)',
                borderRadius: '25px',
                pointerEvents: 'none'
              }} />

              <div className="text-center" style={{ position: 'relative', zIndex: 2, marginBottom: isMobile ? '30px' : '40px' }}>
                <h2 style={{
                  background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: isMobile ? '1.8rem' : '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  📅 Schedule Your Consultation
                </h2>
                <p style={{ 
                  color: '#333', 
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  Choose your preferred date and let's discuss how we can bring your vision to life
                </p>
              </div>

              <div className="row" style={{ position: 'relative', zIndex: 2, alignItems: 'flex-start' }}>
                {/* PROFESSIONAL CALENDAR */}
                <div className={isMobile ? "col-12 mb-4" : "col-lg-7"}>
                  <div className="calendar-wrapper" style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: isMobile ? '20px 15px' : '30px 25px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    maxWidth: '100%'
                  }}>
                    {/* Calendar Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                      padding: '0 5px'
                    }}>
                      <button
                        onClick={() => navigateMonth('prev')}
                        style={{
                          background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '10px',
                          width: isMobile ? '35px' : '40px',
                          height: isMobile ? '35px' : '40px',
                          fontSize: isMobile ? '14px' : '16px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(107, 122, 71, 0.3)'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        ‹
                      </button>

                      <h3 style={{
                        color: '#333',
                        fontSize: isMobile ? '1.2rem' : '1.4rem',
                        fontWeight: '700',
                        margin: 0,
                        textAlign: 'center'
                      }}>
                        {monthNames[currentMonth]} {currentYear}
                      </h3>

                      <button
                        onClick={() => navigateMonth('next')}
                        style={{
                          background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '10px',
                          width: isMobile ? '35px' : '40px',
                          height: isMobile ? '35px' : '40px',
                          fontSize: isMobile ? '14px' : '16px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px rgba(107, 122, 71, 0.3)'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                      >
                        ›
                      </button>
                  </div>

                    {/* Day Headers */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: isMobile ? '3px' : '4px',
                      marginBottom: '12px'
                    }}>
                      {dayNames.map((day) => (
                        <div key={day} style={{
                          textAlign: 'center',
                          padding: isMobile ? '8px 3px' : '10px 5px',
                          fontSize: isMobile ? '0.7rem' : '0.8rem',
                          fontWeight: '600',
                          color: '#666',
                          background: 'rgba(107, 122, 71, 0.08)',
                          borderRadius: '6px'
                        }}>
                          {day}
                  </div>
                      ))}
                </div>

                    {/* Calendar Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: isMobile ? '3px' : '4px',
                      maxHeight: isMobile ? '280px' : '320px',
                      overflow: 'visible'
                    }}>
                      {calendarDays.map((day, index) => {
                        const isSelected = selectedDate?.fullDate.toDateString() === day.fullDate.toDateString();
                        
                        return (
                          <div
                            key={index}
                            onClick={() => handleDateSelect(day)}
                            style={{
                              padding: isMobile ? '8px 4px' : '10px 6px',
                              textAlign: 'center',
                              borderRadius: '8px',
                              cursor: day.isAvailable ? 'pointer' : 'not-allowed',
                              fontSize: isMobile ? '0.75rem' : '0.85rem',
                              fontWeight: '500',
                              minHeight: isMobile ? '32px' : '36px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              transition: 'all 0.2s ease',
                              
                              // Styling based on day type
                              ...(isSelected ? {
                                background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                                color: 'white',
                                transform: 'scale(1.05)',
                                boxShadow: '0 4px 15px rgba(107, 122, 71, 0.4)',
                                zIndex: 10
                              } : day.isAvailable ? {
                                background: 'rgba(107, 122, 71, 0.08)',
                                color: '#333',
                                border: '1px solid transparent'
                              } : day.isCurrentMonth ? (
                                day.isWeekend ? {
                                  background: 'rgba(239, 68, 68, 0.1)',
                                  color: '#999',
                                  textDecoration: 'line-through'
                                } : {
                                  background: 'rgba(0, 0, 0, 0.05)',
                                  color: '#ccc'
                                }
                              ) : {
                                background: 'transparent',
                                color: '#ddd'
                              })
                            }}
                            onMouseEnter={(e) => {
                              if (day.isAvailable && !isSelected) {
                                e.target.style.background = 'rgba(107, 122, 71, 0.15)';
                                e.target.style.transform = 'scale(1.02)';
                                e.target.style.borderColor = '#6B7A47';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (day.isAvailable && !isSelected) {
                                e.target.style.background = 'rgba(107, 122, 71, 0.08)';
                                e.target.style.transform = 'scale(1)';
                                e.target.style.borderColor = 'transparent';
                              }
                            }}
                          >
                            {day.date}
                            {day.isToday && (
                              <div style={{
                                position: 'absolute',
                                bottom: '2px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '3px',
                                height: '3px',
                                borderRadius: '50%',
                                background: isSelected ? 'white' : '#6B7A47'
                              }} />
                            )}
                </div>
                        );
                      })}
              </div>

                    <div style={{
                      marginTop: '15px',
                      padding: '12px',
                      background: 'rgba(107, 122, 71, 0.08)',
                      borderRadius: '10px',
                      fontSize: isMobile ? '0.75rem' : '0.8rem',
                      color: '#666',
                      textAlign: 'center'
                    }}>
                      <div style={{ marginBottom: '6px' }}>
                        <span style={{ color: '#dc2626' }}>🚫</span> Fridays & Sundays unavailable
                      </div>
                      <div>
                        <span style={{ color: '#6B7A47' }}>✅</span> Green dates available
                      </div>
                  </div>
                  </div>
                </div>

                {/* BOOKING FORM */}
                <div className={isMobile ? "col-12" : "col-lg-5"}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: isMobile ? '20px 15px' : '30px 25px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    maxWidth: '100%'
                  }}>
                    <h3 style={{
                      color: '#333',
                      marginBottom: '20px',
                      textAlign: 'center',
                      fontSize: isMobile ? '1.2rem' : '1.3rem',
                      fontWeight: '700'
                    }}>
                      📝 Booking Details
                    </h3>
                    
                    {selectedDate && (
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(107, 122, 71, 0.1), rgba(139, 154, 90, 0.08))',
                        padding: '15px',
                        borderRadius: '12px',
                        marginBottom: '20px',
                        textAlign: 'center',
                        border: '1px solid rgba(107, 122, 71, 0.2)'
                      }}>
                        <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#6B7A47', marginBottom: '4px' }}>
                          📅 Selected Date
                        </div>
                        <div style={{ fontSize: '0.9rem', color: '#333' }}>
                          {selectedDate.fullDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                </div>
              </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      {[
                        { name: 'email', type: 'email', placeholder: 'Email Address *', required: true },
                        { name: 'subject', type: 'text', placeholder: 'Subject *', required: true },
                        { name: 'name', type: 'text', placeholder: 'Full Name (optional)', required: false },
                        { name: 'phone', type: 'tel', placeholder: 'Phone Number (optional)', required: false }
                      ].map((field) => (
                        <div key={field.name} style={{ marginBottom: '15px' }}>
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            required={field.required}
                            style={{
                              width: '100%',
                              padding: isMobile ? '12px 15px' : '14px 16px',
                              borderRadius: '10px',
                              border: '1px solid rgba(0, 0, 0, 0.1)',
                              fontSize: isMobile ? '0.9rem' : '1rem',
                              transition: 'all 0.3s ease',
                              backgroundColor: 'rgba(255, 255, 255, 0.8)',
                              backdropFilter: 'blur(5px)'
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor = '#6B7A47';
                              e.target.style.backgroundColor = 'white';
                              e.target.style.boxShadow = '0 0 0 3px rgba(107, 122, 71, 0.1)';
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                              e.target.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      ))}

                      <div style={{ marginBottom: '20px' }}>
                        <textarea
                          name="description"
                          placeholder="Tell us about your project... (optional)"
                          value={formData.description}
                          onChange={handleInputChange}
                          rows="3"
                          style={{
                            width: '100%',
                            padding: isMobile ? '12px 15px' : '14px 16px',
                            borderRadius: '10px',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            fontSize: isMobile ? '0.9rem' : '1rem',
                            resize: 'vertical',
                            fontFamily: 'inherit',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(5px)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#6B7A47';
                            e.target.style.backgroundColor = 'white';
                            e.target.style.boxShadow = '0 0 0 3px rgba(107, 122, 71, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
              </div>

                      <button
                        type="submit"
                        disabled={isSubmitting || !selectedDate}
                        style={{
                          width: '100%',
                          padding: isMobile ? '14px 20px' : '16px 22px',
                          background: selectedDate && !isSubmitting 
                            ? 'linear-gradient(135deg, #6B7A47, #8B9A5A)' 
                            : 'rgba(0, 0, 0, 0.2)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          fontWeight: 'bold',
                          cursor: selectedDate && !isSubmitting ? 'pointer' : 'not-allowed',
                          transition: 'all 0.3s ease',
                          transform: isSubmitting ? 'scale(0.98)' : 'scale(1)',
                          boxShadow: selectedDate && !isSubmitting 
                            ? '0 6px 20px rgba(107, 122, 71, 0.4)' 
                            : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (selectedDate && !isSubmitting) {
                            e.target.style.transform = 'translateY(-1px) scale(1.01)';
                            e.target.style.boxShadow = '0 8px 25px rgba(107, 122, 71, 0.5)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedDate && !isSubmitting) {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.boxShadow = '0 6px 20px rgba(107, 122, 71, 0.4)';
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ 
                              display: 'inline-block', 
                              width: '18px', 
                              height: '18px', 
                              border: '2px solid transparent',
                              borderTop: '2px solid white',
                              borderRadius: '50%',
                              animation: 'spin 1s linear infinite',
                              marginRight: '8px'
                            }} />
                            Sending...
                    </span>
                        ) : '🚀 Schedule Consultation'}
                      </button>

                      {submitMessage && (
                        <div style={{
                          marginTop: '15px',
                          padding: '12px 15px',
                          borderRadius: '10px',
                          textAlign: 'center',
                          background: submitMessage.includes('✅') 
                            ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))' 
                            : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))',
                          color: submitMessage.includes('✅') ? '#16a34a' : '#dc2626',
                          border: `1px solid ${submitMessage.includes('✅') ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                          fontSize: isMobile ? '0.85rem' : '0.9rem',
                          fontWeight: '500'
                        }}>
                          {submitMessage}
                  </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Working;
