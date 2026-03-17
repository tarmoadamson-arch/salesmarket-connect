import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { 
  BarChart3, 
  Users, 
  Target, 
  CalendarDays, 
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Briefcase
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();
  const navigate = useNavigate();

  // Determine if showing client or provider view (default to client if not logged in for demo)
  const isProvider = user?.role === 'provider';
  const userName = user?.name || 'Acme Corp';

  return (
    <div className="dashboard-page bg-surface-base">
      <div className="dashboard-layout container">
        
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-profile">
            <div className="sidebar-avatar user-avatar"></div>
            <div className="sidebar-user-info">
              <div className="user-name">{userName}</div>
              <Badge variant={isProvider ? 'verified' : 'neutral'}>
                {isProvider ? 'Sales Pro' : 'Client Account'}
              </Badge>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <button 
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 size={20} /> Overview
            </button>
            <button 
              className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <Target size={20} /> {isProvider ? 'My Invitations' : 'Active Projects'}
            </button>
            <button 
              className={`nav-item ${activeTab === 'talent' ? 'active' : ''}`}
              onClick={() => setActiveTab('talent')}
            >
              <Users size={20} /> {isProvider ? 'My Clients' : 'My Talent'}
            </button>
            <button 
              className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare size={20} /> Messages
              <span className="nav-badge">3</span>
            </button>
          </nav>

          <div className="sidebar-bottom">
            <Button variant="outline" className="w-full">Settings</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <header className="dashboard-header">
            <div>
              <h1 className="text-h3">Welcome back, {userName.split(' ')[0]} 👋</h1>
              <p className="text-muted">
                {isProvider ? "Here's your pipeline and performance overview." : "Here's what's happening with your outsourced sales."}
              </p>
            </div>
            {!isProvider && <Button variant="primary" onClick={() => navigate('/post-project')}>Post New Project</Button>}
          </header>

          {/* KPI Cards */}
          <div className="kpi-grid">
            <Card className="kpi-card">
              <div className="kpi-icon-wrapper text-primary">
                <TrendingUp size={24} />
              </div>
              <div className="kpi-content">
                <span className="kpi-label">{isProvider ? 'Pipeline Built (YTD)' : 'Total Pipeline Created'}</span>
                <span className="kpi-value">{isProvider ? '€1.2M' : '€425,000'}</span>
                <span className="kpi-trend positive">+12% from last month</span>
              </div>
            </Card>
            
            <Card className="kpi-card">
              <div className="kpi-icon-wrapper text-accent">
                {isProvider ? <Briefcase size={24} /> : <CalendarDays size={24} />}
              </div>
              <div className="kpi-content">
                <span className="kpi-label">{isProvider ? 'Deals Won' : 'Meetings Booked'}</span>
                <span className="kpi-value">{isProvider ? '€450K' : '24'}</span>
                <span className="kpi-trend neutral">On track for goal</span>
              </div>
            </Card>

            <Card className="kpi-card">
              <div className="kpi-icon-wrapper text-success">
                <Users size={24} />
              </div>
              <div className="kpi-content">
                <span className="kpi-label">{isProvider ? 'Active Clients' : 'Active Sales Pros'}</span>
                <span className="kpi-value">{isProvider ? '4' : '3'}</span>
                <span className="kpi-trend">{isProvider ? 'Full Capacity' : 'Nordics & Baltics'}</span>
              </div>
            </Card>
          </div>

          <div className="dashboard-sections-grid">
            {/* Active Projects */}
            <Card className="dashboard-section col-span-2">
              <div className="section-header-row">
                <h3 className="section-title">{isProvider ? 'Active Engagements' : 'Active Projects'}</h3>
                <button className="text-btn">View All</button>
              </div>
              
              <div className="project-list">
                <div className="project-row">
                  <div className="project-info">
                    <h4 className="project-title">Finland Market Entry (SDR)</h4>
                    <span className="project-meta">Started Oct 12 • Managed by Katriina V.</span>
                  </div>
                  <div className="project-status">
                    <Badge variant="success">Active</Badge>
                  </div>
                  <button className="icon-btn"><ChevronRight size={20} /></button>
                </div>
                
                <div className="project-row">
                  <div className="project-info">
                    <h4 className="project-title">SaaS Closing (DACH)</h4>
                    <span className="project-meta">Started Nov 01 • Managed by Sophia M.</span>
                  </div>
                  <div className="project-status">
                    <Badge variant="success">Active</Badge>
                  </div>
                  <button className="icon-btn"><ChevronRight size={20} /></button>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="dashboard-section">
              <h3 className="section-title">Recent Activity</h3>
              <div className="activity-feed">
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p><strong>Katriina V.</strong> booked a meeting with <em>Nokia Networks</em></p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot success"></div>
                  <div className="activity-content">
                    <p><strong>Sophia M.</strong> moved deal to <em>Contract Sent</em></p>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p>New weekly report available for <em>Finland Market Entry</em></p>
                    <span className="activity-time">Yesterday</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
