import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const rtlLanguages = ["ar", "he"];

const translations = {
  en: {
    title: "Finding Your Perfect Event Space",
    subtitle: "Creative approaches to venue selection that go beyond the basics",
    tabs: ["The Vibe Assessment", "Spatial Alchemy"],
    vibeTitle: "The Vibe Assessment: Reading a Space's Energy",
    vibeCards: [
      {
        icon: "🔊",
        title: "Acoustic Personality",
        text: "Every venue has its own sound signature. Visit at a similar time to your event and listen. Is there ambient noise? How do sounds carry? The acoustics can make or break your gathering."
      },
      {
        icon: "💡",
        title: "Lighting Language",
        text: "Notice how light interacts with the space throughout the day. Does natural light create interesting patterns? How does artificial lighting affect the mood? The right lighting tells your story without words."
      },
      {
        icon: "👣",
        title: "Flow Footprint",
        text: "Trace the natural pathways people will take. Where do doors and architecture naturally guide guests? The unconscious flow of movement through a space significantly impacts guest experience."
      }
    ],
    alchemyTitle: "Spatial Alchemy: Transforming Venues Through Design Thinking",
    alchemyCards: [
      {
        icon: "🔄",
        title: "Modular Mindset",
        text: "Look beyond the current layout. How can movable elements or temporary structures create the experience you want? The best venues are clay, not marble - ready to be shaped for your vision."
      },
      {
        icon: "🌐",
        title: "Context Weaving",
        text: "How does the venue connect to its surroundings? Can you incorporate local art, culture, or landscape? A space that dialogues with its environment creates a richer, more authentic experience."
      },
      {
        icon: "🎭",
        title: "Multi-Dimensional Experience",
        text: "Plan for different engagement zones within the same venue. Create areas for interaction, reflection, and observation. Like a good story, your event should have rhythm and variety in its spatial narrative."
      }
    ],
    spectrumTitle: "Venue Atmosphere Spectrum",
    spectrum: [
      { color: "#f0f0f0", label: "Minimalist" },
      { color: "#d0d0d0", label: "Industrial" },
      { color: "#ff6347", label: "Warm", opacity: 0.7 },
      { color: "#333", label: "Intimate" },
      { color: "#a0a0a0", label: "Adaptable" }
    ]
  },
  ar: {
    title: "إيجاد مساحة الحدث المثالية",
    subtitle: "طرق مبتكرة لاختيار المكان تتجاوز الأساسيات",
    tabs: ["تقييم الأجواء", "كيمياء المكان"],
    vibeTitle: "تقييم الأجواء: قراءة طاقة المكان",
    vibeCards: [
      {
        icon: "🔊",
        title: "الشخصية الصوتية",
        text: "لكل مكان توقيع صوتي خاص به. زر المكان في وقت مشابه لحدثك واستمع. هل هناك ضوضاء؟ كيف تنتقل الأصوات؟ الصوتيات يمكن أن تصنع أو تفسد الحدث."
      },
      {
        icon: "💡",
        title: "لغة الإضاءة",
        text: "لاحظ كيف يتفاعل الضوء مع المكان طوال اليوم. هل يخلق الضوء الطبيعي أنماطًا مثيرة؟ كيف تؤثر الإضاءة الصناعية على المزاج؟ الإضاءة المناسبة تروي قصتك دون كلمات."
      },
      {
        icon: "👣",
        title: "بصمة التدفق",
        text: "تتبع المسارات الطبيعية التي سيسلكها الناس. أين توجه الأبواب والهندسة المعمارية الضيوف؟ تدفق الحركة غير الواعي يؤثر بشكل كبير على تجربة الضيوف."
      }
    ],
    alchemyTitle: "كيمياء المكان: تحويل الأماكن عبر التفكير التصميمي",
    alchemyCards: [
      {
        icon: "🔄",
        title: "عقلية التشكيل",
        text: "انظر إلى ما وراء التخطيط الحالي. كيف يمكن للعناصر المتحركة أو الهياكل المؤقتة أن تخلق التجربة التي تريدها؟ أفضل الأماكن قابلة للتشكيل لرؤيتك."
      },
      {
        icon: "🌐",
        title: "نسج السياق",
        text: "كيف يرتبط المكان بمحيطه؟ هل يمكنك دمج الفن أو الثقافة أو المناظر المحلية؟ المكان الذي يتفاعل مع بيئته يخلق تجربة أكثر ثراءً وأصالة."
      },
      {
        icon: "🎭",
        title: "تجربة متعددة الأبعاد",
        text: "خطط لمناطق تفاعل مختلفة داخل نفس المكان. أنشئ مناطق للتفاعل والتأمل والملاحظة. مثل القصة الجيدة، يجب أن يكون للحدث إيقاع وتنوع في السرد المكاني."
      }
    ],
    spectrumTitle: "طيف أجواء المكان",
    spectrum: [
      { color: "#f0f0f0", label: "بسيط" },
      { color: "#d0d0d0", label: "صناعي" },
      { color: "#ff6347", label: "دافئ", opacity: 0.7 },
      { color: "#333", label: "حميمي" },
      { color: "#a0a0a0", label: "قابل للتكيف" }
    ]
  },
  he: {
    title: "מציאת חלל האירוע המושלם",
    subtitle: "גישות יצירתיות לבחירת מקום שמעבר לבסיס",
    tabs: ["הערכת האווירה", "אלכימיית המרחב"],
    vibeTitle: "הערכת האווירה: קריאת האנרגיה של המקום",
    vibeCards: [
      {
        icon: "🔊",
        title: "אישיות אקוסטית",
        text: "לכל מקום יש חתימת קול משלו. בקר בזמן דומה לאירוע שלך והקשב. האם יש רעש רקע? איך הקולות נעים? האקוסטיקה יכולה להרים או להפיל את האירוע."
      },
      {
        icon: "💡",
        title: "שפת התאורה",
        text: "שימו לב איך האור משתנה במרחב לאורך היום. האם האור הטבעי יוצר דפוסים מעניינים? איך התאורה המלאכותית משפיעה על האווירה? תאורה נכונה מספרת סיפור בלי מילים."
      },
      {
        icon: "👣",
        title: "טביעת זרימה",
        text: "עקוב אחרי המסלולים הטבעיים שאנשים ילכו בהם. לאן דלתות והאדריכלות מכוונות את האורחים? זרימת התנועה הלא מודעת משפיעה מאוד על חוויית האורח."
      }
    ],
    alchemyTitle: "אלכימיית המרחב: עיצוב מקומות דרך חשיבה יצירתית",
    alchemyCards: [
      {
        icon: "🔄",
        title: "חשיבה מודולרית",
        text: "הסתכל מעבר לפריסה הנוכחית. איך אלמנטים ניידים או מבנים זמניים יכולים ליצור את החוויה שאתה רוצה? המקומות הטובים ביותר הם חומר גלם לעיצוב החזון שלך."
      },
      {
        icon: "🌐",
        title: "שזירת הקשר",
        text: "איך המקום מתחבר לסביבה שלו? האם אפשר לשלב אמנות, תרבות או נוף מקומי? מקום שמדבר עם סביבתו יוצר חוויה עשירה ואותנטית."
      },
      {
        icon: "🎭",
        title: "חוויה רב-ממדית",
        text: "תכנן אזורי מעורבות שונים באותו מקום. צור אזורים לאינטראקציה, להרהור ולתצפית. כמו סיפור טוב, לאירוע צריך להיות קצב וגיוון בנרטיב המרחבי."
      }
    ],
    spectrumTitle: "ספקטרום אווירת המקום",
    spectrum: [
      { color: "#f0f0f0", label: "מינימליסטי" },
      { color: "#d0d0d0", label: "תעשייתי" },
      { color: "#ff6347", label: "חמים", opacity: 0.7 },
      { color: "#333", label: "אינטימי" },
      { color: "#a0a0a0", label: "גמיש" }
    ]
  }
};

