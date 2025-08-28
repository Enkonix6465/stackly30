import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    about: "Stackly empowers businesses with cutting-edge cloud, AI, and cybersecurity solutions to transform your digital future.",
    quickLinks: "Quick Links",
    home: "Home",
    aboutUs: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    servicesTitle: "Services",
    corporateEvents: "Corporate Events",
    socialCelebrations: "Social Celebrations",
    festivalsConcerts: "Festival & Concerts",
    tradeShows: "Trade Shows",
    privateEvents: "Private Events",
    nonProfitGalas: "Non-Profit Galas",
    connect: "Connect with us",
    email: "Email",
    phone: "Phone",
    scrollTop: "Scroll to top",
    copyright: "All rights reserved By ESS."
  },
  ar: {
    about: "تمكن Stackly الشركات من خلال حلول السحابة والذكاء الاصطناعي والأمن السيبراني المتقدمة لتحويل مستقبلك الرقمي.",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    aboutUs: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    contact: "اتصل بنا",
    servicesTitle: "الخدمات",
    corporateEvents: "فعاليات الشركات",
    socialCelebrations: "الاحتفالات الاجتماعية",
    festivalsConcerts: "المهرجانات والحفلات",
    tradeShows: "المعارض التجارية",
    privateEvents: "الفعاليات الخاصة",
    nonProfitGalas: "حفلات الجمعيات غير الربحية",
    connect: "تواصل معنا",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    scrollTop: "العودة للأعلى",
    copyright: "جميع الحقوق محفوظة بواسطة ESS."
  },
  he: {
    about: "Stackly מעניקה לעסקים פתרונות ענן, בינה מלאכותית וסייבר מתקדמים לשינוי העתיד הדיגיטלי שלך.",
    quickLinks: "קישורים מהירים",
    home: "בית",
    aboutUs: "אודות",
    services: "שירותים",
    blog: "בלוג",
    contact: "צור קשר",
    servicesTitle: "שירותים",
    corporateEvents: "אירועים עסקיים",
    socialCelebrations: "חגיגות חברתיות",
    festivalsConcerts: "פסטיבלים וקונצרטים",
    tradeShows: "תערוכות",
    privateEvents: "אירועים פרטיים",
    nonProfitGalas: "גאלה ללא מטרות רווח",
    connect: "התחברו איתנו",
    email: "אימייל",
    phone: "טלפון",
    scrollTop: "גלול למעלה",
    copyright: "כל הזכויות שמורות ל-ESS."
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <img src="/images/logo.png" alt="Stackly Logo" className="footer-logo" />
          <p className="footer-description">
            {t.about}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link to="/home">{t.home}</Link></li>
            <li><Link to="/about">{t.aboutUs}</Link></li>
            <li><Link to="/services">{t.services}</Link></li>
            <li><Link to="/blog">{t.blog}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>{t.servicesTitle}</h4>
          <ul>
            <li><Link to="/corporate-events">{t.corporateEvents}</Link></li>
            <li><Link to="/social-celebrations">{t.socialCelebrations}</Link></li>
            <li><Link to="/festivals-concerts">{t.festivalsConcerts}</Link></li>
            <li><Link to="/trade-shows">{t.tradeShows}</Link></li>
            <li><Link to="/private-events">{t.privateEvents}</Link></li>
            <li><Link to="/non-profit-galas">{t.nonProfitGalas}</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="footer-section">
          <h4>{t.connect}</h4>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/login"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/twitter.png"
                alt="Twitter"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://mail.google.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/google.png"
                alt="Gmail"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
          <p className="footer-contact">
            {t.email}: support@stackly.com<br />
            {t.phone}: +1 (800) 123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Scroll to Top Button */}
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.scrollTop}
          title={t.scrollTop}
        >
          ⬆️
        </button>
        <p>© {new Date().getFullYear()} Stackly. {t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;