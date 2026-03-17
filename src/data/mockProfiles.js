// Extracting dummy profiles to a central mock API store for realistic routing
export const DUMMY_PROFILES = [
  {
    id: 1,
    name: 'Mikko V.',
    role: 'Fractional Head of Sales',
    avatar: 'https://i.pravatar.cc/150?img=12',
    markets: ['Nordics', 'DACH'],
    industries: ['B2B SaaS', 'DevTools'],
    languages: ['ENG', 'FIN', 'SWE'],
    availability: '20hrs / week',
    isVerified: true,
    top1Percent: true,
    metrics: {
      pipeline: '€3.4M',
      dealsClosed: '€1.2M'
    },
    about: 'Ex-VP of Sales at Supermetrics. I specialize in scaling outbound engines and closing enterprise SaaS deals in the €50k+ ACV range across Northern Europe.',
    experience: [
      { role: 'VP of Sales', company: 'Supermetrics', duration: '2019 - 2023', description: 'Scaled Nordic and DACH revenue from €2M to €12M ARR. Built a team of 14 AEs and SDRs.' },
      { role: 'Enterprise AE', company: 'HubSpot', duration: '2016 - 2019', description: 'Consistently hit 150% of €1.2M quota. Closed €180k ACV deal with Klarna.' }
    ]
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Senior Account Executive',
    avatar: 'https://i.pravatar.cc/150?img=47',
    markets: ['Baltics', 'Poland', 'UK'],
    industries: ['FinTech', 'Cybersecurity'],
    languages: ['ENG', 'RUS', 'POL'],
    availability: 'Full-time',
    isVerified: true,
    top1Percent: true,
    metrics: {
      pipeline: '€2.8M',
      dealsClosed: '€950K'
    },
    about: 'Senior AE with deep networks in European FinTech. I run full-cycle sales from cold outreach to complex technical closing with CISOs and CTOs.',
    experience: [
      { role: 'Senior Enterprise AE', company: 'Wiz', duration: '2021 - Present', description: 'Closed 3 enterprise deals >€150k ACV in 2023, including Revolut and Bolt.' },
      { role: 'Account Executive', company: 'Stripe', duration: '2018 - 2021', description: 'Top performing AE in the CEE region for 6 consecutive quarters.' }
    ]
  },
  {
    id: 3,
    name: 'Katriina Virtanen',
    role: 'Outbound SDR Lead',
    avatar: 'https://i.pravatar.cc/150?img=5',
    markets: ['Finland', 'Sweden', 'Estonia'],
    industries: ['PropTech', 'Logistics'],
    languages: ['ENG', 'FIN', 'EST'],
    availability: '30hrs / week',
    isVerified: true,
    top1Percent: false,
    metrics: {
      pipeline: '€1.1M',
      dealsClosed: '€220K' // Sourced revenue
    },
    about: 'Relentless outbound engine. I specialize in cold email deliverability, Clay automation, and cold calling in the Nordics. I book meetings, you close them.',
    experience: [
      { role: 'SDR Manager', company: 'Pipedrive', duration: '2022 - Present', description: 'Managing a team of 3 SDRs, personally booking 40+ qualified meetings per month with VP-level buyers.' }
    ]
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
    top1Percent: true,
    metrics: {
      pipeline: '€3.1M',
      dealsClosed: '€1.1M'
    },
    about: 'Bilingual closer bridging the gap between CEE engineering and DACH enterprise clients. I specialize in long sales cycles (6-12 months).',
    experience: [
      { role: 'Sales Director DACH', company: 'Docplanner', duration: '2020 - 2024', description: 'Opened the German market from scratch, securing the first 50 enterprise hospital accounts.' }
    ]
  },
  {
    id: 5,
    name: 'Sophia Mueller',
    role: 'Market Entry Specialist',
    avatar: 'https://i.pravatar.cc/150?img=49',
    markets: ['DACH Region'],
    industries: ['FinTech', 'RegTech'],
    languages: ['ENG', 'GER'],
    availability: 'Half-time',
    isVerified: true,
    top1Percent: false,
    metrics: {
      pipeline: '€4.5M',
      dealsClosed: '€1.5M'
    },
    about: 'I help US and UK FinTechs enter Germany, Austria, and Switzerland. Deep regulatory knowledge and BaFin compliance connections.',
    experience: [
      { role: 'Head of Growth', company: 'N26', duration: '2016-2020', description: 'Pioneered B2B partner sales channels yielding €3M in net-new ARR.' }
    ]
  },
  {
    id: 6,
    name: 'Markus Berg',
    role: 'Technical SDR',
    avatar: 'https://i.pravatar.cc/150?img=60',
    markets: ['Nordics', 'Benelux'],
    industries: ['Cloud Infrastructure', 'DevTools'],
    languages: ['ENG', 'SWE', 'DUT'],
    availability: 'Full-time',
    isVerified: true,
    top1Percent: false,
    metrics: {
      pipeline: '€800K',
      dealsClosed: '€0' // As SDR, deals might be closed by AE
    },
    about: 'Former software engineer turned SDR. I speak the language of engineering directors and VPs of Engineering. I only pitch technical tools.',
    experience: [
      { role: 'SDR', company: 'Datadog', duration: '2022 - Present', description: 'Consistent 120% quota attainment selling premium observability suites into enterprise IT teams.' }
    ]
  }
];

export const getProfileById = (id) => {
  return DUMMY_PROFILES.find(p => p.id === parseInt(id));
};
