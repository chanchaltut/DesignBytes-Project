import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isDashboardPage = location.pathname === "/dashboard";
  return (
    <div className="min-h-screen bg-white">
      {!isLoginPage && !isDashboardPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
