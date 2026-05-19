// Images en ligne : modifie chaque champ `image` avec une URL HTTPS.
// Si l'URL ne charge pas, AssetImage affiche automatiquement le fallback.
export const playCategories = [
  {
    id: 'arcade',
    label: 'Arcade',
    instantPlay: [
      { id: 'catch-the-coin', name: 'Catch the Coin', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80', description: 'Attrape un maximum de pièces en 20 secondes.', dailyMission: 'Collecter un maximum de pièces en 20 secondes', points: 100, lastPlayed: true, recommended: true, popular: true, fallback: '🪙', todayPlayers: 1240, dailyBestScores: [{ name: 'Amina', score: 42 }, { name: 'Paul', score: 38 }, { name: 'Karim', score: 35 }] },
      { id: 'neon-runner', name: 'Neon Runner', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80', description: 'Course infinie et ultra nerveuse.', dailyMission: 'Courir 3 minutes', points: 70, recommended: true, popular: true, fallback: '🕹️', todayPlayers: 790, dailyBestScores: [{ name: 'Ilyes', score: 29 }, { name: 'Aya', score: 27 }, { name: 'Nora', score: 25 }] },
      { id: 'pixel-jump', name: 'Pixel Jump', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80', description: 'Saute de plateforme en plateforme sans tomber.', dailyMission: 'Atteindre le niveau 10', points: 60, popular: true, fallback: '🕹️', todayPlayers: 560, dailyBestScores: [{ name: 'Mehdi', score: 18 }, { name: 'Sana', score: 16 }, { name: 'Omar', score: 14 }] },
    ],
    apps: [
      { id: 'subway-surfers', name: 'Subway Surfers', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf', image: 'https://play-lh.googleusercontent.com/rIMQN2JTiHSCj7IezGHkhE39-F66y3Epqlt-iyvveGzT5n0CPOrYDpSePQ7rZBvMJRY=s256-rw', rating: '4.5', downloads: '1B+', points: 180, fallback: '🏃' },
      { id: 'temple-run', name: 'Temple Run 2', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.imangi.templerun2', image: 'https://play-lh.googleusercontent.com/O0aOZfCqfOSvDNDc-_JCUFtVMGHhbGEuWHHYpirNvHXi0MWknCwJNqnQNHxD4cRx7Q=s256-rw', rating: '4.3', downloads: '500M+', points: 150, fallback: '🏃' },
    ],
  },
  {
    id: 'puzzle',
    label: 'Puzzle',
    instantPlay: [
      { id: 'bubble-dash', name: 'Bubble Dash', image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80', description: 'Un puzzle rapide et accessible.', dailyMission: 'Terminer 3 niveaux aujourd\'hui', points: 80, lastPlayed: true, recommended: true, popular: true, fallback: '🧩', todayPlayers: 840, dailyBestScores: [{ name: 'Amina', score: 42 }, { name: 'Paul', score: 38 }, { name: 'Karim', score: 35 }] },
      { id: 'puzzle-rush', name: 'Puzzle Rush', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80', description: 'Enchaîne les combos avant la fin du temps.', dailyMission: 'Finir 2 manches', points: 100, recommended: true, fallback: '🧠', todayPlayers: 660, dailyBestScores: [{ name: 'Meryem', score: 31 }, { name: 'Yassine', score: 28 }, { name: 'Lina', score: 26 }] },
      { id: 'color-match', name: 'Color Match', image: 'https://images.unsplash.com/photo-1608501078713-8e445a709b39?auto=format&fit=crop&w=1200&q=80', description: 'Aligne les couleurs avant la fin du temps.', dailyMission: 'Faire 3 combos parfaits', points: 75, popular: true, fallback: '🎨', todayPlayers: 440, dailyBestScores: [{ name: 'Fatou', score: 22 }, { name: 'Amine', score: 20 }, { name: 'Rania', score: 18 }] },
    ],
    apps: [
      { id: 'royal-kingdom', name: 'Royal Kingdom', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dreamgames.royalkingdom', image: 'https://play-lh.googleusercontent.com/nAAF2bxrD2BeoM1IkUZ6qeRG_QGG_Rekrrh4VYQSMDeRa7FR8sWMWaHClID547XJ3D4=s256-rw', rating: '4.5', downloads: '10M+', points: 200, recommended: true, popular: true, fallback: '👑' },
      { id: 'candy-crush', name: 'Candy Crush Saga', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga', image: 'https://play-lh.googleusercontent.com/JvMhIxuwArVmcMReJQB8PIEB1MIQNMGf9j5i914JtkBrHrA55K-nMUIVlYCa7SXAdHtzLtsycEo6NpXeHFxLwvI=s256-rw', rating: '4.5', downloads: '1B+', points: 160, fallback: '🍬' },
    ],
  },
  {
    id: 'sport',
    label: 'Sport',
    instantPlay: [
      { id: 'street-kick', name: 'Street Kick', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80', description: 'Football arcade en session rapide.', dailyMission: 'Marquer 5 buts', points: 90, lastPlayed: true, popular: true, fallback: '⚽', todayPlayers: 1030, dailyBestScores: [{ name: 'Sami', score: 15 }, { name: 'Noha', score: 13 }, { name: 'Rachid', score: 12 }] },
      { id: 'basket-rush', name: 'Basket Rush', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80', description: 'Tirs libres en mode chrono.', dailyMission: 'Marquer 10 paniers', points: 80, recommended: true, fallback: '🏀', todayPlayers: 720, dailyBestScores: [{ name: 'Kofi', score: 24 }, { name: 'Dina', score: 21 }, { name: 'Brahim', score: 19 }] },
      { id: 'ping-blast', name: 'Ping Blast', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80', description: 'Tennis de table ultra rapide.', dailyMission: 'Gagner 3 sets', points: 70, popular: true, fallback: '🏓', todayPlayers: 480, dailyBestScores: [{ name: 'Leila', score: 18 }, { name: 'Samuel', score: 16 }, { name: 'Nadia', score: 15 }] },
    ],
    apps: [
      { id: 'pubg-mobile', name: 'PUBG Mobile', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig', image: 'https://play-lh.googleusercontent.com/BBcJg2SjdGN2XW8FRzv56Z3_MkfHSgCj50hiv6_4-3__B8fcQfFSn-quFWywbs0a1mXB=s256-rw', rating: '4.1', downloads: '500M+', points: 300, recommended: true, popular: true, fallback: '🪖' },
      { id: 'ea-fc-mobile', name: 'EA Sports FC Mobile', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile', image: 'https://play-lh.googleusercontent.com/yQHb1bk88ENXLZ2_ZO-st7cuG78pva5yRAge2CjhBPoBoEng1ouxyx30vK4s4Z7553Kohd9pPVm1GC2Phs8slA=s256-rw', rating: '4.3', downloads: '100M+', points: 250, popular: true, fallback: '⚽' },
    ],
  },
  {
    id: 'racing',
    label: 'Course',
    instantPlay: [
      { id: 'turbo-drift', name: 'Turbo Drift', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80', description: 'Course arcade, drifts et virages serrés.', dailyMission: 'Finir 3 circuits en moins de 60s', points: 120, popular: true, fallback: '🏎️', todayPlayers: 650, dailyBestScores: [{ name: 'Issa', score: 55 }, { name: 'Meryem', score: 52 }, { name: 'Kader', score: 48 }] },
      { id: 'speed-rivals', name: 'Speed Rivals', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80', description: 'Duel de vitesse, battre le chrono.', dailyMission: 'Battre ton meilleur temps 2 fois', points: 100, recommended: true, fallback: '🚗', todayPlayers: 520, dailyBestScores: [{ name: 'Tariq', score: 47 }, { name: 'Sofia', score: 44 }, { name: 'Anass', score: 41 }] },
    ],
    apps: [
      { id: 'asphalt-9', name: 'Asphalt 9: Legends', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM', image: 'https://play-lh.googleusercontent.com/LT8N5jXDBm8BLIKMKWCw3lXqCVNdXbVA5nxP1g2aK9R3kVuMJQDMdBNJAWx0HpGE_w=s256-rw', rating: '4.5', downloads: '100M+', points: 280, popular: true, fallback: '🏁' },
      { id: 'real-racing', name: 'Real Racing 3', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ea.games.r3_row', image: 'https://play-lh.googleusercontent.com/GkBe0PRJB4oZHT8E2O6xG9t8FCLA8OFCrDAI6uJRRwO5gZWnrwbFyiJcLR_OoRyvHOs=s256-rw', rating: '4.2', downloads: '500M+', points: 220, recommended: true, fallback: '🚗' },
    ],
  },
  {
    id: 'trivia',
    label: 'Quiz',
    instantPlay: [
      { id: 'brain-quest', name: 'Brain Quest', image: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&w=1200&q=80', description: 'Culture générale, 10 questions, le plus vite possible.', dailyMission: '5 bonnes réponses d\'affilée', points: 80, recommended: true, popular: true, fallback: '🧠', todayPlayers: 870, dailyBestScores: [{ name: 'Yasmine', score: 950 }, { name: 'Mehdi', score: 880 }, { name: 'Lina', score: 830 }] },
      { id: 'culture-clash', name: 'Culture Clash', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80', description: 'Quiz gaming & pop culture en duel.', dailyMission: 'Gagner 3 duels', points: 90, fallback: '🎯', todayPlayers: 610, dailyBestScores: [{ name: 'Anissa', score: 820 }, { name: 'Jonas', score: 780 }, { name: 'Dina', score: 740 }] },
      { id: 'speed-quiz', name: 'Speed Quiz', image: 'https://images.unsplash.com/photo-1484069560501-87d72b0e3d04?auto=format&fit=crop&w=1200&q=80', description: 'Réponds le plus vite possible pour scorer.', dailyMission: 'Répondre à 20 questions', points: 70, fallback: '⚡', todayPlayers: 390, dailyBestScores: [{ name: 'Rania', score: 700 }, { name: 'Youssef', score: 660 }, { name: 'Hiba', score: 630 }] },
    ],
    apps: [
      { id: 'kahoot', name: 'Kahoot!', playStoreUrl: 'https://play.google.com/store/apps/details?id=no.mobitroll.kahoot.android', image: 'https://play-lh.googleusercontent.com/kpkELPq-bOL3OFDEiuB7gDTfFpZSjnwCCPkCkW6YNpqjnhYrh0QxNRrB3JyEAVWHb0=s256-rw', rating: '4.5', downloads: '50M+', points: 120, fallback: '❓' },
      { id: 'trivia-crack', name: 'Trivia Crack', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.etermax.trivia.freetobplay', image: 'https://play-lh.googleusercontent.com/RCjj7R2kMOqKtQ_vVpqG0Tq7q-xVYMGY1jxH7G-3wQ3nOQOJrPDFnX8l4RXIF7bnQ=s256-rw', rating: '4.3', downloads: '100M+', points: 130, recommended: true, fallback: '🎲' },
    ],
  },
  {
    id: 'strategy',
    label: 'Stratégie',
    instantPlay: [
      { id: 'tower-rush', name: 'Tower Rush', image: 'https://images.unsplash.com/photo-1579370318443-8da816457f49?auto=format&fit=crop&w=1200&q=80', description: 'Défends ta base contre les vagues ennemies.', dailyMission: 'Survivre 5 vagues', points: 110, recommended: true, popular: true, fallback: '🏰', todayPlayers: 730, dailyBestScores: [{ name: 'Tarek', score: 38 }, { name: 'Amira', score: 35 }, { name: 'Sofiane', score: 33 }] },
      { id: 'kingdom-builder', name: 'Kingdom Builder', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1200&q=80', description: 'Construis ton empire en temps réel.', dailyMission: 'Construire 3 bâtiments', points: 90, fallback: '⚔️', todayPlayers: 490, dailyBestScores: [{ name: 'Ismail', score: 28 }, { name: 'Rokia', score: 25 }, { name: 'Bilal', score: 23 }] },
    ],
    apps: [
      { id: 'clash-of-clans', name: 'Clash of Clans', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans', image: 'https://play-lh.googleusercontent.com/13T7cTc0pVmNBwFkB8pSB0LnNlGPgpAHsQhKqEZMv6g-y2MqJIiO4wJmhMqmwXRiNA=s256-rw', rating: '4.5', downloads: '500M+', points: 300, popular: true, fallback: '⚔️' },
      { id: 'rise-of-kingdoms', name: 'Rise of Kingdoms', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lilithgames.rok.gp', image: 'https://play-lh.googleusercontent.com/N-gm5Db7QxWQr4Mb2I7x22-ks-J6JHjg2YIxdg9xzpH5Jb3c6A_dIfpf4A7BNKU_A=s256-rw', rating: '4.4', downloads: '50M+', points: 260, recommended: true, fallback: '🗺️' },
    ],
  },
  { id: 'arcade', label: 'Arcade', instantPlay: [
      { id: 'catch-the-coin', name: 'Catch the Coin', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80', description: 'Attrape un maximum de pièces en 20 secondes.', dailyMission: 'Collecter un maximum de pièces en 20 secondes', points: 100, recommended: true, popular: true, fallback: '🪙', todayPlayers: 1240, dailyBestScores: [{ name: 'Amina', score: 42 }, { name: 'Paul', score: 38 }, { name: 'Karim', score: 35 }] },
      { id: 'crazy-ball', name: 'CrazyBall', iframeUrl: 'https://minigame.com/en/game/crazy-ball/play/m', image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=1200&q=80', description: 'Un jeu de balle fou et addictif — joue directement dans la page !', dailyMission: 'Survivre le plus longtemps possible', points: 80, recommended: true, popular: true, fallback: '🎱', todayPlayers: 920, dailyBestScores: [{ name: 'Mehdi', score: 145 }, { name: 'Sara', score: 120 }, { name: 'Youssef', score: 98 }] },
      { id: 'neon-runner', name: 'Neon Runner', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80', description: 'Course infinie et ultra nerveuse.', dailyMission: 'Courir 3 minutes', points: 70, recommended: true, popular: true, fallback: '🕹️', todayPlayers: 790, dailyBestScores: [{ name: 'Ilyes', score: 29 }, { name: 'Aya', score: 27 }, { name: 'Nora', score: 25 }] }
    ], apps: [{ id: 'subway-surfers', name: 'Subway Surfers', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf', image: 'https://play-lh.googleusercontent.com/rIMQN2JTiHSCj7IezGHkhE39-F66y3Epqlt-iyvveGzT5n0CPOrYDpSePQ7rZBvMJRY=s256-rw', rating: '4.5', downloads: '1B+', points: 180, fallback: '🏃' }] },
];

export const playCategoryChips = [
  { id: 'all', label: 'Tous' },
  ...playCategories.map((c) => ({ id: c.id, label: c.label })),
];

const allInstantPlay = playCategories.flatMap((category) =>
  category.instantPlay.map((game) => ({ ...game, category: category.label })),
);

export const myGames = allInstantPlay.filter((g) => g.lastPlayed);
export const recommendedGames = allInstantPlay.filter((g) => g.recommended);
export const popularGames = allInstantPlay.filter((g) => g.popular);

export const dailyGames = [
  {
    id: 'catch-the-coin',
    name: 'Catch the Coin',
    emoji: '🪙',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    fallback: '🪙',
    description: 'Attrape un maximum de pièces en 20 secondes.',
    dailyMission: 'Collecte un maximum de pièces en 20s',
    points: 100,
    playable: true,
    todayPlayers: 1240,
    dailyBestScores: [
      { name: 'Amina', score: 42 },
      { name: 'Paul', score: 38 },
      { name: 'Karim', score: 35 },
    ],
  },
  {
    id: 'street-kick',
    name: 'Street Kick',
    emoji: '⚽',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80',
    fallback: '⚽',
    description: 'Football arcade — marque le maximum de buts avant la fin du temps.',
    dailyMission: 'Marquer 5 buts en 1 min',
    points: 90,
    playable: true,
    demoOnly: true,
    todayPlayers: 1030,
    dailyBestScores: [
      { name: 'Sami', score: 15 },
      { name: 'Noha', score: 13 },
      { name: 'Rachid', score: 12 },
    ],
  },
  {
    id: 'brain-quest',
    name: 'Brain Quest',
    emoji: '🧠',
    image: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&w=1200&q=80',
    fallback: '🧠',
    description: 'Culture générale express — réponds à 10 questions le plus vite possible.',
    dailyMission: '5 bonnes réponses d\'affilée',
    points: 80,
    playable: true,
    demoOnly: true,
    todayPlayers: 870,
    dailyBestScores: [
      { name: 'Yasmine', score: 950 },
      { name: 'Mehdi', score: 880 },
      { name: 'Lina', score: 830 },
    ],
  },
  {
    id: 'turbo-drift',
    name: 'Turbo Drift',
    emoji: '🏎️',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    fallback: '🏎️',
    description: 'Course arcade — drifts et virages serrés, bats le chrono.',
    dailyMission: 'Finir le circuit en moins de 60s',
    points: 120,
    playable: true,
    demoOnly: true,
    todayPlayers: 650,
    dailyBestScores: [
      { name: 'Issa', score: 55 },
      { name: 'Meryem', score: 52 },
      { name: 'Kader', score: 48 },
    ],
  },
];
