import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const rtlLanguages = ["ar", "he"];

const translations = {
  en: {
    title: "Budgeting for Your Dream Wedding",
    subtitle: "Creative financial planning for your special day",
    nav: [
      "Financial Architecture",
      "Money Alchemy",
      "Budget Visualization"
    ],
    sectionTitles: [
      "Financial Architecture: Building Your Budget Framework",
      "Money Alchemy: Transforming Your Budget Constraints",
      "Budget Visualization: Seeing Your Financial Landscape"
    ],
    cards: [
      [
        {
          icon: "🏛️",
          title: "The Foundation Stones",
          text: "Your non-negotiables form the foundation of your wedding budget. Identify what matters most to you as a couple—whether it's photography, food, or venue—and allocate resources accordingly.",
          list: [
            "Prioritize your top 3 must-haves",
            "Assign percentage values to each category",
            "Build flexibility for unexpected expenses"
          ]
        },
        {
          icon: "📊",
          title: "The Pillars of Allocation",
          text: "Create structural pillars for your budget that support your vision. Traditional percentage allocations provide a starting point, but customize based on your priorities.",
          pillars: [
            { label: "Venue & Catering (65%)", height: '70%', color: '#ff6347' },
            { label: "Visuals & Memories (20%)", height: '50%', color: '#333' },
            { label: "Attire & Beauty (10%)", height: '30%', color: '#666' },
            { label: "Miscellaneous (5%)", height: '20%', color: '#999' }
          ]
        }
      ],
      [
        {
          icon: "⚗️",
          title: "The Philosopher's Stone",
          text: "Learn the art of transforming budgetary limitations into creative opportunities. Constraints often breed innovation in wedding planning.",
          tipTitle: "Creative Solutions:",
          tips: [
            "Off-peak season discounts (20-30% savings)",
            "Digital invitations vs. traditional printed",
            "Local seasonal flowers instead of imports",
            "DIY decor with personal significance"
          ]
        },
        {
          icon: "🔍",
          title: "The Magnifying Glass",
          text: "Identify hidden costs that often surprise couples and learn how to anticipate them in your budgeting process.",
          hiddenCosts: [
            { label: "Postage for invitations", value: "$100-300" },
            { label: "Marriage license", value: "$50-150" },
            { label: "Vendor meals", value: "$200-500" },
            { label: "Overtime fees", value: "$200-800" }
          ]
        }
      ],
      [
        {
          chartTitle: "Typical Wedding Budget Allocation",
          budgetData: [
            { category: 'Venue', percentage: 40, color: '#ff6347' },
            { category: 'Catering', percentage: 25, color: '#333' },
            { category: 'Photography', percentage: 10, color: '#666' },
            { category: 'Attire', percentage: 8, color: '#999' },
            { category: 'Entertainment', percentage: 7, color: '#ccc' },
            { category: 'Decor', percentage: 5, color: '#ff6347' },
            { category: 'Miscellaneous', percentage: 5, color: '#eee' }
          ],
          tipsTitle: "Smart Saving Strategies",
          tips: [
            { header: "The 10% Buffer Rule", text: "Always keep 10% of your total budget unallocated for unexpected expenses." },
            { header: "The Three-Quotes Rule", text: "Get at least three quotes for each major vendor to ensure competitive pricing." },
            { header: "The Priority-Based Cutting", text: "If you need to reduce costs, start with categories lowest on your priority list." }
          ]
        }
      ]
    ]
  },
  ar: {
    title: "ميزانية لحفل زفاف أحلامك",
    subtitle: "تخطيط مالي إبداعي ليومك المميز",
    nav: [
      "الهيكل المالي",
      "كيمياء المال",
      "تصور الميزانية"
    ],
    sectionTitles: [
      "الهيكل المالي: بناء إطار الميزانية",
      "كيمياء المال: تحويل قيود الميزانية",
      "تصور الميزانية: رؤية المشهد المالي"
    ],
    cards: [
      [
        {
          icon: "🏛️",
          title: "أسس الميزانية",
          text: "تشكل العناصر الأساسية أساس ميزانية الزفاف. حدد ما يهمك أكثر كزوجين—سواء التصوير أو الطعام أو المكان—وقم بتخصيص الموارد وفقًا لذلك.",
          list: [
            "حدد أهم 3 أولويات لديك",
            "خصص نسب مئوية لكل فئة",
            "ضع مرونة للمصاريف غير المتوقعة"
          ]
        },
        {
          icon: "📊",
          title: "ركائز التخصيص",
          text: "أنشئ ركائز هيكلية لميزانيتك تدعم رؤيتك. النسب التقليدية نقطة بداية، لكن خصصها حسب أولوياتك.",
          pillars: [
            { label: "المكان والطعام (65%)", height: '70%', color: '#ff6347' },
            { label: "الذكريات البصرية (20%)", height: '50%', color: '#333' },
            { label: "الملابس والجمال (10%)", height: '30%', color: '#666' },
            { label: "متفرقات (5%)", height: '20%', color: '#999' }
          ]
        }
      ],
      [
        {
          icon: "⚗️",
          title: "حجر الفلاسفة",
          text: "تعلم فن تحويل قيود الميزانية إلى فرص إبداعية. غالبًا ما تولد القيود الابتكار في تخطيط الزفاف.",
          tipTitle: "حلول إبداعية:",
          tips: [
            "خصومات خارج الموسم (توفير 20-30%)",
            "دعوات رقمية بدل المطبوعة التقليدية",
            "زهور موسمية محلية بدل المستوردة",
            "ديكور DIY ذو معنى شخصي"
          ]
        },
        {
          icon: "🔍",
          title: "العدسة المكبرة",
          text: "حدد التكاليف المخفية التي تفاجئ الأزواج غالبًا وتعلم كيف تتوقعها في عملية الميزانية.",
          hiddenCosts: [
            { label: "تكلفة إرسال الدعوات", value: "$100-300" },
            { label: "رخصة الزواج", value: "$50-150" },
            { label: "وجبات الموردين", value: "$200-500" },
            { label: "رسوم العمل الإضافي", value: "$200-800" }
          ]
        }
      ],
      [
        {
          chartTitle: "توزيع ميزانية الزفاف النموذجية",
          budgetData: [
            { category: 'المكان', percentage: 40, color: '#ff6347' },
            { category: 'الطعام', percentage: 25, color: '#333' },
            { category: 'التصوير', percentage: 10, color: '#666' },
            { category: 'الملابس', percentage: 8, color: '#999' },
            { category: 'الترفيه', percentage: 7, color: '#ccc' },
            { category: 'الديكور', percentage: 5, color: '#ff6347' },
            { category: 'متفرقات', percentage: 5, color: '#eee' }
          ],
          tipsTitle: "استراتيجيات التوفير الذكي",
          tips: [
            { header: "قاعدة 10% للطوارئ", text: "احتفظ دائمًا بـ 10% من الميزانية للمصاريف غير المتوقعة." },
            { header: "قاعدة الثلاث عروض", text: "احصل على ثلاث عروض أسعار لكل مورد رئيسي لضمان أفضل سعر." },
            { header: "التخفيض حسب الأولوية", text: "إذا احتجت لتقليل التكاليف، ابدأ بالفئات الأقل أهمية." }
          ]
        }
      ]
    ]
  },
  he: {
    title: "תקצוב לחתונת החלומות שלך",
    subtitle: "תכנון פיננסי יצירתי ליום המיוחד שלך",
    nav: [
      "ארכיטקטורה פיננסית",
      "אלכימיית הכסף",
      "ויזואליזציית התקציב"
    ],
    sectionTitles: [
      "ארכיטקטורה פיננסית: בניית מסגרת התקציב",
      "אלכימיית הכסף: להפוך מגבלות להזדמנויות",
      "ויזואליזציית התקציב: לראות את הנוף הפיננסי"
    ],
    cards: [
      [
        {
          icon: "🏛️",
          title: "אבני היסוד",
          text: "הדברים שלא מתפשרים עליהם הם הבסיס לתקציב החתונה. הגדירו מה הכי חשוב לכם—צילום, אוכל או מקום—והקצו משאבים בהתאם.",
          list: [
            "הגדירו את שלושת העדיפויות העליונות",
            "הקצו אחוזים לכל קטגוריה",
            "השאירו גמישות להוצאות בלתי צפויות"
          ]
        },
        {
          icon: "📊",
          title: "עמודי ההקצאה",
          text: "צרו עמודי תקציב שתומכים בחזון שלכם. חלוקות אחוזים מסורתיות הן התחלה, אבל התאימו לפי סדרי עדיפויות.",
          pillars: [
            { label: "מקום ואוכל (65%)", height: '70%', color: '#ff6347' },
            { label: "ויזואליות וזיכרונות (20%)", height: '50%', color: '#333' },
            { label: "לבוש וטיפוח (10%)", height: '30%', color: '#666' },
            { label: "שונות (5%)", height: '20%', color: '#999' }
          ]
        }
      ],
      [
        {
          icon: "⚗️",
          title: "אבן החכמים",
          text: "למדו להפוך מגבלות תקציב להזדמנויות יצירתיות. מגבלות מעודדות חדשנות בתכנון חתונה.",
          tipTitle: "פתרונות יצירתיים:",
          tips: [
            "הנחות מחוץ לעונה (חיסכון של 20-30%)",
            "הזמנות דיגיטליות במקום מודפסות",
            "פרחים עונתיים מקומיים במקום יבוא",
            "עיצוב DIY עם משמעות אישית"
          ]
        },
        {
          icon: "🔍",
          title: "זכוכית המגדלת",
          text: "זהו עלויות נסתרות שמפתיעות זוגות ולמדו איך לצפות להן בתקציב.",
          hiddenCosts: [
            { label: "דמי משלוח להזמנות", value: "$100-300" },
            { label: "רישיון נישואין", value: "$50-150" },
            { label: "ארוחות לספקים", value: "$200-500" },
            { label: "דמי שעות נוספות", value: "$200-800" }
          ]
        }
      ],
      [
        {
          chartTitle: "חלוקת תקציב חתונה טיפוסית",
          budgetData: [
            { category: 'מקום', percentage: 40, color: '#ff6347' },
            { category: 'אוכל', percentage: 25, color: '#333' },
            { category: 'צילום', percentage: 10, color: '#666' },
            { category: 'לבוש', percentage: 8, color: '#999' },
            { category: 'בידור', percentage: 7, color: '#ccc' },
            { category: 'עיצוב', percentage: 5, color: '#ff6347' },
            { category: 'שונות', percentage: 5, color: '#eee' }
          ],
          tipsTitle: "אסטרטגיות חיסכון חכמות",
          tips: [
            { header: "כלל 10% רזרבה", text: "השאירו תמיד 10% מהתקציב להוצאות בלתי צפויות." },
            { header: "כלל שלוש הצעות מחיר", text: "קבלו לפחות שלוש הצעות מחיר לכל ספק מרכזי." },
            { header: "קיצוץ לפי סדרי עדיפויות", text: "אם צריך להוזיל, התחילו מהקטגוריות הפחות חשובות." }
          ]
        }
      ]
    ]
  }
};

