import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import Button from './Button';
import './FilterBar.css';

const FilterBar = () => {
  return (
    <div className="filter-bar glass-panel">
      <div className="filter-search">
        <Search size={20} className="filter-search-icon" />
        <input 
          type="text" 
          placeholder="Search skill, role, or agency name..." 
          className="filter-search-input"
        />
      </div>
      
      <div className="filter-options">
        <select className="filter-select" defaultValue="">
          <option value="" disabled>All Markets</option>
          <option value="estonia">Estonia</option>
          <option value="latvia">Latvia</option>
          <option value="lithuania">Lithuania</option>
          <option value="finland">Finland</option>
          <option value="sweden">Sweden</option>
          <option value="poland">Poland</option>
        </select>
        
        <select className="filter-select" defaultValue="">
          <option value="" disabled>Sales Type</option>
          <option value="sdr">SDR (Lead Gen)</option>
          <option value="ae">Account Executive (Closing)</option>
          <option value="full-cycle">Full-Cycle Sales</option>
          <option value="head-of-sales">Fractional Head of Sales</option>
        </select>

        <select className="filter-select" defaultValue="">
          <option value="" disabled>Industry</option>
          <option value="saas">SaaS / Software</option>
          <option value="fintech">FinTech</option>
          <option value="proptech">PropTech</option>
          <option value="manufacturing">Manufacturing</option>
        </select>
      </div>

      <Button variant="outline" className="filter-mobile-btn">
        <SlidersHorizontal size={18} />
        Filters
      </Button>
    </div>
  );
};

export default FilterBar;
