import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDarkMode } from '../context/Darkmodecontext';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const handleGetStarted = (path) => {
    navigate(path);
  };

  // Translations for all visible text
  const translations = {
    en: {
      heroTagline: "Crafting Unforgettable Moments",
      heroParagraph: "From corporate galas to dream weddings, we handle every detail with precision and creativity. Let us bring your vision to life.",
      heroBtn: "Discover Our Services",
      articlesHeading: "Featured Articles",
      articles: [
        {
          id: 1,
          title: "Top 5 Trends in Sustainable Event Planning",
          image: "images/article1.png",
          description: "Explore the latest trends in eco-friendly events and how they can benefit your brand and the planet.",
          path: "/blog1"
        },
        {
          id: 2,
          title: "How to Choose the Perfect Venue",
          image: "images/article2.png",
          description: "A comprehensive guide to selecting a venue that perfectly matches your event's theme, budget, and guest count.",
          path: "/blog2"
        },
        {
          id: 3,
          title: "Budgeting for Your Dream Wedding",
          image: "images/article3.png",
          description: "Learn how to effectively manage your wedding budget without compromising on your dream vision.",
          path: "/blog3"
        }
      ],
      featuredEvents: "Featured Events",
      viewDetails: "View Details",
      eventStats: {
        attendees: "Attendees",
        sessions: "Sessions",
        speakers: "Speakers",
        stages: "Stages",
        artists: "Artists",
        workshops: "Workshops"
      },
      eventTimeline: "Event Planning Timeline",
      eventTimelineSubtitle: "A step-by-step guide to successful event planning",
      timelineTasks: "Key Tasks:",
      previous: "Previous",
      next: "Next",
      stepIndicator: "Step",
      upcomingEvents: "Upcoming Events",
      upcomingEventsSubtitle: "Mark your calendar for these exciting upcoming events",
      knowMore: "Know More",
      preEventHeading: "The Pre-Event Buzz: Crafting an Unforgettable Attendee Journey",
      preEventPara1: "Before the main event, the pre-event phase is crucial for building excitement and managing logistics. It sets the tone and ensures a smooth experience for both you and your attendees. This section focuses on strategic planning, communication, and engagement. Start with a detailed timeline that includes key milestones like venue booking, vendor contracts, and marketing launch dates.",
      preEventPara2: "Next, focus on your communication strategy. Create a multi-channel marketing plan that leverages social media, email campaigns, and partnerships. Use a mix of countdowns, sneak peeks, and behind-the-scenes content to build anticipation. Don't forget the ticketing and registration process. Make it as seamless as possible, offering early bird specials and group discounts. Collect essential attendee data through a well-designed registration form to personalize the experience later. Finally, send out a detailed welcome packet a week before the event with all the necessary information, including the schedule, FAQs, and a map of the venue.",
      mainEventHeading: "The Main Event: Mastering the Art of Execution",
      mainEventPara1: "The main event is where all your hard work comes to life. This section is all about flawless execution and on-the-day management. Begin with a comprehensive run of show—a minute-by-minute schedule that outlines every activity, speaker, and technical cue. Assign clear roles and responsibilities to your team to ensure everyone knows what to do and when to do it.",
      mainEventPara2: "Focus on creating a memorable atmosphere. From the lighting and sound design to the layout and decor, every element should align with your event's theme and purpose. Pay close attention to attendee flow and navigation. Clear signage and helpful staff can prevent confusion and enhance the guest experience. Be prepared for the unexpected with a detailed contingency plan that addresses potential issues like technical glitches, bad weather, or last-minute cancellations. During the event, actively engage with your audience through live polls, Q&A sessions, and social media interactions to keep the energy high.",
      postEventHeading: "The Post-Event Debrief: Leveraging Success and Learning for the Future",
      postEventPara1: "The work doesn't end when the last guest leaves. The post-event phase is critical for measuring success, gathering feedback, and planning for your next event. The first step is to send out a thank-you email within 24 hours to all attendees, speakers, and sponsors. This is a great opportunity to share photos and videos from the event and ask for feedback.",
      postEventPara2: "Next, conduct a thorough event analysis. Use the data collected from your registration forms, ticket sales, and social media engagement to evaluate what worked and what didn't. Send out a feedback survey to gather qualitative insights on their experience.",
      postEventPara3: "Hold a debrief meeting with your team and key stakeholders to discuss successes, challenges, and areas for improvement. This is a chance to document your learnings and create a report that highlights key metrics and achievements. By meticulously analyzing your past events, you can refine your strategies and ensure each future event is even more successful.",
      ctaTagline: "Ready to Create Unforgettable Experiences?",
      ctaParagraph: "Let us transform your vision into a perfectly executed event. From intimate gatherings to large-scale conferences, our team handles every detail with precision and creativity.",
      ctaBtn: "Start Planning Your Event Today"
    },
    ar: {
      // Arabic translations
      heroTagline: "صنع لحظات لا تُنسى",
      heroParagraph: "من الحفلات الرسمية إلى حفلات الزفاف، نتعامل مع كل التفاصيل بدقة وإبداع. دعنا نحقق رؤيتك.",
      heroBtn: "اكتشف خدماتنا",
      articlesHeading: "مقالات مميزة",
      articles: [
        {
          id: 1,
          title: "أهم 5 اتجاهات في تخطيط الفعاليات المستدامة",
          image: "images/article1.png",
          description: "اكتشف أحدث الاتجاهات في الفعاليات الصديقة للبيئة وكيف يمكن أن تفيد علامتك التجارية والكوكب.",
          path: "/blog1"
        },
        {
          id: 2,
          title: "كيفية اختيار المكان المثالي",
          image: "images/article2.png",
          description: "دليل شامل لاختيار مكان يتناسب تمامًا مع موضوع الحدث وميزانيتك وعدد الضيوف.",
          path: "/blog2"
        },
        {
          id: 3,
          title: "ميزانية لحفل زفاف أحلامك",
          image: "images/article3.png",
          description: "تعلم كيفية إدارة ميزانية الزفاف بفعالية دون التضحية برؤيتك.",
          path: "/blog3"
        }
      ],
      featuredEvents: "فعاليات مميزة",
      viewDetails: "عرض التفاصيل",
      eventStats: {
        attendees: "الحضور",
        sessions: "الجلسات",
        speakers: "المتحدثون",
        stages: "المسارح",
        artists: "الفنانون",
        workshops: "ورش العمل"
      },
      eventTimeline: "جدول تخطيط الفعاليات",
      eventTimelineSubtitle: "دليل خطوة بخطوة لتخطيط فعاليات ناجحة",
      timelineTasks: "المهام الرئيسية:",
      previous: "السابق",
      next: "التالي",
      stepIndicator: "الخطوة",
      upcomingEvents: "الفعاليات القادمة",
      upcomingEventsSubtitle: "حدد موعدًا لهذه الفعاليات المثيرة القادمة",
      knowMore: "اعرف المزيد",
      preEventHeading: "مرحلة ما قبل الحدث: بناء تجربة لا تُنسى للحضور",
      preEventPara1: "قبل الحدث الرئيسي، تعتبر مرحلة ما قبل الحدث ضرورية لبناء الحماس وإدارة اللوجستيات. إنها تحدد النغمة وتضمن تجربة سلسة لك وللحضور.",
      preEventPara2: "ركز على استراتيجية التواصل الخاصة بك. أنشئ خطة تسويق متعددة القنوات تستفيد من وسائل التواصل الاجتماعي وحملات البريد الإلكتروني والشراكات.",
      mainEventHeading: "الحدث الرئيسي: إتقان فن التنفيذ",
      mainEventPara1: "الحدث الرئيسي هو حيث يتحقق كل عملك الشاق. هذه المرحلة تتعلق بالتنفيذ السلس والإدارة في يوم الحدث.",
      mainEventPara2: "ركز على خلق جو لا يُنسى. من التصميم الصوتي والإضاءة إلى التخطيط والديكور، يجب أن يتماشى كل عنصر مع موضوع الحدث.",
      postEventHeading: "ما بعد الحدث: الاستفادة من النجاح والتعلم للمستقبل",
      postEventPara1: "العمل لا ينتهي عندما يغادر آخر ضيف. مرحلة ما بعد الحدث مهمة لقياس النجاح وجمع الملاحظات والتخطيط للحدث التالي.",
      postEventPara2: "قم بتحليل شامل للحدث. استخدم البيانات التي تم جمعها من النماذج والمبيعات والتفاعل على وسائل التواصل الاجتماعي.",
      postEventPara3: "عقد اجتماع تقييم مع فريقك وأصحاب المصلحة لمناقشة النجاحات والتحديات ومجالات التحسين.",
      ctaTagline: "جاهز لصنع تجارب لا تُنسى؟",
      ctaParagraph: "دعنا نحول رؤيتك إلى حدث منفذ بشكل مثالي. من التجمعات الصغيرة إلى المؤتمرات الكبيرة، يتعامل فريقنا مع كل التفاصيل بدقة وإبداع.",
      ctaBtn: "ابدأ التخطيط لحدثك اليوم"
    },
    he: {
      // Hebrew translations
      heroTagline: "יוצרים רגעים בלתי נשכחים",
      heroParagraph: "מגאלות עסקיות ועד חתונות חלומיות, אנו מטפלים בכל פרט בדיוק ויצירתיות. תן לנו להגשים את החזון שלך.",
      heroBtn: "גלה את השירותים שלנו",
      articlesHeading: "מאמרים נבחרים",
      articles: [
        {
          id: 1,
          title: "5 מגמות מובילות בתכנון אירועים בר-קיימא",
          image: "images/article1.png",
          description: "גלה את המגמות החדשות באירועים ידידותיים לסביבה וכיצד הם יכולים להועיל למותג שלך ולכדור הארץ.",
          path: "/blog1"
        },
        {
          id: 2,
          title: "איך לבחור את המקום המושלם",
          image: "images/article2.png",
          description: "מדריך מקיף לבחירת מקום שמתאים בדיוק לנושא, תקציב ומספר האורחים של האירוע שלך.",
          path: "/blog2"
        },
        {
          id: 3,
          title: "תקצוב לחתונת החלומות שלך",
          image: "images/article3.png",
          description: "למד כיצד לנהל את תקציב החתונה שלך ביעילות מבלי להתפשר על החזון שלך.",
          path: "/blog3"
        }
      ],
      featuredEvents: "אירועים נבחרים",
      viewDetails: "צפה בפרטים",
      eventStats: {
        attendees: "משתתפים",
        sessions: "סשנים",
        speakers: "מרצים",
        stages: "במות",
        artists: "אמנים",
        workshops: "סדנאות"
      },
      eventTimeline: "ציר תכנון האירוע",
      eventTimelineSubtitle: "מדריך שלב-אחר-שלב לתכנון אירוע מוצלח",
      timelineTasks: "משימות עיקריות:",
      previous: "הקודם",
      next: "הבא",
      stepIndicator: "שלב",
      upcomingEvents: "אירועים קרובים",
      upcomingEventsSubtitle: "סמן ביומן את האירועים הקרובים והמלהיבים",
      knowMore: "למידע נוסף",
      preEventHeading: "ההתרגשות לפני האירוע: יצירת מסע בלתי נשכח למשתתפים",
      preEventPara1: "לפני האירוע המרכזי, שלב ההכנה חשוב לבניית התרגשות וניהול לוגיסטי.",
      preEventPara2: "התמקד באסטרטגיית התקשורת שלך. צור תוכנית שיווק רב-ערוצית שמנצלת רשתות חברתיות, מיילים ושיתופי פעולה.",
      mainEventHeading: "האירוע המרכזי: אומנות הביצוע המושלם",
      mainEventPara1: "האירוע המרכזי הוא המקום בו כל העבודה הקשה מתממשת. שלב זה עוסק בביצוע מושלם וניהול ביום האירוע.",
      mainEventPara2: "התמקד ביצירת אווירה בלתי נשכחת. מהתאורה והסאונד ועד העיצוב והסידור, כל פרט צריך להתאים לנושא האירוע.",
      postEventHeading: "סיכום לאחר האירוע: למנף הצלחה וללמוד לעתיד",
      postEventPara1: "העבודה לא מסתיימת כשהאורח האחרון עוזב. שלב הסיכום חשוב למדידת הצלחה, איסוף משוב ותכנון לאירוע הבא.",
      postEventPara2: "בצע ניתוח מעמיק של האירוע. השתמש בנתונים שנאספו מהטפסים, המכירות והמעורבות ברשתות החברתיות.",
      postEventPara3: "קיים פגישת סיכום עם הצוות ובעלי העניין כדי לדון בהצלחות, אתגרים ותחומים לשיפור.",
      ctaTagline: "מוכן ליצור חוויות בלתי נשכחות?",
      ctaParagraph: "תן לנו להפוך את החזון שלך לאירוע מושלם. מאירועים קטנים ועד כנסים גדולים, הצוות שלנו מטפל בכל פרט בדיוק ויצירתיות.",
      ctaBtn: "התחל לתכנן את האירוע שלך היום"
    }
  };

  // Event Spotlight Section
  const [activeEvent, setActiveEvent] = useState(0);
  const eventsData = {
    en: [
      {
        id: 1,
        title: "Tech Conference 2023",
        date: "October 15-17, 2023",
        location: "San Francisco, CA",
        description: "The largest gathering of tech innovators and thought leaders.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "2,500", sessions: "85", speakers: "120" },
        path:"/blog1",
      },
      {
        id: 2,
        title: "Music Festival Experience",
        date: "July 22-24, 2023",
        location: "Austin, TX",
        description: "Three days of incredible music, art, and community.",
        image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "15,000", stages: "5", artists: "80" },
        path:"/blog2",
      },
      {
        id: 3,
        title: "Corporate Leadership Summit",
        date: "November 5-6, 2023",
        location: "New York, NY",
        description: "Executive networking and leadership development conference.",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "800", workshops: "12", speakers: "25" },
        path:"/blog3"
      }
    ],
    ar: [
      {
        id: 1,
        title: "مؤتمر التقنية 2023",
        date: "15-17 أكتوبر 2023",
        location: "سان فرانسيسكو، كاليفورنيا",
        description: "أكبر تجمع للمبتكرين التقنيين وقادة الفكر.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "2,500", sessions: "85", speakers: "120" },
        path:"/blog1",
      },
      {
        id: 2,
        title: "تجربة مهرجان الموسيقى",
        date: "22-24 يوليو 2023",
        location: "أوستن، تكساس",
        description: "ثلاثة أيام من الموسيقى والفن والمجتمع الرائع.",
        image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "15,000", stages: "5", artists: "80" },
        path:"/blog2",
      },
      {
        id: 3,
        title: "قمة القيادة للشركات",
        date: "5-6 نوفمبر 2023",
        location: "نيويورك، نيويورك",
        description: "مؤتمر تطوير القيادة والتواصل التنفيذي.",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "800", workshops: "12", speakers: "25" },
        path:"/blog3"
      }
    ],
    he: [
      {
        id: 1,
        title: "כנס הטכנולוגיה 2023",
        date: "15-17 באוקטובר 2023",
        location: "סן פרנסיסקו, קליפורניה",
        description: "הכינוס הגדול ביותר של חדשני טכנולוגיה ומובילי דעה.",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "2,500", sessions: "85", speakers: "120" },
        path:"/blog1",
      },
      {
        id: 2,
        title: "פסטיבל המוזיקה",
        date: "22-24 ביולי 2023",
        location: "אוסטין, טקסס",
        description: "שלושה ימים של מוזיקה, אמנות וקהילה מדהימים.",
        image: "https://images.unsplash.com/photo-1472653525502-fc569e405a74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "15,000", stages: "5", artists: "80" },
        path:"/blog2",
      },
      {
        id: 3,
        title: "ועידת המנהיגות העסקית",
        date: "5-6 בנובמבר 2023",
        location: "ניו יורק, ניו יורק",
        description: "כנס לפיתוח מנהיגות ורישות עסקי.",
        image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        stats: { attendees: "800", workshops: "12", speakers: "25" },
        path:"/blog3"
      }
    ]
  };
  const [events, setEvents] = useState(eventsData[language]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  useEffect(() => {
    setEvents(eventsData[language]);
    setActiveEvent(0);
  }, [language]);

  const handleDotClick = (index) => {
    setActiveEvent(index);
  };

  // Event Planning Timeline Section
  const [activeStep, setActiveStep] = useState(0);
  const planningStepsData = {
    en: [
      {
        title: "Concept & Goal Setting",
        description: "Define the purpose, objectives, and target audience for your event. Establish clear goals and success metrics.",
        tasks: ["Define event purpose", "Identify target audience", "Set measurable goals", "Establish budget"],
        icon: "fas fa-lightbulb",
        time: "6-12 months before"
      },
      {
        title: "Planning & Organization",
        description: "Develop a detailed plan including venue selection, vendor coordination, and timeline creation.",
        tasks: ["Select venue", "Book vendors", "Create event schedule", "Develop marketing plan"],
        icon: "fas fa-clipboard-list",
        time: "3-6 months before"
      },
      {
        title: "Promotion & Marketing",
        description: "Execute your marketing strategy to build awareness and drive registrations for your event.",
        tasks: ["Launch website", "Social media campaign", "Email marketing", "Partnership outreach"],
        icon: "fas fa-bullhorn",
        time: "1-3 months before"
      },
      {
        title: "Final Preparation",
        description: "Complete all final details, confirmations, and brief your team for successful execution.",
        tasks: ["Confirm vendors", "Finalize schedule", "Brief staff/volunteers", "Prepare materials"],
        icon: "fas fa-check-double",
        time: "2-4 weeks before"
      },
      {
        title: "Event Execution",
        description: "The day of your event! Ensure everything runs smoothly and handle any last-minute issues.",
        tasks: ["Setup venue", "Manage registration", "Coordinate vendors", "Engage attendees"],
        icon: "fas fa-calendar-day",
        time: "Event day"
      },
      {
        title: "Post-Event Follow-up",
        description: "Gather feedback, analyze results, and maintain relationships with attendees after the event.",
        tasks: ["Send thank you notes", "Distribute surveys", "Analyze metrics", "Plan follow-up events"],
        icon: "fas fa-chart-line",
        time: "1-4 weeks after"
      }
    ],
    ar: [
      {
        title: "تحديد الهدف والمفهوم",
        description: "حدد هدف الحدث والجمهور المستهدف. ضع أهدافًا واضحة ومقاييس للنجاح.",
        tasks: ["تحديد هدف الحدث", "تحديد الجمهور المستهدف", "وضع أهداف قابلة للقياس", "تحديد الميزانية"],
        icon: "fas fa-lightbulb",
        time: "قبل 6-12 شهرًا"
      },
      {
        title: "التخطيط والتنظيم",
        description: "ضع خطة تفصيلية تشمل اختيار المكان والتنسيق مع الموردين وإنشاء الجدول الزمني.",
        tasks: ["اختيار المكان", "حجز الموردين", "إنشاء جدول الحدث", "وضع خطة تسويقية"],
        icon: "fas fa-clipboard-list",
        time: "قبل 3-6 أشهر"
      },
      {
        title: "الترويج والتسويق",
        description: "نفذ استراتيجية التسويق لزيادة الوعي وجذب المشاركين.",
        tasks: ["إطلاق الموقع الإلكتروني", "حملة على وسائل التواصل الاجتماعي", "تسويق عبر البريد الإلكتروني", "التواصل مع الشركاء"],
        icon: "fas fa-bullhorn",
        time: "قبل 1-3 أشهر"
      },
      {
        title: "التحضيرات النهائية",
        description: "أكمل جميع التفاصيل النهائية وراجع الفريق لضمان التنفيذ الناجح.",
        tasks: ["تأكيد الموردين", "الانتهاء من الجدول", "إحاطة الفريق والمتطوعين", "تحضير المواد"],
        icon: "fas fa-check-double",
        time: "قبل 2-4 أسابيع"
      },
      {
        title: "تنفيذ الحدث",
        description: "يوم الحدث! تأكد من سير الأمور بسلاسة والتعامل مع أي مشاكل طارئة.",
        tasks: ["تجهيز المكان", "إدارة التسجيل", "تنسيق الموردين", "التفاعل مع الحضور"],
        icon: "fas fa-calendar-day",
        time: "يوم الحدث"
      },
      {
        title: "المتابعة بعد الحدث",
        description: "اجمع الملاحظات وحلل النتائج وحافظ على العلاقات مع الحضور.",
        tasks: ["إرسال رسائل الشكر", "توزيع الاستبيانات", "تحليل النتائج", "تخطيط فعاليات مستقبلية"],
        icon: "fas fa-chart-line",
        time: "بعد 1-4 أسابيع"
      }
    ],
    he: [
      {
        title: "הגדרת קונספט ומטרות",
        description: "הגדר את מטרת האירוע והקהל היעד. קבע מטרות ברורות ומדדי הצלחה.",
        tasks: ["הגדרת מטרת האירוע", "זיהוי קהל יעד", "קביעת מטרות מדידות", "קביעת תקציב"],
        icon: "fas fa-lightbulb",
        time: "6-12 חודשים לפני"
      },
      {
        title: "תכנון וארגון",
        description: "בנה תוכנית מפורטת הכוללת בחירת מקום, תיאום ספקים ויצירת לוח זמנים.",
        tasks: ["בחירת מקום", "הזמנת ספקים", "יצירת לוח אירוע", "פיתוח תוכנית שיווק"],
        icon: "fas fa-clipboard-list",
        time: "3-6 חודשים לפני"
      },
      {
        title: "קידום ושיווק",
        description: "בצע את אסטרטגיית השיווק להעלאת מודעות ורישום משתתפים.",
        tasks: ["השקת אתר", "קמפיין ברשתות חברתיות", "שיווק במייל", "פנייה לשותפים"],
        icon: "fas fa-bullhorn",
        time: "1-3 חודשים לפני"
      },
      {
        title: "הכנות סופיות",
        description: "סיים את כל הפרטים הסופיים ותדרוך את הצוות להצלחה.",
        tasks: ["אישור ספקים", "סיום לוח זמנים", "תדרוך צוות/מתנדבים", "הכנת חומרים"],
        icon: "fas fa-check-double",
        time: "2-4 שבועות לפני"
      },
      {
        title: "ביצוע האירוע",
        description: "יום האירוע! ודא שהכול מתנהל כשורה וטפל בתקלות.",
        tasks: ["הקמת המקום", "ניהול הרשמה", "תיאום ספקים", "מעורבות משתתפים"],
        icon: "fas fa-calendar-day",
        time: "יום האירוע"
      },
      {
        title: "מעקב לאחר האירוע",
        description: "אסוף משוב, נתח תוצאות ושמור על קשר עם המשתתפים.",
        tasks: ["שליחת תודות", "הפצת סקרים", "ניתוח מדדים", "תכנון אירועים עתידיים"],
        icon: "fas fa-chart-line",
        time: "1-4 שבועות אחרי"
      }
    ]
  };
  const planningSteps = planningStepsData[language];

  // Upcoming Events Data
  const upcomingEventsData = {
    en: [
      {
        id: 1,
        title: "Winter Gala Fundraiser",
        date: "December 15, 2023",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Charity", ar: "خيري", he: "צדקה" }
      },
      {
        id: 2,
        title: "New Year Corporate Summit",
        date: "January 10-12, 2024",
        location: "Las Vegas, NV",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Corporate", ar: "شركات", he: "עסקי" }
      },
      {
        id: 3,
        title: "Spring Wedding Expo",
        date: "March 5-7, 2024",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Wedding", ar: "زفاف", he: "חתונה" }
      }
    ],
    ar: [
      {
        id: 1,
        title: "حفل الشتاء الخيري",
        date: "15 ديسمبر 2023",
        location: "شيكاغو، إلينوي",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Charity", ar: "خيري", he: "צדקה" }
      },
      {
        id: 2,
        title: "قمة الشركات للعام الجديد",
        date: "10-12 يناير 2024",
        location: "لاس فيغاس، نيفادا",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Corporate", ar: "شركات", he: "עסקי" }
      },
      {
        id: 3,
        title: "معرض الزفاف الربيعي",
        date: "5-7 مارس 2024",
        location: "ميامي، فلوريدا",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Wedding", ar: "زفاف", he: "חתונה" }
      }
    ],
    he: [
      {
        id: 1,
        title: "גאלה חורף צדקה",
        date: "15 בדצמבר 2023",
        location: "שיקגו, אילינוי",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Charity", ar: "خيري", he: "צדקה" }
      },
      {
        id: 2,
        title: "פסגת החברות לשנה החדשה",
        date: "10-12 בינואר 2024",
        location: "לאס וגאס, נבדה",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Corporate", ar: "شركات", he: "עסקי" }
      },
      {
        id: 3,
        title: "תערוכת החתונות האביבית",
        date: "5-7 במרץ 2024",
        location: "מיאמי, פלורידה",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        category: { en: "Wedding", ar: "זفاف", he: "חתונה" }
      }
    ]
  };
  const [upcomingEvents] = useState(upcomingEventsData[language]);

  useEffect(() => {
    setActiveEvent(0);
  }, [language]);

  return (
    <div className={darkMode ? "home-page dark-mode" : "home-page light-mode"}>
      <div className="hero-container-blog">
        <video
          className="hero-video-blog"
          src="/images/blog.mp4"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="hero-content-blog">
          <h1 className="hero-tagline-blog">{translations[language].heroTagline}</h1>
          <p className="hero-paragraph-blog">
            {translations[language].heroParagraph}
          </p>
          <div className="hero-btns-blog">
            <button className="btn btn-primary" onClick={() => handleGetStarted("/services")}>{translations[language].heroBtn}</button>
          </div>
        </div>
      </div>
      
      <section className="articles-section">
        <h2>{translations[language].articlesHeading}</h2>
        <div className="articles-grid">
          {translations[language].articles.map(article => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <button 
                  className="article-button" 
                  onClick={() => handleGetStarted(article.path)}
                >
                  {translations[language].viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Event Spotlight Section */}
      <section className="event-spotlight">
        <h2 className="section-title">{translations[language].featuredEvents}</h2>
        <div className="spotlight-container">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className={`event-card ${index === activeEvent ? 'active' : ''}`}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-overlay">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                </div>
              </div>
              <div className="event-content">
                <div className="event-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <p className="event-description">{event.description}</p>
                <div className="event-stats">
                  {Object.entries(event.stats).map(([key, value]) => (
                    <div key={key} className="stat">
                      <span className="stat-value">{value}</span>
                      <span className="stat-label">{translations[language].eventStats[key] || key}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="event-button"
                  onClick={() => handleGetStarted(event.path)}
                >
                  {translations[language].viewDetails}
                </button>
              </div>
            </div>
          ))}
          
          <div className="carousel-dots">
            {events.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeEvent ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Event Planning Timeline Section */}
      <section className="event-timeline">
        <h2 className="section-title">{translations[language].eventTimeline}</h2>
        <p className="section-subtitle">{translations[language].eventTimelineSubtitle}</p>
        
        <div className="timeline-container">
          <div className="timeline-progress">
            <div 
              className="timeline-progress-bar" 
              style={{ width: `${(activeStep / (planningSteps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="timeline-steps">
            {planningSteps.map((step, index) => (
              <div 
                key={index} 
                className={`timeline-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="step-marker">
                  <i className={step.icon}></i>
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <span className="step-time">{step.time}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="timeline-details">
            <div className="details-card">
              <div className="details-header">
                <h3>{planningSteps[activeStep].title}</h3>
                <span className="time-badge">{planningSteps[activeStep].time}</span>
              </div>
              <p>{planningSteps[activeStep].description}</p>
              <div className="tasks-container">
                <h4>{translations[language].timelineTasks}</h4>
                <ul>
                  {planningSteps[activeStep].tasks.map((task, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="navigation-buttons">
                <button 
                  className="nav-button prev"
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  disabled={activeStep === 0}
                >
                  <i className="fas fa-arrow-left"></i> {translations[language].previous}
                </button>
                <div className="step-indicator">
                  {translations[language].stepIndicator} {activeStep + 1} {translations[language].stepIndicator === "Step" ? "of" : ""} {planningSteps.length}
                </div>
                <button 
                  className="nav-button next"
                  onClick={() => setActiveStep(prev => Math.min(planningSteps.length - 1, prev + 1))}
                  disabled={activeStep === planningSteps.length - 1}
                >
                  {translations[language].next} <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events-section">
        <div className="container">
          <h2 className="section-title">{translations[language].upcomingEvents}</h2>
          <p className="section-subtitle">{translations[language].upcomingEventsSubtitle}</p>
          <div className="upcoming-events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="upcoming-event-card">
                <div className="event-image-container">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category-tag">{event.category[language]}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <p><i className="fas fa-calendar-alt"></i> {event.date}</p>
                    <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                  </div>
                  <button className="event-cta-button" onClick={()=>handleGetStarted("/contact")}>{translations[language].knowMore}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Existing blog sections */}
      <section className="blog-section pre-event">
        <h2>{translations[language].preEventHeading}</h2>
        <p>
          {translations[language].preEventPara1}
        </p>
        <p>
          {translations[language].preEventPara2}
        </p>
      </section>

      <hr />

      <section className="blog-section main-event">
        <h2>{translations[language].mainEventHeading}</h2>
        <p>
          {translations[language].mainEventPara1}
        </p>
        <p>
          {translations[language].mainEventPara2}
        </p>
      </section>

      <hr />

      <section className="blog-section post-event">
        <h2>{translations[language].postEventHeading}</h2>
        <p>
          {translations[language].postEventPara1}
        </p>
        <p>
          {translations[language].postEventPara2}
        </p>
        <p>
          {translations[language].postEventPara3}
        </p>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-tagline">{translations[language].ctaTagline}</h2>
            <p className="cta-paragraph">
              {translations[language].ctaParagraph}
            </p>
            <button className="cta-button" onClick={()=>handleGetStarted("/contact")}>{translations[language].ctaBtn}</button>
          </div>
          <div className="cta-visual">
            <div className="cta-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;