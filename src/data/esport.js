// Images en ligne : remplace `thumbnail`, `gameLogo` et `cover` avec des URLs HTTPS.
// Liens externes vidéo : utilise `youtubeUrl`, `twitchUrl` ou `externalUrl`.
export const esportVideos = {
  vod: [
    { id: 'tutorial-1', title: 'Bases de l’aim training', type: 'Tutoriel', duration: '8 min', source: 'YouTube', badgeLabel: 'Gratuit', badgeType: 'gratuit', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1280&q=80', youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
    { id: 'masterclass-1', title: 'Masterclass Free Fire', type: 'Masterclass', duration: '12 min', source: 'YouTube', badgeLabel: 'Premium', badgeType: 'premium', requiresSubscription: true, thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1280&q=80' },
    { id: 'interview-1', title: 'Interview pro : mindset clutch', type: 'Interview', duration: '10 min', source: 'Max it exclusive', badgeLabel: 'Gratuit', badgeType: 'gratuit', thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1280&q=80', externalUrl: 'https://www.orange.com' },
    { id: 'highlights-1', title: 'Highlights finales régionales', type: 'Highlights', duration: '15 min', source: 'Twitch', badgeLabel: 'Premium', badgeType: 'premium', requiresSubscription: true, thumbnail: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1280&q=80' },
  ],
  live: [
    { id: 'pubg-live-finals', title: 'Finales régionales PUBG Mobile', game: 'PUBG Mobile', status: 'En direct', time: 'Aujourd’hui 20:00', source: 'Twitch', badgeLabel: 'Direct', badgeType: 'live', thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1280&q=80', twitchUrl: 'https://www.twitch.tv' },
    { id: 'ff-scrims', title: 'Scrims communautaires Free Fire', game: 'Free Fire', status: 'À venir', time: 'Demain 18:30', source: 'YouTube', badgeLabel: 'Gratuit', badgeType: 'gratuit', thumbnail: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1280&q=80', youtubeUrl: 'https://www.youtube.com' },
  ],
};

export const esportTournaments = [
  { id: 'ff-maxit-cup', name: 'Free Fire Max it Cup', game: 'Free Fire', gameLogo: 'https://play-lh.googleusercontent.com/Tzh1vMigK1Cn7_KIaMvKBVQRQapIMWMMqqyA6UqJTAYRpino4vvX6ZvYcVjZ_D8g19-DfHKCVeO2QPWl8vHGzw=s256-rw', cover: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1280&q=80', status: 'in-progress', statusLabel: 'En cours', players: 128, prize: 'Samsung S25 + 50 Go data', dateLabel: '2 jours restants', format: 'Solo Battle Royale', date: '3 mai 2026', requirements: 'Ouvert à tous les utilisateurs Max it', cta: 'Voir le tournoi' },
  { id: 'pubg-open', name: 'PUBG Orange Open', game: 'PUBG Mobile', gameLogo: 'https://play-lh.googleusercontent.com/BBcJg2SjdGN2XW8FRzv56Z3_MkfHSgCj50hiv6_4-3__B8fcQfFSn-quFWywbs0a1mXB=s256-rw', cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1280&q=80', status: 'open-registration', statusLabel: 'Inscriptions ouvertes', players: 256, prize: '500€ + 100 Go data', dateLabel: 'Démarre dans 4 jours', format: 'Squad (4v4)', date: '8 mai 2026', requirements: 'Niveau joueur 10+', cta: 'S’inscrire' },
  {
    id: 'maxit-elite-cup',
    name: 'Max it Elite Cup',
    game: 'Free Fire',
    gameLogo: 'https://play-lh.googleusercontent.com/Tzh1vMigK1Cn7_KIaMvKBVQRQapIMWMMqqyA6UqJTAYRpino4vvX6ZvYcVjZ_D8g19-DfHKCVeO2QPWl8vHGzw=s256-rw',
    cover: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1280&q=80',
    status: 'open-registration',
    statusLabel: 'Inscriptions ouvertes',
    players: 256,
    prize: 'Samsung S25 + 50 Go data',
    dateLabel: '5 jours restants',
    format: 'Battle Royale Solo',
    date: '12 mai 2026',
    requirements: 'Abonnement Premium actif requis',
    cta: 'S’inscrire',
    isPremium: true,
    requiresSubscription: true,
  },
  { id: 'fc-future', name: 'FC Mobile Future Stars', game: 'EA Sports FC', gameLogo: 'https://play-lh.googleusercontent.com/yQHb1bk88ENXLZ2_ZO-st7cuG78pva5yRAge2CjhBPoBoEng1ouxyx30vK4s4Z7553Kohd9pPVm1GC2Phs8slA=s256-rw', cover: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1280&q=80', status: 'future', statusLabel: 'À venir', players: 64, prize: 'Pass VIP + pack coins', dateLabel: 'Dans 12 jours', format: '1v1 Knockout', date: '16 mai 2026', requirements: 'Inscriptions bientôt disponibles', cta: 'Me notifier' },
];

export const premiumPlans = [
  {
    id: 'day-pass',
    name: 'Pass 1 jour',
    duration: '24h',
    price: '0,49€',
    pointsPrice: 100,
    benefits: ['Vidéos premium', 'Tournois premium', 'Accès pendant 24h'],
    badge: 'Découverte',
  },
  {
    id: 'week-pass',
    name: 'Pass 7 jours',
    duration: '7 jours',
    price: '1,99€',
    pointsPrice: 500,
    benefits: ['Accès premium', 'Bonus quotidien', 'Vidéos + compétitions'],
  },
  {
    id: 'month-pass',
    name: 'Pass 30 jours',
    duration: '30 jours',
    price: '4,99€',
    pointsPrice: 1500,
    benefits: ['Accès premium complet', 'Bonus points x2', 'Badge abonné'],
    badge: 'Meilleure offre',
  },
];
