import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './TradeShows.css';

const translations = {
  en: {
    heroTagline: "Where Ideas Meet Opportunity",
    heroParagraph: "Step into a realm where concepts and commerce converge.",
    heroBtn: "Discover Our Services",
    sectionTitle: "Trade Shows & Exhibitions",
    sectionDesc: "Step into a realm where concepts and commerce converge. Our exhibitions are more than displays—they’re dynamic platforms designed to spark meaningful partnerships, showcase visionary products, and accelerate your brand’s next big breakthrough. Let every handshake and innovation be a step toward lasting success.",
    sectionList: [
      "Retirement Parties & Graduation Ceremonies → Conferences & Symposia",
      "Holiday & Cultural Festivals → Consumer & Hybrid Trade Shows",
      "Game Nights, Potlucks & Talent Shows → Pop-ups & Specialty Exhibits",
      "Weddings, Anniversaries & Birthdays → Industry & Local Expos"
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
    spotlightHeading: "Client Spotlight: Innovatech’s Signature Exhibition Experience",
    spotlightParagraph: "After months of hybrid operations and virtual briefings, Innovatech sought a platform to elevate team cohesion and brand innovation in a tangible setting. Their goal: host an exhibition-style showcase that combined dynamic engagement with meaningful interaction.",
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
      { step: "4", title: "Visionary Booths, Unforgettable Impressions", desc: "After the event, we provide a detailed report and gather feedback to measure success." }
    ],
    highlightsTitle: "Exhibit with Elegance, Engage with Energy",
    highlightsSub: "From concept to completion, we craft experiences that exceed expectations.",
    highlights: [
      {
        img: "images/trade1.png",
        alt: "A well-lit conference room with a speaker on stage.",
        title: "Exhibit with Elegance, Engage with Energy",
        desc: "When style and substance unite, magic happens. We design exhibition experiences where aesthetic meets action—from interactive storytelling zones to themed surprise pop-ups that delight"
      },
      {
        img: "images/trade2.png",
        alt: "Professionals at a networking happy hour.",
        title: "Meaningful Encounters, Memorable Impressions",
        desc: "We shape trade shows that are as personal as they are professional. Through hands-on demos, sensory storytelling, and inviting conversation zones, every visitor at your booth becomes part of a shared narrative"
      },
      {
        img: "images/trade3.png",
        alt: "A corporate awards ceremony with people in formal wear.",
        title: "Seamless Exhibitions, Memorable Engagements",
        desc: "From concept to execution, we orchestrate every phase of your trade show presence with precision and care. With logistics managed and visuals optimized, you can focus on what matters most: sparking conversations,"
      }
    ],
    ctaTitle: "Ready to Begin Your Event Journey?",
    ctaDesc: "Let's create a memorable experience together. Contact us today to discuss your vision and receive a tailored proposal.",
    ctaBtn: "Plan Your Event"
  },
  ar: {
    // Arabic translations
    heroTagline: "حيث تلتقي الأفكار بالفرص",
    heroParagraph: "ادخل إلى عالم تلتقي فيه المفاهيم بالتجارة.",
    heroBtn: "اكتشف خدماتنا",
    sectionTitle: "المعارض والفعاليات التجارية",
    sectionDesc: "ادخل إلى عالم تلتقي فيه المفاهيم بالتجارة. معارضنا أكثر من مجرد عروض—إنها منصات ديناميكية تهدف إلى بناء شراكات هادفة، وعرض منتجات مبتكرة، وتسريع نجاح علامتك التجارية.",
    sectionList: [
      "حفلات التقاعد وحفلات التخرج → المؤتمرات والندوات",
      "المهرجانات الثقافية والأعياد → المعارض التجارية الاستهلاكية والهجينة",
      "ليالي الألعاب وحفلات الطعام وعروض المواهب → المعارض المؤقتة والمتخصصة",
      "حفلات الزفاف والذكرى السنوية وأعياد الميلاد → المعارض الصناعية والمحلية"
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
    spotlightHeading: "تسليط الضوء على العميل: تجربة Innovatech المميزة",
    spotlightParagraph: "بعد أشهر من العمليات الهجينة والاجتماعات الافتراضية، سعت Innovatech إلى منصة تعزز تماسك الفريق وابتكار العلامة التجارية في بيئة واقعية.",
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
      { step: "4", title: "أجنحة مبتكرة، انطباعات لا تُنسى", desc: "بعد الحدث، نقدم تقريرًا مفصلًا ونجمع الملاحظات لقياس النجاح." }
    ],
    highlightsTitle: "اعرض بأناقة، وتفاعل بطاقة",
    highlightsSub: "من الفكرة إلى التنفيذ، نصنع تجارب تتجاوز التوقعات.",
    highlights: [
      {
        img: "images/trade1.png",
        alt: "قاعة مؤتمرات مضاءة جيدًا مع متحدث على المنصة.",
        title: "اعرض بأناقة، وتفاعل بطاقة",
        desc: "عندما يجتمع الأسلوب مع الجوهر، يحدث السحر. نصمم تجارب معارض تجمع بين الجمال والحركة—من مناطق سرد القصص التفاعلية إلى المفاجآت ذات الطابع الخاص."
      },
      {
        img: "images/trade2.png",
        alt: "محترفون في ساعة تواصل.",
        title: "لقاءات ذات معنى، انطباعات لا تُنسى",
        desc: "نصمم معارض تجارية تجمع بين الطابع الشخصي والمهني. من خلال العروض التفاعلية وسرد القصص الحسي ومناطق الحوار، يصبح كل زائر جزءًا من قصة مشتركة."
      },
      {
        img: "images/trade3.png",
        alt: "حفل توزيع جوائز رسمي.",
        title: "معارض سلسة، تفاعل لا يُنسى",
        desc: "من الفكرة إلى التنفيذ، ندير كل مرحلة من وجودك في المعرض بدقة وعناية. مع إدارة اللوجستيات وتحسين المرئيات، يمكنك التركيز على ما يهم: بناء العلاقات."
      }
    ],
    ctaTitle: "جاهز لبدء رحلتك في الفعاليات؟",
    ctaDesc: "لنصنع تجربة لا تُنسى معًا. اتصل بنا اليوم لمناقشة رؤيتك والحصول على عرض مخصص.",
    ctaBtn: "خطط لحدثك"
  },
  he: {
    // Hebrew translations
    heroTagline: "המקום בו רעיונות פוגשים הזדמנויות",
    heroParagraph: "היכנסו לעולם בו מושגים ומסחר נפגשים.",
    heroBtn: "גלה את השירותים שלנו",
    sectionTitle: "תערוכות וכנסים",
    sectionDesc: "היכנסו לעולם בו מושגים ומסחר נפגשים. התערוכות שלנו הן הרבה מעבר לתצוגות—הן פלטפורמות דינמיות שנועדו ליצור שותפויות, להציג מוצרים חדשניים ולהאיץ את ההצלחה הבאה של המותג שלך.",
    sectionList: [
      "מסיבות פרישה וטקסי סיום לימודים → כנסים וסימפוזיונים",
      "חגים ופסטיבלים תרבותיים → תערוכות צרכניות והיברידיות",
      "ערבי משחקים, ארוחות משותפות ומופעי כישרונות → תערוכות פופ-אפ ומיוחדות",
      "חתונות, ימי נישואין וימי הולדת → תערוכות תעשייתיות ומקומיות"
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
    spotlightHeading: "זרקור לקוח: חווית התערוכה של Innovatech",
    spotlightParagraph: "לאחר חודשים של עבודה היברידית ומפגשים וירטואליים, Innovatech חיפשה פלטפורמה לחיזוק לכידות הצוות וחדשנות המותג בסביבה מוחשית.",
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
      { step: "4", title: "ביתן חזוני, רושם בלתי נשכח", desc: "לאחר האירוע, אנו מספקים דוח מפורט ואוספים משוב למדידת הצלחה." }
    ],
    highlightsTitle: "הציגו באלגנטיות, התחברו באנרגיה",
    highlightsSub: "מהרעיון ועד ההגשמה, אנו יוצרים חוויות שמעבר לכל דמיון.",
    highlights: [
      {
        img: "images/trade1.png",
        alt: "חדר כנסים מואר עם מרצה על הבמה.",
        title: "הציגו באלגנטיות, התחברו באנרגיה",
        desc: "כשסגנון ותוכן נפגשים, קורה קסם. אנו מעצבים חוויות תערוכה בהן אסתטיקה פוגשת פעולה—מאזורי סיפור אינטראקטיביים ועד הפתעות נושאיות."
      },
      {
        img: "images/trade2.png",
        alt: "מקצוענים בשעת נטוורקינג.",
        title: "מפגשים משמעותיים, רושם בלתי נשכח",
        desc: "אנו יוצרים תערוכות שהן אישיות ומקצועיות כאחד. דרך הדגמות מעשיות, סיפור חושי ומרחבי שיחה, כל מבקר הופך לחלק מהסיפור המשותף."
      },
      {
        img: "images/trade3.png",
        alt: "טקס פרסים רשמי.",
        title: "תערוכות חלקות, מעורבות בלתי נשכחת",
        desc: "מהרעיון ועד ההגשמה, אנו מתזמרים כל שלב בנוכחותך בתערוכה בדיוק ובדאגה. עם לוגיסטיקה מנוהלת וויזואליות מיטבית, תוכל להתמקד במה שחשוב באמת: יצירת קשרים."
      }
    ],
    ctaTitle: "מוכן להתחיל את מסע האירועים שלך?",
    ctaDesc: "בואו ניצור חוויה בלתי נשכחת יחד. צרו קשר היום כדי לדון בחזון שלכם ולקבל הצעה מותאמת.",
    ctaBtn: "תכנן את האירוע שלך"
  }
};

const TradeShows = () => {
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
          src="/images/trade.mp4"
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
              src="images/trade-s.jpg"
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
              src="/images/trade.mp4"
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

export default TradeShows;