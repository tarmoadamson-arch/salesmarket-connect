import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-20 min-h-[60vh]">
      <div className="text-center mb-12">
        <h1 className="text-h1 mb-4">Browse Active Projects</h1>
        <p className="text-body-lg text-muted max-w-2xl mx-auto">
          Explore exclusive B2B sales opportunities across Europe. Connect with high-growth SaaS and Tech companies.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
         <Card className="p-6">
           <div className="text-sm font-bold text-primary mb-2">B2B SaaS • DACH</div>
           <h3 className="text-h3 mb-2">Senior Account Executive (Enterprise)</h3>
           <p className="text-muted mb-6">Base + 15% Uncapped Commission</p>
           <Button variant="outline" className="w-full justify-center">Log in to view</Button>
         </Card>
         <Card className="p-6">
           <div className="text-sm font-bold text-primary mb-2">FinTech • Nordics</div>
           <h3 className="text-h3 mb-2">Outbound SDR (Market Entry)</h3>
           <p className="text-muted mb-6">€3k Retainer + €500 per qualified meeting</p>
           <Button variant="outline" className="w-full justify-center">Log in to view</Button>
         </Card>
      </div>
      <div className="text-center mt-12">
        <Button variant="ghost" onClick={() => navigate('/')}>Return Home</Button>
      </div>
    </div>
  );
};

export default Projects;
