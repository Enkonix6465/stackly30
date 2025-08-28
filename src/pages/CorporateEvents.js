import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext'; // <-- Add this
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './CorporateEvents.css';


const CorporateEvents = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage(); // <-- Use language context

  const handleGetStarted = (path) => {
    navigate(path);
  };

  // Translations for all visible text
  const translations = {
    en: {
      heroTagline: "Crafting Unforgettable Moments",
      heroParagraph: "From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.",
      heroBtn: "Discover Our Services",
      sectionTitle: "Corporate Event Management",
      sectionDesc: "Corporate events are a powerful tool for businesses to connect with employees, clients, and partners. Our approach focuses on creating memorable and impactful experiences that align with your company's goals and values. Corporate Event Management is the strategic art and science of orchestrating business gatherings—ranging from conferences, product launches, and annual general meetings to team retreats and trade shows—in alignment with an organization's overarching goals",
      sectionList: [
        "Conferences and Seminars",
        "Product Launches and Galas",
        "Team-Building Retreats",
        "Award Ceremonies and Banquets"
      ],
      expertiseTitle: "Our Expertise, Your Success",
      flipCards: [
        {
          frontTitle: "Networking Events",
          frontDesc: "Facilitating meaningful connections with engaging and professional networking sessions.",
          backDesc: "Ready to connect? Let us handle all the details for your next networking event.",
          btn: "Learn More"
        },
        {
          frontTitle: "Conferences & Seminars",
          frontDesc: "Designing seamless and inspiring large-scale events that leave a lasting impression.",
          backDesc: "Host a world-class conference. Our team ensures a flawless experience from start to finish.",
          btn: "Learn More"
        },
        {
          frontTitle: "Award Ceremonies",
          frontDesc: "Crafting elegant and memorable celebrations that honor achievements and success.",
          backDesc: "Celebrate your team's success with a truly spectacular and well-organized award ceremony.",
          btn: "Learn More"
        }
      ],
      spotlightTitle: "Client Spotlight: Innovatech's Annual Summit",
      spotlightDesc: "Facing the challenge of a fully remote workforce, Innovatech needed to host an annual summit that felt engaging and connected. We designed a unique hybrid event experience, blending live-streamed presentations with interactive virtual breakouts and personalized networking sessions.",
      spotlightDetails: [
        { label: "Event Type", value: "Hybrid Conference" },
        { label: "Attendees", value: "1,500+" },
        { label: "Location", value: "San Francisco, CA & Virtual" },
        { label: "Key Challenge", value: "Remote Engagement" }
      ],
      processTitle: "Our Seamless Event Planning Process",
      processSub: "From initial concept to flawless execution, we guide you every step of the way.",
      processSteps: [
        { step: "1", title: "Discovery & Strategy", desc: "We start by understanding your goals, vision, and budget to create a tailored event strategy." },
        { step: "2", title: "Design & Curation", desc: "Our team develops a creative concept, curating every element from venue to decor and entertainment." },
        { step: "3", title: "Execution & Management", desc: "We handle all logistics, vendor coordination, and on-site management for a stress-free event day." },
        { step: "4", title: "Post-Event Evaluation", desc: "After the event, we provide a detailed report and gather feedback to measure success." }
      ],
      highlightsTitle: "Tailored Events, Exceptional Results",
      highlightsSub: "From concept to completion, we craft experiences that exceed expectations.",
      highlights: [
        {
          img: "images/Innovative.png",
          alt: "A well-lit conference room with a speaker on stage.",
          title: "Innovative Conference Planning",
          desc: "We blend cutting-edge technology with thoughtful design to create conferences that are both informative and immersive. Our focus is on seamless logistics and impactful content delivery."
        },
        {
          img: "images/Engaging.png",
          alt: "Professionals at a networking happy hour.",
          title: "Engaging Team-Building Retreats",
          desc: "Move beyond generic activities. We design custom retreats that foster genuine connection, collaboration, and a stronger company culture, all tailored to your team’s unique dynamics.",
          reverse: true
        },
        {
          img: "images/gala.png",
          alt: "A corporate awards ceremony with people in formal wear.",
          title: "Stunning Gala & Award Ceremonies",
          desc: "Celebrate success in style. Our galas are meticulously planned to provide a luxurious and memorable experience, honoring achievements with elegance and grandeur."
        }
      ],
      ctaTitle: "Ready to Begin Your Event Journey?",
      ctaDesc: "Let's create a memorable experience together. Contact us today to discuss your vision and receive a tailored proposal.",
      ctaBtn: "Plan Your Event"
    },
    ar: {
      // Arabic translations (fill in as needed)
      heroTagline: "صنع لحظات لا تُنسى",
      heroParagraph: "من الحفلات الرسمية إلى حفلات الزفاف، نتعامل مع كل التفاصيل بدقة وإبداع. دعنا نحقق رؤيتك.",
      heroBtn: "اكتشف خدماتنا",
      sectionTitle: "إدارة الفعاليات الشركات",
      sectionDesc: "الفعاليات الشركات هي أداة قوية لربط الأعمال بالموظفين والعملاء والشركاء. نهجنا يركز على خلق تجارب لا تُنسى وذات تأثير تتماشى مع أهداف وقيم شركتك. إدارة الفعاليات الشركات هي فن وعلم تنظيم التجمعات التجارية—من المؤتمرات، إطلاق المنتجات، الاجتماعات السنوية إلى الرحلات الجماعية والمعارض التجارية—بما يتماشى مع أهداف المؤسسة.",
      sectionList: [
        "المؤتمرات والندوات",
        "إطلاق المنتجات والحفلات",
        "رحلات بناء الفريق",
        "حفلات الجوائز والمآدب"
      ],
      expertiseTitle: "خبرتنا، نجاحك",
      flipCards: [
        {
          frontTitle: "فعاليات التواصل",
          frontDesc: "تسهيل الاتصالات الهامة من خلال جلسات تواصل احترافية وجذابة.",
          backDesc: "جاهز للتواصل؟ دعنا نتولى جميع التفاصيل لفعاليتك القادمة.",
          btn: "اعرف المزيد"
        },
        {
          frontTitle: "المؤتمرات والندوات",
          frontDesc: "تصميم فعاليات واسعة النطاق تلهم وتترك انطباعًا دائمًا.",
          backDesc: "استضف مؤتمرًا عالميًا. يضمن فريقنا تجربة سلسة من البداية إلى النهاية.",
          btn: "اعرف المزيد"
        },
        {
          frontTitle: "حفلات الجوائز",
          frontDesc: "تنظيم احتفالات أنيقة ولا تُنسى لتكريم الإنجازات والنجاح.",
          backDesc: "احتفل بنجاح فريقك مع حفل جوائز منظم بشكل رائع.",
          btn: "اعرف المزيد"
        }
      ],
      spotlightTitle: "تسليط الضوء على العميل: قمة Innovatech السنوية",
      spotlightDesc: "واجهت Innovatech تحدي القوى العاملة عن بُعد بالكامل، واحتاجت إلى استضافة قمة سنوية تشعر بأنها جذابة ومتصلة. صممنا تجربة حدث هجين فريدة، تجمع بين العروض المباشرة وجلسات افتراضية تفاعلية وتواصل شخصي.",
      spotlightDetails: [
        { label: "نوع الحدث", value: "مؤتمر هجين" },
        { label: "الحضور", value: "1,500+" },
        { label: "الموقع", value: "سان فرانسيسكو، كاليفورنيا & افتراضي" },
        { label: "التحدي الرئيسي", value: "التفاعل عن بُعد" }
      ],
      processTitle: "عملية تخطيط الفعاليات السلسة",
      processSub: "من الفكرة الأولية إلى التنفيذ المثالي، نرشدك في كل خطوة.",
      processSteps: [
        { step: "1", title: "الاكتشاف والاستراتيجية", desc: "نبدأ بفهم أهدافك ورؤيتك وميزانيتك لإنشاء استراتيجية حدث مخصصة." },
        { step: "2", title: "التصميم والتنسيق", desc: "يطور فريقنا مفهومًا إبداعيًا، وينسق كل عنصر من المكان إلى الديكور والترفيه." },
        { step: "3", title: "التنفيذ والإدارة", desc: "نتولى جميع اللوجستيات وتنسيق الموردين والإدارة في الموقع ليوم حدث خالٍ من التوتر." },
        { step: "4", title: "تقييم ما بعد الحدث", desc: "بعد الحدث، نقدم تقريرًا مفصلًا ونجمع الملاحظات لقياس النجاح." }
      ],
      highlightsTitle: "فعاليات مخصصة، نتائج استثنائية",
      highlightsSub: "من الفكرة إلى الإنجاز، نصنع تجارب تتجاوز التوقعات.",
      highlights: [
        {
          img: "images/Innovative.png",
          alt: "قاعة مؤتمرات مضاءة جيدًا مع متحدث على المنصة.",
          title: "تخطيط المؤتمرات المبتكر",
          desc: "نمزج التكنولوجيا الحديثة مع التصميم المدروس لإنشاء مؤتمرات إعلامية وغامرة. نركز على اللوجستيات السلسة وتقديم المحتوى المؤثر."
        },
        {
          img: "images/Engaging.png",
          alt: "محترفون في ساعة تواصل.",
          title: "رحلات بناء الفريق الجذابة",
          desc: "تجاوز الأنشطة التقليدية. نصمم رحلات مخصصة تعزز التواصل الحقيقي والتعاون وثقافة الشركة القوية، وكلها مصممة لديناميكيات فريقك الفريدة.",
          reverse: true
        },
        {
          img: "images/gala.png",
          alt: "حفل جوائز الشركات مع أشخاص يرتدون ملابس رسمية.",
          title: "حفلات الجوائز الفاخرة",
          desc: "احتفل بالنجاح بأناقة. يتم التخطيط لحفلاتنا بعناية لتوفير تجربة فاخرة ولا تُنسى، وتكريم الإنجازات بالأناقة والعظمة."
        }
      ],
      ctaTitle: "جاهز لبدء رحلة فعاليتك؟",
      ctaDesc: "لنصنع تجربة لا تُنسى معًا. اتصل بنا اليوم لمناقشة رؤيتك والحصول على عرض مخصص.",
      ctaBtn: "خطط لحدثك"
    },
    he: {
      // Hebrew translations (fill in as needed)
      heroTagline: "יצירת רגעים בלתי נשכחים",
      heroParagraph: "מאירועים עסקיים ועד חתונות חלומיות, אנו מטפלים בכל פרט בדיוק ויצירתיות. תן לנו להגשים את החזון שלך.",
      heroBtn: "גלה את השירותים שלנו",
      sectionTitle: "ניהול אירועים עסקיים",
      sectionDesc: "אירועים עסקיים הם כלי עוצמתי לחיבור בין עובדים, לקוחות ושותפים. הגישה שלנו מתמקדת ביצירת חוויות בלתי נשכחות ובעלות השפעה, בהתאם למטרות ולערכים של החברה שלך. ניהול אירועים עסקיים הוא אמנות ומדע תכנון מפגשים עסקיים—מכנסים, השקות מוצרים, אסיפות שנתיות ועד ימי גיבוש ותערוכות—בהתאם למטרות הארגון.",
      sectionList: [
        "כנסים וסמינרים",
        "השקות מוצרים ונשפים",
        "ימי גיבוש צוות",
        "טקסי פרסים וסעודות"
      ],
      expertiseTitle: "המקצועיות שלנו, ההצלחה שלך",
      flipCards: [
        {
          frontTitle: "אירועי נטוורקינג",
          frontDesc: "יצירת קשרים משמעותיים באמצעות מפגשי נטוורקינג מקצועיים ומרתקים.",
          backDesc: "מוכן להתחבר? תן לנו לטפל בכל הפרטים לאירוע הנטוורקינג הבא שלך.",
          btn: "למידע נוסף"
        },
        {
          frontTitle: "כנסים וסמינרים",
          frontDesc: "תכנון אירועים גדולים ומעוררי השראה שמשאירים רושם מתמשך.",
          backDesc: "ארגן כנס ברמה עולמית. הצוות שלנו מבטיח חוויה מושלמת מההתחלה ועד הסוף.",
          btn: "למידע נוסף"
        },
        {
          frontTitle: "טקסי פרסים",
          frontDesc: "תכנון חגיגות אלגנטיות ובלתי נשכחות לכבוד הישגים והצלחה.",
          backDesc: "חגוג את הצלחת הצוות שלך עם טקס פרסים מרהיב ומאורגן היטב.",
          btn: "למידע נוסף"
        }
      ],
      spotlightTitle: "זרקור לקוח: הפסגה השנתית של Innovatech",
      spotlightDesc: "Innovatech התמודדה עם אתגר של כוח עבודה מרוחק לחלוטין, והייתה צריכה לארח פסגה שנתית שמרגישה מחוברת ומרתקת. עיצבנו חוויה היברידית ייחודית, המשלבת מצגות בשידור חי עם מפגשים וירטואליים אינטראקטיביים ונטוורקינג אישי.",
      spotlightDetails: [
        { label: "סוג האירוע", value: "כנס היברידי" },
        { label: "משתתפים", value: "1,500+" },
        { label: "מיקום", value: "סן פרנסיסקו, קליפורניה & וירטואלי" },
        { label: "אתגר מרכזי", value: "מעורבות מרחוק" }
      ],
      processTitle: "תהליך תכנון אירועים חלק",
      processSub: "מהרעיון הראשוני ועד הביצוע המושלם, אנו מלווים אותך בכל שלב.",
      processSteps: [
        { step: "1", title: "גילוי ואסטרטגיה", desc: "מתחילים בהבנת המטרות, החזון והתקציב שלך כדי ליצור אסטרטגיה מותאמת." },
        { step: "2", title: "עיצוב ואוצרות", desc: "הצוות שלנו מפתח קונספט יצירתי, ומטפל בכל פרט מהמקום ועד העיצוב והבידור." },
        { step: "3", title: "ביצוע וניהול", desc: "אנו מטפלים בכל הלוגיסטיקה, תיאום ספקים וניהול במקום ליום אירוע ללא דאגות." },
        { step: "4", title: "הערכת אירוע לאחר סיום", desc: "לאחר האירוע, אנו מספקים דוח מפורט ואוספים משוב למדידת הצלחה." }
      ],
      highlightsTitle: "אירועים מותאמים, תוצאות יוצאות דופן",
      highlightsSub: "מהרעיון ועד ההגשמה, אנו יוצרים חוויות שמעל ומעבר לציפיות.",
      highlights: [
        {
          img: "images/Innovative.png",
          alt: "חדר כנסים מואר היטב עם מרצה על הבמה.",
          title: "תכנון כנסים חדשני",
          desc: "אנו משלבים טכנולוגיה מתקדמת עם עיצוב מדויק כדי ליצור כנסים שהם גם אינפורמטיביים וגם סוחפים. הדגש שלנו הוא על לוגיסטיקה חלקה והעברת תוכן משמעותי."
        },
        {
          img: "images/Engaging.png",
          alt: "מקצוענים בשעת נטוורקינג.",
          title: "ימי גיבוש מרתקים",
          desc: "מעבר לפעילויות גנריות. אנו מעצבים ימי גיבוש מותאמים שמקדמים קשר אמיתי, שיתוף פעולה ותרבות חברה חזקה, הכל בהתאמה לדינמיקה הייחודית של הצוות שלך.",
          reverse: true
        },
        {
          img: "images/gala.png",
          alt: "טקס פרסים עסקי עם אנשים בלבוש רשמי.",
          title: "טקסי פרסים מרהיבים",
          desc: "חגוג הצלחה בסטייל. הגלאות שלנו מתוכננות בקפידה כדי לספק חוויה יוקרתית ובלתי נשכחת, ולכבד הישגים באלגנטיות והדר."
        }
      ],
      ctaTitle: "מוכן להתחיל את מסע האירועים שלך?",
      ctaDesc: "בואו ניצור יחד חוויה בלתי נשכחת. צור קשר היום כדי לדון בחזון שלך ולקבל הצעה מותאמת.",
      ctaBtn: "תכנן את האירוע שלך"
    }
  };

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>

      {/* Hero Section */}
      <div className="hero-container-corporate">
        <video
          className="hero-video-corporate"
          src="/images/corporate-events.mp4"
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
          <div className="hero-btns-corporate">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>
              {translations[language].heroBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Events Section */}
      <section className="corporate-events-section">
        <div className="corporate-events-wrapper">
          <div className="corporate-events-image-container">
            <img
              src="images/corporate-s.jpg"
              alt="Professionals at a corporate event"
            />
          </div>
          <div className="corporate-events-content">
            <h2>{translations[language].sectionTitle}</h2>
            <p style={{ textAlign: "justify" }}>
              {translations[language].sectionDesc}
            </p>
            <ul>
              {translations[language].sectionList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Showcase Section with Flip-Card Style */}
      <section className={`services-section ${darkMode ? 'dark-mode' : ''}`}>
        <div className="services-wrapper">
          <h2 className="services-heading">{translations[language].expertiseTitle}</h2>
          <div className="services-grid">
            {translations[language].flipCards.map((card, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-card-inner">
                  <div className="service-card-front">
                    {idx === 0 && <FaHandshake className="service-icon" />}
                    {idx === 1 && <FaTrophy className="service-icon" />}
                    {idx === 2 && <FaAward className="service-icon" />}
                    <h3>{card.frontTitle}</h3>
                    <p>{card.frontDesc}</p>
                  </div>
                  <div className="service-card-back">
                    <p>{card.backDesc}</p>
                    <button className="btn">{card.btn}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="client-spotlight-section">
        <div className="client-spotlight-wrapper">
          <div className="spotlight-content">
            <h2 className="spotlight-heading">{translations[language].spotlightTitle}</h2>
            <p className="spotlight-paragraph">
              {translations[language].spotlightDesc}
            </p>
            <div className="spotlight-details">
              {translations[language].spotlightDetails.map((detail, idx) => (
                <div className="detail-item" key={idx}>
                  {detail.label}: <span>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="spotlight-image-container">
            <video
              src="images/corporate.mp4"
              alt="Innovatech Annual Summit"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
      {/* New Event Planning Process Section */}
      <section className="event-process-section">
        <div className="event-process-wrapper">
          <h2 className="event-process-heading">{translations[language].processTitle}</h2>
          <p className="event-process-subheading">{translations[language].processSub}</p>
          <div className="process-grid">
            {translations[language].processSteps.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="step-icon">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* New Service Highlights Section */}
      <section className="service-highlights-section">
        <div className="service-highlights-wrapper">
          <h2 className="highlights-heading">{translations[language].highlightsTitle}</h2>
          <p className="highlights-subheading">{translations[language].highlightsSub}</p>
          <div className="highlight-grid">
            {translations[language].highlights.map((highlight, idx) => (
              <div className={`highlight-item${highlight.reverse ? " reverse-row" : ""}`} key={idx}>
                <div className="highlight-image-container">
                  <img src={highlight.img} alt={highlight.alt} />
                </div>
                <div className="highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final Call to Action Section */}
      <section className="cta-final-section">
        <div className="cta-final-content">
          <h2>{translations[language].ctaTitle}</h2>
          <p>
            {translations[language].ctaDesc}
          </p>
          <a href="#contact" className="cta-final-btn" onClick={() => handleGetStarted("/contact")}>
            {translations[language].ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
};

export default CorporateEvents;