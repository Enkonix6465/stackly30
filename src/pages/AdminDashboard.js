import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

const translations = {
  en: {
    dashboardTitle: "Admin Dashboard",
    dashboardDesc: "Monitor user activity and website statistics",
    logout: "Logout",
    adminInfo: "Admin Information",
    username: "Username",
    email: "Email",
    loginTime: "Login Time",
    timeSpent: "Time Spent",
    totalUsers: "Total Users",
    loading: "Loading user data...",
    dailyLoginStats: "Daily Login Statistics",
    totalLogins: "Total Logins",
    activeUsers: "Active Users",
    userStatus: "User Status",
    websiteMetrics: "Website Metrics",
    totalPageViews: "Total Page Views",
    activeUsers24h: "Active Users (24h)",
    registeredUsers: "Registered Users",
    userLoginHistory: "User Login History",
    loginHistoryUsername: "Username",
    loginHistoryEmail: "Email",
    loginHistoryTime: "Login Time",
    noLoginData: "No login data available",
    recentActivity: "Recent Activity",
    userLoggedIn: 'User "{username}" logged in',
    noRecentActivity: "No recent activity",
    active: "Active",
    inactive: "Inactive"
  },
  ar: {
    dashboardTitle: "لوحة تحكم المسؤول",
    dashboardDesc: "راقب نشاط المستخدم وإحصائيات الموقع",
    logout: "تسجيل الخروج",
    adminInfo: "معلومات المسؤول",
    username: "اسم المستخدم",
    email: "البريد الإلكتروني",
    loginTime: "وقت تسجيل الدخول",
    timeSpent: "الوقت المستغرق",
    totalUsers: "إجمالي المستخدمين",
    loading: "جاري تحميل بيانات المستخدم...",
    dailyLoginStats: "إحصائيات تسجيل الدخول اليومية",
    totalLogins: "إجمالي عمليات الدخول",
    activeUsers: "المستخدمون النشطون",
    userStatus: "حالة المستخدم",
    websiteMetrics: "إحصائيات الموقع",
    totalPageViews: "إجمالي مشاهدات الصفحة",
    activeUsers24h: "المستخدمون النشطون (24 ساعة)",
    registeredUsers: "المستخدمون المسجلون",
    userLoginHistory: "سجل دخول المستخدمين",
    loginHistoryUsername: "اسم المستخدم",
    loginHistoryEmail: "البريد الإلكتروني",
    loginHistoryTime: "وقت الدخول",
    noLoginData: "لا توجد بيانات دخول",
    recentActivity: "النشاط الأخير",
    userLoggedIn: 'المستخدم "{username}" قام بتسجيل الدخول',
    noRecentActivity: "لا يوجد نشاط حديث",
    active: "نشط",
    inactive: "غير نشط"
  },
  he: {
    dashboardTitle: "לוח מנהל מערכת",
    dashboardDesc: "ניטור פעילות משתמשים וסטטיסטיקות האתר",
    logout: "התנתקות",
    adminInfo: "מידע מנהל",
    username: "שם משתמש",
    email: "אימייל",
    loginTime: "זמן כניסה",
    timeSpent: "זמן באתר",
    totalUsers: "סה\"כ משתמשים",
    loading: "טוען נתוני משתמש...",
    dailyLoginStats: "סטטיסטיקת כניסות יומית",
    totalLogins: "סה\"כ כניסות",
    activeUsers: "משתמשים פעילים",
    userStatus: "סטטוס משתמש",
    websiteMetrics: "מדדי אתר",
    totalPageViews: "סה\"כ צפיות בדף",
    activeUsers24h: "משתמשים פעילים (24ש)",
    registeredUsers: "משתמשים רשומים",
    userLoginHistory: "היסטוריית כניסות משתמש",
    loginHistoryUsername: "שם משתמש",
    loginHistoryEmail: "אימייל",
    loginHistoryTime: "זמן כניסה",
    noLoginData: "אין נתוני כניסה",
    recentActivity: "פעילות אחרונה",
    userLoggedIn: 'המשתמש "{username}" נכנס',
    noRecentActivity: "אין פעילות אחרונה",
    active: "פעיל",
    inactive: "לא פעיל"
  }
};

