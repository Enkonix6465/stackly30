import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import { FaHandshake, FaTrophy, FaAward } from 'react-icons/fa';
import './FestivalsConcerts.css';


const translations = {
  en: {
    heroTagline: "Feel the Rhythm, Live the Moment",
    heroParagraph: "Feel the rhythm coursing through your veins.",
    heroBtn: "Discover Our Services",
    sectionTitle: "Festival Concerts",
    sectionDesc: "Step into more than a concert—it’s a full sensory immersion. From vibrant lightscapes to pulsating beats, this festival isn't just about music; it's about setting your soul alight, making connections that echo long after the final note fades. Drawing on the idea that great taglines emphasize experience, not just sound",
    sectionList: [
      "Celebrate Every Milestone with Music & Magic",
      "Life’s Moments, Amplified",
      "From Graduation Caps to Festival Vibes",
      "Your Story, In Song & Celebration"
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
    spotlightHeading: "Celebrate Progress, Together.",
    spotlightParagraph: "Innovatech’s annual gathering isn’t just about looking back—it’s about moving forward, together. Celebrate milestones with food stations inspired by global cuisines, talent showcases spotlighting internal stars, and a dynamic main stage that pulses with live entertainment. It's a meaningful festival turned into an immersive company experience.",
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
    highlightsTitle: "Where Festival Dreams Take Flight",
    highlightsSub: "From sunlit stages to twilight spectacles, we build festival journeys that soar beyond imagination.",
    highlights: [
      {
        img: "images/concert-1.png",
        alt: "A well-lit conference room with a speaker on stage.",
        title: "Festival Flair, Crafted with Care",
        desc: "When artistry meets planning, magic happens. We mold every festival moment—from interactive art installations to moodsetting soundscapes—with precision and panache."
      },
      {
        img: "images/concert2.png",
        alt: "Professionals at a networking happy hour.",
        title: "Moments That Connect, Beats That Unite",
        desc: "These festivals are carefully curated for connection. Between soulful sets and communal activations—like campfire chats, shared jam sessions, or local artist showcases—guests"
      },
      {
        img: "images/concert3.png",
        alt: "A corporate awards ceremony with people in formal wear.",
        title: "Zero Stress. Pure Festivity.",
        desc: "Planning a festival shouldn’t feel like a challenge. We orchestrate everything—from artist coordination and décor to crowd flow and delightful surprises"
      }
    ],
    ctaTitle: "Ready to Begin Your Event Journey?",
    ctaDesc: "Let's create a memorable experience together. Contact us today to discuss your vision and receive a tailored proposal.",
    ctaBtn: "Plan Your Event"
  },
  ar: {
    // Arabic translations
    heroTagline: "اشعر بالإيقاع، عش اللحظة",
    heroParagraph: "اشعر بالإيقاع يتدفق في عروقك.",
    heroBtn: "اكتشف خدماتنا",
    sectionTitle: "حفلات المهرجانات",
    sectionDesc: "ادخل إلى أكثر من مجرد حفلة موسيقية—إنها تجربة حسية كاملة. من الأضواء النابضة إلى الإيقاعات المتدفقة، هذا المهرجان ليس مجرد موسيقى؛ إنه إشعال روحك، وصنع اتصالات تدوم بعد انتهاء الحفل.",
    sectionList: [
      "احتفل بكل مناسبة بالموسيقى والسحر",
      "لحظات الحياة، مضخمة",
      "من قبعات التخرج إلى أجواء المهرجان",
      "قصتك، في أغنية واحتفال"
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
    spotlightHeading: "احتفلوا بالتقدم، معًا.",
    spotlightParagraph: "الاجتماع السنوي لشركة Innovatech ليس فقط للنظر إلى الماضي—بل للمضي قدمًا معًا. احتفل بالإنجازات مع محطات طعام مستوحاة من المطابخ العالمية، وعروض المواهب الداخلية، ومنصة رئيسية نابضة بالحياة والترفيه المباشر.",
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
    highlightsTitle: "حيث تتحقق أحلام المهرجان",
    highlightsSub: "من المسارح المشمسة إلى العروض الليلية، نبني رحلات مهرجانية تتجاوز الخيال.",
    highlights: [
      {
        img: "images/concert-1.png",
        alt: "قاعة مؤتمرات مضاءة جيدًا مع متحدث على المنصة.",
        title: "سحر المهرجان، مُصمم بعناية",
        desc: "عندما يلتقي الفن بالتخطيط، يحدث السحر. نشكل كل لحظة مهرجانية—من التركيبات الفنية التفاعلية إلى المؤثرات الصوتية—بدقة وأناقة."
      },
      {
        img: "images/concert2.png",
        alt: "محترفون في ساعة تواصل.",
        title: "لحظات تربط، إيقاعات توحد",
        desc: "هذه المهرجانات منسقة بعناية للاتصال. بين العروض المؤثرة والأنشطة الجماعية—مثل جلسات حول النار أو عروض الفنانين المحليين—الضيوف"
      },
      {
        img: "images/concert3.png",
        alt: "حفل توزيع جوائز رسمي.",
        title: "بدون توتر. احتفال خالص.",
        desc: "يجب ألا يكون التخطيط للمهرجان تحديًا. نحن ننظم كل شيء—من تنسيق الفنانين والديكور إلى تدفق الحشود والمفاجآت الممتعة."
      }
    ],
    ctaTitle: "جاهز لبدء رحلتك في الفعاليات؟",
    ctaDesc: "لنصنع تجربة لا تُنسى معًا. اتصل بنا اليوم لمناقشة رؤيتك والحصول على عرض مخصص.",
    ctaBtn: "خطط لحدثك"
  },
  he: {
    // Hebrew translations
    heroTagline: "הרגישו את הקצב, חיו את הרגע",
    heroParagraph: "הרגישו את הקצב זורם בעורקיכם.",
    heroBtn: "גלה את השירותים שלנו",
    sectionTitle: "קונצרטים ופסטיבלים",
    sectionDesc: "היכנסו ליותר מקונצרט—זו חוויה חושית מלאה. מתאורות מרהיבות ועד מקצבים עוצמתיים, הפסטיבל הזה הוא לא רק מוזיקה; הוא מדליק את הנשמה, יוצר קשרים שנשארים הרבה אחרי הצליל האחרון.",
    sectionList: [
      "חגגו כל רגע עם מוזיקה וקסם",
      "רגעי חיים, מוגברים",
      "מכובעי סיום ועד אווירת פסטיבל",
      "הסיפור שלך, בשיר ובחגיגה"
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
    spotlightHeading: "חוגגים התקדמות, יחד.",
    spotlightParagraph: "הכנס השנתי של Innovatech הוא לא רק מבט לאחור—אלא התקדמות משותפת. חגגו הישגים עם תחנות אוכל בהשראת מטבחים עולמיים, הופעות כישרונות פנימיים ובמה מרכזית דינמית עם בידור חי.",
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
    highlightsTitle: "איפה שחלומות הפסטיבל מתגשמים",
    highlightsSub: "מבמות שטופות שמש ועד מופעי ערב, אנו יוצרים מסעות פסטיבל שמעבר לדמיון.",
    highlights: [
      {
        img: "images/concert-1.png",
        alt: "חדר כנסים מואר עם מרצה על הבמה.",
        title: "קסם הפסטיבל, בעבודת יד",
        desc: "כשאמנות פוגשת תכנון, קורה קסם. אנו יוצרים כל רגע פסטיבל—מהתקנות אמנות אינטראקטיביות ועד סאונד—בדיוק ובסטייל."
      },
      {
        img: "images/concert2.png",
        alt: "מקצוענים בשעת נטוורקינג.",
        title: "רגעים שמחברים, מקצבים שמאחדים",
        desc: "הפסטיבלים האלה מתוכננים בקפידה לחיבור. בין הופעות מרגשות לפעילויות משותפות—כמו שיחות סביב המדורה או הופעות אמנים מקומיים—האורחים"
      },
      {
        img: "images/concert3.png",
        alt: "טקס פרסים רשמי.",
        title: "ללא דאגות. חגיגה טהורה.",
        desc: "תכנון פסטיבל לא צריך להיות אתגר. אנו מתזמרים הכל—מתיאום אמנים ועיצוב ועד זרימת קהל והפתעות נעימות."
      }
    ],
    ctaTitle: "מוכן להתחיל את מסע האירועים שלך?",
    ctaDesc: "בואו ניצור חוויה בלתי נשכחת יחד. צרו קשר היום כדי לדון בחזון שלכם ולקבל הצעה מותאמת.",
    ctaBtn: "תכנן את האירוע שלך"
  }
};

const FestivalConcerts = () => {
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
          src="/images/music-concert.mp4"
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
              src="images/musica-s.jpg"
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
              src="/images/music-concert.mp4"
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

export default FestivalConcerts;