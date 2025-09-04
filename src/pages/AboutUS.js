import  { useRef, useEffect, useState } from 'react';
import './AboutUs.css';
import { useDarkMode } from "../context/Darkmodecontext";
import { useLanguage } from "../context/LanguageContext";

const rtlLanguages = ["ar", "he"];

function AboutUs() {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const isRTL = rtlLanguages.includes(language);
  const videoRef = useRef(null);

  const translations = {
    en: {
      heroTagline: "Turning Ideas into Unforgettable Experiences.",
      heroParagraph: "We believe every event begins with a spark—a dream, a vision, an idea.",
      heroBtn: "Discover Our Services",
      missionTitle: "Our Mission",
      missionQuote: "\"We don't just plan events; we craft experiences that tell a story.\"",
      missionText1: "At the heart of our work lies a single guiding principle: turning ideas into unforgettable experiences. Our mission is to seamlessly transform your vision into reality with meticulous planning, creative flair, and unwavering dedication. We specialize in delivering tailor-made events—be it an intimate celebration, a dynamic corporate gathering, or an immersive cultural showcase—that resonate with your goals and captivate your audience.",
      missionText2: "From initial concept to flawless execution, we pride ourselves on exceptional service, personalized attention, and collaborative creativity. Our goal is not just to meet expectations, but to set new benchmarks for event excellence—ensuring every moment is meaningful, memorable, and uniquely yours.",
      visionTitle: "Our Vision",
      visionQuote: "\"To be the architects of tomorrow's most memorable moments.\"",
      visionText1: "Our vision is to revolutionize the event management landscape by setting new standards of creativity and seamless execution. We aspire to be more than just a service provider; we aim to be a creative partner for our clients, recognized globally for our commitment to innovation and excellence. We envision a future where every event is a masterpiece, uniquely designed to inspire, connect, and elevate human experiences.",
      visionText2: "By continuously pushing creative boundaries and embracing cutting-edge technology, we will lead the industry in delivering events that are not only successful but also transformative. We believe that the future of events is about creating immersive environments that resonate on a deeper, more emotional level, and our vision is to be at the forefront of this evolution.",
      storyHeading: "Our Journey So Far",
      storyPara: "What began as a modest idea—driven by a shared passion for creativity and impeccable execution",
      timeline: [
        { year: "2010", title: "The Foundation", text: "Founded with a simple idea: to bring a new level of creativity and professionalism to the events industry. We started with a small team and a big vision." },
        { year: "2015", title: "First Major Success", text: "Successfully planned and executed our first large-scale international conference, gaining recognition for our innovative approach and meticulous planning." },
        { year: "2020", title: "Expanding Our Reach", text: "Expanded our services to include virtual and hybrid events, adapting to the changing global landscape and setting new industry standards for digital experiences." },
        { year: "2023", title: "Pioneering Sustainability", text: "Launched our sustainable events initiative, integrating eco-friendly practices and materials to reduce our environmental impact and help clients do the same." }
      ],
      whyAttendTitle: "Why Attend?",
      whyAttendPara: "Join us for an unparalleled event experience designed to inspire, connect, and empower. This event is a unique platform to gain valuable insights, network with peers, and discover innovative solutions.",
      benefits: [
        { icon: '💡', text: 'Gain valuable insights from industry leaders and experts.' },
        { icon: '🤝', text: 'Network with peers and build meaningful professional relationships.' },
        { icon: '🚀', text: 'Discover innovative solutions to empower your business.' },
        { icon: '📈', text: 'Enhance your skills with hands-on workshops and masterclasses.' },
      ],
      benefitHeading: "Benefit",
      teamHeading: "Meet the Architects of Our Success",
      teamPara: "Our diverse team of experts brings passion, creativity, and dedication to every project, ensuring your vision becomes a reality.",
      team: [
        { name: "Jane Doe", role: "Lead Event Strategist", img: "/images/team1.jpg" },
        { name: "John Smith", role: "Creative Director", img: "/images/team2.jpg" },
        { name: "Emily White", role: "Logistics Coordinator", img: "/images/team3.jpg" }
      ],
      contactTagline: "Let's Create Something Unforgettable.",
      contactPara: "Ready to turn your vision into a remarkable experience? Reach out to us, and let's start planning the event you've always dreamed of.",
      contactBtn: "Contact Us"
    },
    ar: {
      heroTagline: "تحويل الأفكار إلى تجارب لا تُنسى.",
      heroParagraph: "نؤمن أن كل حدث يبدأ بشرارة—حلم، رؤية، فكرة.",
      heroBtn: "اكتشف خدماتنا",
      missionTitle: "مهمتنا",
      missionQuote: "\"نحن لا نخطط الأحداث فقط؛ نحن نصنع تجارب تروي قصة.\"",
      missionText1: "في قلب عملنا يكمن مبدأ واحد: تحويل الأفكار إلى تجارب لا تُنسى. مهمتنا هي تحويل رؤيتك إلى واقع من خلال التخطيط الدقيق والإبداع والتفاني. نحن متخصصون في تقديم فعاليات مصممة خصيصًا—سواء كانت احتفالًا صغيرًا أو تجمعًا كبيرًا أو عرضًا ثقافيًا غامرًا—تتوافق مع أهدافك وتبهر جمهورك.",
      missionText2: "من الفكرة إلى التنفيذ المثالي، نفخر بالخدمة الاستثنائية والاهتمام الشخصي والإبداع التعاوني. هدفنا ليس فقط تلبية التوقعات، بل وضع معايير جديدة للتميز في الفعاليات—لضمان أن كل لحظة تكون ذات معنى ولا تُنسى وفريدة من نوعها.",
      visionTitle: "رؤيتنا",
      visionQuote: "\"أن نكون مهندسي اللحظات الأكثر تميزًا في المستقبل.\"",
      visionText1: "رؤيتنا هي إحداث ثورة في مجال إدارة الفعاليات من خلال وضع معايير جديدة للإبداع والتنفيذ السلس. نطمح لأن نكون أكثر من مجرد مقدم خدمة؛ نهدف لأن نكون شريكًا إبداعيًا لعملائنا، معترف بنا عالميًا لالتزامنا بالابتكار والتميز.",
      visionText2: "من خلال دفع حدود الإبداع باستمرار واعتماد أحدث التقنيات، سنقود الصناعة في تقديم فعاليات ناجحة وتحويلية. نؤمن أن مستقبل الفعاليات هو خلق بيئات غامرة تترك أثرًا عميقًا، ورؤيتنا أن نكون في طليعة هذا التطور.",
      storyHeading: "رحلتنا حتى الآن",
      storyPara: "بدأت كفكرة متواضعة—مدفوعة بشغف مشترك للإبداع والتنفيذ المثالي",
      timeline: [
        { year: "2010", title: "التأسيس", text: "تأسست بفكرة بسيطة: تقديم مستوى جديد من الإبداع والاحترافية في صناعة الفعاليات. بدأنا بفريق صغير ورؤية كبيرة." },
        { year: "2015", title: "أول نجاح كبير", text: "تم التخطيط والتنفيذ بنجاح لأول مؤتمر دولي كبير، واكتسبنا شهرة لنهجنا المبتكر وتخطيطنا الدقيق." },
        { year: "2020", title: "توسيع نطاقنا", text: "وسعنا خدماتنا لتشمل الفعاليات الافتراضية والهجينة، وتكيفنا مع المشهد العالمي المتغير ووضعنا معايير جديدة للتجارب الرقمية." },
        { year: "2023", title: "ريادة الاستدامة", text: "أطلقنا مبادرة الفعاليات المستدامة، ودمجنا ممارسات ومواد صديقة للبيئة لتقليل تأثيرنا البيئي ومساعدة العملاء على القيام بذلك." }
      ],
      whyAttendTitle: "لماذا الحضور؟",
      whyAttendPara: "انضم إلينا لتجربة فعالية لا مثيل لها تهدف إلى الإلهام والتواصل والتمكين. هذا الحدث منصة فريدة لاكتساب رؤى قيمة، والتواصل مع الزملاء، واكتشاف حلول مبتكرة.",
      benefits: [
        { icon: '💡', text: 'اكتسب رؤى قيمة من قادة وخبراء الصناعة.' },
        { icon: '🤝', text: 'تواصل مع الزملاء وابنِ علاقات مهنية هادفة.' },
        { icon: '🚀', text: 'اكتشف حلولًا مبتكرة لتمكين عملك.' },
        { icon: '📈', text: 'عزز مهاراتك من خلال ورش العمل والدورات العملية.' },
      ],
      benefitHeading: "الفائدة",
      teamHeading: "تعرف على مهندسي نجاحنا",
      teamPara: "يقدم فريقنا المتنوع من الخبراء الشغف والإبداع والتفاني في كل مشروع، لضمان تحقيق رؤيتك.",
      team: [
        { name: "جين دو", role: "استراتيجية الفعاليات الرئيسية", img: "/images/team1.jpg" },
        { name: "جون سميث", role: "مدير الإبداع", img: "/images/team2.jpg" },
        { name: "إميلي وايت", role: "منسقة اللوجستيات", img: "/images/team3.jpg" }
      ],
      contactTagline: "لنصنع شيئًا لا يُنسى.",
      contactPara: "جاهز لتحويل رؤيتك إلى تجربة رائعة؟ تواصل معنا ولنبدأ التخطيط للحدث الذي طالما حلمت به.",
      contactBtn: "اتصل بنا"
    },
    he: {
      heroTagline: "הופכים רעיונות לחוויות בלתי נשכחות.",
      heroParagraph: "אנו מאמינים שכל אירוע מתחיל בניצוץ—חלום, חזון, רעיון.",
      heroBtn: "גלה את השירותים שלנו",
      missionTitle: "המשימה שלנו",
      missionQuote: "\"אנחנו לא רק מתכננים אירועים; אנחנו יוצרים חוויות שמספרות סיפור.\"",
      missionText1: "בלב עבודתנו עיקרון מנחה אחד: להפוך רעיונות לחוויות בלתי נשכחות. המשימה שלנו היא להפוך את החזון שלך למציאות באמצעות תכנון מדוקדק, יצירתיות ומסירות. אנו מתמחים ביצירת אירועים בהתאמה אישית—בין אם זה חגיגה אינטימית, כנס עסקי דינמי או אירוע תרבותי מרתק—שמתאימים למטרות שלך ומרתקים את הקהל.",
      missionText2: "מהרעיון ועד הביצוע המושלם, אנו גאים בשירות יוצא דופן, תשומת לב אישית ויצירתיות שיתופית. המטרה שלנו היא לא רק לעמוד בציפיות, אלא להציב סטנדרטים חדשים למצוינות באירועים—ולוודא שכל רגע יהיה משמעותי, בלתי נשכח וייחודי.",
      visionTitle: "החזון שלנו",
      visionQuote: "\"להיות האדריכלים של הרגעים הבלתי נשכחים של המחר.\"",
      visionText1: "החזון שלנו הוא לחולל מהפכה בתחום ניהול האירועים על ידי הצבת סטנדרטים חדשים ליצירתיות ולביצוע מושלם. אנו שואפים להיות יותר מספק שירות; אנו רוצים להיות שותף יצירתי ללקוחותינו, מוכרים ברחבי העולם בזכות מחויבותנו לחדשנות ולמצוינות.",
      visionText2: "על ידי דחיפת גבולות היצירתיות ואימוץ טכנולוגיה מתקדמת, נוביל את הענף ביצירת אירועים מוצלחים וטרנספורמטיביים. אנו מאמינים שבעתיד האירועים ייצרו סביבות חווייתיות שמשפיעות עמוקות, והחזון שלנו הוא להיות בחזית ההתפתחות הזו.",
      storyHeading: "המסע שלנו עד כה",
      storyPara: "התחיל כרעיון צנוע—בהובלת תשוקה משותפת ליצירתיות ולביצוע מושלם",
      timeline: [
        { year: "2010", title: "הקמה", text: "הוקמנו עם רעיון פשוט: להביא רמה חדשה של יצירתיות ומקצועיות לתעשיית האירועים. התחלנו עם צוות קטן וחזון גדול." },
        { year: "2015", title: "הצלחה ראשונה", text: "תכננו וביצענו בהצלחה את הכנס הבינלאומי הראשון שלנו, וזכינו להכרה בגישה החדשנית ובתכנון הקפדני." },
        { year: "2020", title: "הרחבת הפעילות", text: "הרחבנו את השירותים לאירועים וירטואליים והיברידיים, הסתגלנו לשינויים הגלובליים והצבנו סטנדרטים חדשים לחוויות דיגיטליות." },
        { year: "2023", title: "חדשנות בתחום הקיימות", text: "השקנו יוזמת אירועים ירוקים, שילבנו חומרים ושיטות ידידותיות לסביבה כדי לצמצם את ההשפעה הסביבתית ולעזור ללקוחות לעשות זאת." }
      ],
      whyAttendTitle: "למה להגיע?",
      whyAttendPara: "הצטרפו אלינו לחוויית אירוע שאין לה תחרות, שנועדה להעניק השראה, לחבר ולהעצים. האירוע הוא פלטפורמה ייחודית לקבל תובנות, ליצור קשרים ולגלות פתרונות חדשניים.",
      benefits: [
        { icon: '💡', text: 'קבלו תובנות חשובות ממובילי התחום.' },
        { icon: '🤝', text: 'התחברו עם עמיתים ובנו קשרים מקצועיים משמעותיים.' },
        { icon: '🚀', text: 'גלו פתרונות חדשניים להעצמת העסק שלכם.' },
        { icon: '📈', text: 'שפרו את הכישורים שלכם בסדנאות מעשיות.' },
      ],
      benefitHeading: "יתרון",
      teamHeading: "הכירו את האדריכלים של ההצלחה שלנו",
      teamPara: "הצוות המגוון שלנו מביא תשוקה, יצירתיות ומסירות לכל פרויקט, כדי להבטיח שהחזון שלכם יהפוך למציאות.",
      team: [
        { name: "ג'יין דו", role: "אסטרטגית אירועים ראשית", img: "/images/team1.jpg" },
        { name: "ג'ון סמית", role: "מנהל קריאייטיב", img: "/images/team2.jpg" },
        { name: "אמילי וייט", role: "רכזת לוגיסטיקה", img: "/images/team3.jpg" }
      ],
      contactTagline: "בואו ניצור משהו בלתי נשכח.",
      contactPara: "מוכנים להפוך את החזון שלכם לחוויה יוצאת דופן? צרו קשר ונתחיל לתכנן את האירוע שתמיד חלמתם עליו.",
      contactBtn: "צור קשר"
    }
  };

  const benefits = translations[language].benefits;
  const team = translations[language].team;

  const storyRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamRef = useRef(null);

  const [storyVisible, setStoryVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const storyObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStoryVisible(true);
        storyObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const benefitsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBenefitsVisible(true);
        benefitsObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const teamObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTeamVisible(true);
        teamObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const currentStoryRef = storyRef.current;
    const currentBenefitsRef = benefitsRef.current;
    const currentTeamRef = teamRef.current;

    if (currentStoryRef) storyObserver.observe(currentStoryRef);
    if (currentBenefitsRef) benefitsObserver.observe(currentBenefitsRef);
    if (currentTeamRef) teamObserver.observe(currentTeamRef);

    return () => {
      if (currentStoryRef) storyObserver.unobserve(currentStoryRef);
      if (currentBenefitsRef) benefitsObserver.unobserve(currentBenefitsRef);
      if (currentTeamRef) teamObserver.unobserve(currentTeamRef);
    };
  }, []);

  return (
    <div
      className={darkMode ? "home-page dark-mode" : "home-page light-mode"}
      style={{
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left"
      }}
    >
      <div className="hero-container-about">
        <video
          ref={videoRef}
          className="hero-video-about"
          src="/images/hero-about.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-about">
          <h1 className="hero-tagline-about">{translations[language].heroTagline}</h1>
          <p className="hero-paragraph-about">
            {translations[language].heroParagraph}
          </p>
          <div className="hero-btns-about">
            <button className="btn">{translations[language].heroBtn}</button>
          </div>
        </div>
      </div>
      <section className="mission-section-new">
        <div className="mission-card">
          <div className="mission-quote-container">
            <h2 className="mission-title-new">{translations[language].missionTitle}</h2>
            <p className="mission-quote">{translations[language].missionQuote}</p>
          </div>
          <div className="mission-text-container">
            <p className="mission-text-new">
              {translations[language].missionText1}
            </p>
            <p className="mission-text-new">
              {translations[language].missionText2}
            </p>
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="vision-card">
          <div className="vision-quote-container">
            <h2 className="vision-title">{translations[language].visionTitle}</h2>
            <p className="vision-quote">{translations[language].visionQuote}</p>
          </div>
          <div className="vision-text-container">
            <p className="vision-text-new">
              {translations[language].visionText1}
            </p>
            <p className="vision-text-new">
              {translations[language].visionText2}
            </p>
          </div>
        </div>
      </section>
      <section
        ref={storyRef}
        className={`story-section ${storyVisible ? 'visible' : ''}`}
      >
        <div className="story-container">
          <h2 className="story-heading">{translations[language].storyHeading}</h2>
          <p style={{ marginBottom: "60px" }}>{translations[language].storyPara}</p>
          <div className="timeline-wrapper">
            {translations[language].timeline.map((item, idx) => (
              <div className="timeline-item-new" style={{ animationDelay: `${0.2 + idx * 0.2}s` }} key={item.year}>
                <div className="timeline-dot"></div>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content-new">
                  <h3 className="story-title-new">{item.title}</h3>
                  <p className="story-text-new">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        ref={benefitsRef}
        className={`event-description-section-new ${benefitsVisible ? 'visible' : ''}`}
      >
        <div className="container-new-style">
          <h2 className="section-title-new">{translations[language].whyAttendTitle}</h2>
          <p className="overview-new-style">
            {translations[language].whyAttendPara}
          </p>
          <div className="benefits-grid-new">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item-new-style"
                style={{ animationDelay: `${0.5 + index * 0.2}s` }}
              >
                <span className="benefit-icon-new-style">{benefit.icon}</span>
                <h3 className="benefit-heading-new-style">{translations[language].benefitHeading} {index + 1}</h3>
                <p className="benefit-text-new-style">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        ref={teamRef}
        className={`team-section ${teamVisible ? 'visible' : ''}`}
      >
        <div className="team-container">
          <h2 className="team-heading">{translations[language].teamHeading}</h2>
          <p className="team-description">
            {translations[language].teamPara}
          </p>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div className="team-member" style={{ animationDelay: `${0.2 + idx * 0.2}s` }} key={member.name}>
                <img src={member.img} alt={member.name} className="member-photo" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-section-minimal">
        <div className="contact-container-minimal">
          <h2 className="contact-tagline-minimal">{translations[language].contactTagline}</h2>
          <p className="contact-text-minimal">
            {translations[language].contactPara}
          </p>
          <button className="contact-button-minimal">{translations[language].contactBtn}</button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;