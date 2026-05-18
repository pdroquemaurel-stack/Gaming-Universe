import { imagePlaceholders } from '../assets/imagePlaceholders';

export const playerProfile = {
  name: 'Paul',
  level: 'Niveau 8',
  xpProgress: 68,
  coins: 2450,
  dailyStreak: 5,
  country: 'Maroc',
  points: 720,
  rank: 12,
};

export const missions = [
  {
    id: 'mission-today',
    title: 'Mission du jour',
    text: 'Joue à 3 jeux et gagne 100 points',
    cta: 'Commencer',
    reward: '+100 points',
    image: imagePlaceholders.rewards.dailyMission,
  },
];

export const pillars = [
  {
    id: 'pillar-play',
    title: 'Free Gaming',
    subtitle: 'Instant games to drive engagement',
    cta: 'Jouer maintenant',
    page: 'play',
  },
  {
    id: 'pillar-shop',
    title: 'Gameshop',
    subtitle: 'Recharges, pass et contenus digitaux',
    cta: 'Voir la boutique',
    page: 'shop',
  },
  {
    id: 'pillar-esport',
    title: 'Esport',
    subtitle: 'Tournois et compétition communautaire',
    cta: 'Participer',
    page: 'esport',
  },
  {
    id: 'pillar-leaderboard',
    title: 'Leaderboard',
    subtitle: 'Reconnaissance, classement et récompenses',
    cta: 'Voir le classement',
    page: 'leaderboard',
  },
];

export const discoverItems = [
  {
    id: 'discover-trend',
    title: 'Jeu tendance',
    description: 'Neon Runner explose cette semaine au Maroc et au Sénégal.',
    cta: 'Jouer maintenant',
    image: imagePlaceholders.discover.trending,
    fallback: '🔥',
  },
  {
    id: 'discover-weekly',
    title: 'Tournoi hebdomadaire',
    description: 'La Street Striker Cup ouvre ce vendredi avec des prix régionaux.',
    cta: 'Rejoindre',
    image: imagePlaceholders.discover.weekly,
    fallback: '🏆',
  },
  {
    id: 'discover-shop',
    title: 'Promo boutique',
    description: 'Les bundles recharge incluent des bonus points pour les utilisateurs Orange Money.',
    cta: 'Voir les offres',
    image: imagePlaceholders.discover.promo,
    fallback: '🛍️',
  },
  {
    id: 'discover-daily',
    title: 'Défi du jour',
    description: 'Termine le défi du jour et débloque un badge mission.',
    cta: 'Commencer le défi',
    image: imagePlaceholders.discover.challenge,
    fallback: '🎯',
  },
];

export const favoriteGames = [
  { id: 'fav-1', title: 'Neon Runner', genre: 'Arcade', image: imagePlaceholders.favorites.neonRunner, fallback: '🕹️' },
  { id: 'fav-2', title: 'Puzzle Clash', genre: 'Puzzle', image: imagePlaceholders.play.puzzle, fallback: '🧩' },
  { id: 'fav-3', title: 'Street Striker', genre: 'Sport', image: imagePlaceholders.play.sports, fallback: '⚽' },
  { id: 'fav-4', title: 'Sky Tactics', genre: 'Strategy', image: imagePlaceholders.play.strategy, fallback: '♟️' },
];

export const lastPurchases = [
  { id: 'purchase-1', item: 'Pack Diamants', game: 'Neon Runner', price: '39 MAD', image: imagePlaceholders.purchase.diamondPack, icon: '💎' },
  { id: 'purchase-2', item: 'Pass Premium', game: 'Street Striker', price: '2,500 XOF', image: imagePlaceholders.shop.pass, icon: '🎟️' },
  { id: 'purchase-3', item: 'Pack Coins', game: 'Puzzle Clash', price: '1,900 XOF', image: imagePlaceholders.shop.coins, icon: '🪙' },
];

export const playCategories = ['Action', 'Puzzle', 'Sports', 'Arcade', 'Strategy'];