const rtlLanguages = ["ar", "he"];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);

  const [userData, setUserData] = useState(null);
  const [loginStats, setLoginStats] = useState([]);
  const [activeUsers, setActiveUsers] = useState(0);
  const [pageViews, setPageViews] = useState(0);
  const [userLoginData, setUserLoginData] = useState([]);

  // Check if user is admin
  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    if (!loggedInUserEmail || loggedInUserEmail !== 'admin@enkonix.in') {
      navigate('/');
      return;
    }
    
    // Fetch user data from localStorage
    fetchUserData();
    fetchLoginStatistics();
    fetchUserLoginData();
  }, [navigate]);

  // Fetch user data from local database (localStorage)
  const fetchUserData = () => {
    const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find(user => user.email === loggedInUserEmail) || {
      username: 'admin_user',
      email: 'admin@enkonix.in',
      loginTime: new Date().toISOString(),
      lastActivity: new Date().toISOString()
    };
    
    setUserData(currentUser);
  };

  // Fetch login statistics from local database
  const fetchLoginStatistics = () => {
    // Get user logins from localStorage
    const userLogins = JSON.parse(localStorage.getItem('userLogins')) || {};
    
    // Calculate login statistics by day
    const loginCountByDay = {};
    Object.entries(userLogins).forEach(([email, loginTime]) => {
      const date = new Date(loginTime);
      const day = date.toLocaleDateString('en-US', { weekday: 'short' });
      
      if (!loginCountByDay[day]) {
        loginCountByDay[day] = { logins: 0, active: 0 };
      }
      
      loginCountByDay[day].logins += 1;
    });
    
    // Convert to array format for the chart
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const stats = days.map(day => ({
      day,
      logins: loginCountByDay[day]?.logins || 0,
      active: loginCountByDay[day]?.active || 0
    }));
    
    setLoginStats(stats);
    
    // Calculate active users (logged in within last 24 hours)
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
    
    const activeCount = Object.values(userLogins).filter(loginTime => {
      return new Date(loginTime) > twentyFourHoursAgo;
    }).length;
    
    setActiveUsers(activeCount);
  };

  // Fetch user login data for the table
  const fetchUserLoginData = () => {
    const userLogins = JSON.parse(localStorage.getItem('userLogins')) || {};
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Create an array of login data with username, email, and login time
    const loginData = Object.entries(userLogins).map(([email, loginTime]) => {
      const user = users.find(u => u.email === email) || { 
        firstName: email.split('@')[0], 
        lastName: '',
        email 
      };
      
      return {
        id: email + loginTime,
        username: `${user.firstName} ${user.lastName}`.trim() || email.split('@')[0],
        email,
        loginTime
      };
    });
    
    // Sort by login time (newest first)
    loginData.sort((a, b) => new Date(b.loginTime) - new Date(a.loginTime));
    
    setUserLoginData(loginData);
    
    // Set page views (approximate based on login count)
    setPageViews(loginData.length * 10);
  };

  // Calculate time spent on website
  const calculateTimeSpent = () => {
    if (!userData || !userData.loginTime) return '0m';
    
    const loginTime = new Date(userData.loginTime);
    const now = new Date();
    const diffMs = now - loginTime;
    const diffMins = Math.round(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins}m`;
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    return `${hours}h ${mins}m`;
  };

  // Data for the pie chart
  const userStatusData = [
    { name: t.active, value: activeUsers },
    { name: t.inactive, value: userLoginData.length - activeUsers },
  ];

  const COLORS = ['#ff6347', '#8884d8'];

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('loggedInUserEmail');
    navigate('/');
  };

  return (
    <div
      className="admin-dashboard"
      style={{
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left"
      }}
    >
      {/* Language Dropdown */}
      <div style={{ marginBottom: 24, textAlign: isRTL ? "right" : "left" }}>
        <select
          value={language}
          onChange={e => setLanguage(e.target.value)}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            background: "#fff",
            color: "#333",
            marginBottom: "10px",
            float: isRTL ? "right" : "left"
          }}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="he">עברית</option>
        </select>
      </div>

      <header className="dashboard-header">
        <h1>{t.dashboardTitle}</h1>
        <p>{t.dashboardDesc}</p>
        <button onClick={handleLogout} className="logout-btn">{t.logout}</button>
      </header>

      <div className="dashboard-grid">
        {/* Section 1: User Information */}
        <div className="dashboard-card user-info-card">
          <div className="card-header">
            <h2>{t.adminInfo}</h2>
            <span className="card-icon">👤</span>
          </div>
          <div className="card-content">
            {userData ? (
              <>
                <div className="info-item">
                  <span className="info-label">{t.username}:</span>
                  <span className="info-value">{userData.email.split('@')[0]}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.email}:</span>
                  <span className="info-value">{userData.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.loginTime}:</span>
                  <span className="info-value">
                    {new Date(userData.loginTime).toLocaleTimeString()}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.timeSpent}:</span>
                  <span className="info-value highlight">{calculateTimeSpent()}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">{t.totalUsers}:</span>
                  <span className="info-value">
                    {JSON.parse(localStorage.getItem('users') || '[]').length}
                  </span>
                </div>
              </>
            ) : (
              <p>{t.loading}</p>
            )}
          </div>
        </div>

        {/* Section 2: Login Statistics Chart */}
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <h2>{t.dailyLoginStats}</h2>
            <span className="card-icon">📊</span>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={loginStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="logins" fill="#ff6347" name={t.totalLogins} />
                <Bar dataKey="active" fill="#333" name={t.activeUsers} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Section 3: User Status Pie Chart */}
        <div className="dashboard-card pie-card">
          <div className="card-header">
            <h2>{t.userStatus}</h2>
            <span className="card-icon">👥</span>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Section 4: Page Views and Active Users */}
        <div className="dashboard-card metrics-card">
          <div className="card-header">
            <h2>{t.websiteMetrics}</h2>
            <span className="card-icon">🌐</span>
          </div>
          <div className="card-content">
            <div className="metric">
              <div className="metric-value">{pageViews}</div>
              <div className="metric-label">{t.totalPageViews}</div>
            </div>
            <div className="metric">
              <div className="metric-value">{activeUsers}</div>
              <div className="metric-label">{t.activeUsers24h}</div>
            </div>
            <div className="metric">
              <div className="metric-value">{userLoginData.length}</div>
              <div className="metric-label">{t.totalLogins}</div>
            </div>
            <div className="metric">
              <div className="metric-value">{JSON.parse(localStorage.getItem('users') || '[]').length}</div>
              <div className="metric-label">{t.registeredUsers}</div>
            </div>
          </div>
        </div>

        {/* Section 5: User Login History Table */}
        <div className="dashboard-card table-card">
          <div className="card-header">
            <h2>{t.userLoginHistory}</h2>
            <span className="card-icon">📋</span>
          </div>
          <div className="card-content">
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>{t.loginHistoryUsername}</th>
                    <th>{t.loginHistoryEmail}</th>
                    <th>{t.loginHistoryTime}</th>
                  </tr>
                </thead>
                <tbody>
                  {userLoginData.length > 0 ? (
                    userLoginData.map(user => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{new Date(user.loginTime).toLocaleString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" style={{textAlign: 'center'}}>{t.noLoginData}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 6: Recent Activity */}
        <div className="dashboard-card activity-card">
          <div className="card-header">
            <h2>{t.recentActivity}</h2>
            <span className="card-icon">📝</span>
          </div>
          <div className="card-content">
            <ul className="activity-list">
              {userLoginData.slice(0, 5).map((user, index) => (
                <li key={index} className="activity-item">
                  <span className="activity-time">
                    {new Date(user.loginTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                  <span className="activity-text">
                    {t.userLoggedIn.replace("{username}", user.username)}
                  </span>
                </li>
              ))}
              {userLoginData.length === 0 && (
                <li className="activity-item">
                  <span className="activity-text">{t.noRecentActivity}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-dashboard {
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f5f5f5;
          min-height: 100vh;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
          position: relative;
        }

        .dashboard-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .dashboard-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .logout-btn {
          position: absolute;
          top: 0;
          right: 0;
          background: #ff6347;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .logout-btn:hover {
          background: #e0553b;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .dashboard-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #ff6347;
        }

        .card-header h2 {
          margin: 0;
          color: #333;
          font-size: 1.5rem;
        }

        .card-icon {
          font-size: 1.8rem;
        }

        .card-content {
          height: calc(100% - 60px);
        }

        /* User Info Card */
        .user-info-card {
          grid-column: span 1;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          padding: 10px;
          background: #f9f9f9;
          border-radius: 5px;
        }

        .info-label {
          font-weight: 600;
          color: #333;
        }

        .info-value {
          color: #666;
        }

        .info-value.highlight {
          color: #ff6347;
          font-weight: 600;
        }

        /* Chart Card */
        .chart-card {
          grid-column: span 2;
        }

        /* Pie Card */
        .pie-card {
          grid-column: span 1;
        }

        /* Metrics Card */
        .metrics-card {
          grid-column: span 1;
        }

        .metric {
          text-align: center;
          padding: 15px;
          margin-bottom: 15px;
          background: #f9f9f9;
          border-radius: 8px;
          border-left: 4px solid #ff6347;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 700;
          color: #ff6347;
          margin-bottom: 5px;
        }

        .metric-label {
          color: #666;
          font-size: 0.9rem;
        }

        /* Table Card */
        .table-card {
          grid-column: span 2;
        }

        .table-container {
          overflow-x: auto;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .user-table th,
        .user-table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .user-table th {
          background-color: #f8f8f8;
          font-weight: 600;
          color: #333;
        }

        .user-table tr:hover {
          background-color: #f5f5f5;
        }

        /* Activity Card */
        .activity-card {
          grid-column: span 2;
        }

        .activity-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .activity-item {
          display: flex;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-time {
          min-width: 80px;
          font-weight: 600;
          color: #ff6347;
        }

        .activity-text {
          color: #333;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .dashboard-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          
          .chart-card, .activity-card, .table-card {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .chart-card, .activity-card, .user-info-card, .pie-card, .metrics-card, .table-card {
            grid-column: span 1;
          }
          
          .dashboard-header h1 {
            font-size: 2rem;
          }
          
          .card-header h2 {
            font-size: 1.3rem;
          }

          .logout-btn {
            position: relative;
            margin-top: 10px;
          }
        }

        @media (max-width: 480px) {
          .admin-dashboard {
            padding: 10px;
          }
          
          .dashboard-card {
            padding: 15px;
          }
          
          .info-item {
            flex-direction: column;
          }
          
          .activity-item {
            flex-direction: column;
          }
          
          .activity-time {
            margin-bottom: 5px;
          }
          
          .user-table th,
          .user-table td {
            padding: 8px 10px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;