const Blog3 = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);

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
      
      <nav style={styles.nav}>
        {t.nav.map((navItem, idx) => (
          <button
            key={navItem}
            style={{...styles.navButton, ...(activeSection === idx ? styles.activeNavButton : {})}}
            onClick={() => setActiveSection(idx)}
          >
            {navItem}
          </button>
        ))}
      </nav>
      
      <div style={styles.content}>
        {activeSection === 0 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.sectionTitles[0]}</h2>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.cardIcon}>{t.cards[0][0].icon}</div>
                <h3 style={styles.cardTitle}>{t.cards[0][0].title}</h3>
                <p style={styles.cardText}>{t.cards[0][0].text}</p>
                <ul style={styles.list}>
                  {t.cards[0][0].list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>{t.cards[0][1].icon}</div>
                <h3 style={styles.cardTitle}>{t.cards[0][1].title}</h3>
                <p style={styles.cardText}>{t.cards[0][1].text}</p>
                <div style={styles.pillarContainer}>
                  {t.cards[0][1].pillars.map((pillar, idx) => (
                    <div style={styles.pillar} key={pillar.label}>
                      <div style={{...styles.pillarFill, height: pillar.height, backgroundColor: pillar.color}}></div>
                      <span>{pillar.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeSection === 1 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.sectionTitles[1]}</h2>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <div style={styles.cardIcon}>{t.cards[1][0].icon}</div>
                <h3 style={styles.cardTitle}>{t.cards[1][0].title}</h3>
                <p style={styles.cardText}>{t.cards[1][0].text}</p>
                <div style={styles.tipBox}>
                  <h4 style={styles.tipTitle}>{t.cards[1][0].tipTitle}</h4>
                  <ul style={styles.list}>
                    {t.cards[1][0].tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div style={styles.card}>
                <div style={styles.cardIcon}>{t.cards[1][1].icon}</div>
                <h3 style={styles.cardTitle}>{t.cards[1][1].title}</h3>
                <p style={styles.cardText}>{t.cards[1][1].text}</p>
                <div style={styles.hiddenCosts}>
                  {t.cards[1][1].hiddenCosts.map((cost, idx) => (
                    <div style={styles.costItem} key={cost.label}>
                      <span>{cost.label}</span>
                      <span>{cost.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {activeSection === 2 && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.sectionTitles[2]}</h2>
            <div style={styles.visualization}>
              <div style={styles.chartContainer}>
                <h3 style={styles.chartTitle}>{t.cards[2][0].chartTitle}</h3>
                <div style={styles.chart}>
                  {t.cards[2][0].budgetData.map((item, index) => (
                    <div key={index} style={styles.chartItem}>
                      <div style={styles.chartLabel}>
                        <div style={{...styles.colorBox, backgroundColor: item.color}}></div>
                        <span>{item.category}</span>
                      </div>
                      <div style={styles.chartBarContainer}>
                        <div 
                          style={{
                            ...styles.chartBar,
                            width: `${item.percentage}%`,
                            backgroundColor: item.color
                          }}
                        >
                          <span style={styles.percentageText}>{item.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={styles.savingsTips}>
                <h3 style={styles.tipsTitle}>{t.cards[2][0].tipsTitle}</h3>
                {t.cards[2][0].tips.map((tip, idx) => (
                  <div style={styles.tip} key={tip.header}>
                    <h4 style={styles.tipHeader}>{tip.header}</h4>
                    <p>{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '1200px',
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
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap'
  },
  navButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: 'white',
    border: '2px solid #ff6347',
    color: '#ff6347',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 10px 10px 10px'
  },
  activeNavButton: {
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
    gap: '30px'
  },
  card: {
    flex: '1 1 400px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minWidth: '300px'
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#ff6347',
    marginBottom: '15px'
  },
  cardText: {
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px'
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.8'
  },
  pillarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '200px',
    marginTop: '20px'
  },
  pillar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '1',
    margin: '0 5px'
  },
  pillarFill: {
    width: '100%',
    borderRadius: '4px 4px 0 0',
    transition: 'height 0.5s ease'
  },
  tipBox: {
    backgroundColor: '#fff4f2',
    padding: '15px',
    borderRadius: '6px',
    borderLeft: '4px solid #ff6347'
  },
  tipTitle: {
    color: '#ff6347',
    marginBottom: '10px'
  },
  hiddenCosts: {
    marginTop: '20px'
  },
  costItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px dashed #ddd'
  },
  visualization: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px'
  },
  chartContainer: {
    flex: '2 1 600px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minWidth: '300px'
  },
  chartTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  chart: {
    marginTop: '20px'
  },
  chartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px'
  },
  chartLabel: {
    display: 'flex',
    alignItems: 'center',
    width: '150px',
    fontWeight: '500'
  },
  colorBox: {
    width: '15px',
    height: '15px',
    marginRight: '10px'
  },
  chartBarContainer: {
    flex: '1',
    backgroundColor: '#eee',
    height: '25px',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  chartBar: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '10px',
    transition: 'width 1s ease'
  },
  percentageText: {
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    textShadow: '1px 1px 1px rgba(0,0,0,0.3)'
  },
  savingsTips: {
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    minWidth: '250px'
  },
  tipsTitle: {
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  },
  tip: {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #ddd'
  },
  tipHeader: {
    color: '#ff6347',
    marginBottom: '8px'
  }
};

export default Blog3;