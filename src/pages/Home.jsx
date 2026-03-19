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
              Done-For-You Pipeline Engine
            </div>
            <h1 className="hero-title animate-fade-in delay-100">
              Add <span className="text-gradient">€1M+ pipeline</span> in 90 days — without hiring.
            </h1>
            <p className="hero-subtitle animate-fade-in delay-200 text-foreground/90">
              We generate qualified meetings and pipeline for your sales team using proven B2B sales professionals.<br />
              <span className="font-medium mt-2 inline-block">No hiring risk. No long ramp-up. Just results.</span>
            </p>
            <div className="hero-actions animate-fade-in delay-300">
              <Button variant="primary" size="lg" className="hero-btn" style={{ height: 'fit-content' }} onClick={() => navigate('/marketplace')}>
                Get Qualified Meetings
              </Button>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <Button variant="outline" size="lg" className="hero-btn w-full" onClick={() => navigate('/apply')}>
                  I am a Sales Professional
                </Button>
                <div className="text-[11px] leading-tight text-muted max-w-[240px] opacity-80">
                  <span className="font-medium text-foreground block mb-0.5">Typical engagements: €2k–€10k/month + commission</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in delay-300 mt-6 flex flex-col gap-2">
              <div className="text-sm font-medium text-muted flex flex-wrap gap-3">
                <span>Start within 7 days</span>
                <span className="opacity-50">•</span>
                <span>First meetings in 14 days</span>
              </div>
              <div className="text-[11px] text-muted/80 font-medium">
                Trusted by teams at: Elcogen • GuavaHR • Baumart • 4IQ • Presentail
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

      {/* Problem & Solution Section */}
      <section className="py-24 bg-surface-base border-t border-border/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 mb-10 text-gradient">Hiring sales is slow, expensive, and risky.</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mb-12 text-muted font-medium text-lg">
              <div className="flex items-center gap-2"><Zap size={20} className="text-accent" /> 3–6 months ramp-up</div>
              <div className="flex items-center gap-2"><Zap size={20} className="text-accent" /> High fixed salaries</div>
              <div className="flex items-center gap-2"><Zap size={20} className="text-accent" /> Uncertain results</div>
            </div>
            <p className="text-2xl text-muted mb-4 opacity-80">
              Most companies don't need more people. They need pipeline.
            </p>
            <p className="text-3xl font-bold text-foreground">
              We generate pipeline for you.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works-section py-24 border-t border-border/30 bg-surface-base">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-h2">How it works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center px-4">
              <div className="w-12 h-12 rounded-full bg-surface-glass border border-border text-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-sm">1</div>
              <h3 className="text-lg font-bold mb-2">Tell us your target market</h3>
              <p className="text-muted text-sm border-t border-border/50 pt-2 mt-2 w-3/4 mx-auto">Define your ICP, messaging, and goals</p>
            </div>
            <div className="text-center px-4">
              <div className="w-12 h-12 rounded-full bg-surface-glass border border-border text-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-sm">2</div>
              <h3 className="text-lg font-bold mb-2">We activate vetted sales professionals</h3>
              <p className="text-muted text-sm border-t border-border/50 pt-2 mt-2 w-3/4 mx-auto">Experienced SDRs and AEs start outreach immediately</p>
            </div>
            <div className="text-center px-4">
              <div className="w-12 h-12 rounded-full bg-surface-glass border border-border text-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-sm">3</div>
              <h3 className="text-lg font-bold mb-2">You get qualified meetings</h3>
              <p className="text-muted text-sm border-t border-border/50 pt-2 mt-2 w-3/4 mx-auto">Delivered directly to your calendar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 border-t border-border/30 bg-surface-glass">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-12">What you can expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-primary font-black text-5xl mb-3">10–30</div>
                <div className="font-bold text-muted text-lg tracking-wide">Qualified Meetings<br/>Per Month</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-success font-black text-5xl mb-3">€500k–€2M</div>
                <div className="font-bold text-muted text-lg tracking-wide">Pipeline<br/>Generated</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-accent font-black text-5xl mb-3">14 Days</div>
                <div className="font-bold text-muted text-lg tracking-wide">First Results<br/>Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Love (Testimonials) */}
      <section className="testimonials-section py-24 bg-surface-base">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl">
            <Card className="testimonial-card p-10 border border-border/50 text-center md:text-left shadow-sm" glass hoverable>
              <p className="text-2xl font-bold text-foreground mb-6 leading-snug">&quot;14 qualified meetings in first month.&quot;</p>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-surface-base border border-border flex items-center justify-center font-bold text-sm text-muted">AT</div>
                <div>
                  <div className="font-bold text-foreground">CEO, DataStack</div>
                </div>
              </div>
            </Card>
            
            <Card className="testimonial-card p-10 border border-border/50 text-center md:text-left shadow-sm" glass hoverable>
              <p className="text-2xl font-bold text-foreground mb-6 leading-snug">&quot;€450k pipeline generated in 60 days.&quot;</p>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-surface-base border border-border flex items-center justify-center font-bold text-sm text-muted">SJ</div>
                <div>
                  <div className="font-bold text-foreground">VP Revenue, NordicCloud</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why SalesMarket */}
      <section className="features-section py-24 bg-surface-glass border-t border-border/30">
        <div className="container">
          <div className="features-grid max-w-5xl mx-auto">
            <div className="feature-card p-6 bg-surface-base rounded-2xl border border-border/50">
              <div className="text-primary mb-4 bg-primary/10 w-fit p-3 rounded-xl"><CheckCircle size={24} /></div>
              <h3 className="feature-title text-lg font-bold mb-2">Curated Quality</h3>
              <p className="feature-desc text-sm text-muted leading-relaxed">We rigorously vet every professional. No time-wasters, just verified results.</p>
            </div>
            <div className="feature-card p-6 bg-surface-base rounded-2xl border border-border/50">
              <div className="text-accent mb-4 bg-accent/10 w-fit p-3 rounded-xl"><Zap size={24} /></div>
              <h3 className="feature-title text-lg font-bold mb-2">Market Entry Specialists</h3>
              <p className="feature-desc text-sm text-muted leading-relaxed">Access local European sales networks instantly without setting up entities.</p>
            </div>
            <div className="feature-card p-6 bg-surface-base rounded-2xl border border-border/50">
              <div className="text-success mb-4 bg-success/10 w-fit p-3 rounded-xl"><ShieldCheck size={24} /></div>
              <h3 className="feature-title text-lg font-bold mb-2">Performance Focused</h3>
              <p className="feature-desc text-sm text-muted leading-relaxed">Filter by pipeline generated and deals closed, not vague LinkedIn titles.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section bg-surface-base border-t border-border/50">
        <div className="container">
          <Card className="cta-card text-center border border-border/50 py-16 px-6 shadow-sm" glass>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Stop hiring. Start generating pipeline.</h2>
            <p className="text-lg md:text-xl text-muted/90 mb-8 max-w-xl mx-auto font-medium">
              Get your first qualified meetings in 14 days.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Button variant="primary" size="lg" className="px-10 py-4 text-lg font-bold shadow-lg" onClick={() => navigate('/marketplace')}>Get Qualified Meetings</Button>
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
