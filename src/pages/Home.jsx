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
              Add <span className="text-gradient">€1M+ pipeline</span> in 90 days — without hiring.
            </h1>
            <p className="hero-subtitle animate-fade-in delay-200">
              We match you with proven sales professionals who generate pipeline for you.<br />
              <span className="font-medium">No hiring risk. No long ramp-up. Just results.</span>
            </p>
            <div className="hero-actions animate-fade-in delay-300">
              <Button variant="primary" size="lg" className="hero-btn" onClick={() => navigate('/marketplace')}>
                Hire Sales Talent <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" className="hero-btn" onClick={() => navigate('/apply')}>
                I am a Sales Professional
              </Button>
            </div>
            <div className="animate-fade-in delay-300 text-sm text-muted mt-6 flex flex-wrap justify-center gap-3">
              <span>Fully vetted</span>
              <span className="opacity-50">•</span>
              <span>No hiring risk</span>
              <span className="opacity-50">•</span>
              <span>Fast onboarding</span>
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
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="primary" className="w-full" onClick={() => navigate('/marketplace')}>View Profile</Button>
                <div className="text-xs text-center text-success font-medium">Available immediately</div>
              </div>
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
           <p className="text-sm font-medium tracking-wider uppercase mb-6 opacity-60 text-muted">Trusted by teams at:</p>
           <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 opacity-50 font-medium text-lg md:text-xl text-muted">
             <span>GuavaHR</span>
             <span className="text-border">•</span>
             <span>Baumart</span>
             <span className="text-border">•</span>
             <span>4IQ</span>
             <span className="text-border">•</span>
             <span>Presentail</span>
           </div>
        </div>
      </section>

      {/* For Sales Professionals Callout */}
      <section className="py-4 bg-surface-glass border-b border-border/30">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-semibold text-foreground uppercase tracking-widest text-[10px] md:text-xs opacity-80">For Sales Professionals</span>
            <span className="hidden sm:block opacity-30 text-muted">|</span>
            <span className="text-foreground font-mono bg-surface-base px-2 py-0.5 rounded border border-border/50">Typical engagements: €2k–€10k/month + commission</span>
          </div>
          <div className="text-muted text-center sm:text-right max-w-sm sm:max-w-none">
            Work with real B2B clients across Europe. Flexible, performance-driven engagements.
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

      {/* How it Works */}
      <section className="how-it-works-section py-24">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-h2">How it works</h2>
            <p className="text-body-lg text-muted mt-2">A streamlined process to get you revenue-ready in days, not months.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-surface-base border border-border text-primary flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Tell us your target market</h3>
              <p className="text-muted">Share your target market, buyer persona, and goals. We handle the rest.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-surface-base border border-border text-accent flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Get matched with vetted sales professionals</h3>
              <p className="text-muted">Interview 2-3 vetted professionals who perfectly match your requirements.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-surface-base border border-border text-success flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Start generating pipeline in days</h3>
              <p className="text-muted">Onboard seamlessly and watch your pipeline and closed-won revenue grow.</p>
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
            <h2 className="text-h2 mb-4">Don't let competitors out-sell you.</h2>
            <p className="text-body-lg text-muted mb-6 max-w-2xl mx-auto">
              Top sales talent is booked fast. Connect with vetted B2B sales professionals today and start scaling your revenue immediately.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button variant="primary" size="lg" onClick={() => navigate('/marketplace')}>Browse Verified Talent</Button>
              <p className="text-sm font-medium text-accent">🔥 Only 3 top-tier professionals available this week</p>
            </div>
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