export const gamesByCategory = {
  Action: [
    {
      id: 'action-1',
      title: 'Blaze Ops',
      genre: 'Action',
      image: imagePlaceholders.play.action,
      tags: ['Free', 'Trending'],
      reward: 'Earn 40 coins in 2 wins',
      fallback: '⚔️',
    },
    {
      id: 'action-2',
      title: 'Shadow Raid',
      genre: 'Action',
      image: imagePlaceholders.play.action,
      tags: ['Free', 'New'],
      reward: '',
      fallback: '🥷',
    },
  ],
  Puzzle: [
    {
      id: 'puzzle-1',
      title: 'Puzzle Clash',
      genre: 'Puzzle',
      image: imagePlaceholders.play.puzzle,
      tags: ['Free', 'Rewarded'],
      reward: 'Complete 3 rounds for +60 coins',
      fallback: '🧩',
    },
    {
      id: 'puzzle-2',
      title: 'Brain Link',
      genre: 'Puzzle',
      image: imagePlaceholders.play.puzzle,
      tags: ['Free', 'New'],
      reward: '',
      fallback: '🧠',
    },
  ],
  Sports: [
    {
      id: 'sports-1',
      title: 'Street Striker',
      genre: 'Sport',
      image: imagePlaceholders.play.sports,
      tags: ['Trending', 'Rewarded'],
      reward: 'Win 1 match for mission progress',
      fallback: '⚽',
    },
    {
      id: 'sports-2',
      title: 'Hoops Now',
      genre: 'Sport',
      image: imagePlaceholders.play.sports,
      tags: ['Free'],
      reward: '',
      fallback: '🏀',
    },
  ],
  Arcade: [
    {
      id: 'arcade-1',
      title: 'Neon Runner',
      genre: 'Arcade',
      image: imagePlaceholders.play.arcade,
      tags: ['Free', 'Trending'],
      reward: 'Top 10 run gets bonus badge',
      fallback: '🕹️',
    },
    {
      id: 'arcade-2',
      title: 'Rocket Dash',
      genre: 'Arcade',
      image: imagePlaceholders.play.arcade,
      tags: ['New'],
      reward: '',
      fallback: '🚀',
    },
  ],
  Strategy: [
    {
      id: 'strategy-1',
      title: 'Sky Tactics',
      genre: 'Strategy',
      image: imagePlaceholders.play.strategy,
      tags: ['Free', 'Rewarded'],
      reward: 'Daily strategy mission +80 coins',
      fallback: '♟️',
    },
    {
      id: 'strategy-2',
      title: 'Empire Grid',
      genre: 'Strategy',
      image: imagePlaceholders.play.strategy,
      tags: ['Free'],
      reward: '',
      fallback: '🏰',
    },
  ],
};

export const shopSections = {
  'Recharges': [
    {
      id: 'shop-1',
      title: 'Diamond Boost Pack',
      description: 'Fast refill for skins and upgrades.',
      price: '1,900 XOF',
      image: imagePlaceholders.shop.coins,
      category: 'Recharges',
      badge: 'Populaire',
      fallback: '💎',
    },
    {
      id: 'shop-2',
      title: 'Mega Coin Pack',
      description: 'High-volume coins for heavy players.',
      price: '59 MAD',
      image: imagePlaceholders.shop.coins,
      category: 'Recharges',
      badge: '',
      fallback: '🪙',
    },
  ],
  'Pass de jeu': [
    {
      id: 'shop-3',
      title: 'Premium Pass',
      description: '30-day rewards and exclusive missions.',
      price: '2,500 XOF',
      image: imagePlaceholders.shop.pass,
      category: 'Pass de jeu',
      badge: 'Meilleure offre',
      fallback: '🎟️',
    },
  ],
  'Cartes cadeaux': [
    {
      id: 'shop-4',
      title: 'Gaming Gift Card',
      description: 'Send value to friends and family.',
      price: '5,000 XOF',
      image: imagePlaceholders.shop.giftCard,
      category: 'Cartes cadeaux',
      badge: '',
      fallback: '🎁',
    },
  ],
  Offres: [
    {
      id: 'shop-5',
      title: 'Weekend Deal Bundle',
      description: 'Pass + coins with limited promo pricing.',
      price: '3,900 XOF',
      image: imagePlaceholders.shop.deal,
      category: 'Offres',
      badge: 'Limité',
      fallback: '🔥',
    },
  ],
};

