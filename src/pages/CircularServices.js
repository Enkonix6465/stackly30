import React, { useRef, useEffect, useState } from 'react';
import './CircularServices.css';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  en: {
    subHeading: "WE PLAN AND DELIVER",
    mainHeading: "EVENT SERVICES",
    tagline: "to meet your expectations",
    description: "Our process of understanding your objectives and building the event step by step from there helps us provide for any requirement you may have. Our end-to-end event services portfolio is updated constantly to match global standards and deliver fresh and engaging experiences for clients and attendees alike.",
    centerText: "Pegasus Events",
    services: [
      "Event Stage Set-ups",
      "Event Printing and Designing",
      "Event Lights Set-up",
      "Event Sound Set-up",
      "Event Entertainment",
      "Event AV Set-up"
    ]
  },
  ar: {
    subHeading: "نخطط وننفذ",
    mainHeading: "خدمات الفعاليات",
    tagline: "لتلبية توقعاتك",
    description: "نحن نفهم أهدافك ونبني الحدث خطوة بخطوة لتلبية أي متطلبات لديك. يتم تحديث مجموعة خدمات الفعاليات لدينا باستمرار لتواكب المعايير العالمية وتقدم تجارب جديدة وجذابة للعملاء والحضور.",
    centerText: "فعاليات بيغاسوس",
    services: [
      "تجهيز منصات الفعاليات",
      "الطباعة والتصميم للفعاليات",
      "تجهيز إضاءة الفعاليات",
      "تجهيز الصوت للفعاليات",
      "الترفيه في الفعاليات",
      "تجهيز AV للفعاليات"
    ]
  },
  he: {
    subHeading: "אנחנו מתכננים ומבצעים",
    mainHeading: "שירותי אירועים",
    tagline: "כדי לעמוד בציפיות שלך",
    description: "התהליך שלנו מתחיל בהבנת המטרות שלך ובניית האירוע שלב אחר שלב, כדי לספק כל צורך שלך. תיק השירותים שלנו מתעדכן כל הזמן בהתאם לסטנדרטים עולמיים ומספק חוויות חדשות ומרתקות ללקוחות ולמשתתפים.",
    centerText: "פגאסוס אירועים",
    services: [
      "הקמת במות לאירועים",
      "הדפסה ועיצוב לאירועים",
      "התקנת תאורה לאירועים",
      "התקנת סאונד לאירועים",
      "בידור לאירועים",
      "התקנת AV לאירועים"
    ]
  }
};

function CircularServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const t = translations[language];

  return (
    <section ref={sectionRef} className="circular-services-section">
      <div className="circular-services-container">
        {/* Left-side content */}
        <div className="circular-services-content-wrapper">
          <div className="section-header-line"></div>
          <p className="section-sub-heading">{t.subHeading}</p>
          <h2 className="section-main-heading">{t.mainHeading}</h2>
          <p className="section-tagline">{t.tagline}</p>
          <div className="content-break"></div>
          <p className="section-description-circle">
            {t.description}
          </p>
        </div>
        
        {/* Right-side circular layout */}
        <div className={`circular-layout-wrapper ${isVisible ? 'animate' : ''}`}>
          <div className="center-circle">
            <p className="center-text">{t.centerText}</p>
          </div>
          {t.services.map((service, index) => {
            const numServices = t.services.length;
            const angle = (index / numServices) * 360;
            return (
              <div
                key={index}
                className="service-circle"
                style={{
                  '--angle': `${angle}deg`,
                  '--delay': `${index * 0.15}s`,
                }}
              >
                <p>{service}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CircularServices;