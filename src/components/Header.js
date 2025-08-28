import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { useLanguage } from "../context/LanguageContext";

const Header = ({ toggleTheme, isDark }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [initials, setInitials] = useState("");
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const avatarRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Get user initials from localStorage
  const getUserInitials = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    const currentUser = users.find(user => user.email === loggedInEmail);

    if (currentUser) {
      const firstInitial = currentUser.firstName?.trim().charAt(0).toUpperCase() || "";
      const lastInitial = currentUser.lastName?.trim().charAt(0).toUpperCase() || "";
      return firstInitial + lastInitial;
    }
    return "";
  };

  useEffect(() => {
    setInitials(getUserInitials());
    const handleStorage = () => setInitials(getUserInitials());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [location.pathname]);

  // Close avatar dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile nav on large screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileNavOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const handleMainClick = (page) => {
    navigate(`/${page}`);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  };

  const getActiveLink = () => {
    if (location.pathname === "/" || location.pathname === "/home2") return "home";
    if (location.pathname === "/about") return "about";
    if (
      [
        "/services",
        "/corporate-events",
        "/social-celebrations",
        "/festivals-concerts",
        "/trade-shows",
        "/private-events",
        "/non-profit-galas",
      ].includes(location.pathname)
    ) return "services";
    if (location.pathname === "/blog") return "blog";
    if (location.pathname === "/contact") return "contact";
    return "";
  };

  const activeLink = getActiveLink();

  const toggleAvatarDropdown = () => {
    setAvatarDropdownOpen(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    setAvatarDropdownOpen(false);
    navigate("/login");
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ar", label: "العربية" },
    { value: "he", label: "עברית" },
  ];

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("siteLanguage", e.target.value);
  };

  // Example: Use translations for header text (expand as needed)
  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      blog: "Blog",
      contact: "Contact Us",
      corporateEvents: "Corporate Events",
      socialCelebrations: "Social Celebrations",
      festivalsConcerts: "Festival Concerts",
      tradeShows: "Trade Shows",
      privateEvents: "Private Events",
      nonProfitGalas: "Non-Profit Galas"
    },
    ar: {
      home: "الرئيسية",
      about: "معلومات عنا",
      services: "الخدمات",
      blog: "مدونة",
      contact: "اتصل بنا",
      corporateEvents: "فعاليات الشركات",
      socialCelebrations: "الاحتفالات الاجتماعية",
      festivalsConcerts: "المهرجانات والحفلات",
      tradeShows: "المعارض التجارية",
      privateEvents: "الفعاليات الخاصة",
      nonProfitGalas: "حفلات الجمعيات غير الربحية"
    },
    he: {
      home: "בית",
      about: "אודות",
      services: "שירותים",
      blog: "בלוג",
      contact: "צור קשר",
      corporateEvents: "אירועים עסקיים",
      socialCelebrations: "חגיגות חברתיות",
      festivalsConcerts: "פסטיבלים וקונצרטים",
      tradeShows: "תערוכות",
      privateEvents: "אירועים פרטיים",
      nonProfitGalas: "גאלה ללא מטרות רווח"
    },
  };

  return (
    <header className="header">
      <nav className="logo">
        <Link to="/home">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </nav>

      <button
        className={`hamburger ${mobileNavOpen ? "open" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMobileNav}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav ${mobileNavOpen ? "open" : ""}`}>
        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "home" ? "active" : ""}`}
            onClick={() => handleMainClick("home")}
          >
            {translations[language].home}
          </span>
          <span
            className={`arrow ${activeDropdown === "home" ? "open" : ""}`}
            onClick={() => toggleDropdown("home")}
          >
            ▼
          </span>
          {activeDropdown === "home" && (
            <div className="dropdown home-dropdown">
              <Link to="/home" onClick={handleLinkClick}>{translations[language].home}</Link>
              <Link to="/home2" onClick={handleLinkClick}>{translations[language].home} 2</Link>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className={`nav-link ${activeLink === "about" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].about}
        </Link>

        <div className="nav-item">
          <span
            className={`nav-link ${activeLink === "services" ? "active" : ""}`}
            onClick={() => handleMainClick("services")}
          >
            {translations[language].services}
          </span>
          <span
            className={`arrow ${activeDropdown === "services" ? "open" : ""}`}
            onClick={() => toggleDropdown("services")}
          >
            ▼
          </span>
          {activeDropdown === "services" && (
            <div className="dropdown services-dropdown">
              <Link to="/corporate-events" onClick={handleLinkClick}>{translations[language].corporateEvents}</Link>
              <Link to="/social-celebrations" onClick={handleLinkClick}>{translations[language].socialCelebrations}</Link>
              <Link to="/festivals-concerts" onClick={handleLinkClick}>{translations[language].festivalsConcerts}</Link>
              <Link to="/trade-shows" onClick={handleLinkClick}>{translations[language].tradeShows}</Link>
              <Link to="/private-events" onClick={handleLinkClick}>{translations[language].privateEvents}</Link>
              <Link to="/non-profit-galas" onClick={handleLinkClick}>{translations[language].nonProfitGalas}</Link>
            </div>
          )}
        </div>

        <Link
          to="/blog"
          className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].blog}
        </Link>

        <Link
          to="/contact"
          className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          {translations[language].contact}
        </Link>
      </nav>

      <div className="rightSection">
        {/* Language dropdown to the left of avatar */}
        <select
          value={language}
          onChange={handleLanguageChange}
          style={{ marginRight: "16px", padding: "6px", borderRadius: "4px" }}
        >
          {languageOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <button className="themeToggle" onClick={toggleTheme}>
          {isDark ? "🌙" : "🌞"}
        </button>

        <div className="avatarContainer" ref={avatarRef} style={{ position: "relative" }}>
          <div
            className="avatarCircle"
            title="Your initials"
            onClick={toggleAvatarDropdown}
            style={{ cursor: "pointer" }}
          >
            {initials || "AD"}
          </div>

          {avatarDropdownOpen && (
            <div
              className="avatarDropdown"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 1000,
                minWidth: "120px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;