export const tournaments = [
  {
    id: 'tournament-1',
    title: 'Max it Champions Cup',
    game: 'Street Striker',
    status: 'À venir',
    prizePool: '120,000 XOF',
    participants: 128,
    image: imagePlaceholders.esport.featured,
    fallback: '🏆',
  },
  {
    id: 'tournament-2',
    title: 'Neon Rush Live Cup',
    game: 'Neon Runner',
    status: 'En direct',
    prizePool: '80,000 XOF',
    participants: 96,
    image: imagePlaceholders.esport.liveCup,
    fallback: '⚡',
  },
  {
    id: 'tournament-3',
    title: 'Community Clash Finals',
    game: 'Sky Tactics',
    status: 'Fermé',
    prizePool: '45,000 XOF',
    participants: 64,
    image: imagePlaceholders.esport.communityClash,
    fallback: '🎮',
  },
];

export const leaderboardGlobal = [
  { rank: 1, player: 'AwaGamer', country: 'Senegal', points: 980, badge: 'Légende' },
  { rank: 2, player: 'NeoKing', country: "Côte d’Ivoire", points: 945, badge: 'Pro' },
  { rank: 3, player: 'PixelFox', country: 'Maroc', points: 920, badge: 'Élite' },
  { rank: 12, player: 'AkosuaK95', country: 'Sénégal', points: 720, badge: 'Montant' },
  { rank: 14, player: 'CamGiant', country: 'Cameroun', points: 700, badge: 'Montant' },
];

export const leaderboardCountry = [
  { rank: 1, player: 'MinaAtlas', country: 'Maroc', points: 900, badge: 'Légende' },
  { rank: 2, player: 'RifSniper', country: 'Maroc', points: 860, badge: 'Pro' },
  { rank: 3, player: 'Casashot', country: 'Maroc', points: 820, badge: 'Élite' },
  { rank: 12, player: 'AkosuaK95', country: 'Sénégal', points: 720, badge: 'Montant' },
  { rank: 16, player: 'AtlasJoy', country: 'Maroc', points: 670, badge: 'Compétiteur' },
];

export const leaderboardFriends = [
  { rank: 1, player: 'Amine', country: 'Maroc', points: 760, badge: 'Élite' },
  { rank: 2, player: 'AkosuaK95', country: 'Sénégal', points: 720, badge: 'Montant' },
  { rank: 3, player: 'Fatou', country: 'Senegal', points: 690, badge: 'Compétiteur' },
  { rank: 4, player: 'Kader', country: 'Mali', points: 655, badge: 'Compétiteur' },
  { rank: 5, player: 'Aya', country: 'Cameroun', points: 620, badge: 'Starter' },
];

export const rewards = [
  { id: 'reward-1', title: 'Coins bonus', detail: '+150 coins for daily streak', image: imagePlaceholders.rewards.coins, fallback: '🪙' },
  { id: 'reward-2', title: 'Arena badge', detail: 'Top 20 in country ranking', image: imagePlaceholders.rewards.badge, fallback: '🏅' },
  { id: 'reward-3', title: 'Mission boost', detail: 'Complete all missions this week', image: imagePlaceholders.rewards.dailyMission, fallback: '🎯' },
];

export const upcomingEvents = [
  { id: 'event-1', title: 'Saturday Showdown', date: 'Saturday • 18:00', region: 'Morocco & Senegal' },
  { id: 'event-2', title: 'Orange Cup en direct', date: 'Dimanche • 16:30', region: "Côte d’Ivoire" },
  { id: 'event-3', title: 'Arcade Open Night', date: 'Tuesday • 19:00', region: 'Cameroon & Mali' },
];
