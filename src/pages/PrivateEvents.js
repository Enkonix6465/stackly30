import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './PrivateEvents.css';

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
    servicesHeading: "Our Expertise, Your Success",
    networkingTitle: "Networking Events",
    networkingDesc: "Facilitating meaningful connections with engaging and professional networking sessions.",
    networkingBack: "Ready to connect? Let us handle all the details for your next networking event.",
    conferencesTitle: "Conferences & Seminars",
    conferencesDesc: "Designing seamless and inspiring large-scale events that leave a lasting impression.",
    conferencesBack: "Host a world-class conference. Our team ensures a flawless experience from start to finish.",
    awardsTitle: "Award Ceremonies",
    awardsDesc: "Crafting elegant and memorable celebrations that honor achievements and success.",
    awardsBack: "Celebrate your team's success with a truly spectacular and well-organized award ceremony.",
    spotlightHeading: "Client Spotlight: Innovatech's Annual Summit",
    spotlightParagraph: "Facing the challenge of a fully remote workforce, Innovatech needed to host an annual summit that felt engaging and connected. We designed a unique hybrid event experience, blending live-streamed presentations with interactive virtual breakouts and personalized networking sessions.",
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
        desc: "Move beyond generic activities. We design custom retreats that foster genuine connection, collaboration, and a stronger company culture, all tailored to your team’s unique dynamics."
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
    // Arabic translations
    heroTagline: "صنع لحظات لا تُنسى",
    heroParagraph: "من الحفلات الرسمية إلى حفلات الزفاف، نتعامل مع كل التفاصيل بدقة وإبداع. دعنا نحقق رؤيتك.",
    heroBtn: "اكتشف خدماتنا",
    sectionTitle: "إدارة الفعاليات الشركات",
    sectionDesc: "الفعاليات الشركات هي أداة قوية لربط الأعمال بالموظفين والعملاء والشركاء. نهجنا يركز على خلق تجارب لا تُنسى وذات تأثير تتماشى مع أهداف وقيم شركتك.",
    sectionList: [
      "المؤتمرات والندوات",
      "إطلاق المنتجات والحفلات",
      "رحلات بناء الفريق",
      "حفلات الجوائز والمآدب"
    ],
    servicesHeading: "خبرتنا، نجاحك",
    networkingTitle: "فعاليات التواصل",
    networkingDesc: "تسهيل الاتصالات الهامة من خلال جلسات تواصل احترافية وجذابة.",
    networkingBack: "جاهز للتواصل؟ دعنا نتولى جميع التفاصيل لفعاليتك القادمة.",
    conferencesTitle: "المؤتمرات والندوات",
    conferencesDesc: "تصميم فعاليات كبيرة وملهمة تترك انطباعًا دائمًا.",
    conferencesBack: "استضف مؤتمرًا عالميًا. يضمن فريقنا تجربة سلسة من البداية إلى النهاية.",
    awardsTitle: "حفلات الجوائز",
    awardsDesc: "تنظيم احتفالات أنيقة ولا تُنسى تكرم الإنجازات والنجاح.",
    awardsBack: "احتفل بنجاح فريقك مع حفل جوائز رائع ومنظم.",
    spotlightHeading: "تسليط الضوء على العميل: قمة Innovatech السنوية",
    spotlightParagraph: "واجهت Innovatech تحدي القوى العاملة عن بُعد بالكامل، واحتاجت إلى استضافة قمة سنوية تشعر بأنها متصلة وجذابة. صممنا تجربة حدث هجين فريدة تجمع بين العروض المباشرة وجلسات التواصل الافتراضية.",
    spotlightDetails: [
      { label: "نوع الحدث", value: "مؤتمر هجين" },
      { label: "الحضور", value: "1500+" },
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
    highlightsTitle: "فعاليات مصممة خصيصًا، نتائج استثنائية",
    highlightsSub: "من الفكرة إلى التنفيذ، نصنع تجارب تتجاوز التوقعات.",
    highlights: [
      {
        img: "images/Innovative.png",
        alt: "قاعة مؤتمرات مضاءة جيدًا مع متحدث على المنصة.",
        title: "تخطيط المؤتمرات المبتكر",
        desc: "نمزج بين أحدث التقنيات والتصميم المدروس لإنشاء مؤتمرات تجمع بين المعلومات والتجربة. تركيزنا على اللوجستيات السلسة وتقديم المحتوى المؤثر."
      },
      {
        img: "images/Engaging.png",
        alt: "محترفون في ساعة تواصل.",
        title: "رحلات بناء الفريق الجذابة",
        desc: "نتجاوز الأنشطة التقليدية ونصمم رحلات مخصصة تعزز التواصل الحقيقي والتعاون وثقافة الشركة القوية."
      },
      {
        img: "images/gala.png",
        alt: "حفل توزيع جوائز رسمي.",
        title: "حفلات جوائز واحتفالات مذهلة",
        desc: "احتفل بالنجاح بأناقة. يتم التخطيط لحفلاتنا بعناية لتوفير تجربة فاخرة ولا تُنسى، وتكريم الإنجازات بالتميز والرقي."
      }
    ],
    ctaTitle: "جاهز لبدء رحلتك في الفعاليات؟",
    ctaDesc: "لنصنع تجربة لا تُنسى معًا. اتصل بنا اليوم لمناقشة رؤيتك والحصول على عرض مخصص.",
    ctaBtn: "خطط لحدثك"
  },
  he: {
    // Hebrew translations
    heroTagline: "יוצרים רגעים בלתי נשכחים",
    heroParagraph: "מגאלות עסקיות ועד חתונות חלומיות, אנו מטפלים בכל פרט בדיוק ויצירתיות. תן לנו להגשים את החזון שלך.",
    heroBtn: "גלה את השירותים שלנו",
    sectionTitle: "ניהול אירועים עסקיים",
    sectionDesc: "אירועים עסקיים הם כלי עוצמתי לחיבור בין עובדים, לקוחות ושותפים. הגישה שלנו מתמקדת ביצירת חוויות בלתי נשכחות ומשמעותיות, בהתאמה לערכי החברה שלך.",
    sectionList: [
      "כנסים וסמינרים",
      "השקות מוצרים וגאלות",
      "ימי גיבוש צוות",
      "טקסי פרסים וסעודות"
    ],
    servicesHeading: "המקצועיות שלנו, ההצלחה שלך",
    networkingTitle: "אירועי נטוורקינג",
    networkingDesc: "יצירת קשרים משמעותיים עם מפגשי נטוורקינג מקצועיים ומרתקים.",
    networkingBack: "מוכן להתחבר? תן לנו לטפל בכל הפרטים לאירוע הנטוורקינג הבא שלך.",
    conferencesTitle: "כנסים וסמינרים",
    conferencesDesc: "עיצוב אירועים גדולים ומעוררי השראה שמשאירים רושם מתמשך.",
    conferencesBack: "ארגן כנס ברמה עולמית. הצוות שלנו מבטיח חוויה מושלמת מההתחלה ועד הסוף.",
    awardsTitle: "טקסי פרסים",
    awardsDesc: "יצירת חגיגות אלגנטיות ובלתי נשכחות שמכבדות הישגים והצלחה.",
    awardsBack: "חגוג את הצלחת הצוות שלך עם טקס פרסים מרהיב ומאורגן.",
    spotlightHeading: "זרקור לקוח: פסגת Innovatech השנתית",
    spotlightParagraph: "Innovatech התמודדה עם אתגר של צוות מרוחק לחלוטין, והייתה צריכה לארגן פסגה שנתית שמרגישה מחוברת ומעורבת. עיצבנו חוויה היברידית ייחודית המשלבת מצגות בשידור חי עם מפגשים וירטואליים אינטראקטיביים.",
    spotlightDetails: [
      { label: "סוג האירוע", value: "כנס היברידי" },
      { label: "משתתפים", value: "1,500+" },
      { label: "מיקום", value: "סן פרנסיסקו, קליפורניה & וירטואלי" },
      { label: "אתגר מרכזי", value: "מעורבות מרחוק" }
    ],
    processTitle: "תהליך תכנון האירועים שלנו",
    processSub: "מהרעיון הראשוני ועד הביצוע המושלם, אנו מלווים אותך בכל שלב.",
    processSteps: [
      { step: "1", title: "גילוי ואסטרטגיה", desc: "מתחילים בהבנת המטרות, החזון והתקציב שלך כדי ליצור אסטרטגיה מותאמת אישית." },
      { step: "2", title: "עיצוב ואוצרות", desc: "הצוות שלנו מפתח קונספט יצירתי, אוצר כל פרט מהמקום ועד העיצוב והבידור." },
      { step: "3", title: "ביצוע וניהול", desc: "מטפלים בכל הלוגיסטיקה, תיאום ספקים וניהול בשטח ליום אירוע ללא דאגות." },
      { step: "4", title: "הערכת האירוע", desc: "לאחר האירוע, אנו מספקים דוח מפורט ואוספים משוב למדידת הצלחה." }
    ],
    highlightsTitle: "אירועים מותאמים אישית, תוצאות יוצאות דופן",
    highlightsSub: "מהרעיון ועד ההגשמה, אנו יוצרים חוויות שמעבר לכל דמיון.",
    highlights: [
      {
        img: "images/Innovative.png",
        alt: "חדר כנסים מואר עם מרצה על הבמה.",
        title: "תכנון כנסים חדשני",
        desc: "אנו משלבים טכנולוגיה מתקדמת עם עיצוב מדויק ליצירת כנסים שהם גם אינפורמטיביים וגם חווייתיים. הדגש שלנו הוא על לוגיסטיקה חלקה והעברת תוכן משמעותי."
      },
      {
        img: "images/Engaging.png",
        alt: "מקצוענים בשעת נטוורקינג.",
        title: "ימי גיבוש צוות מרתקים",
        desc: "מעבר לפעילויות גנריות, אנו מעצבים ימי גיבוש מותאמים אישית שמקדמים חיבור אמיתי, שיתוף פעולה ותרבות ארגונית חזקה."
      },
      {
        img: "images/gala.png",
        alt: "טקס פרסים רשמי.",
        title: "גאלה וטקסי פרסים מרהיבים",
        desc: "חגוג הצלחה בסטייל. הגאלות שלנו מתוכננות בקפידה כדי לספק חוויה יוקרתית ובלתי נשכחת, ולכבד הישגים באלגנטיות ובפאר."
      }
    ],
    ctaTitle: "מוכן להתחיל את מסע האירועים שלך?",
    ctaDesc: "בואו ניצור חוויה בלתי נשכחת יחד. צרו קשר היום כדי לדון בחזון שלכם ולקבל הצעה מותאמת.",
    ctaBtn: "תכנן את האירוע שלך"
  }
};

