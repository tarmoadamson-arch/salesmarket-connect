import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';
import { MapPin, Briefcase, TrendingUp, Calendar, Globe, Building } from 'lucide-react';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();
  const { 
    name, 
    role, 
    avatar, 
    markets, 
    industries, 
    isVerified, 
    top1Percent,
    metrics, 
    availability,
    languages
  } = profile;

  return (
    <Card 
      className="profile-card" 
      hoverable 
      onClick={() => navigate(`/profile/${profile.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="profile-header">
        <img src={avatar} alt={name} className="profile-avatar" />
        <div className="profile-info">
          <div className="profile-name-row">
            <h3 className="profile-name">{name}</h3>
            {top1Percent ? (
              <Badge variant="top-percentile" icon>Top 1% Verified</Badge>
            ) : isVerified ? (
              <Badge variant="verified" icon>Verified</Badge>
            ) : null}
          </div>
          <p className="profile-role">{role}</p>
        </div>
      </div>

      <div className="profile-metrics">
        <div className="metric">
          <TrendingUp size={16} className="metric-icon text-primary" />
          <div className="metric-data">
            <span className="metric-value">{metrics.pipeline}</span>
            <span className="metric-label">Pipeline Generated</span>
          </div>
        </div>
        <div className="metric">
          <Briefcase size={16} className="metric-icon text-success" />
          <div className="metric-data">
            <span className="metric-value">{metrics.dealsClosed}</span>
            <span className="metric-label">Deals Closed</span>
          </div>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <MapPin size={14} className="detail-icon" />
          <span>{markets.join(', ')}</span>
        </div>
        <div className="detail-item">
          <Building size={14} className="detail-icon" />
          <span>{industries.join(', ')}</span>
        </div>
        <div className="detail-item">
          <Globe size={14} className="detail-icon" />
          <span>{languages.join(', ')}</span>
        </div>
        <div className="detail-item">
          <Calendar size={14} className="detail-icon" />
          <span>{availability}</span>
        </div>
      </div>

      <div className="profile-actions">
        <Button variant="outline" className="w-full" onClick={(e) => { e.stopPropagation(); navigate(`/profile/${profile.id}`); }}>View Case Studies</Button>
        <Button variant="primary" className="w-full" onClick={(e) => { e.stopPropagation(); navigate(`/profile/${profile.id}`); }}>Request Proposal</Button>
      </div>
    </Card>
  );
};

export default ProfileCard;
