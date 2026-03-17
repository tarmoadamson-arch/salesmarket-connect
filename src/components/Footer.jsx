import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Sales<span>Market</span>
          </Link>
          <p className="footer-tagline">
            The go-to marketplace for companies that want results-driven sales, not just leads.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-heading">For Clients</h4>
            <ul>
              <li><Link to="/marketplace">Browse Sales Pros</Link></li>
              <li><Link to="/post-project">Post a Project</Link></li>
              <li><Link to="/how-it-works">How it Works</Link></li>
              <li><Link to="/success">Success Stories</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">For Sales Pros</h4>
            <ul>
              <li><Link to="/apply">Apply as a Pro</Link></li>
              <li><Link to="/projects">Browse Projects</Link></li>
              <li><Link to="/partners">Agency Partners</Link></li>
              <li><Link to="/resources">Pro Resources</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">SalesMarket</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} SalesMarket Connect. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