const Blog2 = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);

  return (
    <div
      style={{
        ...styles.container,
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left"
      }}
    >
      <header style={styles.header}>
        <h1 style={styles.title}>{t.title}</h1>
        <p style={styles.subtitle}>{t.subtitle}</p>
      </header>
      
      <div style={styles.tabContainer}>
        <button 
          style={{...styles.tab, ...(activeTab === 0 ? styles.activeTab : {})}} 
          onClick={() => setActiveTab(0)}
        >
          {t.tabs[0]}
        </button>
        <button 
          style={{...styles.tab, ...(activeTab === 1 ? styles.activeTab : {})}} 
          onClick={() => setActiveTab(1)}
        >
          {t.tabs[1]}
        </button>
      </div>
      
      <div style={styles.content}>
        {activeTab === 0 ? (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.vibeTitle}</h2>
            <div style={styles.cardContainer}>
              {t.vibeCards.map((card, idx) => (
                <div style={styles.card} key={idx}>
                  <div style={styles.cardIcon}>{card.icon}</div>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                  <p style={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.alchemyTitle}</h2>
            <div style={styles.cardContainer}>
              {t.alchemyCards.map((card, idx) => (
                <div style={styles.card} key={idx}>
                  <div style={styles.cardIcon}>{card.icon}</div>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                  <p style={styles.cardText}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div style={styles.visualizer}>
        <h3 style={styles.visualizerTitle}>{t.spectrumTitle}</h3>
        <div style={styles.spectrum}>
          {t.spectrum.map((item, idx) => (
            <div style={styles.spectrumItem} key={idx}>
              <div style={{
                ...styles.spectrumBox,
                backgroundColor: item.color,
                opacity: item.opacity || 1
              }}></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    color: '#333',
    backgroundColor: 'white',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px',
    borderBottom: '2px solid #ff6347'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    fontWeight: '300'
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  tab: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: 'white',
    border: '2px solid #ff6347',
    color: '#ff6347',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 10px'
  },
  activeTab: {
    backgroundColor: '#ff6347',
    color: 'white'
  },
  content: {
    marginBottom: '40px'
  },
  section: {
    padding: '20px'
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #ccc'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px'
  },
  card: {
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    minWidth: '250px'
  },
  cardIcon: {
    fontSize: '2rem',
    marginBottom: '15px'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#ff6347',
    marginBottom: '15px'
  },
  cardText: {
    lineHeight: '1.6',
    color: '#555'
  },
  visualizer: {
    backgroundColor: '#f5f5f5',
    padding: '30px',
    borderRadius: '8px',
    marginTop: '20px'
  },
  visualizerTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  spectrum: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  },
  spectrumItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    minWidth: '100px'
  },
  spectrumBox: {
    width: '80%',
    height: '80px',
    marginBottom: '10px',
    borderRadius: '4px'
  }
};

export default Blog2;