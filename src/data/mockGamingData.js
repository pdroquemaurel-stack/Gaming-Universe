export const playerDefaults = {
  name: 'Paul',
  avatar: 'P',
  level: 7,
  xp: 1340,
  xpTarget: 2000,
  wallet: 2500,
  coins: 420,
  streak: 4,
};

export const continuePlayingGames = [
  { id: 'ff', name: 'Free Fire', progress: 72, lastSession: 'Tournoi en cours', reward: '+25 XP possible', visual: '🔥' },
  { id: 'asphalt', name: 'Asphalt', progress: 45, lastSession: 'Continue ta série', reward: '+20 XP possible', visual: '🏎️' },
  { id: 'bubble', name: 'Bubble Heroes', progress: 20, lastSession: 'Casual quick play', reward: '+15 XP possible', visual: '🫧' },
];

export const dailyMissions = [
  { id: 'm1', title: 'Joue à 2 jeux', progress: 1, total: 2, reward: '+50 XP', status: 'In progress', cta: 'Play now' },
  { id: 'm2', title: 'Participe à un challenge', progress: 0, total: 1, reward: '+100 coins', status: 'Locked', cta: 'Join challenge' },
  { id: 'm3', title: 'Achète ou découvre un bundle gaming', progress: 0, total: 1, reward: '+25 XP', status: 'In progress', cta: 'Discover bundles' },
];

export const bundles = [
  { id: 'b1', name: 'DATA Free Fire', details: '1 Go dédié Free Fire', validity: '7 jours', price: 500, bonus: '+50 gaming coins', coinsBonus: 50, xpBonus: 0, cta: 'Buy with Orange Wallet' },
  { id: 'b2', name: 'DATA Gameloft', details: '2 Go dédiés aux jeux Gameloft', validity: '14 jours', price: 1000, bonus: '+100 XP', coinsBonus: 0, xpBonus: 100, cta: 'Buy with Orange Wallet' },
  { id: 'b3', name: 'Gaming Night Pass', details: 'Data gaming illimitée de 22h à 6h', validity: '1 nuit', price: 300, bonus: 'streak boost x2', coinsBonus: 0, xpBonus: 0, cta: 'Activate' },
  { id: 'b4', name: 'Esport Pack', details: '3 Go gaming + accès tournoi premium', validity: '30 jours', price: 2000, bonus: 'badge premium', coinsBonus: 0, xpBonus: 0, cta: 'Subscribe' },
];

export const leaderboard = [
  { name: 'Amine', points: '12 450' },
  { name: 'Sarah', points: '11 980' },
  { name: 'Paul', points: '10 750', current: true },
  { name: 'Kevin', points: '9 800' },
];
