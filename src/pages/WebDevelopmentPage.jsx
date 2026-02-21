import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// Import placeholder images
import webImg1 from "../assets/images/s-1.webp";
import webImg2 from "../assets/images/s-2.webp";
import webImg3 from "../assets/images/s-3.webp";

const WebDevelopmentPage = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState('frontend');
  const [currentProject, setCurrentProject] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    performance: 0,
    security: 0,
    scalability: 0,
    conversion: 0
  });

  const heroRef = useRef(null);

  // Web development services data
  const services = {
    frontend: {
      title: t('webDevelopmentPage.services.frontend.title'),
      description: t('webDevelopmentPage.services.frontend.description'),
      icon: '🎨',
      color: '#3B82F6',
      features: t('webDevelopmentPage.services.frontend.features', { returnObjects: true })
    },
    backend: {
      title: t('webDevelopmentPage.services.backend.title'),
      description: t('webDevelopmentPage.services.backend.description'),
      icon: '⚙️',
      color: '#10B981',
      features: t('webDevelopmentPage.services.backend.features', { returnObjects: true })
    },
    fullstack: {
      title: t('webDevelopmentPage.services.fullstack.title'),
      description: t('webDevelopmentPage.services.fullstack.description'),
      icon: '🚀',
      color: '#F59E0B',
      features: t('webDevelopmentPage.services.fullstack.features', { returnObjects: true })
    },
    ecommerce: {
      title: t('webDevelopmentPage.services.ecommerce.title'),
      description: t('webDevelopmentPage.services.ecommerce.description'),
      icon: '🛒',
      color: '#8B5CF6',
      features: t('webDevelopmentPage.services.ecommerce.features', { returnObjects: true })
    }
  };

  // Performance metrics
  const metrics = {
    performance: { value: parseInt(t('webDevelopmentPage.metrics', { returnObjects: true })[0].value), label: t('webDevelopmentPage.metrics', { returnObjects: true })[0].label, unit: '%', color: '#3B82F6' },
    security: { value: parseInt(t('webDevelopmentPage.metrics', { returnObjects: true })[1].value), label: t('webDevelopmentPage.metrics', { returnObjects: true })[1].label, unit: '%', color: '#10B981' },
    scalability: { value: parseInt(t('webDevelopmentPage.metrics', { returnObjects: true })[2].value), label: t('webDevelopmentPage.metrics', { returnObjects: true })[2].label, unit: '%', color: '#F59E0B' },
    conversion: { value: parseInt(t('webDevelopmentPage.metrics', { returnObjects: true })[3].value), label: t('webDevelopmentPage.metrics', { returnObjects: true })[3].label, unit: '%', color: '#8B5CF6' }
  };

  // Project showcase data
  const projects = [
    {
      title: "BeitOven Lebanese Bakery",
      description: "Public website showcasing authentic Lebanese food and fresh Manakish.",
      url: "https://beitoven.be/",
      creds: null,
      tech: ["React", "Node.js", "MongoDB"],
      category: "Restaurant Website"
    },
    {
      title: "Food Service Company",
      description: "Corporate website featuring premium food products and brand partners.",
      url: "https://foodservicelbweb.vercel.app/",
      creds: null,
      tech: ["Next.js", "Tailwind", "Vercel"],
      category: "Corporate Website"
    },
    {
      title: "Bus College Admin Dashboard",
      description: "Admin panel for managing educational resources and system data.",
      url: "https://buscollege.vercel.app/dashboard",
      creds: { email: "admin@gmail.com", password: "aaaaaa" },
      tech: ["React", "Firebase", "Material-UI"],
      category: "Admin Dashboard"
    },
    {
      title: "Mini Google Maps Admin Dashboard",
      description: "Admin dashboard for a mapping application prototype.",
      url: "https://minigooglemaps.vercel.app/dashboard",
      creds: { email: "admin@gmail.com", password: "aaaaaa" },
      tech: ["React", "Google Maps API", "Node.js"],
      category: "Mapping Platform"
    },
    {
      title: "Meshwar Admin Dashboard",
      description: "Operational dashboard for service management and analytics.",
      url: "https://messhwar.netlify.app/dashboard/",
      creds: { email: "admin@gmail.com", password: "aaaaaa" },
      tech: ["Vue.js", "Express", "PostgreSQL"],
      category: "Service Management"
    },
    {
      title: "Carova System Admin",
      description: "Admin panel for enterprise management workflows.",
      url: "https://carovasystem.netlify.app/dashboard",
      creds: { email: "admin1@gmail.com", password: "aaaaaa" },
      tech: ["Angular", "Spring Boot", "MySQL"],
      category: "Enterprise System"
    },
    {
      title: "Healthcare Admin Appointment System",
      description: "Admin portal for healthcare appointment scheduling and management.",
      url: "https://admin-appointment-system.netlify.app/",
      creds: { email: "admin2@gmail.com", password: "aaaaaa" },
      tech: ["React", "Node.js", "MongoDB"],
      category: "Healthcare Platform"
    },
    {
      title: "Doctor Appointment System",
      description: "Doctor-facing appointment system for scheduling and patient management.",
      url: "https://appointment-systemdoc.netlify.app/",
      creds: { email: "doctor123@gmail.com", password: "Apple1515$" },
      tech: ["React", "Express", "Socket.io"],
      category: "Medical Interface"
    }
  ];

  // Animate metrics on mount
  useEffect(() => {
    const animateMetrics = () => {
      Object.keys(metrics).forEach((key, index) => {
        setTimeout(() => {
          let start = 0;
          const end = metrics[key].value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(start) }));
          }, 16);
        }, index * 200);
      });
    };

    animateMetrics();
  }, []);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Dark Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        opacity: 0.95,
        zIndex: -2
      }} />

      {/* Animated Grid Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite',
        zIndex: -1
      }} />

           <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-element {
          animation: pulse 2s ease-in-out infinite;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        /* Enhanced Mobile Responsive Styles */
        .hero-container {
          padding: 80px 0 60px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .hero-content {
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .hero-badge {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          color: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 30px;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        
        .hero-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
        }
        
        .hero-title {
          font-weight: 900;
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          background: linear-gradient(45deg, #ffffff, #e2e8f0, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        
        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.3rem);
          line-height: 1.7;
          color: #cbd5e1;
          max-width: 700px;
          margin: 0 auto 50px;
          font-weight: 400;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 60px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .metric-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--metric-color);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .metric-card:hover::before {
          opacity: 1;
        }
        
        .metric-value {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          color: var(--metric-color);
          margin-bottom: 8px;
          display: block;
        }
        
        .metric-label {
          font-size: 0.95rem;
          color: #e2e8f0;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 0 40px;
            min-height: 90vh;
          }
          
          .hero-content {
            padding: 0 15px;
          }
          
          .hero-badge {
            padding: 10px 20px;
            font-size: 12px;
            margin-bottom: 25px;
          }
          
          .hero-description {
            margin-bottom: 40px;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 40px;
          }
          
          .metric-card {
            padding: 20px 15px;
          }
          
          .floating-element {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .hero-container {
            padding: 40px 0 30px;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .metric-card {
            padding: 18px 12px;
          }
        }
        
        /* Desktop Enhancements */
        @media (min-width: 1200px) {
          .hero-container {
            padding: 100px 0 80px;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="page_header" ref={heroRef} style={{
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 50%, rgba(15, 52, 96, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Enhanced Floating Elements */}
        <div className="floating-element" style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
          borderRadius: '50%',
          opacity: 0.15,
          zIndex: 1,
          filter: 'blur(1px)'
        }} />
        <div className="floating-element" style={{
          position: 'absolute',
          bottom: '25%',
          left: '5%',
          width: '180px',
          height: '180px',
          background: 'linear-gradient(45deg, #10B981, #F59E0B)',
          borderRadius: '30%',
          opacity: 0.12,
          zIndex: 1,
          animationDelay: '2s',
          filter: 'blur(1px)'
        }} />
        <div className="floating-element" style={{
          position: 'absolute',
          top: '60%',
          right: '25%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, #F59E0B, #EF4444)',
          borderRadius: '50%',
          opacity: 0.1,
          zIndex: 1,
          animationDelay: '4s'
        }} />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-container">
                <div className="hero-content">
                  <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="hero-badge">
                      {t('webDevelopmentPage.heroBadge')}
                    </span>
                  </div>
                  
                  <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.4s' }}>
                    {t('webDevelopmentPage.heroTitle')}
                  </h1>
                  
                  <p className="hero-description fade-in-up" style={{ animationDelay: '0.6s' }}>
                    {t('webDevelopmentPage.heroDescription')}
                  </p>

                  {/* Enhanced Performance Metrics */}
                  <div className="metrics-grid">
                    {Object.entries(metrics).map(([key, metric], index) => (
                      <div 
                        key={key} 
                        className="metric-card scale-in"
                        style={{ 
                          '--metric-color': metric.color,
                          animationDelay: `${0.8 + index * 0.1}s`
                        }}
                      >
                        <span className="metric-value">
                          {animatedValues[key]}{metric.unit}
                        </span>
                        <div className="metric-label">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services_details mg_top_60px mg_bottom_60px">
        <div className="container">
          <div className="row mg_bottom_40px">
            <div className="col-xxl-12 text-center">
              <br />
              <h2 className="main_titel" style={{ marginBottom: '13px' , marginTop:'4px' }}>{t('webDevelopmentPage.developmentServicesHeading')}</h2>
              <p className="text_lg" style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                {t('webDevelopmentPage.developmentServicesSubheading')}
              </p>
              <br />
            </div>
          </div>

          {/* Service Tabs */}
          <div className="row mg_bottom_30px">
            <div className="col-xxl-12">
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                {Object.entries(services).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => setActiveService(key)}
                    className="service-tab"
                    style={{
                      padding: '12px 24px',
                      border: 'none',
                      borderRadius: '25px',
                      background: activeService === key 
                        ? `linear-gradient(45deg, ${service.color}, ${service.color}dd)` 
                        : 'rgba(255, 255, 255, 0.1)',
                      color: activeService === key ? 'white' : '#64748B',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {service.icon} {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <br /><br />

          {/* Active Service Details */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-details" style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px'
                }}>
                  {services[activeService].icon}
                </div>
                <h3 className="main_titel" style={{ 
                  color: services[activeService].color,
                  marginBottom: '15px'
                }}>
                  {services[activeService].title}
                </h3>
                <p className="text_lg" style={{ 
                  lineHeight: '1.8',
                  marginBottom: '25px',
                  color: '#64748B'
                }}>
                  {services[activeService].description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {services[activeService].features.map((feature, idx) => (
                    <li key={idx} style={{
                      padding: '8px 0',
                      color: '#374151',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        width: '8px',
                        height: '8px',
                        background: services[activeService].color,
                        borderRadius: '50%',
                        marginRight: '12px'
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={webImg1} 
                  alt="Web Development" 
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="services_details mg_bottom_60px" style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
        padding: '60px 0'
      }}>
        <div className="container">
          <div className="row mg_bottom_40px">
            <div className="col-xxl-12 text-center">
              <h2 className="main_titel" style={{ marginBottom: '15px' }}>{t('webDevelopmentPage.developmentProcessHeading')}</h2>
              <p className="text_lg" style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                {t('webDevelopmentPage.developmentProcessSubheading')}
              </p>
            </div>
          </div>

<br />
          <div className="row">
            {t('webDevelopmentPage.processSteps', { returnObjects: true }).map((process, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mg_bottom_30px">
                <div className="process-card" style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  padding: '30px 20px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  height: '100%',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(45deg, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'][idx]}, transparent)`,
                    borderRadius: '50%',
                    opacity: 0.1
                  }} />
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(45deg, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'][idx]}, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'][idx]}dd)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'white',
                    fontSize: '24px',
                    fontWeight: '800'
                  }}>
                    {process.step}
                  </div>
                  <h4 className="text_xl" style={{ 
                    marginBottom: '15px',
                    color: '#1F2937'
                  }}>
                    {process.title}
                  </h4>
                  <p className="text_base" style={{ 
                    color: '#64748B',
                    lineHeight: '1.6'
                  }}>
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="services_details mg_bottom_60px">
        <div className="container">
          <div className="row mg_bottom_40px">
            <div className="col-xxl-12 text-center">
              <h2 className="main_titel" style={{ marginBottom: '15px' }}>{t('webDevelopmentPage.portfolioHeading')}</h2>
              <p className="text_lg" style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto 20px' }}>
                {t('webDevelopmentPage.portfolioSubheading')}
              </p>
              <p className="text_base" style={{ 
                color: '#F59E0B', 
                fontWeight: '600',
                background: 'rgba(245, 158, 11, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                display: 'inline-block'
              }}>
                {t('webDevelopmentPage.portfolioNote')}
              </p>
            </div>
          </div>
<br />
          <div className="row">
            {projects.map((project, idx) => (
              <React.Fragment key={idx}>
                <div className="col-sm-6 col-lg-4 mg_bottom_30px">
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '20px',
                    padding: '40px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                  }}>
                    {/* Project Header */}
                    <div style={{
                      background: `linear-gradient(45deg, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4', '#84CC16', '#F97316'][idx % 8]}, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4', '#84CC16', '#F97316'][idx % 8]}dd)`,
                      padding: '20px',
                      color: 'white'
                    }}>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        opacity: 0.9,
                        marginBottom: '8px'
                      }}>
                        {project.category}
                      </div>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Project Content */}
                    <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <p style={{
                        color: '#64748B',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                        flex: 1
                      }}>
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div style={{ marginBottom: '20px' }}>
                        <div style={{
                          fontSize: '12px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          {t('webDevelopmentPage.projectLabels.techStack')}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {project.tech.map((tech, techIdx) => (
                            <span key={techIdx} style={{
                              fontSize: '11px',
                              padding: '4px 8px',
                              background: 'rgba(59, 130, 246, 0.1)',
                              color: '#3B82F6',
                              borderRadius: '12px',
                              fontWeight: '600'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Login Credentials */}
                      {project.creds && (
                        <div style={{
                          background: 'rgba(245, 158, 11, 0.1)',
                          padding: '15px',
                          borderRadius: '10px',
                          marginBottom: '20px',
                          border: '1px solid rgba(245, 158, 11, 0.2)'
                        }}>
                          <div style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#F59E0B',
                            marginBottom: '8px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            {t('webDevelopmentPage.projectLabels.loginCredentials')}
                          </div>
                          <div style={{ fontSize: '13px', color: '#374151' }}>
                            <div><strong>{t('webDevelopmentPage.projectLabels.email')}</strong> {project.creds.email}</div>
                            <div><strong>{t('webDevelopmentPage.projectLabels.password')}</strong> {project.creds.password}</div>
                          </div>
                        </div>
                      )}

                      {/* Visit Button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '12px 20px',
                          background: `linear-gradient(45deg, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4', '#84CC16', '#F97316'][idx % 8]}, ${['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4', '#84CC16', '#F97316'][idx % 8]}dd)`,
                          color: 'white',
                          textDecoration: 'none',
                          borderRadius: '25px',
                          fontWeight: '600',
                          fontSize: '14px',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        {t('webDevelopmentPage.projectLabels.visitProject')}
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 9L13 5M13 5L9 1M13 5L1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Add line break after every 3 cards */}
                {(idx + 1) % 3 === 0 && idx !== projects.length - 1 && (
                  <div className="w-100" style={{ marginBottom: '30px' }}>
                    <hr style={{
                      border: 'none',
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                      margin: '20px 0'
                    }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
<br /><br />

        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;