const PrivateEvents = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const handleGetStarted = (path) => {
    navigate(path);
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
          <h2 className="services-heading">{translations[language].servicesHeading}</h2>
          <div className="services-grid">
            {/* Flip Card 1 */}
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <FaHandshake className="service-icon" />
                  <h3>{translations[language].networkingTitle}</h3>
                  <p>{translations[language].networkingDesc}</p>
                </div>
                <div className="service-card-back">
                  <p>{translations[language].networkingBack}</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </div>
            {/* Flip Card 2 */}
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <FaTrophy className="service-icon" />
                  <h3>{translations[language].conferencesTitle}</h3>
                  <p>{translations[language].conferencesDesc}</p>
                </div>
                <div className="service-card-back">
                  <p>{translations[language].conferencesBack}</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </div>
            {/* Flip Card 3 */}
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <FaAward className="service-icon" />
                  <h3>{translations[language].awardsTitle}</h3>
                  <p>{translations[language].awardsDesc}</p>
                </div>
                <div className="service-card-back">
                  <p>{translations[language].awardsBack}</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-spotlight-section">
        <div className="client-spotlight-wrapper">
          <div className="spotlight-content">
            <h2 className="spotlight-heading">{translations[language].spotlightHeading}</h2>
            <p className="spotlight-paragraph">
              {translations[language].spotlightParagraph}
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
              <div className={`highlight-item${idx === 1 ? " reverse-row" : ""}`} key={idx}>
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
          <a href="#contact" className="cta-final-btn" onClick={()=>handleGetStarted("/contact")}>
            {translations[language].ctaBtn}
          </a>
        </div>
      </section>
    </div>
  );
};

export default PrivateEvents;