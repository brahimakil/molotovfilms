import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import workingPos1 from "../assets/images/working-pos-one.svg";
import workingThumb from "../assets/images/working_thumb.webp";
import workingPos2 from "../assets/images/working_pos_thumb-two.svg";
import heroUnion from "../assets/images/hero-union.png";
import molotovLogo from "../assets/main logo/Molotov Logo PNG.png";
import scanIcon from "../assets/images/scan.svg";
import graphIcon from "../assets/images/graph.svg";
import paperIcon from "../assets/images/paper.svg";
import arrowLine from "../assets/images/arrow-line.svg";
import { FaLightbulb, FaVideo, FaShare } from 'react-icons/fa';
import { FaBrain, FaCogs, FaRocket } from 'react-icons/fa';

const Working = () => {
  const navigate = useNavigate();
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
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday (not Friday)
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

  // UPDATED: Redirect to contact page with selected date
  const handleDateSelect = (day) => {
    if (day.isAvailable) {
      const formattedDate = day.fullDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Redirect to contact page with selected date as URL parameter
      navigate(`/contuct-us?selectedDate=${encodeURIComponent(formattedDate)}`);
    }
  };

  return (
    <section className="working" style={{
      paddingBottom: isMobile ? '60px' : '200px'
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
                  <img src="/IMG-20251003-WA0088.jpg" alt="thumb" />
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

        {/* COMPACT CALENDAR BOOKING SYSTEM */}
        <div className="row working_mt">
          <div className="col-12">
          <div className="voisify-calendar-container" style={{
  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6b 100%)',
  borderRadius: '20px',
  padding: '0',
  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  zIndex: 10,
  maxWidth: isMobile ? '100%' : '1000px',
  margin: '0 auto',
  overflow: 'hidden',
  minHeight: isMobile ? '500px' : '600px'
}}>
              {/* Left Side - Logo and Info Section */}
              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                height: '100%',
                minHeight: isMobile ? '500px' : '600px'
              }}>
                {/* Left Panel */}
                <div style={{
                  flex: isMobile ? 'none' : '1',
                  background: 'linear-gradient(135deg, #1a2f4a 0%, #243447 100%)',
                  padding: isMobile ? '30px 25px' : '50px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  minHeight: isMobile ? '250px' : '600px'
                }}>
                  
                  {/* Decorative Background Elements */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(107, 122, 71, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(20px)'
                  }} />
                  
                  <div style={{
                    position: 'absolute',
                    bottom: '30px',
                    right: '30px',
                    width: '80px',
                    height: '80px',
                    background: 'rgba(218, 165, 32, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(25px)'
                  }} />

                  {/* Logo */}
                  <div style={{
                    width: isMobile ? '120px' : '160px',
                    height: isMobile ? '120px' : '160px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(107, 122, 71, 0.2), rgba(218, 165, 32, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <img 
                      src={molotovLogo}
                      alt="Molotov Films"
                      style={{
                        width: isMobile ? '80px' : '110px',
                        height: isMobile ? '80px' : '110px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Brand Name */}
                  <h2 style={{
                    color: 'white',
                    fontSize: isMobile ? '1.6rem' : '2rem',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                    background: 'linear-gradient(135deg, #6B7A47, #daa520)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    MOLOTOV FILMS
                  </h2>

                  {/* Service Title */}
                  <h3 style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                    fontWeight: '500',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    Video Production Consultation
                  </h3>

                  {/* Duration */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(107, 122, 71, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '10px'
                    }}>
                      <span style={{ fontSize: '12px', color: 'white' }}>⏱</span>
                    </div>
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      fontWeight: '500'
                    }}>
                      30 min
                    </span>
                  </div>

                  {/* Meeting Info */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '15px',
                    marginBottom: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '8px'
                    }}>
                      <span style={{ fontSize: '16px', marginRight: '8px' }}>💻</span>
                      <span style={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: isMobile ? '0.8rem' : '0.85rem'
                      }}>
                        Web conferencing details provided upon confirmation.
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: isMobile ? '0.85rem' : '0.95rem',
                    lineHeight: '1.5',
                    textAlign: 'center',
                    maxWidth: '280px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    Thank you for your interest! At Molotov Films, we're passionate about turning authentic stories into powerful video content that builds trust and elevates your brand.
                  </p>
                </div>

                {/* Right Panel - Calendar */}
                <div style={{
                  flex: isMobile ? 'none' : '1',
                  background: 'linear-gradient(135deg, #2D3E50, #34495E)',
                  borderRadius: '16px',
                  padding: isMobile ? '25px 20px' : '40px 35px', // Increased padding
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  maxWidth: '100%'
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

                  <div className="text-center" style={{ position: 'relative', zIndex: 2, marginBottom: isMobile ? '25px' : '30px' }}>
                    <h2 style={{
                      background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: isMobile ? '1.6rem' : '2rem',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                      textAlign: 'center'
                    }}>
                      📅 Select a Date & Time
                    </h2>
                  </div>

                  {/* EXPANDED CALENDAR */}
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    {/* Calendar Header */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '30px', // Increased margin
                      padding: '0 10px'
                    }}>
                      <button
                        onClick={() => navigateMonth('prev')}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          fontSize: '18px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                      >
                        ‹
                      </button>

                      <h3 style={{
                        color: 'white',
                        fontSize: isMobile ? '1.3rem' : '1.6rem', // Increased font size
                        fontWeight: '600',
                        margin: 0,
                        textAlign: 'center'
                      }}>
                        {monthNames[currentMonth]} {currentYear}
                      </h3>

                      <button
                        onClick={() => navigateMonth('next')}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          width: '40px',
                          height: '40px',
                          fontSize: '18px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                        onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                      >
                        ›
                      </button>
                    </div>

                    {/* Day Headers */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: '4px', // Increased gap
                      marginBottom: '15px' // Increased margin
                    }}>
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                        <div key={day} style={{
                          textAlign: 'center',
                          padding: isMobile ? '10px 4px' : '12px 6px', // Increased padding
                          fontSize: isMobile ? '0.75rem' : '0.85rem', // Increased font size
                          fontWeight: '500',
                          color: 'rgba(255, 255, 255, 0.7)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* Calendar Grid - EXPANDED */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: '4px', // Increased gap
                      maxHeight: isMobile ? '300px' : '380px', // Increased height
                      overflow: 'visible'
                    }}>
                      {calendarDays.map((day, index) => {
                        const isSelected = selectedDate?.fullDate.toDateString() === day.fullDate.toDateString();
                        
                        return (
                          <div
                            key={index}
                            onClick={() => handleDateSelect(day)}
                            style={{
                              padding: isMobile ? '12px 6px' : '16px 8px', // Increased padding
                              textAlign: 'center',
                              borderRadius: '8px',
                              cursor: day.isAvailable ? 'pointer' : 'not-allowed',
                              fontSize: isMobile ? '0.9rem' : '1rem', // Increased font size
                              fontWeight: '500',
                              minHeight: isMobile ? '40px' : '50px', // Increased height
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              transition: 'all 0.2s ease',
                              
                              // Styling based on day type
                              ...(isSelected ? {
                                background: '#6B7A47',
                                color: 'white',
                                transform: 'scale(1.05)',
                                boxShadow: '0 4px 15px rgba(107, 122, 71, 0.4)',
                                zIndex: 10
                              } : day.isAvailable ? {
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                border: '1px solid transparent'
                              } : day.isCurrentMonth ? (
                                day.isWeekend ? {
                                  background: 'rgba(239, 68, 68, 0.2)',
                                  color: 'rgba(255, 255, 255, 0.4)',
                                  textDecoration: 'line-through'
                                } : {
                                  background: 'rgba(255, 255, 255, 0.05)',
                                  color: 'rgba(255, 255, 255, 0.3)'
                                }
                              ) : {
                                background: 'transparent',
                                color: 'rgba(255, 255, 255, 0.2)'
                              })
                            }}
                            onMouseEnter={(e) => {
                              if (day.isAvailable && !isSelected) {
                                e.target.style.background = 'rgba(107, 122, 71, 0.3)';
                                e.target.style.transform = 'scale(1.02)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (day.isAvailable && !isSelected) {
                                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.transform = 'scale(1)';
                              }
                            }}
                          >
                            {day.date}
                            {day.isToday && (
                              <div style={{
                                position: 'absolute',
                                bottom: '4px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                background: isSelected ? 'white' : '#6B7A47'
                              }} />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div style={{
                      marginTop: '20px', // Increased margin
                      padding: '15px', // Increased padding
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '10px',
                      fontSize: isMobile ? '0.8rem' : '0.85rem', // Increased font size
                      color: 'rgba(255, 255, 255, 0.8)',
                      textAlign: 'center'
                    }}>
                      <div style={{ marginBottom: '6px' }}>
                        <span style={{ color: '#ef4444' }}>🚫</span> Saturdays & Sundays unavailable
                      </div>
                      <div>
                        <span style={{ color: '#6B7A47' }}>✅</span> Green dates available
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* POPUP BOOKING FORM - HIDDEN */}
            {false && selectedDate && (
              <>
                {/* Backdrop */}
                <div 
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.3s ease'
                  }}
                  onClick={() => setSelectedDate(null)}
                >
                  {/* Popup Content */}
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      padding: isMobile ? '25px 20px' : '35px 30px',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      maxWidth: isMobile ? '90vw' : '500px',
                      width: '100%',
                      maxHeight: '90vh',
                      overflow: 'auto',
                      position: 'relative',
                      animation: 'slideUp 0.3s ease'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedDate(null)}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'rgba(0, 0, 0, 0.1)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        color: '#666',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(0, 0, 0, 0.2)';
                        e.target.style.color = '#333';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(0, 0, 0, 0.1)';
                        e.target.style.color = '#666';
                      }}
                    >
                      ✕
                    </button>

                    {/* Popup Header */}
                    <div style={{
                      textAlign: 'center',
                      marginBottom: '25px'
                    }}>
                      <h3 style={{
                        background: 'linear-gradient(135deg, #6b8e23, #556b2f)',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: isMobile ? '1.4rem' : '1.6rem',
                        fontWeight: 'bold',
                        marginBottom: '10px'
                      }}>
                        📝 Booking Details
                      </h3>
                    </div>

                    {/* Selected Date Display */}
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(107, 122, 71, 0.1), rgba(139, 154, 90, 0.08))',
                      padding: '15px',
                      borderRadius: '12px',
                      marginBottom: '25px',
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

                    {/* Booking Form */}
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
                        disabled={isSubmitting}
                        style={{
                          width: '100%',
                          padding: isMobile ? '14px 20px' : '16px 22px',
                          background: !isSubmitting 
                            ? 'linear-gradient(135deg, #6B7A47, #8B9A5A)' 
                            : 'rgba(0, 0, 0, 0.2)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          fontWeight: 'bold',
                          cursor: !isSubmitting ? 'pointer' : 'not-allowed',
                          transition: 'all 0.3s ease',
                          transform: isSubmitting ? 'scale(0.98)' : 'scale(1)',
                          boxShadow: !isSubmitting 
                            ? '0 6px 20px rgba(107, 122, 71, 0.4)' 
                            : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = 'translateY(-1px) scale(1.01)';
                            e.target.style.boxShadow = '0 8px 25px rgba(107, 122, 71, 0.5)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
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
              </>
            )}
          </div>
       </div>
      </div>

      {/* WORKING PROCESS SECTION */}
      <div className="row working_mt" style={{ marginTop: '80px' }}>
        <div className="col-xxl-12">
          <div style={{
            maxWidth: '1500px',
            margin: '0 auto',
            padding: '0 40px'
          }}>
            <div className="working_icon_item_main">
              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon" style={{
                      background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FaBrain size={40} color="white" />
                      <span className="num" style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white'
                      }}>1</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Concept & Strategy</p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img src={arrowLine} alt="arrow" />
                </div>
              </div>

              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon" style={{
                      background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FaCogs size={40} color="white" />
                      <span className="num" style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white'
                      }}>2</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Design & Production</p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img src={arrowLine} alt="arrow" />
                </div>
              </div>

              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon" style={{
                      background: 'linear-gradient(135deg, #6B7A47, #8B9A5A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <FaRocket size={40} color="white" />
                      <span className="num" style={{ 
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white'
                      }}>3</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Polished & Publish-Ready</p>
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
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes slideUp {
        0% { 
          opacity: 0; 
          transform: translateY(30px) scale(0.95); 
        }
        100% { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
      }
      .working_icon {
        background: linear-gradient(135deg, #6B7A47, #8B9A5A) !important;
        transition: none !important;
      }

      .working_icon:hover {
        background: linear-gradient(135deg, #6B7A47, #8B9A5A) !important;
      }

      .working_icon .num {
        background: rgba(255, 255, 255, 0.2) !important;
        color: white !important;
      }
    `}</style>
    </section>
);
};

export default Working;
