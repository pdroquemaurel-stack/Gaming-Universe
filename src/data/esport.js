export const esportVideos = {
  vod: [
    { id: 'tutorial-1', title: 'Aim training basics', type: 'Tutorial', duration: '8 min', access: 'Free', thumbnail: '/assets/esport/videos/tutorial-aim.png' },
    { id: 'masterclass-1', title: 'Free Fire Masterclass', type: 'Masterclass', duration: '12 min', access: 'Premium', thumbnail: '/assets/esport/videos/freefire-masterclass.png' },
    { id: 'interview-1', title: 'Pro interview: clutch mindset', type: 'Interview', duration: '10 min', access: 'Free', thumbnail: '/assets/esport/videos/pro-interview.png' },
    { id: 'highlights-1', title: 'Regional finals highlights', type: 'Highlights', duration: '15 min', access: 'Premium', thumbnail: '/assets/esport/videos/finals-highlights.png' },
  ],
  live: [
    { id: 'pubg-live-finals', title: 'PUBG Mobile Regional Finals', game: 'PUBG Mobile', status: 'Live now', time: 'Today 20:00', access: 'Free', thumbnail: '/assets/esport/live/pubg-finals.png' },
    { id: 'ff-scrims', title: 'Free Fire Community Scrims', game: 'Free Fire', status: 'Upcoming', time: 'Tomorrow 18:30', access: 'Subscribers only', thumbnail: '/assets/esport/live/freefire-scrims.png' },
  ],
};

export const esportTournaments = [
  { id: 'ff-maxit-cup', name: 'Free Fire Max it Cup', game: 'Free Fire', gameLogo: '/assets/esport/tournaments/freefire.png', status: 'in-progress', players: 128, prize: 'Samsung S25 + 50GB data', dateLabel: '2 days left', format: 'Solo Battle Royale', date: 'May 03, 2026', requirements: 'Open to all Max it users', cta: 'Voir le tournoi' },
  { id: 'pubg-open', name: 'PUBG Orange Open', game: 'PUBG Mobile', gameLogo: '/assets/esport/tournaments/pubg.png', status: 'open-registration', players: 256, prize: '500€ + 100GB data', dateLabel: 'Starts in 4 days', format: 'Squad (4v4)', date: 'May 08, 2026', requirements: 'Player level 10+', cta: 'S’inscrire' },
  { id: 'fc-future', name: 'FC Mobile Future Stars', game: 'EA Sports FC', gameLogo: '/assets/esport/tournaments/fc.png', status: 'future', players: 64, prize: 'VIP pass + coins pack', dateLabel: 'In 12 days', format: '1v1 Knockout', date: 'May 16, 2026', requirements: 'Registration opens soon', cta: 'Me notifier' },
];
