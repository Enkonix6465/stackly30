import './ContactUs.css';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

function ContactUs() {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const translations = {
    en: {
      heroTagline: "Get In Touch with Us",
      heroParagraph: "Friendly and welcoming, used by brands like Unbounce to make visitors feel valued and at ease.",
      formTitle: "Get in Touch",
      formSubtitle: "Fill out the form below and our team will contact you within 24 hours",
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      eventType: "Event Type",
      selectEventType: "Select Event Type",
      eventTypes: [
        { value: "corporate", label: "Corporate Event" },
        { value: "wedding", label: "Wedding" },
        { value: "conference", label: "Conference" },
        { value: "birthday", label: "Birthday Party" },
        { value: "gala", label: "Gala Dinner" },
        { value: "other", label: "Other" }
      ],
      eventDate: "Event Date",
      guests: "Number of Guests",
      message: "Tell us about your event",
      submitBtn: "Submit Inquiry",
      infoTitle: "Other Ways to Reach Us",
      callUs: "Call Us",
      callTime: "Mon-Fri, 9am-6pm EST",
      emailUs: "Email Us",
      emailResponse: "Response within 24 hours",
      visitUs: "Visit Us",
      address: "123 Event Plaza, Suite 456",
      city: "New York, NY 10001",
      galleryTitle: "Our Event Portfolio",
      gallerySubtitle: "Browse through our successfully executed events",
      eventCategories: {
        Corporate: "Corporate",
        Wedding: "Wedding",
        Conference: "Conference",
        Birthday: "Birthday",
        Gala: "Gala"
      },
      thankYou: "Thank you for your inquiry! We will contact you shortly."
    },
    ar: {
      heroTagline: "تواصل معنا",
      heroParagraph: "ودود ومرحّب، لجعل الزوار يشعرون بالتقدير والراحة.",
      formTitle: "تواصل معنا",
      formSubtitle: "املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة",
      name: "اسمك",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      eventType: "نوع الحدث",
      selectEventType: "اختر نوع الحدث",
      eventTypes: [
        { value: "corporate", label: "حدث شركات" },
        { value: "wedding", label: "زفاف" },
        { value: "conference", label: "مؤتمر" },
        { value: "birthday", label: "حفلة عيد ميلاد" },
        { value: "gala", label: "حفل عشاء" },
        { value: "other", label: "آخر" }
      ],
      eventDate: "تاريخ الحدث",
      guests: "عدد الضيوف",
      message: "أخبرنا عن الحدث الخاص بك",
      submitBtn: "إرسال الاستفسار",
      infoTitle: "طرق أخرى للتواصل معنا",
      callUs: "اتصل بنا",
      callTime: "الاثنين-الجمعة، 9 صباحًا - 6 مساءً",
      emailUs: "راسلنا عبر البريد الإلكتروني",
      emailResponse: "الرد خلال 24 ساعة",
      visitUs: "زرنا",
      address: "123 بلازا الفعاليات، جناح 456",
      city: "نيويورك، NY 10001",
      galleryTitle: "محفظة فعالياتنا",
      gallerySubtitle: "تصفح فعالياتنا المنفذة بنجاح",
      eventCategories: {
        Corporate: "شركات",
        Wedding: "زفاف",
        Conference: "مؤتمر",
        Birthday: "عيد ميلاد",
        Gala: "حفل"
      },
      thankYou: "شكرًا لاستفسارك! سنتواصل معك قريبًا."
    },
    he: {
      heroTagline: "צור קשר איתנו",
      heroParagraph: "ידידותי ומזמין, כדי לגרום למבקרים להרגיש מוערכים ובנוח.",
      formTitle: "צור קשר",
      formSubtitle: "מלא את הטופס וצוותנו יחזור אליך תוך 24 שעות",
      name: "השם שלך",
      email: "כתובת אימייל",
      phone: "מספר טלפון",
      eventType: "סוג האירוע",
      selectEventType: "בחר סוג אירוע",
      eventTypes: [
        { value: "corporate", label: "אירוע עסקי" },
        { value: "wedding", label: "חתונה" },
        { value: "conference", label: "כנס" },
        { value: "birthday", label: "מסיבת יום הולדת" },
        { value: "gala", label: "ארוחת גאלה" },
        { value: "other", label: "אחר" }
      ],
      eventDate: "תאריך האירוע",
      guests: "מספר אורחים",
      message: "ספר לנו על האירוע שלך",
      submitBtn: "שלח פנייה",
      infoTitle: "דרכים נוספות ליצור קשר",
      callUs: "התקשר אלינו",
      callTime: "ב'-ו', 9:00-18:00",
      emailUs: "שלח אימייל",
      emailResponse: "תגובה תוך 24 שעות",
      visitUs: "בקר אותנו",
      address: "123 Event Plaza, Suite 456",
      city: "ניו יורק, NY 10001",
      galleryTitle: "פורטפוליו האירועים שלנו",
      gallerySubtitle: "עיין באירועים שביצענו בהצלחה",
      eventCategories: {
        Corporate: "עסקי",
        Wedding: "חתונה",
        Conference: "כנס",
        Birthday: "יום הולדת",
        Gala: "גאלה"
      },
      thankYou: "תודה על פנייתך! נחזור אליך בקרוב."
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert(translations[language].thankYou);
  };

  // Event gallery data
  const eventGallery = [
    {
      id: 1,
      title: translations[language].eventCategories.Corporate + " Gala Night",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: translations[language].eventCategories.Corporate
    },
    {
      id: 2,
      title: translations[language].eventCategories.Wedding + " Celebration",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: translations[language].eventCategories.Wedding
    },
    {
      id: 3,
      title: translations[language].eventCategories.Corporate + " Product Launch",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: translations[language].eventCategories.Corporate
    },
    {
      id: 4,
      title: translations[language].eventCategories.Conference + " Annual Conference",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: translations[language].eventCategories.Conference
    },
    {
      id: 5,
      title: translations[language].eventCategories.Birthday + " Soiree",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: translations[language].eventCategories.Birthday
    },
    {
      id: 6,
      title: translations[language].eventCategories.Gala + " Fundraiser Gala",
      image: "https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcml0eSUyMGZ1bmRyYWlzZXIlMjBnYWxhfGVufDB8fDB8fHww",
      category: translations[language].eventCategories.Gala
    }
  ];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section */}
      <div className="hero-container-corporate">
        <video
          className="hero-video-corporate"
          src="/images/contact.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-corporate">
          <h1 className="hero-tagline-corporate">{translations[language].heroTagline}</h1>
          <p className="hero-paragraph-corporate">
            {translations[language].heroParagraph}
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <h2>{translations[language].formTitle}</h2>
            <p>{translations[language].formSubtitle}</p>

            <form onSubmit={handleSubmit} className="event-contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{translations[language].name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{translations[language].email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{translations[language].phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventType">{translations[language].eventType}</label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{translations[language].selectEventType}</option>
                    {translations[language].eventTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="eventDate">{translations[language].eventDate}</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">{translations[language].guests}</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">{translations[language].message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">{translations[language].submitBtn}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="container">
          <h2>{translations[language].infoTitle}</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>{translations[language].callUs}</h3>
              <p>+1 (555) 123-4567</p>
              <span>{translations[language].callTime}</span>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>{translations[language].emailUs}</h3>
              <p>events@yourcompany.com</p>
              <span>{translations[language].emailResponse}</span>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>{translations[language].visitUs}</h3>
              <p>{translations[language].address}</p>
              <span>{translations[language].city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="event-gallery-section">
        <div className="container-contact">
          <h2>{translations[language].galleryTitle}</h2>
          <p className="section-subtitle">{translations[language].gallerySubtitle}</p>
          <div className="gallery-grid">
            {eventGallery.map(event => (
              <div key={event.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={event.image} alt={event.title} />
                  <div className="gallery-overlay">
                    <h3>{event.title}</h3>
                    <span className="event-category">{event.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;