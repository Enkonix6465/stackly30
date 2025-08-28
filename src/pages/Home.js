import { useRef, useEffect, useState } from "react";
import "./Home.css";
import { useDarkMode } from "../context/Darkmodecontext";
import CircularServices from './CircularServices';
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const TestimonialCard = ({ name, company, quote, image }) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      <img src={image} alt={name} className="testimonial-image" />
      <div className="testimonial-info">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-company">{company}</p>
      </div>
    </div>
    <p className="testimonial-quote">"{quote}"</p>
  </div>
);

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    } else {
      setCount(0);
    }
  }, [isVisible, target, duration]);

  return <p ref={counterRef} className="stats-number">{count}</p>;
};

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = (path) => navigate(path);
  const videoRef = useRef();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.defaultMuted = true;
      videoEl.play().catch(err => console.warn("Autoplay blocked:", err));
    }
  }, []);

  const statsData = [
    { target: 1000, label: 'CORPORATE EVENTS DONE', icon: 'fas fa-users' },
    { target: 78, label: 'CORPORATE EVENT CONSULTATIONS OFFERED', icon: 'fas fa-comments' },
    { target: 123, label: 'HAPPY CLIENTS', icon: 'fas fa-thumbs-up' },
    { target: 30, label: 'HAPPY EMPLOYEES', icon: 'fas fa-user-tie' },
  ];

  const testimonialsData = [
    {
      name: {
        en: 'Jane Doe',
        ar: 'جين دو',
        he: 'ג\'יין דו'
      },
      company: {
        en: 'CEO, Innovate Ltd.',
        ar: 'الرئيس التنفيذي، إنوفيت المحدودة',
        he: 'מנכ"ל, אינובייט בע"מ'
      },
      quote: {
        en: 'This product has completely transformed our workflow. We saw an immediate increase in productivity.',
        ar: 'هذا المنتج غيّر سير العمل لدينا بالكامل. لاحظنا زيادة فورية في الإنتاجية.',
        he: 'המוצר הזה שינה לחלוטין את זרימת העבודה שלנו. ראינו עלייה מיידית בפרודוקטיביות.'
      },
      image: 'images/test1.jpg',
    },
    {
      name: {
        en: 'John Smith',
        ar: 'جون سميث',
        he: 'ג\'ון סמית'
      },
      company: {
        en: 'Marketing Manager, Growth Co.',
        ar: 'مدير التسويق، جروث كو.',
        he: 'מנהל שיווק, גרות\' בע"מ'
      },
      quote: {
        en: 'The support team is incredible. They are fast, knowledgeable, and genuinely care about our success.',
        ar: 'فريق الدعم مذهل. سريعون، خبراء، ويهتمون حقًا بنجاحنا.',
        he: 'צוות התמיכה מדהים. הם מהירים, מקצועיים, ואכפת להם באמת מההצלחה שלנו.'
      },
      image: 'images/test2.jpg',
    },
    {
      name: {
        en: 'Emily Davis',
        ar: 'إميلي ديفيس',
        he: 'אמילי דיוויס'
      },
      company: {
        en: 'Founder, Creative Studios',
        ar: 'المؤسسة، استوديوهات كرياتيف',
        he: 'מייסדת, קריאייטיב סטודיוס'
      },
      quote: {
        en: 'A must-have tool for any business looking to streamline their operations.',
        ar: 'أداة لا غنى عنها لأي عمل يسعى لتحسين عملياته.',
        he: 'כלי חובה לכל עסק שרוצה לייעל את הפעילות שלו.'
      },
      image: 'images/test3.jpg',
    },
  ];

  const translations = {
    en: {
      heroTagline: "Crafting Unforgettable Moments",
      heroParagraph: "From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.",
      discoverMore: "Discover More",
      whyUs: "WHY US.",
      whyUsPara: "Our commitment to excellence ensures every event is a seamless and memorable success.",
      experience: "EXPERIENCE AND EXPERTISE",
      experienceDesc: "We have been event organizers since 2005 and have worked extensively with companies from different industries.",
      vendor: "VENDOR NETWORK",
      vendorDesc: "We have a vast event vendor network who we work with to plan events for our clients in India, Middle East and South East Asia.",
      cost: "COST EFFECTIVE",
      costDesc: "Our event services are cost effective and impact-full. we work with you to plan your events in sync with budgets assigned.",
      transparent: "TRANSPARENT",
      transparentDesc: "We assure complete transparency and implement it at every step of the event planning process.",
      aboutUs: "About US",
      craftingMemories: "Crafting Memories, One Event at a Time",
      aboutDesc: "We believe that every event is a unique story waiting to unfold. With our tagline, ‘Crafting Memories, One Event at a Time,’ we pledge to infuse each occasion with thoughtful planning, attention to detail, and personalized care. From intimate gatherings to grand celebrations, our passion lies in transforming your vision into unforgettable moments—whether it’s the laughter during speeches, the sparkle of décor, or the emotion in every interaction. We’re not just planning events; we’re curating experiences that stay with you and your guests long after the last guest has left. Our signature promise—'Crafting Memories, One Event at a Time'—speaks to our commitment to thoughtfulness and personalization. Every event we create is a living story, lovingly shaped with attention to detail, emotion, and joy.",
      aboutBtn: "About Us",
      testimonialsTitle: "What Our Customers Say",
      testimonialsPara: "Featuring authentic stories that highlight how your product or service solved real problems",
      ourPast: "OUR PAST",
      ourPastPara: "Elegant and forward-looking—perfect for a brand bridging tradition with innovation",
      homeTitle: "Your Perfect Home Starts with a Conversation",
      homeSubtitle: "Finding your dream home isn’t just about listings—it’s about understanding your unique needs, preferences, and aspirations",
      reachOut: "REACH OUT TODAY",
    },
    ar: {
      heroTagline: "صنع لحظات لا تُنسى",
      heroParagraph: "من الحفلات الرسمية إلى حفلات الزفاف، نتعامل مع كل التفاصيل بدقة وإبداع. دعنا نحقق رؤيتك.",
      discoverMore: "اكتشف المزيد",
      whyUs: "لماذا نحن.",
      whyUsPara: "يضمن التزامنا بالتميز نجاح كل حدث بسلاسة وذكريات لا تُنسى.",
      experience: "الخبرة والاحتراف",
      experienceDesc: "نحن منظمون للفعاليات منذ عام 2005 وعملنا مع شركات من مختلف الصناعات.",
      vendor: "شبكة الموردين",
      vendorDesc: "لدينا شبكة واسعة من الموردين الذين نعمل معهم لتنظيم الفعاليات لعملائنا في الهند والشرق الأوسط وجنوب شرق آسيا.",
      cost: "فعالية التكلفة",
      costDesc: "خدماتنا فعالة من حيث التكلفة وذات تأثير. نعمل معك لتخطيط فعالياتك وفقًا للميزانية.",
      transparent: "الشفافية",
      transparentDesc: "نضمن الشفافية الكاملة ونطبقها في كل خطوة من عملية التخطيط.",
      aboutUs: "معلومات عنا",
      craftingMemories: "صنع الذكريات، حدث واحد في كل مرة",
      aboutDesc: "نعتقد أن كل حدث هو قصة فريدة تنتظر أن تُروى. مع شعارنا، 'صنع الذكريات، حدث واحد في كل مرة'، نعد بدمج كل مناسبة بتخطيط مدروس، اهتمام بالتفاصيل، ورعاية شخصية. من التجمعات الحميمة إلى الاحتفالات الكبرى، تكمن شغفنا في تحويل رؤيتك إلى لحظات لا تُنسى—سواء كانت الضحكات خلال الخطابات، بريق الديكور، أو المشاعر في كل تفاعل. نحن لا نخطط فقط للأحداث؛ نحن ننسق تجارب تبقى معك ومع ضيوفك طويلاً بعد مغادرة آخر ضيف. وعدنا المميز—'صنع الذكريات، حدث واحد في كل مرة'—يتحدث عن التزامنا بالتفكير والرعاية الشخصية. كل حدث نخلقه هو قصة حية، مشكّلة بمحبة مع اهتمام بالتفاصيل، عواطف، وفرح.",
      aboutBtn: "معلومات عنا",
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonialsPara: "قصص حقيقية تبرز كيف حل منتجك أو خدمتك مشاكل فعلية",
      ourPast: "ماضينا",
      ourPastPara: "أنيق ومتطلع للمستقبل—مثالي لعلامة تجارية تجمع بين التقليد والابتكار",
      homeTitle: "منزلك المثالي يبدأ بالمحادثة",
      homeSubtitle: "العثور على منزلك المثالي ليس فقط عن القوائم—بل عن فهم احتياجاتك وتفضيلاتك وطموحاتك الفريدة",
      reachOut: "تواصل اليوم",
    },
    he: {
      heroTagline: "יצירת רגעים בלתי נשכחים",
      heroParagraph: "מאירועים עסקיים ועד חתונות חלומיות, אנו מטפלים בכל פרט בדיוק ויצירתיות. תן לנו להגשים את החזון שלך.",
      discoverMore: "גלה עוד",
      whyUs: "למה אנחנו.",
      whyUsPara: "המחויבות שלנו למצוינות מבטיחה שכל אירוע יהיה מוצלח ובלתי נשכח.",
      experience: "ניסיון ומומחיות",
      experienceDesc: "אנחנו מארגני אירועים מאז 2005 ועבדנו עם חברות מענפים שונים.",
      vendor: "רשת ספקים",
      vendorDesc: "יש לנו רשת ספקים רחבה שאיתה אנו עובדים לתכנון אירועים ללקוחותינו בהודו, המזרח התיכון ודרום מזרח אסיה.",
      cost: "עלות אפקטיבית",
      costDesc: "שירותי האירועים שלנו משתלמים ובעלי השפעה. אנו עובדים איתך לתכנן את האירועים בהתאם לתקציב.",
      transparent: "שקיפות",
      transparentDesc: "אנו מבטיחים שקיפות מלאה ומיישמים אותה בכל שלב בתהליך התכנון.",
      aboutUs: "עלינו",
      craftingMemories: "יוצרים זיכרונות, אירוע אחד בכל פעם",
      aboutDesc: "אנו מאמינים שכל אירוע הוא סיפור ייחודי שמחכה להתגלות. עם הסלוגן שלנו, 'יוצרים זיכרונות, אירוע אחד בכל פעם', אנו מתחייבים לשלב כל אירוע בתכנון מעמיק, תשומת לב לפרטים, ודאגה אישית. מאירועים אינטימיים ועד חגיגות גדולות, התשוקה שלנו היא להפוך את החזון שלך לרגעים בלתי נשכחים—בין אם זה הצחוק במהלך הנאומים, הברק של העיצוב, או הרגש בכל אינטראקציה. אנחנו לא רק מתכננים אירועים; אנחנו עורכים חוויות שנשארות איתך ועם האורחים שלך הרבה אחרי שהאורח האחרון עזב. ההבטחה הייחודית שלנו—'יוצרים זיכרונות, אירוע אחד בכל פעם'—מדברת על המחויבות שלנו לחשיבה ולפרטים אישיים. כל אירוע שאנחנו יוצרים הוא סיפור חי, מעוצב באהבה עם תשומת לב לפרטים, רגש, ושמחה.",
      aboutBtn: "עלינו",
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonialsPara: "סיפורים אמיתיים המדגישים כיצד המוצר או השירות שלך פתרו בעיות אמיתיות",
      ourPast: "העבר שלנו",
      ourPastPara: "אלגנטי ומביט קדימה—מושלם למותג שמגשר בין מסורת לחדשנות",
      homeTitle: "הבית המושלם שלך מתחיל בשיחה",
      homeSubtitle: "מציאת הבית המושלם שלך היא לא רק רשימות—זה להבין את הצרכים, ההעדפות והשאיפות הייחודיות שלך",
      reachOut: "צור קשר היום",
    },
  };

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      <div className="hero-container">
        <video
          ref={videoRef}
          className="hero-video"
          src="/images/video1.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content">
          <h1 className="hero-tagline">{translations[language].heroTagline}</h1>
          <p className="hero-paragraph">{translations[language].heroParagraph}</p>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/about")}>
              {translations[language].discoverMore}
            </button>
          </div>
        </div>
      </div>

      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">{translations[language].whyUs}</h2>
          <p className="section-para" data-aos="fade-up" data-aos-delay="200">
            {translations[language].whyUsPara}
          </p>
          <div className="line-divider"></div>
          <div className="reasons-container">
            <div className="reason-item" data-aos="fade-up" data-aos-delay="400">
              <div className="icon-wrapper">
                <i className="fa fa-file-alt icon-style"></i>
              </div>
              <h3 className="reason-title">{translations[language].experience}</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                {translations[language].experienceDesc}
              </p>
            </div>
            <div className="reason-item" data-aos="fade-up" data-aos-delay="600">
              <div className="icon-wrapper">
                <i className="fa fa-th-large icon-style"></i>
              </div>
              <h3 className="reason-title">{translations[language].vendor}</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                {translations[language].vendorDesc}
              </p>
            </div>
            <div className="reason-item" data-aos="fade-up" data-aos-delay="800">
              <div className="icon-wrapper">
                <i className="fa fa-rupee-sign icon-style"></i>
              </div>
              <h3 className="reason-title">{translations[language].cost}</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                {translations[language].costDesc}
              </p>
            </div>
            <div className="reason-item" data-aos="fade-up" data-aos-delay="1000">
              <div className="icon-wrapper">
                <i className="fa fa-users icon-style"></i>
              </div>
              <h3 className="reason-title">{translations[language].transparent}</h3>
              <div className="title-underline"></div>
              <p className="reason-description">
                {translations[language].transparentDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-container">
        <div className="text-content">
          <h1>{translations[language].aboutUs}</h1>
          <h2>{translations[language].craftingMemories}</h2>
          <p className="description" style={{ textAlign: "justify" }}>
            {translations[language].aboutDesc}
          </p>
          <button className="go-to-page-button" onClick={() => handleGetStarted("/about")}>
            {translations[language].aboutBtn}
          </button>
        </div>
        <div className="image-content">
          <img src="images/events.png" alt="Annual Day Celebration" />
        </div>
      </div>

      <CircularServices />

      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">{translations[language].testimonialsTitle}</h2>
          <p style={{ marginBottom: "40px" }}>{translations[language].testimonialsPara}</p>
          <div className="testimonials-grid">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name[language]}
                company={testimonial.company[language]}
                quote={testimonial.quote[language]}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-header">
          <h2 className="stats-heading">{translations[language].ourPast}</h2>
          <p>{translations[language].ourPastPara}</p>
        </div>
        <div className="stats-container">
          {statsData.map((stat, index) => (
            <div key={index} className="stats-item">
              <div className="stats-icon">
                <i className={stat.icon}></i>
              </div>
              <Counter target={stat.target} />
              <div className="stats-sub-text">
                <p>{stat.label}</p>
                <span className="stats-dot"></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="hero-container-home">
        <div className="hero-content-home">
          <h1 className="hero-title-home">{translations[language].homeTitle}</h1>
          <p className="hero-subtitle-home">
            {translations[language].homeSubtitle}
          </p>
          <button className="hero-button-home" onClick={() => handleGetStarted("/contact")}>
            {translations[language].reachOut}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;