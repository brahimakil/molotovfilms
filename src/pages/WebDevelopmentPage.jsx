import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import placeholder images
import webImg1 from "../assets/images/s-1.webp";
import webImg2 from "../assets/images/s-2.webp";
import webImg3 from "../assets/images/s-3.webp";

const WebDevelopmentPage = () => {
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
      title: 'Frontend Development',
      description: 'Modern, responsive interfaces that convert visitors into customers',
      icon: '🎨',
      color: '#3B82F6',
      features: ['React & Modern Frameworks', 'Responsive Design', 'Performance Optimization', 'SEO-Ready Architecture']
    },
    backend: {
      title: 'Backend Development',
      description: 'Robust, scalable server architecture that powers your business',
      icon: '⚙️',
      color: '#10B981',
      features: ['API Development', 'Database Design', 'Authentication Systems', 'Cloud Integration']
    },
    fullstack: {
      title: 'Full-Stack Solutions',
      description: 'End-to-end web applications with seamless user experiences',
      icon: '🚀',
      color: '#F59E0B',
      features: ['Complete Web Apps', 'Real-time Features', 'Payment Integration', 'Admin Dashboards']
    },
    ecommerce: {
      title: 'E-commerce Platforms',
      description: 'High-converting online stores that drive sales and growth',
      icon: '🛒',
      color: '#8B5CF6',
      features: ['Custom Shopping Carts', 'Inventory Management', 'Payment Gateways', 'Analytics Integration']
    }
  };

  // Performance metrics
  const metrics = {
    performance: { value: 98, label: 'Performance Score', unit: '%', color: '#3B82F6' },
    security: { value: 100, label: 'Security Rating', unit: '%', color: '#10B981' },
    scalability: { value: 95, label: 'Scalability Index', unit: '%', color: '#F59E0B' },
    conversion: { value: 340, label: 'Avg. Conversion Boost', unit: '%', color: '#8B5CF6' }
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
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        opacity: 0.03,
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
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-element {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="page_header" ref={heroRef} style={{
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px'
      }}>
        {/* Floating Elements */}
        <div className="floating-element" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
          borderRadius: '50%',
          opacity: 0.1,
          zIndex: 1
        }} />
        <div className="floating-element" style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, #10B981, #F59E0B)',
          borderRadius: '30%',
          opacity: 0.1,
          zIndex: 1,
          animationDelay: '2s'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-xxl-12">
              <div className="page_header_content mg_top_60px mg_bottom_60px" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                    color: 'white',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Web Development Excellence
                  </span>
                </div>
                <h1 className="main_titel" style={{ 
                  fontWeight: 800, 
                  fontSize: '3.5rem',
                  background: 'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '25px'
                }}>
                  Web Development
                </h1>
                <p className="text_xl" style={{ 
                  maxWidth: '800px', 
                  margin: '0 auto', 
                  lineHeight: '1.8',
                  color: '#64748B',
                  fontSize: '1.25rem'
                }}>
                  We architect, design, and build robust web applications—fast, secure, and scalable.
                  From eye-catching frontends to bulletproof backends, we deliver products that convert, retain, and grow.
                </p>

                {/* Performance Metrics */}
                <div className="row mg_top_50px">
                  {Object.entries(metrics).map(([key, metric]) => (
                    <div key={key} className="col-md-3 col-sm-6 mg_bottom_20px">
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        padding: '25px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          fontSize: '2.5rem',
                          fontWeight: '800',
                          color: metric.color,
                          marginBottom: '5px'
                        }}>
                          {animatedValues[key]}{metric.unit}
                        </div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#64748B',
                          fontWeight: '600'
                        }}>
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  ))}
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
              <h2 className="main_titel" style={{ marginBottom: '13px' , marginTop:'4px' }}>Our Development Services</h2>
              <p className="text_lg" style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                Full-spectrum web development solutions tailored to your business needs
              </p>
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

          {/* Active Service Details */}
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{
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
              <h2 className="main_titel" style={{ marginBottom: '15px' }}>Our Development Process</h2>
              <p className="text_lg" style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>
                A proven methodology that delivers results on time and within budget
              </p>
            </div>
          </div>

          <div className="row">
            {[
              { step: '1', title: 'Discovery & Planning', desc: 'Define goals, constraints, and success measures. We analyze your requirements and create a detailed roadmap.' },
              { step: '2', title: 'Design & Architecture', desc: 'Design scalable systems and data flows. We create wireframes, mockups, and technical specifications.' },
              { step: '3', title: 'Development & Testing', desc: 'Iterative delivery with rigorous QA. We build, test, and refine your application with continuous feedback.' },
              { step: '4', title: 'Launch & Optimization', desc: 'Deploy, monitor, optimize, and iterate. We ensure smooth launch and ongoing performance optimization.' }
            ].map((process, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mg_bottom_30px">
                <div style={{
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
                    {process.desc}
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
              <h2 className="main_titel" style={{ marginBottom: '15px' }}>Our Project Portfolio</h2>
              <p className="text_lg" style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto 20px' }}>
                Explore our diverse range of web development projects
              </p>
              <p className="text_base" style={{ 
                color: '#F59E0B', 
                fontWeight: '600',
                background: 'rgba(245, 158, 11, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                display: 'inline-block'
              }}>
                🔐 Admin dashboards include login credentials below
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
                    overflow: 'hidden',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
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
                          Tech Stack
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
                            🔐 Login Credentials
                          </div>
                          <div style={{ fontSize: '13px', color: '#374151' }}>
                            <div><strong>Email:</strong> {project.creds.email}</div>
                            <div><strong>Password:</strong> {project.creds.password}</div>
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
                        Visit Project
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