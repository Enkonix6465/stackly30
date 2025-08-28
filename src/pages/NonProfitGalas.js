import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './NonProfitGalas.css';

const translations = {
  en: {
    heroTagline: "Join the Movement for Good",
    heroParagraph: "Step into a gala that transcends the ordinary—where every greeting,",
    heroBtn: "Discover Our Services",
    sectionTitle: "Non-Profit Gala",
    sectionDesc: "Step into a gala that transcends the ordinary—where every greeting, every toast, and every moment pulses with purpose. Join the Movement for Good is an invitation to be part of something bigger than yourself. More than a celebration, this is a collective pledge: each smile shared and each contribution given strengthens a shared mission of hope, impact, and change",
    sectionList: [
      "Weddings, Anniversaries & Birthdays",
      "Retirement Parties & Graduation Ceremonies",
      "Holiday & Cultural Festivals",
      "Game Nights, Potlucks & Talent Shows"
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
    spotlightHeading: "Client Spotlight: Innovatech’s Annual Gala Celebration",
    spotlightParagraph: "After a long year of remote work, Innovatech wanted to reignite team spirit and togetherness with a memorable, heartfelt gathering. They sought a celebration that combined thoughtful recognition with genuine interaction.",
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
    highlightsTitle: "Creative Party Concepts, Unforgettable Experiences",
    highlightsSub: "From concept to completion, we craft experiences that exceed expectations.",
    highlights: [
      {
        img: "images/social-1.png",
        alt: "A well-lit conference room with a speaker on stage.",
        title: "Elevating Gatherings with Style & Fun",
        desc: "When every celebration deserves a spark of originality, we bring vision to life. From themed soirées to immersive surprise parties, our creative touches"
      },
      {
        img: "images/social-2.png",
        alt: "Professionals at a networking happy hour.",
        title: "Heartfelt Gatherings, Meaningful Connections",
        desc: "Social celebrations are all about the people you share them with. Whether it's reconnecting friends at a reunion or forging new friendships at a community mixer, we design events that feel personal, warm, and deeply memorable"
      },
      {
        img: "images/social-3.png",
        alt: "A corporate awards ceremony with people in formal wear.",
        title: "Effortless Celebrations, Cherished Memories",
        desc: "The best gatherings happen when hosts can relax and immerse in the moment. We handle planning, decor, logistics, and surprises—so you can savor the laughter, toasts, and bright smiles. No stress, just seamless celebration and treasured memories."
      }
    ],
    ctaTitle: "Ready to Begin Your Event Journey?",
    ctaDesc: "Let's create a memorable experience together. Contact us today to discuss your vision and receive a tailored proposal.",
    ctaBtn: "Plan Your Event"
  },
  ar: {
    // Arabic translations
    heroTagline: "انضم إلى حركة الخير",
    heroParagraph: "ادخل إلى حفل يتجاوز المعتاد—حيث كل تحية،",
    heroBtn: "اكتشف خدماتنا",
    sectionTitle: "حفل غير ربحي",
    sectionDesc: "ادخل إلى حفل يتجاوز المعتاد—حيث كل تحية وكل لحظة تنبض بالغرض. انضم إلى حركة الخير هي دعوة لتكون جزءًا من شيء أكبر من نفسك. أكثر من مجرد احتفال، هذا وعد جماعي: كل ابتسامة وكل مساهمة تعزز مهمة مشتركة من الأمل والتأثير والتغيير.",
    sectionList: [
      "حفلات الزفاف، الذكرى السنوية وأعياد الميلاد",
      "حفلات التقاعد وحفلات التخرج",
      "المهرجانات الثقافية والأعياد",
      "ليالي الألعاب، حفلات الطعام وعروض المواهب"
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
    spotlightHeading: "تسليط الضوء على العميل: احتفال Innovatech السنوي",
    spotlightParagraph: "بعد عام طويل من العمل عن بُعد، أرادت Innovatech إعادة إشعال روح الفريق والتواصل مع تجمع لا يُنسى ومليء بالمشاعر. كانوا يبحثون عن احتفال يجمع بين التقدير والتفاعل الحقيقي.",
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
    highlightsTitle: "مفاهيم حفلات مبتكرة وتجارب لا تُنسى",
    highlightsSub: "من الفكرة إلى التنفيذ، نصنع تجارب تتجاوز التوقعات.",
    highlights: [
      {
        img: "images/social-1.png",
        alt: "قاعة مؤتمرات مضاءة جيدًا مع متحدث على المنصة.",
        title: "رفع مستوى التجمعات بالأناقة والمرح",
        desc: "عندما يستحق كل احتفال لمسة من الأصالة، نحقق الرؤية. من الحفلات ذات الطابع الخاص إلى المفاجآت الغامرة، لمساتنا الإبداعية"
      },
      {
        img: "images/social-2.png",
        alt: "محترفون في ساعة تواصل.",
        title: "تجمعات دافئة وروابط ذات معنى",
        desc: "الاحتفالات الاجتماعية تدور حول الأشخاص الذين تشاركهم. سواء كان إعادة التواصل بين الأصدقاء أو بناء صداقات جديدة، نصمم فعاليات تشعر بأنها شخصية ودافئة ولا تُنسى"
      },
      {
        img: "images/social-3.png",
        alt: "حفل توزيع جوائز رسمي.",
        title: "احتفالات سهلة وذكريات عزيزة",
        desc: "أفضل التجمعات تحدث عندما يمكن للمضيفين الاسترخاء والاستمتاع باللحظة. نحن نتولى التخطيط والديكور واللوجستيات والمفاجآت—لتستمتع بالضحك والابتسامات. بدون توتر، فقط احتفال سلس وذكريات ثمينة."
      }
    ],
    ctaTitle: "جاهز لبدء رحلتك في الفعاليات؟",
    ctaDesc: "لنصنع تجربة لا تُنسى معًا. اتصل بنا اليوم لمناقشة رؤيتك والحصول على عرض مخصص.",
    ctaBtn: "خطط لحدثك"
  },
  he: {
    // Hebrew translations
    heroTagline: "הצטרפו לתנועה לטובת הכלל",
    heroParagraph: "היכנסו לגאלה שמעל ומעבר לשגרה—בה כל ברכה,",
    heroBtn: "גלה את השירותים שלנו",
    sectionTitle: "גאלה ללא מטרות רווח",
    sectionDesc: "היכנסו לגאלה שמעל ומעבר לשגרה—בה כל ברכה וכל רגע מלא מטרה. הצטרפו לתנועה לטובת הכלל היא הזמנה להיות חלק ממשהו גדול יותר. יותר מחגיגה, זהו הבטחה משותפת: כל חיוך וכל תרומה מחזקים משימה משותפת של תקווה, השפעה ושינוי.",
    sectionList: [
      "חתונות, ימי נישואין וימי הולדת",
      "מסיבות פרישה וטקסי סיום לימודים",
      "חגים ופסטיבלים תרבותיים",
      "ערבי משחקים, ארוחות משותפות ומופעי כישרונות"
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
    spotlightHeading: "זרקור לקוח: חגיגת הגאלה השנתית של Innovatech",
    spotlightParagraph: "לאחר שנה ארוכה של עבודה מרחוק, Innovatech רצתה להדליק מחדש את רוח הצוות והיחד עם מפגש בלתי נשכח ומלא רגש. הם חיפשו חגיגה שמשלבת הערכה אמיתית עם אינטראקציה כנה.",
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
    highlightsTitle: "קונספטים למסיבות יצירתיות וחוויות בלתי נשכחות",
    highlightsSub: "מהרעיון ועד ההגשמה, אנו יוצרים חוויות שמעבר לכל דמיון.",
    highlights: [
      {
        img: "images/social-1.png",
        alt: "חדר כנסים מואר עם מרצה על הבמה.",
        title: "הפיכת מפגשים לסטייל וכיף",
        desc: "כשכל חגיגה ראויה לניצוץ של מקוריות, אנו מגשימים את החזון. ממסיבות נושא ועד הפתעות חווייתיות, הנגיעות היצירתיות שלנו"
      },
      {
        img: "images/social-2.png",
        alt: "מקצוענים בשעת נטוורקינג.",
        title: "מפגשים חמים, קשרים משמעותיים",
        desc: "חגיגות חברתיות הן על האנשים שאתה חולק איתם. בין אם זה חיבור מחדש בין חברים או יצירת חברויות חדשות, אנו מעצבים אירועים שמרגישים אישיים, חמים ובלתי נשכחים"
      },
      {
        img: "images/social-3.png",
        alt: "טקס פרסים רשמי.",
        title: "חגיגות ללא מאמץ, זיכרונות יקרים",
        desc: "החגיגות הטובות ביותר קורות כשהמארחים יכולים להירגע וליהנות מהרגע. אנו מטפלים בתכנון, עיצוב, לוגיסטיקה והפתעות—כדי שתוכל ליהנות מהצחוק, הברכות והחיוכים. ללא לחץ, רק חגיגה חלקה וזיכרונות יקרים."
      }
    ],
    ctaTitle: "מוכן להתחיל את מסע האירועים שלך?",
    ctaDesc: "בואו ניצור חוויה בלתי נשכחת יחד. צרו קשר היום כדי לדון בחזון שלכם ולקבל הצעה מותאמת.",
    ctaBtn: "תכנן את האירוע שלך"
  }
};

const NonProfitGalas = () => {
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
          src="/images/non-profit-gala.mp4"
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
              src="images/fund-s.jpg"
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
              src="/images/non-profit-gala.mp4"
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

export default NonProfitGalas;