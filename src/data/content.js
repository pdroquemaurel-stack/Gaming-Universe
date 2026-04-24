export const homeFeatures = [
  {
    title: 'Play',
    to: '/play',
    whatItDoes: 'Helps players discover free games and daily challenges in one place.',
    whyItMatters: 'Makes gaming easy to start, even for users with low budgets.',
    businessImpact: 'Boosts traffic, DAU growth, and ads monetization opportunities.'
  },
  {
    title: 'Shop',
    to: '/shop',
    whatItDoes: 'Sells gift cards and in-game currency through a simple checkout.',
    whyItMatters: 'Users can top-up quickly without leaving the app.',
    businessImpact: 'Increases revenue, conversion rate, and ARPU.'
  },
  {
    title: 'Esport',
    to: '/esport',
    whatItDoes: 'Organizes tournaments, tracks leaderboard, and distributes rewards.',
    whyItMatters: 'Turns casual users into a loyal gaming community.',
    businessImpact: 'Improves retention and unlocks sponsorship potential.'
  }
];

export const playData = {
  games: [
    { name: 'Neon Racer', genre: 'Arcade', challenge: 'Complete 3 races today' },
    { name: 'Puzzle Clash', genre: 'Puzzle', challenge: 'Finish 5 levels with no hints' },
    { name: 'Battle Arena Lite', genre: 'Action', challenge: 'Win 2 matches in ranked mode' }
  ],
  metrics: [
    { label: 'Traffic', value: '+34% MoM', hint: 'More users exploring game content daily' },
    { label: 'DAU', value: '120K', hint: 'Strong daily engagement from mobile gamers' },
    { label: 'Ads revenue', value: '$18K / month', hint: 'Monetization from free-to-play audience' }
  ]
};

export const shopData = {
  items: [
    { name: 'Free Fire Gift Card', price: '$5', payment: 'Orange Money / Airtime' },
    { name: 'PUBG UC Top-up', price: '$10', payment: 'Orange Money / Airtime' },
    { name: 'Mobile Legends Diamonds', price: '$8', payment: 'Orange Money / Airtime' }
  ],
  metrics: [
    { label: 'Revenue', value: '$52K / month', hint: 'Digital products sold in-app' },
    { label: 'Conversion rate', value: '6.2%', hint: 'Visitors converting to buyers' },
    { label: 'ARPU', value: '$4.90', hint: 'Average revenue per active user' }
  ]
};

export const esportData = {
  tournaments: [
    { name: 'Friday Night Cup', format: 'Solo knockout', reward: '$200 + data bundles' },
    { name: 'Campus Clash', format: 'Team tournament', reward: 'Gaming phones + airtime' },
    { name: 'Monthly Pro Qualifier', format: 'Regional qualifiers', reward: 'Sponsor contracts' }
  ],
  leaderboard: [
    { rank: 1, player: 'AyoBlaze', points: 3200 },
    { rank: 2, player: 'NoraGG', points: 2970 },
    { rank: 3, player: 'KofiRush', points: 2810 }
  ],
  metrics: [
    { label: 'Retention', value: '+22%', hint: 'Players return for events and rankings' },
    { label: 'Community size', value: '48K members', hint: 'Active tournament and chat users' },
    { label: 'Sponsorship', value: '$30K pipeline', hint: 'Brand interest in esport activations' }
  ]
};
