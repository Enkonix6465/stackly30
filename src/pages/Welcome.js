import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    // welcome: "Welcome to",
    // stackly: "STACKLY",
    welcomeBack: "Welcome back, Please login into an account",
    email: "Your Username",
    password: "Enter Password",
    forgot: "Forgot password?",
    login: "Login",
    dontHave: "Don't have an account? Sign Up",
    firstName: "First Name",
    lastName: "Last Name",
    signUp: "Sign Up",
    alreadyHave: "Already have an account? Login",
    resetPassword: "Reset Password",
    resetEmail: "Enter your registered email",
    sendReset: "Send Reset Link",
    backToLogin: "Back to Login",
    invalid: "Invalid email or password.",
    exists: "User already exists with this email.",
    signupSuccess: "Signup successful! Please login.",
    noUser: "No user found with this email.",
    resetSent: "User found. Please check your email for password reset instructions. (Simulation)"
  },
  ar: {
    // welcome: "مرحبًا في",
    // stackly: "STACKLY",
    welcomeBack: "مرحبًا بعودتك، يرجى تسجيل الدخول إلى حسابك",
    email: "اسم المستخدم",
    password: "أدخل كلمة المرور",
    forgot: "نسيت كلمة المرور؟",
    login: "تسجيل الدخول",
    dontHave: "ليس لديك حساب؟ سجل الآن",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    signUp: "سجل الآن",
    alreadyHave: "لديك حساب بالفعل؟ تسجيل الدخول",
    resetPassword: "إعادة تعيين كلمة المرور",
    resetEmail: "أدخل بريدك الإلكتروني المسجل",
    sendReset: "إرسال رابط إعادة التعيين",
    backToLogin: "العودة لتسجيل الدخول",
    invalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    exists: "يوجد مستخدم بهذا البريد الإلكتروني.",
    signupSuccess: "تم التسجيل بنجاح! يرجى تسجيل الدخول.",
    noUser: "لا يوجد مستخدم بهذا البريد الإلكتروني.",
    resetSent: "تم العثور على المستخدم. يرجى مراجعة بريدك الإلكتروني لإعادة تعيين كلمة المرور. (محاكاة)"
  },
  he: {
    // welcome: "ברוכים הבאים ל",
    // stackly: "STACKLY",
    welcomeBack: "ברוך שובך, אנא התחבר לחשבון שלך",
    email: "שם משתמש",
    password: "הזן סיסמה",
    forgot: "שכחת סיסמה?",
    login: "התחברות",
    dontHave: "אין לך חשבון? הרשמה",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    signUp: "הרשמה",
    alreadyHave: "כבר יש לך חשבון? התחברות",
    resetPassword: "איפוס סיסמה",
    resetEmail: "הזן את האימייל הרשום שלך",
    sendReset: "שלח קישור לאיפוס",
    backToLogin: "חזרה להתחברות",
    invalid: "אימייל או סיסמה לא נכונים.",
    exists: "משתמש כבר קיים עם אימייל זה.",
    signupSuccess: "ההרשמה הצליחה! אנא התחבר.",
    noUser: "לא נמצא משתמש עם אימייל זה.",
    resetSent: "משתמש נמצא. בדוק את האימייל שלך להוראות איפוס. (סימולציה)"
  }
};

const rtlLanguages = ["ar", "he"];

