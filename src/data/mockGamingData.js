export const playerDefaults = {
  name: 'Paul',
  avatar: 'P',
  level: 7,
  xp: 1340,
  xpTarget: 2000,
  points: 420,
  streakCount: 4,
  lastClaimDate: null,
  activities: [],
};

export const continuePlayingGames = [
  { id: 'g1', visual: '⚔️', name: 'Free Fire', progress: 65, reward: '+25 XP • +10 Max it Points' },
  { id: 'g2', visual: '🚗', name: 'Asphalt', progress: 40, reward: '+25 XP • +10 Max it Points' },
];

export const dailyMissions = [
  { id: 'm1', title: 'Joue à 2 jeux', progress: 1, total: 2, reward: '+50 XP' },
  { id: 'm2', title: 'Participe à un tournoi', progress: 0, total: 1, reward: '+100 Max it Points' },
  { id: 'm3', title: 'Découvre une offre Gaming Data', progress: 0, total: 1, reward: '+25 XP' },
];

export const leaderboard = [
  { name: 'Amina', points: 1280 },
  { name: 'Paul', points: 1170, current: true },
  { name: 'Karim', points: 980 },
];
