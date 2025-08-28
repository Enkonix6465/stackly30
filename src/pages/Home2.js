import  { useRef, useEffect, useState } from "react";
import { useDarkMode } from "../context/Darkmodecontext";
import "./Home2.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"; // <-- Add this

const ImageComponent = ({ imageUrl, eventName }) => (
  <div className="image-container">
    <img src={imageUrl} alt={eventName} className="image" />
    <div className="overlay">
      <div className="text-container">{eventName}</div>
    </div>
  </div>
);

const clients = [
  { id: 1, logoUrl: '/images/client1.jpg', alt: 'Wildlife Reserves Singapore' },
  { id: 2, logoUrl: '/images/client2.jpg', alt: 'Invixium' },
  { id: 3, logoUrl: '/images/client33.jpg', alt: 'Melbourne' },
  { id: 4, logoUrl: '/images/client4.jpg', alt: 'PAREXEL' },
  { id: 5, logoUrl: '/images/client5.jpg', alt: 'Metro' },
  { id: 6, logoUrl: '/images/client6.jpg', alt: 'Aranca' },
];

function Home2() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => navigate(path);
  const videoRef = useRef(null);
  const clientsRef = useRef(null);
  const [isClientsVisible, setIsClientsVisible] = useState(false);
  const { darkMode } = useDarkMode();
  const { language } = useLanguage(); // <-- Use language context

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsClientsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (clientsRef.current) observer.observe(clientsRef.current);
  }, []);

  // Translations for all visible text
  const translations = {
    en: {
      heroTagline: "Beyond the Ordinary, Into the Extraordinary.",
      heroParagraph: "Our approach transforms every detail of your event into a moment of wonder",
      aboutBtn: "About Us",
      whoWeAreTitle: "Who We Are",
      whoWeAreDesc1: "We are a passionate team of event planners dedicated to creating unforgettable experiences. With over a decade of expertise, we specialize in corporate events, private parties, and large-scale conferences. Our mission is to transform your vision into a stunning reality, handling every detail from conceptualization to execution with precision and creativity. We pride ourselves on building strong relationships with our clients, ensuring a seamless and stress-free planning process that brings your unique story to life.",
      whoWeAreDesc2: "Our approach is rooted in innovation and personalized care. We believe that every event is an opportunity to craft a meaningful memory, and our extensive network of top-tier vendors allows us to deliver exceptional quality every time. Whether it's a small, intimate gathering or a grand celebration, our commitment to excellence remains unwavering.",
      whyAttendSubtitle: "WHY ATTEND",
      whyAttendTitle: "Maximize Your Event ROI",
      whyAttendDesc: "Our events are meticulously crafted to provide unparalleled value. From corporate seminars to brand launches, we ensure every detail aligns with your strategic goals, delivering a significant return on investment. You'll gain access to expert insights, network with industry leaders, and discover innovative solutions that propel your business forward. We don't just plan events; we create opportunities for growth, learning, and connection, guaranteeing a memorable and impactful experience for all attendees.",
      whyAttendBtn: "Register Now",
      gallerySubtitle: "Our Work",
      galleryTitle: "Explore Our Past Events",
      clientsTitle: "OUR CLIENTS INCLUDE",
      contactParagraph: "Experience the next level of event planning and execution. We are committed to delivering exceptional moments that leave a lasting impression on your guests.",
      contactBtn: "LEARN MORE",
      eventNames: [
        "Corporate Events",
        "Weddings & Private Events",
        "Social Gatherings",
        "Conferences & Seminars"
      ]
    },
    ar: {
      heroTagline: "ما وراء العادي، إلى الاستثنائي.",
      heroParagraph: "نهجنا يحول كل تفاصيل الحدث إلى لحظة من الدهشة",
      aboutBtn: "معلومات عنا",
      whoWeAreTitle: "من نحن",
      whoWeAreDesc1: "نحن فريق شغوف من منظمي الفعاليات ملتزمون بخلق تجارب لا تُنسى. مع أكثر من عقد من الخبرة، نحن متخصصون في الفعاليات الشركات، الحفلات الخاصة، والمؤتمرات الكبرى. مهمتنا هي تحويل رؤيتك إلى واقع مذهل، مع التعامل مع كل التفاصيل من التصور إلى التنفيذ بدقة وإبداع. نحن نفخر ببناء علاقات قوية مع عملائنا، مما يضمن عملية تخطيط سلسة وخالية من التوتر تجلب قصتك الفريدة إلى الحياة.",
      whoWeAreDesc2: "نهجنا قائم على الابتكار والرعاية الشخصية. نؤمن أن كل حدث هو فرصة لصنع ذكرى ذات معنى، وشبكتنا الواسعة من أفضل الموردين تتيح لنا تقديم جودة استثنائية في كل مرة. سواء كان تجمعًا صغيرًا أو احتفالًا كبيرًا، يبقى التزامنا بالتميز ثابتًا.",
      whyAttendSubtitle: "لماذا الحضور",
      whyAttendTitle: "حقق أقصى استفادة من فعاليتك",
      whyAttendDesc: "فعالياتنا مصممة بعناية لتوفير قيمة لا مثيل لها. من الندوات إلى إطلاق العلامات التجارية، نضمن أن كل التفاصيل تتماشى مع أهدافك الاستراتيجية، مما يوفر عائدًا كبيرًا على الاستثمار. ستحصل على رؤى من خبراء، وتتعرف على قادة الصناعة، وتكتشف حلولًا مبتكرة تدفع عملك إلى الأمام. نحن لا نخطط فقط للفعاليات؛ نحن نخلق فرصًا للنمو والتعلم والتواصل، ونضمن تجربة لا تُنسى ومؤثرة لجميع الحضور.",
      whyAttendBtn: "سجل الآن",
      gallerySubtitle: "أعمالنا",
      galleryTitle: "استكشف فعالياتنا السابقة",
      clientsTitle: "عملاؤنا يشملون",
      contactParagraph: "اختبر المستوى التالي من تخطيط وتنفيذ الفعاليات. نحن ملتزمون بتقديم لحظات استثنائية تترك انطباعًا دائمًا لدى ضيوفك.",
      contactBtn: "اعرف المزيد",
      eventNames: [
        "فعاليات الشركات",
        "حفلات الزفاف والفعاليات الخاصة",
        "التجمعات الاجتماعية",
        "المؤتمرات والندوات"
      ]
    },
    he: {
      heroTagline: "מעבר לשגרה, אל המיוחד.",
      heroParagraph: "הגישה שלנו הופכת כל פרט באירוע שלך לרגע של פלא",
      aboutBtn: "עלינו",
      whoWeAreTitle: "מי אנחנו",
      whoWeAreDesc1: "אנחנו צוות נלהב של מארגני אירועים שמוקדש ליצירת חוויות בלתי נשכחות. עם ניסיון של מעל עשור, אנו מתמחים באירועים עסקיים, מסיבות פרטיות וכנסים גדולים. המשימה שלנו היא להפוך את החזון שלך למציאות מרהיבה, תוך טיפול בכל פרט מהרעיון ועד הביצוע בדיוק ויצירתיות. אנו גאים בבניית קשרים חזקים עם לקוחותינו, ומבטיחים תהליך תכנון חלק וללא לחץ שמביא את הסיפור הייחודי שלך לחיים.",
      whoWeAreDesc2: "הגישה שלנו מושתתת על חדשנות ודאגה אישית. אנו מאמינים שכל אירוע הוא הזדמנות ליצור זיכרון משמעותי, והרשת הרחבה שלנו של ספקים מובילים מאפשרת לנו לספק איכות יוצאת דופן בכל פעם. בין אם מדובר במפגש קטן ואינטימי או חגיגה גדולה, המחויבות שלנו למצוינות נשארת איתנה.",
      whyAttendSubtitle: "למה להגיע",
      whyAttendTitle: "מקסם את התועלת מהאירוע שלך",
      whyAttendDesc: "האירועים שלנו מתוכננים בקפידה כדי לספק ערך שאין שני לו. מכנסים עסקיים ועד השקות מותג, אנו דואגים שכל פרט יתאים למטרות האסטרטגיות שלך, ומספקים תשואה משמעותית על ההשקעה. תקבל גישה לתובנות מומחים, תיצור קשרים עם מובילי תעשייה, ותמצא פתרונות חדשניים שיקדמו את העסק שלך. אנחנו לא רק מתכננים אירועים; אנחנו יוצרים הזדמנויות לצמיחה, למידה וחיבור, ומבטיחים חוויה בלתי נשכחת ובעלת השפעה לכל המשתתפים.",
      whyAttendBtn: "הרשמה עכשיו",
      gallerySubtitle: "העבודות שלנו",
      galleryTitle: "גלה את האירועים הקודמים שלנו",
      clientsTitle: "הלקוחות שלנו כוללים",
      contactParagraph: "חווה את הרמה הבאה של תכנון וביצוע אירועים. אנו מחויבים לספק רגעים יוצאי דופן שמשאירים רושם מתמשך על האורחים שלך.",
      contactBtn: "למידע נוסף",
      eventNames: [
        "אירועים עסקיים",
        "חתונות ואירועים פרטיים",
        "מפגשים חברתיים",
        "כנסים וסמינרים"
      ]
    }
  };

  // Data for the event images, use translated names
  const eventImagesData = [
    { id: 1, url: '/images/corporate.jpg', name: translations[language].eventNames[0] },
    { id: 2, url: '/images/wedding.jpg', name: translations[language].eventNames[1] },
    { id: 3, url: '/images/social-ga.jpg', name: translations[language].eventNames[2] },
    { id: 4, url: '/images/conferences.jpg', name: translations[language].eventNames[3] },
  ];

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      {/* Hero Section with autoplay video */}
      <div className="hero-container-home2">
        <video
          ref={videoRef}
          className="hero-video-home2"
          src="/images/video.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-home2">
          <h1 className="hero-tagline-home2">{translations[language].heroTagline}</h1>
          <p className="hero-paragraph-home2">{translations[language].heroParagraph}</p>
          <div className="hero-btns-home2">
            <button className="btn" onClick={()=>handleGetStarted("/about")}>
              {translations[language].aboutBtn}
            </button>
          </div>
        </div>
      </div>
      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <div className="who-we-are-text">
            <h2 className="who-we-are-title">{translations[language].whoWeAreTitle}</h2>
            <p className="who-we-are-description">{translations[language].whoWeAreDesc1}</p>
            <p className="who-we-are-description">{translations[language].whoWeAreDesc2}</p>
          </div>
          <div className="who-we-are-image">
            <img src="/images/who -home2.jpg" alt="Who We Are" className="who-we-are-photo" />
          </div>
        </div>
      </section>
      {/* Why Attend Section */}
      <section className="why-attend-section" style={{ backgroundImage:`url('/images/bacground-img.jpg')` }}>
        <div className="why-attend-container">
          <p className="why-attend-subtitle">{translations[language].whyAttendSubtitle}</p>
          <h2 className="why-attend-title">{translations[language].whyAttendTitle}</h2>
          <div className="why-attend-divider"></div>
          <p className="why-attend-description">{translations[language].whyAttendDesc}</p>
          <button className="why-attend-button" onClick={()=>handleGetStarted("/contact")}>
            {translations[language].whyAttendBtn}
          </button>
        </div>
      </section>
      {/* Event Gallery Section */}
      <section className="event-gallery-section">
        <div className="gallery-header-container">
          <p className="gallery-subtitle">{translations[language].gallerySubtitle}</p>
          <h2 className="gallery-title">{translations[language].galleryTitle}</h2>
        </div>
        <div className="gallery-container">
          {eventImagesData.map((image) => (
            <ImageComponent key={image.id} imageUrl={image.url} eventName={image.name} />
          ))}
        </div>
      </section>
      {/* Clients Section */}
      <section className="clients-section" ref={clientsRef}>
        <div className="clients-header">
          <h2>{translations[language].clientsTitle}</h2>
          <div className="header-line">
            <span className="dot"></span>
          </div>
        </div>
        <div className={`logos-container ${isClientsVisible ? 'animated' : ''}`}>
          {clients.map(client => (
            <div className="logo-item" key={client.id}>
              <img src={client.logoUrl} alt={client.alt} />
            </div>
          ))}
        </div>
      </section>
      {/* Contact Us Section */}
      <div className="simple-hero-container-contact">
        <div className="simple-hero-background-contact"></div>
        <div className="simple-hero-content-contact">
          <p className="simple-hero-paragraph-contact" style={{ textAlign: "center" }}>
            {translations[language].contactParagraph}
          </p>
          <button className="simple-hero-button-contact" style={{ alignSelf: "center" }} onClick={()=>handleGetStarted("/contact")}>
            {translations[language].contactBtn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home2;