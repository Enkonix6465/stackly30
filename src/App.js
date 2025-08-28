import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { DarkModeProvider, useDarkMode } from "./context/Darkmodecontext";
import { LanguageProvider } from "./context/LanguageContext";

// Pages
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import AboutUs from "./pages/AboutUS";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import CorporateEvents from "./pages/CorporateEvents";
import SocialCelebrations from "./pages/SocialCelebrations";
import FestivalConcerts from "./pages/FestivalsConcerts";
import TradeShows from "./pages/TradeShows";
import PrivateEvents from "./pages/PrivateEvents";
import NonProfitGalas from "./pages/NonProfitGalas";
import AdminDashboard from "./pages/AdminDashboard";
// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".app-content");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

// ✅ AppLayout now uses dark mode from context
const AppLayout = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode(); // ⬅️ Get dark mode state and toggle

  const showHeaderAndFooter = location.pathname !== "/welcome";

  useEffect(() => {
    // ✅ Set theme on the <html> tag
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      {showHeaderAndFooter && <Header toggleTheme={toggleDarkMode} isDark={darkMode} />}
      <ScrollToTop />
      <div
        className="app-content"
        style={{
          paddingTop: showHeaderAndFooter ? "70px" : "0",
          minHeight: "calc(100vh - 70px)",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/corporate-events" element={<CorporateEvents/>}/>
          <Route path="/social-celebrations" element={<SocialCelebrations/>}/>
          <Route path="/festivals-concerts" element={<FestivalConcerts/>}/>
                    
          <Route path="/trade-shows" element={<TradeShows/>}/>
          <Route path="/private-events" element={<PrivateEvents/>}/>
          <Route path="/non-profit-galas" element={<NonProfitGalas/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1/>}/>
          <Route path="/blog2" element={<Blog2/>}/>
          <Route path="/blog3" element={<Blog3/>}/>
          <Route path="*" element={<Navigate to="/welcome" replace />} />
          <Route path="admin" element={<AdminDashboard/>}/>
        </Routes>
      </div>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <Router>
          <AppLayout />
        </Router>
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
