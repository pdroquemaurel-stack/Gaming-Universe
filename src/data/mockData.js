// Mocked UI data for the mobile gaming POC.

export const discoverItems = [
  {
    id: 'trend',
    title: 'Trending game',
    description: 'Neon Runner is exploding this week. Jump in now and beat the top score.',
    cta: 'Play now',
  },
  {
    id: 'weekly',
    title: 'Weekly tournament',
    description: 'Join Street Striker Cup and compete for community rewards.',
    cta: 'Join event',
  },
  {
    id: 'shop',
    title: 'Shop promotion',
    description: 'Get 20% off selected top-ups for a limited time.',
    cta: 'See deals',
  },
  {
    id: 'challenge',
    title: 'Daily challenge',
    description: 'Finish 3 arcade matches today to unlock a bonus badge.',
    cta: 'Start challenge',
  },
];

export const favoriteGames = [
  { id: 'fav-1', title: 'Neon Runner', genre: 'Arcade' },
  { id: 'fav-2', title: 'Puzzle Clash', genre: 'Puzzle' },
  { id: 'fav-3', title: 'Street Striker', genre: 'Sports' },
  { id: 'fav-4', title: 'Sky Tactics', genre: 'Strategy' },
];

export const lastPurchases = [
  { id: 'p-1', item: 'Diamond Pack', game: 'Neon Runner', price: '4,000 XOF' },
  { id: 'p-2', item: 'Weekly Pass', game: 'Street Striker', price: '2,500 XOF' },
  { id: 'p-3', item: 'Coin Boost', game: 'Puzzle Clash', price: '1,500 XOF' },
];

export const playCategories = ['Action', 'Puzzle', 'Sports', 'Arcade', 'Strategy'];

export const gamesByCategory = {
  Action: [
    { id: 'a-1', title: 'Blaze Ops', image: '⚔️' },
    { id: 'a-2', title: 'Shadow Raid', image: '🥷' },
    { id: 'a-3', title: 'Cyber Drift', image: '🏍️' },
  ],
  Puzzle: [
    { id: 'p-1', title: 'Color Merge', image: '🧩' },
    { id: 'p-2', title: 'Brain Link', image: '🧠' },
    { id: 'p-3', title: 'Puzzle Clash', image: '🔷' },
  ],
  Sports: [
    { id: 's-1', title: 'Street Striker', image: '⚽' },
    { id: 's-2', title: 'Hoops Now', image: '🏀' },
    { id: 's-3', title: 'Tennis Smash', image: '🎾' },
  ],
  Arcade: [
    { id: 'ar-1', title: 'Neon Runner', image: '🕹️' },
    { id: 'ar-2', title: 'Rocket Dash', image: '🚀' },
    { id: 'ar-3', title: 'Coin Hunter', image: '🪙' },
  ],
  Strategy: [
    { id: 'st-1', title: 'Sky Tactics', image: '☁️' },
    { id: 'st-2', title: 'Empire Grid', image: '🏰' },
    { id: 'st-3', title: 'Battle Board', image: '♟️' },
  ],
};

export const recommendedGames = [
  { id: 'r-1', title: 'Neon Runner', image: '🕹️' },
  { id: 'r-2', title: 'Street Striker', image: '⚽' },
  { id: 'r-3', title: 'Sky Tactics', image: '♟️' },
];

export const mostPlayedGames = [
  { id: 'm-1', title: 'Puzzle Clash', image: '🧩' },
  { id: 'm-2', title: 'Rocket Dash', image: '🚀' },
  { id: 'm-3', title: 'Blaze Ops', image: '⚔️' },
];

export const shopSections = {
  Popular: [
    { id: 'sp-1', title: 'Gold Pass', description: 'Premium rewards for 30 days.', price: '6,500 XOF' },
    { id: 'sp-2', title: 'Starter Bundle', description: 'Best value for new players.', price: '3,000 XOF' },
  ],
  'Top-ups': [
    { id: 'st-1', title: '60 Diamonds', description: 'Quick top-up for skins and boosts.', price: '1,500 XOF' },
    { id: 'st-2', title: '250 Diamonds', description: 'Popular package for regular players.', price: '5,000 XOF' },
  ],
  Deals: [
    { id: 'sd-1', title: 'Weekend Combo', description: 'Coins + energy at reduced price.', price: '2,200 XOF' },
    { id: 'sd-2', title: 'Flash Sale Pack', description: 'Limited-time discounted game pass.', price: '3,800 XOF' },
  ],
};

export const featuredTournament = {
  title: 'Max it Championship',
  description: 'Compete in intense 1v1 rounds this weekend and win community prizes.',
};

export const leaderboard = [
  { rank: 1, player: 'AwaGamer', points: 980 },
  { rank: 2, player: 'NeoKing', points: 930 },
  { rank: 3, player: 'PixelFox', points: 870 },
  { rank: 4, player: 'ZedShot', points: 820 },
  { rank: 5, player: 'MinaPro', points: 780 },
];

export const upcomingEvents = [
  'Saturday Showdown - 18:00',
  'Sunday Clash Cup - 16:30',
  'Arcade Finals - Tuesday 19:00',
];
