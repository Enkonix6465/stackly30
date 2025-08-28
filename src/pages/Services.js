import  { useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext"; // <-- Add this
import "./Services.css";

const Services = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const { language } = useLanguage(); // <-- Use language context

  useEffect(() => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        answer.classList.toggle('open');
        icon.classList.toggle('rotate');
      });
    });
    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', () => {});
      });
    };
  }, []);

  const handleGetStarted = (path) => {
    navigate(path);
  };

  // Translations for all visible text
  const translations = {
    en: {
      heroTagline: "Turning Ideas into Unforgettable Experiences",
      heroParagraph: "We believe every event begins with a spark—a dream, a vision, an idea.",
      contactBtn: "Contact Us",
      servicesHeading: "Our Event Management Services",
      servicesIntro: "From concept to execution, we handle every detail so you can enjoy your moment.",
      corporate: "Corporate Events",
      corporateDesc: "Conferences, product launches, galas, and team-building retreats.",
      corporateBtn: "Learn More",
      social: "Social Celebrations",
      socialDesc: "Weddings, birthdays, anniversaries, and private parties.",
      socialBtn: "Plan Your Event",
      festival: "Festivals & Concerts",
      festivalDesc: "Large-scale music festivals, public events, and community gatherings.",
      festivalBtn: "Get a Quote",
      tradeshow: "Trade Shows & Exhibitions",
      tradeshowDesc: "Comprehensive planning for booths, logistics, and attendee experience.",
      tradeshowBtn: "Start Planning",
      private: "Private Events",
      privateDesc: "Custom-tailored events for intimate gatherings and special occasions.",
      privateBtn: "Request Info",
      nonprofit: "Non-Profit Galas",
      nonprofitDesc: "Fundraising events, charity auctions, and awareness campaigns.",
      nonprofitBtn: "Partner with Us",
      portfolioHeading: "Our Signature Events: A Closer Look",
      portfolioIntro: "We go beyond planning to create bespoke experiences. Here’s how we transformed a simple idea into an extraordinary event.",
      caseStudyTag: "Corporate Gala",
      caseStudyTitle: "The Annual Innovators Summit Gala",
      caseStudyChallenge: "Challenge: Our client needed to host their annual summit gala for 500 tech leaders. The brief was to create a futuristic, immersive environment that reflected the company's brand identity while providing a memorable, engaging experience.",
      caseStudySolution: "Our Solution: We designed a multi-sensory experience using holographic projections, interactive light displays, and a custom-built stage. The menu was crafted by a renowned chef, and a live orchestra provided an ambient soundtrack, ensuring every touchpoint felt innovative and exclusive.",
      caseStudyBtn: "View Full Case Study",
      whyChooseHeading: "Why We're Different",
      whyChooseIntro: "We don't just plan events; we create experiences that resonate. Our unique approach is built on these core principles.",
      features: [
        { icon: "fas fa-magic", title: "Creative Vision", desc: "We blend innovative ideas with flawless execution to bring your unique vision to life." },
        { icon: "fas fa-handshake-alt", title: "Transparent Process", desc: "From the first consultation to the final detail, you'll have full visibility and control." },
        { icon: "fas fa-chart-line", title: "Measurable Impact", desc: "We focus on delivering tangible results, ensuring your event achieves its goals and ROI." },
        { icon: "fas fa-user-friends", title: "Dedicated Team", desc: "Your event is handled by a passionate team committed to your success and peace of mind." },
        { icon: "fas fa-shield-alt", title: "Risk Management", desc: "We anticipate challenges and have contingency plans to ensure a smooth, stress-free event." },
        { icon: "fas fa-star-of-life", title: "Exceptional Service", desc: "We are available 24/7 to address any needs, providing unparalleled support every step of the way." },
      ],
      packagesHeading: "Flexible Packages",
      packagesIntro: "We offer custom solutions to fit every need and budget. Choose the level of support that's right for you.",
      partial: "Partial Planning",
      partialDesc: "Perfect for clients who have a vision but need expert assistance with key components.",
      partialFeatures: [
        "Vendor recommendations",
        "Day-of coordination",
        "Budget tracking",
        "Timeline creation"
      ],
      partialBtn: "Learn More",
      full: "Full-Service Planning",
      fullDesc: "Our comprehensive package, designed to handle every detail from start to finish.",
      fullFeatures: [
        "All Partial Planning features",
        "Concept and theme development",
        "Guest list management",
        "On-site event management"
      ],
      fullBtn: "Choose This Plan",
      alacarte: "A La Carte Services",
      alacarteDesc: "Tailored services for specific needs. Build your own package, your way.",
      alacarteFeatures: [
        "Venue sourcing",
        "Contract negotiation",
        "Supplier management",
        "Post-event analysis"
      ],
      alacarteBtn: "Contact for Quote",
      faqHeading: "Frequently Asked Questions",
      faqIntro: "Find quick answers to the most common questions about our event planning services.",
      faqs: [
        {
          question: "What types of events do you specialize in?",
          answer: "We specialize in a wide range of events, including corporate conferences, social celebrations, non-profit galas, and large-scale festivals. Our team has the expertise to handle diverse event types from concept to completion."
        },
        {
          question: "How do you handle event budget management?",
          answer: "Transparency is key to our process. We work with you to create a detailed budget plan from the start, providing regular updates to ensure we stay on track. Our goal is to maximize your budget while delivering an unforgettable event."
        },
        {
          question: "Can you assist with vendor selection and management?",
          answer: "Absolutely. We have a trusted network of the best vendors in the industry, from caterers and florists to audiovisual technicians. We handle all communication and negotiation to secure the best services at the best rates for your event."
        }
      ]
    },
    ar: {
      // Arabic translations (fill in as needed)
      heroTagline: "تحويل الأفكار إلى تجارب لا تُنسى",
      heroParagraph: "نؤمن أن كل حدث يبدأ بشرارة—حلم، رؤية، فكرة.",
      contactBtn: "اتصل بنا",
      servicesHeading: "خدمات إدارة الفعاليات",
      servicesIntro: "من الفكرة إلى التنفيذ، نتولى كل التفاصيل حتى تستمتع بلحظتك.",
      corporate: "فعاليات الشركات",
      corporateDesc: "المؤتمرات، إطلاق المنتجات، الحفلات، وفعاليات بناء الفريق.",
      corporateBtn: "اعرف المزيد",
      social: "الاحتفالات الاجتماعية",
      socialDesc: "حفلات الزفاف، أعياد الميلاد، الذكرى السنوية، والحفلات الخاصة.",
      socialBtn: "خطط لحدثك",
      festival: "المهرجانات والحفلات الموسيقية",
      festivalDesc: "مهرجانات موسيقية واسعة النطاق، فعاليات عامة، وتجمعات مجتمعية.",
      festivalBtn: "احصل على عرض",
      tradeshow: "المعارض والفعاليات التجارية",
      tradeshowDesc: "تخطيط شامل للأجنحة، اللوجستيات، وتجربة الحضور.",
      tradeshowBtn: "ابدأ التخطيط",
      private: "الفعاليات الخاصة",
      privateDesc: "فعاليات مصممة خصيصًا للتجمعات الحميمة والمناسبات الخاصة.",
      privateBtn: "اطلب معلومات",
      nonprofit: "حفلات الجمعيات غير الربحية",
      nonprofitDesc: "فعاليات جمع التبرعات، المزادات الخيرية، وحملات التوعية.",
      nonprofitBtn: "شارك معنا",
      portfolioHeading: "فعالياتنا المميزة: نظرة أقرب",
      portfolioIntro: "نذهب إلى ما هو أبعد من التخطيط لإنشاء تجارب مخصصة. هكذا حولنا فكرة بسيطة إلى حدث استثنائي.",
      caseStudyTag: "حفلة الشركات",
      caseStudyTitle: "حفل قمة المبتكرين السنوي",
      caseStudyChallenge: "التحدي: احتاج العميل إلى استضافة حفل القمة السنوي لـ 500 قائد تقني. كان المطلوب خلق بيئة مستقبلية غامرة تعكس هوية الشركة وتوفر تجربة لا تُنسى وجذابة.",
      caseStudySolution: "حلنا: صممنا تجربة متعددة الحواس باستخدام عروض هولوجرافية، إضاءة تفاعلية، ومنصة مخصصة. تم إعداد قائمة الطعام بواسطة طاهٍ مشهور، ووفرت الأوركسترا الحية موسيقى خلفية، لضمان أن كل نقطة اتصال كانت مبتكرة وحصرية.",
      caseStudyBtn: "عرض دراسة الحالة كاملة",
      whyChooseHeading: "لماذا نحن مختلفون",
      whyChooseIntro: "نحن لا نخطط فقط للفعاليات؛ نحن نخلق تجارب تترك أثراً. نهجنا الفريد مبني على هذه المبادئ الأساسية.",
      features: [
        { icon: "fas fa-magic", title: "رؤية إبداعية", desc: "نمزج الأفكار المبتكرة مع التنفيذ المتقن لتحقيق رؤيتك الفريدة." },
        { icon: "fas fa-handshake-alt", title: "عملية شفافة", desc: "من الاستشارة الأولى إلى أدق التفاصيل، ستحصل على رؤية كاملة وتحكم كامل." },
        { icon: "fas fa-chart-line", title: "تأثير قابل للقياس", desc: "نركز على تحقيق نتائج ملموسة، لضمان نجاح الحدث وتحقيق أهدافك." },
        { icon: "fas fa-user-friends", title: "فريق مخصص", desc: "يدير فريق شغوف فعاليتك ملتزم بنجاحك وراحتك." },
        { icon: "fas fa-shield-alt", title: "إدارة المخاطر", desc: "نتوقع التحديات ولدينا خطط طوارئ لضمان حدث سلس وخالي من التوتر." },
        { icon: "fas fa-star-of-life", title: "خدمة استثنائية", desc: "نحن متواجدون على مدار الساعة لتلبية احتياجاتك، ونوفر دعمًا لا مثيل له في كل خطوة." },
      ],
      packagesHeading: "باقات مرنة",
      packagesIntro: "نقدم حلولاً مخصصة تناسب كل احتياج وميزانية. اختر مستوى الدعم المناسب لك.",
      partial: "تخطيط جزئي",
      partialDesc: "مثالي للعملاء الذين لديهم رؤية ويحتاجون إلى مساعدة الخبراء في المكونات الرئيسية.",
      partialFeatures: [
        "توصيات الموردين",
        "تنسيق يوم الحدث",
        "تتبع الميزانية",
        "إنشاء الجدول الزمني"
      ],
      partialBtn: "اعرف المزيد",
      full: "تخطيط كامل للخدمة",
      fullDesc: "باقتنا الشاملة، مصممة لإدارة كل التفاصيل من البداية إلى النهاية.",
      fullFeatures: [
        "جميع ميزات التخطيط الجزئي",
        "تطوير المفهوم والموضوع",
        "إدارة قائمة الضيوف",
        "إدارة الحدث في الموقع"
      ],
      fullBtn: "اختر هذه الخطة",
      alacarte: "خدمات حسب الطلب",
      alacarteDesc: "خدمات مصممة خصيصًا للاحتياجات المحددة. أنشئ باقتك الخاصة بطريقتك.",
      alacarteFeatures: [
        "تحديد مكان الحدث",
        "التفاوض على العقود",
        "إدارة الموردين",
        "تحليل ما بعد الحدث"
      ],
      alacarteBtn: "اطلب عرض سعر",
      faqHeading: "الأسئلة الشائعة",
      faqIntro: "اعثر على إجابات سريعة لأكثر الأسئلة شيوعًا حول خدمات تخطيط الفعاليات.",
      faqs: [
        {
          question: "ما أنواع الفعاليات التي تتخصصون فيها؟",
          answer: "نتخصص في مجموعة واسعة من الفعاليات، بما في ذلك المؤتمرات الشركات، الاحتفالات الاجتماعية، حفلات الجمعيات غير الربحية، والمهرجانات الكبرى. يمتلك فريقنا الخبرة لإدارة أنواع الفعاليات المختلفة من الفكرة إلى التنفيذ."
        },
        {
          question: "كيف تديرون ميزانية الحدث؟",
          answer: "الشفافية هي أساس عمليتنا. نعمل معك لإنشاء خطة ميزانية مفصلة من البداية، ونقدم تحديثات منتظمة لضمان الالتزام بالميزانية. هدفنا هو تحقيق أقصى استفادة من ميزانيتك مع تقديم حدث لا يُنسى."
        },
        {
          question: "هل يمكنكم المساعدة في اختيار وإدارة الموردين؟",
          answer: "بالتأكيد. لدينا شبكة موثوقة من أفضل الموردين في المجال، من مقدمي الطعام إلى الفنيين. نتولى جميع الاتصالات والتفاوض لضمان أفضل الخدمات بأفضل الأسعار لحدثك."
        }
      ]
    },
    he: {
      // Hebrew translations (fill in as needed)
      heroTagline: "הופכים רעיונות לחוויות בלתי נשכחות",
      heroParagraph: "אנו מאמינים שכל אירוע מתחיל בניצוץ—חלום, חזון, רעיון.",
      contactBtn: "צור קשר",
      servicesHeading: "שירותי ניהול אירועים",
      servicesIntro: "מהרעיון ועד הביצוע, אנו מטפלים בכל פרט כדי שתוכל ליהנות מהרגע שלך.",
      corporate: "אירועים עסקיים",
      corporateDesc: "כנסים, השקות מוצרים, נשפים, וימי גיבוש צוות.",
      corporateBtn: "למידע נוסף",
      social: "חגיגות חברתיות",
      socialDesc: "חתונות, ימי הולדת, ימי נישואין, ומסיבות פרטיות.",
      socialBtn: "תכנן את האירוע שלך",
      festival: "פסטיבלים וקונצרטים",
      festivalDesc: "פסטיבלי מוזיקה גדולים, אירועים ציבוריים, ומפגשים קהילתיים.",
      festivalBtn: "קבל הצעת מחיר",
      tradeshow: "תערוכות וכנסים",
      tradeshowDesc: "תכנון מקיף לדוכנים, לוגיסטיקה, וחוויית המשתתפים.",
      tradeshowBtn: "התחל לתכנן",
      private: "אירועים פרטיים",
      privateDesc: "אירועים בהתאמה אישית למפגשים אינטימיים ומועדים מיוחדים.",
      privateBtn: "בקשת מידע",
      nonprofit: "נשפים לעמותות",
      nonprofitDesc: "אירועי גיוס תרומות, מכירות פומביות, וקמפיינים להעלאת מודעות.",
      nonprofitBtn: "שתף פעולה איתנו",
      portfolioHeading: "האירועים המובילים שלנו: מבט מקרוב",
      portfolioIntro: "אנחנו יוצרים חוויות ייחודיות. כך הפכנו רעיון פשוט לאירוע יוצא דופן.",
      caseStudyTag: "נשף עסקי",
      caseStudyTitle: "נשף פסגת החדשנים השנתי",
      caseStudyChallenge: "האתגר: הלקוח ביקש לארח את הנשף השנתי ל-500 מובילי טכנולוגיה. הדרישה הייתה ליצור סביבה עתידנית, סוחפת, שמשקפת את זהות החברה ומספקת חוויה בלתי נשכחת ומרתקת.",
      caseStudySolution: "הפתרון שלנו: עיצבנו חוויה רב-חושית עם הקרנות הולוגרפיות, תאורה אינטראקטיבית ובמה מותאמת אישית. התפריט נבנה על ידי שף מוביל, ותזמורת חיה סיפקה מוזיקת רקע, כך שכל נקודת מגע הייתה חדשנית וייחודית.",
      caseStudyBtn: "לצפייה בכל המחקר",
      whyChooseHeading: "למה אנחנו שונים",
      whyChooseIntro: "אנחנו לא רק מתכננים אירועים; אנחנו יוצרים חוויות שנשארות. הגישה הייחודית שלנו מבוססת על עקרונות אלו.",
      features: [
        { icon: "fas fa-magic", title: "חזון יצירתי", desc: "אנו משלבים רעיונות חדשניים עם ביצוע מושלם כדי להגשים את החזון שלך." },
        { icon: "fas fa-handshake-alt", title: "תהליך שקוף", desc: "מהפגישה הראשונה ועד הפרט האחרון, תהיה לך שליטה מלאה." },
        { icon: "fas fa-chart-line", title: "השפעה מדידה", desc: "אנחנו מתמקדים בתוצאות מוחשיות, כדי להבטיח שהאירוע שלך יעמוד ביעדים." },
        { icon: "fas fa-user-friends", title: "צוות מסור", desc: "האירוע שלך מנוהל על ידי צוות נלהב שמחויב להצלחה שלך." },
        { icon: "fas fa-shield-alt", title: "ניהול סיכונים", desc: "אנו צופים אתגרים ומכינים תוכניות גיבוי לאירוע חלק וללא דאגות." },
        { icon: "fas fa-star-of-life", title: "שירות יוצא דופן", desc: "אנחנו זמינים 24/7 לכל צורך, ומספקים תמיכה שאין לה תחרות." },
      ],
      packagesHeading: "חבילות גמישות",
      packagesIntro: "אנו מציעים פתרונות מותאמים לכל צורך ותקציב. בחר את רמת התמיכה המתאימה לך.",
      partial: "תכנון חלקי",
      partialDesc: "מושלם ללקוחות שיש להם חזון וזקוקים לעזרה מקצועית ברכיבים מרכזיים.",
      partialFeatures: [
        "המלצות ספקים",
        "תיאום ביום האירוע",
        "מעקב תקציב",
        "יצירת לוחות זמנים"
      ],
      partialBtn: "למידע נוסף",
      full: "תכנון מלא",
      fullDesc: "החבילה המקיפה שלנו, שמטפלת בכל פרט מההתחלה ועד הסוף.",
      fullFeatures: [
        "כל תכונות התכנון החלקי",
        "פיתוח קונספט ונושא",
        "ניהול רשימת אורחים",
        "ניהול האירוע במקום"
      ],
      fullBtn: "בחר חבילה זו",
      alacarte: "שירותים לפי דרישה",
      alacarteDesc: "שירותים מותאמים אישית לצרכים מסוימים. בנה את החבילה שלך, בדרך שלך.",
      alacarteFeatures: [
        "איתור מקום",
        "משא ומתן על חוזים",
        "ניהול ספקים",
        "ניתוח לאחר האירוע"
      ],
      alacarteBtn: "קבל הצעת מחיר",
      faqHeading: "שאלות נפוצות",
      faqIntro: "מצא תשובות מהירות לשאלות הנפוצות ביותר על שירותי תכנון האירועים שלנו.",
      faqs: [
        {
          question: "באילו סוגי אירועים אתם מתמחים؟",
          answer: "אנחנו מתמחים במגוון רחב של אירועים, כולל כנסים עסקיים, חגיגות חברתיות, נשפים לעמותות ופסטיבלים גדולים. לצוות שלנו יש את הניסיון לנהל סוגי אירועים שונים מהרעיון ועד הביצוע."
        },
        {
          question: "איך אתם מנהלים את תקציב האירוע؟",
          answer: "שקיפות היא המפתח שלנו. אנו עובדים איתך לבניית תוכנית תקציב מפורטת מההתחלה, ומספקים עדכונים שוטפים כדי להבטיח עמידה בתקציב. המטרה שלנו היא למקסם את התקציב שלך ולספק אירוע בלתי נשכח."
        },
        {
          question: "האם תוכלו לעזור בבחירת וניהול ספקים؟",
          answer: "בהחלט. יש לנו רשת אמינה של ספקים מובילים, מאנשי קייטרינג ועד טכנאים. אנו מטפלים בכל התקשורת והמשא ומתן כדי להבטיח את השירותים הטובים ביותר במחירים הטובים ביותר לאירוע שלך."
        }
      ]
    }
  };

  return (
    <div className={darkMode ? "service-page dark-mode" : "service-page light-mode"}>
      <div className="hero-container-service">
        <video
          className="hero-video-service"
          src="/images/her0-services.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-service">
          <h1 className="hero-tagline-service">{translations[language].heroTagline}</h1>
          <p className="hero-paragraph-service">
            {translations[language].heroParagraph}
          </p>
          <div className="hero-btns-service">
            <button className="btn" onClick={()=>handleGetStarted("/contact")}>
              {translations[language].contactBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section-service">
        <div className="services-container-service">
          <h2 className="services-heading-service">{translations[language].servicesHeading}</h2>
          <p className="services-intro-service">
            {translations[language].servicesIntro}
          </p>
          <div className="services-grid-service">
            <div className="service-card-service">
              <img src="/images/corporate-s.jpg" alt={translations[language].corporate} className="service-image-service" />
              <h3>{translations[language].corporate}</h3>
              <p>{translations[language].corporateDesc}</p>
              <button className="service-btn-service corporate-btn" onClick={()=>handleGetStarted("/corporate-events")}>
                {translations[language].corporateBtn}
              </button>
            </div>
            <div className="service-card-service">
              <img src="/images/social-s.jpg" alt={translations[language].social} className="service-image-service" />
              <h3>{translations[language].social}</h3>
              <p>{translations[language].socialDesc}</p>
              <button className="service-btn-service social-btn" onClick={()=>handleGetStarted("/social-celebrations")}>
                {translations[language].socialBtn}
              </button>
            </div>
            <div className="service-card-service">
              <img src="/images/musica-s.jpg" alt={translations[language].festival} className="service-image-service" />
              <h3>{translations[language].festival}</h3>
              <p>{translations[language].festivalDesc}</p>
              <button className="service-btn-service festival-btn" onClick={()=>handleGetStarted("/festivals-concerts")}>
                {translations[language].festivalBtn}
              </button>
            </div>
            <div className="service-card-service">
              <img src="/images/trade-s.jpg" alt={translations[language].tradeshow} className="service-image-service" />
              <h3>{translations[language].tradeshow}</h3>
              <p>{translations[language].tradeshowDesc}</p>
              <button className="service-btn-service tradeshow-btn" onClick={()=>handleGetStarted("/trade-shows")}>
                {translations[language].tradeshowBtn}
              </button>
            </div>
            <div className="service-card-service">
              <img src="/images/private-s.jpg" alt={translations[language].private} className="service-image-service" />
              <h3>{translations[language].private}</h3>
              <p>{translations[language].privateDesc}</p>
              <button className="service-btn-service private-btn" onClick={()=>handleGetStarted("/private-events")}>
                {translations[language].privateBtn}
              </button>
            </div>
            <div className="service-card-service">
              <img src="/images/fund-s.jpg" alt={translations[language].nonprofit} className="service-image-service" />
              <h3>{translations[language].nonprofit}</h3>
              <p>{translations[language].nonprofitDesc}</p>
              <button className="service-btn-service nonprofit-btn" onClick={()=>handleGetStarted("/non-profit-galas")}>
                {translations[language].nonprofitBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio & Case Studies Section */}
      <section className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-content">
            <h2 className="portfolio-heading">{translations[language].portfolioHeading}</h2>
            <p className="portfolio-intro">
              {translations[language].portfolioIntro}
            </p>
            <div className="case-study-card">
              <img
                src="/images/gala-night.jpg"
                alt={translations[language].caseStudyTag}
                className="case-study-image"
              />
              <div className="case-study-details">
                <span className="case-study-tag">{translations[language].caseStudyTag}</span>
                <h3>{translations[language].caseStudyTitle}</h3>
                <p>
                  {translations[language].caseStudyChallenge}
                </p>
                <p>
                  {translations[language].caseStudySolution}
                </p>
                <button className="case-study-btn" onClick={()=>handleGetStarted("/corporate-events")}>
                  {translations[language].caseStudyBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="why-choose-us-container">
          <h2 className="why-choose-us-heading">{translations[language].whyChooseHeading}</h2>
          <p className="why-choose-us-intro">
            {translations[language].whyChooseIntro}
          </p>
          <div className="features-grid">
            {translations[language].features.map((feature, idx) => (
              <div className="feature-card" key={idx}>
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Packages Section */}
      <section className="packages-section">
        <div className="packages-container">
          <h2 className="packages-heading">{translations[language].packagesHeading}</h2>
          <p className="packages-intro">
            {translations[language].packagesIntro}
          </p>

          <div className="package-tiers">
            <div className="package-box">
              <h3>{translations[language].partial}</h3>
              <p className="package-description">{translations[language].partialDesc}</p>
              <ul className="package-features">
                {translations[language].partialFeatures.map((item, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {item}</li>
                ))}
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>
                {translations[language].partialBtn}
              </button>
            </div>

            <div className="package-box featured-package">
              <span>Most Popular</span>
              <h3>{translations[language].full}</h3>
              <p className="package-description">{translations[language].fullDesc}</p>
              <ul className="package-features">
                {translations[language].fullFeatures.map((item, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {item}</li>
                ))}
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>
                {translations[language].fullBtn}
              </button>
            </div>

            <div className="package-box">
              <h3>{translations[language].alacarte}</h3>
              <p className="package-description">{translations[language].alacarteDesc}</p>
              <ul className="package-features">
                {translations[language].alacarteFeatures.map((item, idx) => (
                  <li key={idx}><i className="fas fa-check-circle"></i> {item}</li>
                ))}
              </ul>
              <button className="package-btn" onClick={()=>handleGetStarted("/contact")}>
                {translations[language].alacarteBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- FAQ Section --- */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">{translations[language].faqHeading}</h2>
          <p className="faq-intro">
            {translations[language].faqIntro}
          </p>

          {translations[language].faqs.map((faq, idx) => (
            <div className="faq-item" key={idx}>
              <button className="faq-question">
                <h4>{faq.question}</h4>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Services;