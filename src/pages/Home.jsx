import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import BookingModal from '../components/BookingModal';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <span className="badge-pulse"></span>
              The #1 B2B Sales Marketplace
            </div>
            <h1 className="hero-title animate-fade-in delay-100">
              Hire <span className="text-gradient">Top 1% B2B Sales</span> that actually close.
            </h1>
            <p className="hero-subtitle animate-fade-in delay-200">
              Stop paying for empty activity. Connect with elite, vetted SDRs, AEs, and fractional sales leaders across Europe. Fast-track your SaaS revenue.
            </p>
            <div className="hero-actions animate-fade-in delay-300">
              <Button variant="primary" size="lg" className="hero-btn" onClick={() => navigate('/marketplace')}>
                Browse Verified Sales Pros <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="hero-btn" onClick={() => navigate('/post-project')}>
                I am a Sales Professional
              </Button>
            </div>
            <div className="hero-trust animate-fade-in delay-300">
              <div className="trust-item">
                <ShieldCheck size={18} className="text-success" /> Fully Vetted Talent
              </div>
              <div className="trust-item">
                <Zap size={18} className="text-accent" /> Fast Matching
              </div>
            </div>
          </div>
          <div className="hero-visual animate-fade-in delay-200">
            {/* Abstract representation of success/growth */}
            <div className="glass-panel visual-card main-card">
              <div className="visual-header">
                <div className="visual-avatar"></div>
                <div>
                  <div className="visual-title">Mikko V.</div>
                  <div className="visual-subtitle">Fractional Head of Sales • Nordics</div>
                </div>
                <div className="visual-badge">Verified</div>
              </div>
              <div className="visual-stats">
                <div className="stat-box">
                  <div className="stat-value text-primary">€1.2M</div>
                  <div className="stat-label">Pipeline Generated</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value text-success">€450K</div>
                  <div className="stat-label">Deals Closed</div>
                </div>
              </div>
              <Button variant="primary" className="w-full" onClick={() => setIsBookingModalOpen(true)}>Book Intro Call</Button>
            </div>
            
            <div className="glass-panel visual-card sub-card delay-300">
              <div className="metric-row">
                <div className="metric-dot success"></div>
                <span>New Meeting Booked!</span>
              </div>
              <div className="metric-company">TechFlow SaaS - Stockholm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logo Band */}
      <section className="logo-band-section py-12 border-b border-border/30 bg-surface-base">
        <div className="container text-center">
           <p className="text-sm font-medium tracking-wider uppercase mb-8 opacity-60 text-muted">Trusted by SaaS teams across Europe</p>
           <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale">
             <span className="text-2xl font-bold font-sans">stripe</span>
             <span className="text-2xl font-bold font-serif">HubSpot</span>
             <span className="text-2xl font-bold italic">DocuSign</span>
             <span className="text-2xl font-bold font-mono">Pipedrive</span>
             <span className="text-2xl font-bold">Intercom</span>
           </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="features-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="text-h2">Why SalesMarket?</h2>
            <p className="text-body-lg text-muted">Unlike generic freelancer sites, we only accept proven B2B revenue generators.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper text-primary">
                <CheckCircle size={32} />
              </div>
              <h3 className="feature-title">Curated Quality</h3>
              <p className="feature-desc">We rigorously vet every professional. No time-wasters, just serious sellers with verified track records.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper text-accent">
                <Zap size={32} />
              </div>
              <h3 className="feature-title">Market Entry Specialists</h3>
              <p className="feature-desc">Instantly access local sales networks in Finland, Sweden, Baltics, and Poland without setting up an entity.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper text-success">
                <ShieldCheck size={32} />
              </div>
              <h3 className="feature-title">Performance Focused</h3>
              <p className="feature-desc">Filter by actual results—pipeline generated and deals closed—not just hours worked or vague LinkedIn titles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Love (Testimonials) */}
      <section className="testimonials-section bg-surface-glass py-24">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="text-h2">The Wall of Love</h2>
            <p className="text-body-lg text-muted">Don&apos;t just take our word for it. Hear from founders who scaled using SalesMarket.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mx-auto max-w-5xl">
            <Card className="testimonial-card p-6 border border-border/50" hoverable>
              <div className="flex gap-1 text-accent mb-4">
                ★ ★ ★ ★ ★
              </div>
              <p className="text-body-lg font-medium mb-6">&quot;We hired a technical SDR through SalesMarket and they booked 14 qualified meetings with VPs of Engineering in their first month. The vetting process is truly top 1%.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-base border border-border flex items-center justify-center font-bold text-sm">AT</div>
                <div>
                  <div className="font-semibold text-sm">Alexei T.</div>
                  <div className="text-xs text-muted">CEO, DataStack Inc.</div>
                </div>
              </div>
            </Card>
            
            <Card className="testimonial-card p-6 border border-border/50" hoverable>
              <div className="flex gap-1 text-accent mb-4">
                ★ ★ ★ ★ ★
              </div>
              <p className="text-body-lg font-medium mb-6">&quot;Finding an AE who actually understands the Nordic SaaS market and has a rolodex of CTOs is incredibly hard. SalesMarket connected us in 72 hours. Worth every penny.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-base border border-border flex items-center justify-center font-bold text-sm">SJ</div>
                <div>
                  <div className="font-semibold text-sm">Sarah J.</div>
                  <div className="text-xs text-muted">VP Revenue, NordicCloud</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section bg-surface-base border-t border-border">
        <div className="container">
          <Card className="cta-card text-center" glass>
            <h2 className="text-h2 mb-4">Ready to scale your revenue?</h2>
            <p className="text-body-lg text-muted mb-8 max-w-2xl mx-auto">
              Stop sifting through generic freelancers. Connect with vetted B2B sales professionals who know your market.
            </p>
            <Button variant="primary" size="lg" onClick={() => navigate('/marketplace')}>Browse Verified Talent</Button>
          </Card>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        providerName="Mikko V." 
      />
    </div>
  );
};

export default Home;
