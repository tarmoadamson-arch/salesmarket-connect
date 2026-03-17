import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Sales<span>Market</span>
        </Link>
        
        <div className="navbar-links desktop-only">
          <Link to="/marketplace" className={location.pathname.includes('/marketplace') ? 'active' : ''}>Marketplace</Link>
        </div>
        
        <div className="navbar-actions desktop-only">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>Dashboard</Button>
              <div className="flex items-center gap-2 border-l border-border pl-4 ml-2">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {user.name.charAt(0)}
                </div>
                <Button variant="outline" size="sm" onClick={() => { logout(); navigate('/'); }}>Log Out</Button>
              </div>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>Log In</Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/post-project')}>Post a Project</Button>
            </>
          )}
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} mobile-only`}>
        <div className="mobile-menu-links">
          <Link to="/marketplace">Marketplace</Link>
        </div>
        <div className="mobile-menu-actions">
          {isAuthenticated ? (
            <>
              <Button variant="primary" className="w-full" onClick={() => navigate('/dashboard')}>Dashboard</Button>
              <Button variant="outline" className="w-full" onClick={() => { logout(); navigate('/'); }}>Log Out</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" className="w-full" onClick={() => navigate('/login')}>Log In</Button>
               <Button variant="primary" className="w-full" onClick={() => navigate('/post-project')}>Post a Project</Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
