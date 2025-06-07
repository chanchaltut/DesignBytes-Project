import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WordpressTemplates from "./pages/templates/wordpressTemplate/WordpressTemplates";
import EcommerceTemplates from "./pages/templates/eCommerceTemplates/EcommerceTemplates";
import SiteTemplates from "./pages/templates/siteTemplates/SiteTemplates";
import MarketingTemplates from "./pages/templates/marketingTemplates/MarketingTemplates";
import CMSTemplates from "./pages/templates/cmsTemplates/CMSTemplates";
import BloggingTemplates from "./pages/templates/bloggingTemplates/BloggingTemplates";
import ThemePreview from "./pages/ThemePreview";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isDashboardPage = location.pathname === "/dashboard";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    // Simulate loading time and wait for page to be ready
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Minimum loading time of 1.5 seconds

    // Also check if document is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(() => setLoading(false), 800);
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => setLoading(false), 800);
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setLoading(false));
    };
  }, [location.pathname]); // Reset loading when route changes

  // Show loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      {!isLoginPage && !isDashboardPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wordpress-templates" element={<WordpressTemplates />} />
          <Route path="/ecommerce-templates" element={<EcommerceTemplates />} />
          <Route path="/site-templates" element={<SiteTemplates />} />
          <Route path="/marketing-templates" element={<MarketingTemplates />} />
          <Route path="/cms-templates" element={<CMSTemplates />} />
          <Route path="/blogging-templates" element={<BloggingTemplates />} />
          <Route path="/preview/:themeId" element={<ThemePreview />} />
        </Routes>
      </main>
      {!isLoginPage && !isDashboardPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
