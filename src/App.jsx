import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PostProject from './pages/PostProject';
import ProfileDetail from './pages/ProfileDetail';
import Apply from './pages/Apply';
import Projects from './pages/Projects';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import SimplePlaceholder from './components/SimplePlaceholder';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post-project" element={<PostProject />} />
            <Route path="/profile/:id" element={<ProfileDetail />} />
            
            {/* New Footer & Navigation Routes */}
            <Route path="/apply" element={<Apply />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* Generic Placeholder Routes */}
            <Route path="/how-it-works" element={<SimplePlaceholder title="How it Works" description="Discover how our premium matching process connects you with top-tier B2B sales talent." icon="⚙️" />} />
            <Route path="/success" element={<SimplePlaceholder title="Success Stories" description="Read how Europe's top SaaS companies scaled their ARR using SalesMarket professionals." icon="🏆" />} />
            <Route path="/about" element={<SimplePlaceholder title="About Us" description="We are building the infrastructure for the future of B2B sales hiring." icon="🏢" />} />
            <Route path="/careers" element={<SimplePlaceholder title="Join Our Team" description="We are always looking for driven individuals to help us build the ultimate sales marketplace." icon="💼" />} />
            <Route path="/contact" element={<SimplePlaceholder title="Contact Us" description="Have questions? Our team is here to help you scale your sales operations." icon="✉️" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