const Welcome = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("en");
  const t = translations[language];
  const isRTL = rtlLanguages.includes(language);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (loginData.email === "admin@enkonix.in" && loginData.password === "admin123") {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[loginData.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/admin");
      return;
    }

    const user = users.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      setError("");
      localStorage.setItem("loggedInUserEmail", user.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[user.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/home");
    } else {
      setError(t.invalid);
    }
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError(t.exists);
      return;
    }

  users.push(signUpData);
  localStorage.setItem("users", JSON.stringify(users));
  setError("");
  setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
  setIsLogin(true);
  navigate("/login");
  };

  const handleForgotPasswordChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === forgotEmail);

    if (!user) {
      setError(t.noUser);
      setResetMessage("");
    } else {
      setError("");
      setResetMessage(t.resetSent);
    }
  };

  return (
    <div
      style={{
        ...styles.pageContainer,
        direction: isRTL ? "rtl" : "ltr",
        textAlign: isRTL ? "right" : "left",
      }}
    >
      <div style={styles.leftSide}>
        <img
          src="images/login.jpg"
          alt="Login Illustration"
          style={styles.image}
        />
      </div>

      <div style={styles.rightSide}>
        {/* Language Dropdown */}
        <div style={{ marginBottom: 24, textAlign: isRTL ? "right" : "left" }}>
          {/* Stackly Logo above dropdown, left-aligned */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: isRTL ? "flex-end" : "flex-start", gap: 0, marginBottom: "0px", paddingBottom: "0px" }}>
            <img src="images/logo.png" alt="Stackly Logo" style={{ width: "120px", height: "auto", marginBottom: "0px" }} />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: "8px 16px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                background: "#fff",
                color: "#333",
        marginBottom: "0px", paddingBottom: "0px"
              }}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="he">עברית</option>
            </select>
          </div>
    </div>

        {!isForgotPassword ? (
          <>
            {/* <h1 style={styles.welcomeHeading}>
              {t.welcome} <span style={styles.highlight}>{t.stackly}</span>
            </h1> */}
            <p style={styles.welcomeSubtext}>
              {t.welcomeBack}
            </p>

            {isLogin ? (
              <form onSubmit={handleLoginSubmit} style={styles.form}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                  <label htmlFor="login-username" style={{ minWidth: "100px", fontWeight: "500", margin: 0 }}>
                    Username <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="login-username"
                    style={{ ...styles.input, flex: 1, margin: 0 }}
                    type="email"
                    name="email"
                    placeholder={t.email}
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                  <label htmlFor="login-password" style={{ minWidth: "100px", fontWeight: "500", margin: 0 }}>
                    Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="login-password"
                    style={{ ...styles.input, flex: 1, margin: 0 }}
                    type="password"
                    name="password"
                    placeholder={t.password}
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <p
                  style={styles.forgotPassword}
                  onClick={() => {
                    setError("");
                    setIsForgotPassword(true);
                    setResetMessage("");
                  }}
                >
                  {t.forgot}
                </p>
                <button type="submit" style={styles.loginButton}>
                  <span role="img" aria-label="user-lock" style={{ marginRight: 8 }}>👤🔒</span> {t.login}
                </button>
                <p
                  style={{ ...styles.toggle, cursor: "default" }}
                >
                  {t.dontHave.split('Sign Up')[0]}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setError("");
                      setIsLogin(false);
                    }}
                  >Sign Up</span>
                </p>
              </form>
            ) : (
              <form onSubmit={handleSignUpSubmit} style={styles.form}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                  <label htmlFor="signup-firstName" style={{ minWidth: "100px", fontWeight: "500", margin: 0 }}>
                    First Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-firstName"
                    style={{ ...styles.input, flex: 1, margin: 0 }}
                    type="text"
                    name="firstName"
                    placeholder={t.firstName}
                    value={signUpData.firstName}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                  <label htmlFor="signup-lastName" style={{ minWidth: "100px", fontWeight: "500", margin: 0 }}>
                    Last Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-lastName"
                    style={{ ...styles.input, flex: 1, margin: 0 }}
                    type="text"
                    name="lastName"
                    placeholder={t.lastName}
                    value={signUpData.lastName}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                  <label htmlFor="signup-email" style={{ minWidth: "100px", fontWeight: "500", margin: 0 }}>
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-email"
                    style={{ ...styles.input, flex: 1, margin: 0 }}
                    type="email"
                    name="email"
                    placeholder={t.email}
                    value={signUpData.email}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                  <label htmlFor="signup-password" style={{ minWidth: "100px", fontWeight: "500", margin: 0 }}>
                    Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    id="signup-password"
                    style={{ ...styles.input, flex: 1, margin: 0 }}
                    type="password"
                    name="password"
                    placeholder={t.password}
                    value={signUpData.password}
                    onChange={handleSignUpChange}
                    required
                  />
                </div>
                <button type="submit" style={styles.loginButton}>
                  {t.signUp}
                </button>
                <p
                  style={{ ...styles.toggle, cursor: "default" }}
                >
                  {t.alreadyHave.split('Login')[0]}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setError("");
                      setIsLogin(true);
                    }}
                  >Login</span>
                </p>
              </form>
            )}

            {error && <p style={styles.errorMsg}>{error}</p>}
            {resetMessage && <p style={{ color: "#ff6347", marginTop: 10 }}>{resetMessage}</p>}
          </>
        ) : (
          <>
            <h2 style={styles.welcomeHeading}>{t.resetPassword}</h2>
            <form onSubmit={handleForgotPasswordSubmit} style={styles.form}>
              <input
                style={styles.input}
                type="email"
                placeholder={t.resetEmail}
                value={forgotEmail}
                onChange={handleForgotPasswordChange}
                required
              />
              <button type="submit" style={styles.loginButton}>
                {t.sendReset}
              </button>
              <p
                style={styles.toggle}
                onClick={() => {
                  setError("");
                  setResetMessage("");
                  setIsForgotPassword(false);
                }}
              >
                {t.backToLogin}
              </p>
            </form>
            {error && <p style={styles.errorMsg}>{error}</p>}
            {resetMessage && <p style={{ color: "#ff6347", marginTop: 10 }}>{resetMessage}</p>}
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#000",
  },
  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#000",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  rightSide: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: "10px",
    margin: "40px",
    padding: "40px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  welcomeHeading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000",
  },
  highlight: {
    color: "#ff6347",
  },
  welcomeSubtext: {
    marginBottom: "30px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
    backgroundColor: "#fff",
    color: "#000",
  },
  loginButton: {
    backgroundColor: "#ff6347",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#ff6347",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "-10px",
    fontWeight: "bold",
  },
  toggle: {
    cursor: "pointer",
    color: "#ff6347",
    marginTop: "15px",
    textAlign: "center",
    userSelect: "none",
    fontWeight: "bold",
  },
  errorMsg: {
    color: "#ff6347",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default Welcome;