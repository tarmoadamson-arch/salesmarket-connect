import React from 'react';
import FilterBar from '../components/FilterBar';
import ProfileCard from '../components/ProfileCard';
import './Marketplace.css';

// Dummy data for the MVP
const DUMMY_PROFILES = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'Fractional Head of Sales',
    avatar: 'https://i.pravatar.cc/150?img=47',
    markets: ['Baltics', 'Poland'],
    industries: ['SaaS', 'FinTech'],
    languages: ['ENG', 'RUS', 'LTV'],
    availability: '20hrs / week',
    isVerified: true,
    metrics: {
      pipeline: '€2.4M',
      dealsClosed: '€850K'
    }
  },
  {
    id: 2,
    name: 'Henrik Larsson',
    role: 'Senior Account Executive',
    avatar: 'https://i.pravatar.cc/150?img=11',
    markets: ['Sweden', 'Norway'],
    industries: ['PropTech', 'Manufacturing'],
    languages: ['ENG', 'SWE', 'NOR'],
    availability: 'Full-time',
    isVerified: true,
    metrics: {
      pipeline: '€1.8M',
      dealsClosed: '€620K'
    }
  },
  {
    id: 3,
    name: 'Katriina Virtanen',
    role: 'Outbound SDR Lead',
    avatar: 'https://i.pravatar.cc/150?img=5',
    markets: ['Finland', 'Estonia'],
    industries: ['B2B Services', 'SaaS'],
    languages: ['ENG', 'FIN', 'EST'],
    availability: '30hrs / week',
    isVerified: false,
    metrics: {
      pipeline: '€900K',
      dealsClosed: '€120K'
    }
  },
  {
    id: 4,
    name: 'Tomasz Kowalski',
    role: 'Full-Cycle Sales Consultant',
    avatar: 'https://i.pravatar.cc/150?img=33',
    markets: ['Poland', 'Germany'],
    industries: ['Logistics', 'SaaS'],
    languages: ['ENG', 'POL', 'GER'],
    availability: 'Project-based',
    isVerified: true,
    metrics: {
      pipeline: '€3.1M',
      dealsClosed: '€1.1M'
    }
  },
  {
    id: 5,
    name: 'Sophia Mueller',
    role: 'Market Entry Specialist',
    avatar: 'https://i.pravatar.cc/150?img=49',
    markets: ['DACH Region'],
    industries: ['FinTech', 'Cybersecurity'],
    languages: ['ENG', 'GER'],
    availability: 'Half-time',
    isVerified: true,
    metrics: {
      pipeline: '€4.5M',
      dealsClosed: '€2.0M'
    }
  },
  {
    id: 6,
    name: 'Markus Berg',
    role: 'Technical SDR',
    avatar: 'https://i.pravatar.cc/150?img=60',
    markets: ['Nordics'],
    industries: ['Cloud Infrastructure', 'DevTools'],
    languages: ['ENG', 'SWE'],
    availability: 'Full-time',
    isVerified: false,
    metrics: {
      pipeline: '€600K',
      dealsClosed: '€0' // As SDR, deals might be closed by AE
    }
  }
];

const Marketplace = () => {
  return (
    <div className="marketplace-page">
      <div className="marketplace-header bg-surface-glass">
        <div className="container">
          <h1 className="text-h2">Find Premium Sales Talent</h1>
          <p className="text-body-lg text-muted">Browse proven professionals tailored to your market entry needs.</p>
        </div>
      </div>

      <div className="container marketplace-content">
        <FilterBar />
        
        <div className="marketplace-results-header">
          <p className="results-count">Showing <strong>{DUMMY_PROFILES.length}</strong> top-rated sales experts</p>
          <div className="sort-control">
            <span className="text-muted text-body-sm">Sort by:</span>
            <select className="sort-select">
              <option>Highest Pipeline</option>
              <option>Most Deals Closed</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>

        <div className="profiles-grid">
          {DUMMY_PROFILES.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
        
        <div className="marketplace-pagination">
          <button className="pagination-btn disabled" disabled>Previous</button>
          <div className="pagination-pages">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span>...</span>
          </div>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
