import { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ headerLogImg, addClass }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setMenuActive(true);
  const closeMenu = () => {
    setMenuActive(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  };

  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Service",
      path: "/services",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Pages",
      sub: [
        { label: "Blog Details", path: "/blog-details" },
        { label: "Blog List View", path: "/blog-list-view" },
        { label: "Contact Us", path: "/contuct-us" },
        { label: "FAQ", path: "/faq" },
        { label: "Pricing", path: "/pricing" },
        { label: "Service Details", path: "/services-detais" },
        { label: "Single Member", path: "/single-member" },
        { label: "Team Member", path: "/team" },
        { label: "Testimonial", path: "/testimonial" },
        { label: "404", path: "/404" },
      ],
    },
    {
      label: "Blog",
      path: "/blog-grid",
    },
  ];

  return (
    <div className="mobile-menu-area ">
      <div className="container">
        <div className="mobile-topbar">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img src={headerLogImg} alt="logo" />
              </Link>
            </div>
            <div className="bars" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay ${menuActive ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-menu-main ${menuActive ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={headerLogImg} alt="logo" />
          </Link>
        </div>
        <div className="close-mobile-menu" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </div>

        <div className="menu-body">
          <div className="menu-list">
            <ul className="list-unstyled">
              {menuItems.map((item, index) => (
                <li className="sub-mobile-menu" key={index}>
                  {item.sub ? (
                    <>
                      <a
                        href="#"
                        className="d-flex justify-content-between align-items-center"
                        onClick={() => toggleSubmenu(index)}
                        style={{ cursor: "pointer" }}
                      >
                        <span>{item.label}</span>
                        <i
                          className={`fas ${addClass} ${
                            openSubmenu === index
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                        ></i>
                      </a>
                      <ul
                        className="list-unstyled"
                        style={{
                          display: openSubmenu === index ? "block" : "none",
                        }}
                      >
                        {item.sub.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link to={subItem.path} onClick={closeMenu}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.path} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
