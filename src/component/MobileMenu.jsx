import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ headerLogImg, addClass }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // CHECK SCREEN SIZE AND HIDE ON DESKTOP
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contuct-us" }
  ];

  // HIDE COMPLETELY ON DESKTOP
  if (!isMobile) {
    return null;
  }

  // MATCH DESKTOP HEADER EXACTLY - DARK WITH TRANSPARENCY
  const headerStyle = {
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: 'none',
    padding: '20px 0',
    height: '100px',
    position: 'relative',
    margin: 0,
    width: '100%',
    transition: 'all 0.3s ease'
  };

  const hamburgerStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: 'rgba(255, 255, 255, 0.95)',
    fontSize: '24px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  };

  const dropdownStyle = {
    background: 'rgba(20, 20, 20, 0.95)', // SAME AS HEADER - NOT BLACK
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    width: '100%',
    opacity: menuActive ? 1 : 0,
    visibility: menuActive ? 'visible' : 'hidden',
    transform: menuActive ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.3s ease',
    padding: '20px 0',
    zIndex: 999999
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999999, margin: 0, padding: 0 }}>
      {/* HEADER MATCHING DESKTOP EXACTLY */}
      <div style={headerStyle}>
        <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
          <div className="logo">
            <Link to="/">
              <img src={headerLogImg} alt="logo" style={{
                maxWidth: '280px',
                maxHeight: '70px',
                filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))'
              }} />
            </Link>
          </div>
          <div 
            style={hamburgerStyle} 
            onClick={toggleMenu}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-bars" style={{
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}></i>
          </div>
        </div>
      </div>

      {/* DROPDOWN MATCHING DESKTOP */}
      <div style={dropdownStyle}>
        <div style={{ padding: '0' }}>
          <ul style={{ 
            padding: 0, 
            margin: 0, 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '15px' 
          }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  onClick={closeMenu}
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '18px',
                    padding: '15px 25px',
                    transition: 'all 0.3s ease',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                    borderRadius: '6px',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.background = 'transparent';
                    e.target.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
