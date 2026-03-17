import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProfileById } from '../data/mockProfiles';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import BookingModal from '../components/BookingModal';
import { ArrowLeft, Briefcase, MessageSquare, TrendingUp, ShieldCheck, CalendarPlus } from 'lucide-react';
import './ProfileDetail.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    // Simulate API fetch delay
    const data = getProfileById(id);
    if (data) {
      setProfile(data);
    } else {
      // Mock fallback if not in the top 3
      setProfile(getProfileById(1));
    }
  }, [id]);

  if (!profile) return <div className="p-20 text-center">Loading profile...</div>;

  return (
    <div className="profile-detail-page">
      <div className="pd-header-bg"></div>
      
      <div className="container pd-container">
        <button className="pd-back-btn" onClick={() => navigate('/marketplace')}>
          <ArrowLeft size={20} /> Back to Marketplace
        </button>

        <div className="pd-layout">
          {/* Main Content Column */}
          <div className="pd-main">
            <Card className="pd-hero-card mb-6">
              <div className="pd-hero-header">
                <img src={profile.avatar} alt={profile.name} className="pd-avatar-large" />
                <div className="pd-hero-info">
                  <div className="pd-header-content">
                    <h1 className="text-h1">{profile.name}</h1>
                    <div className="pd-badges mt-2">
                      {profile.top1Percent ? (
                        <Badge variant="top-percentile" icon>Top 1% SalesMarket Verified</Badge>
                      ) : profile.isVerified ? (
                        <Badge variant="verified" icon>SalesMarket Verified</Badge>
                      ) : null}
                      <Badge variant="success">Available Now</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pd-about">
                <h3 className="text-h3 mb-3">About</h3>
                <p className="text-body text-secondary leading-relaxed">{profile.about}</p>
              </div>
            </Card>

        <h3 className="text-h3 mb-4">Experience & Case Studies</h3>
        <div className="pd-experience-list mb-6">
          {profile.experience.map((exp, idx) => (
            <Card key={idx} className="pd-experience-item">
              <div className="exp-header">
                <h4 className="font-semibold">{exp.role}</h4>
                <span className="text-body-sm text-muted">{exp.duration}</span>
              </div>
              <div className="text-primary font-medium mb-2">{exp.company}</div>
              <p className="text-secondary">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>

          {/* Sidebar Column */}
          <div className="pd-sidebar">
            <Card className="pd-sidebar-card mb-6">
              <h3 className="font-semibold mb-4 border-b pb-3 border-border">Hire {profile.name.split(' ')[0]}</h3>
              
              <div className="pd-stats-grid mb-6">
                <div className="pd-stat-box">
                  <div className="stat-label flex items-center gap-1 text-muted text-body-sm"><TrendingUp size={14}/> Pipeline</div>
                  <div className="stat-value font-bold text-primary text-xl mt-1">{profile.metrics.pipeline}</div>
                </div>
                <div className="pd-stat-box">
                  <div className="stat-label flex items-center gap-1 text-muted text-body-sm"><Briefcase size={14}/> Won</div>
                  <div className="stat-value font-bold text-success text-xl mt-1">{profile.metrics.dealsClosed}</div>
                </div>
              </div>

              <ul className="pd-details-list mb-6">
                <li>
                  <span className="detail-label text-muted text-body-sm block mb-1">Target Markets</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.markets.map(m => <Badge key={m} variant="neutral">{m}</Badge>)}
                  </div>
                </li>
                <li>
                  <span className="detail-label text-muted text-body-sm block mb-1">Industries</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.industries.map(i => <Badge key={i} variant="primary">{i}</Badge>)}
                  </div>
                </li>
                <li>
                  <span className="detail-label text-muted text-body-sm block mb-1">Availability</span>
                  <span className="font-medium">{profile.availability}</span>
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <Button variant="primary" className="w-full flex justify-center gap-2" onClick={() => setIsBookingModalOpen(true)}>
                  <CalendarPlus size={18} /> Book Intro Call
                </Button>
                <Button variant="outline" className="w-full flex justify-center gap-2">
                  <MessageSquare size={18} /> Message
                </Button>
              </div>
            </Card>

            <div className="pd-trust-box glass-panel p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck size={24} className="text-success flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm mb-1">SalesMarket Guarantee</h4>
                <p className="text-xs text-muted">All payments and contracts are securely managed via escrow until milestones are hit.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        providerName={profile.name} 
      />
    </div>
  );
};

export default ProfileDetail;
