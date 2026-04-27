// Images en ligne : modifie chaque champ `image` avec une URL HTTPS (Google Play, site officiel, etc.).
// Exemple: image: "https://play-lh.googleusercontent.com/..."
// Si l'URL ne charge pas, le composant AssetImage affiche automatiquement un fallback.
// Les champs `todayPlayers` et `dailyBestScores` servent à la modal de présentation avant lancement du jeu.
export const playCategories = [
  {
    id: 'puzzle',
    label: 'Puzzle',
    instantPlay: [
      { id: 'bubble-dash', name: 'Bubble Dash', image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=1200&q=80', description: 'Un puzzle rapide et accessible.', dailyMission: 'Terminer 3 niveaux aujourd’hui', points: 80, lastPlayed: true, recommended: true, popular: true, fallback: '🧩', todayPlayers: 840, dailyBestScores: [{ name: 'Amina', score: 42 }, { name: 'Paul', score: 38 }, { name: 'Karim', score: 35 }] },
      { id: 'puzzle-rush', name: 'Puzzle Rush', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80', description: 'Enchaîne les combos avant la fin du temps.', dailyMission: 'Finir 2 manches', points: 100, recommended: true, fallback: '🧠', todayPlayers: 660, dailyBestScores: [{ name: 'Meryem', score: 31 }, { name: 'Yassine', score: 28 }, { name: 'Lina', score: 26 }] },
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
    ],
    apps: [
      { id: 'pubg-mobile', name: 'PUBG Mobile', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig', image: 'https://play-lh.googleusercontent.com/BBcJg2SjdGN2XW8FRzv56Z3_MkfHSgCj50hiv6_4-3__B8fcQfFSn-quFWywbs0a1mXB=s256-rw', rating: '4.1', downloads: '500M+', points: 300, recommended: true, popular: true, fallback: '🪖' },
    ],
  },
  { id: 'arcade', label: 'Arcade', instantPlay: [
      { id: 'catch-the-coin', name: 'Catch the Coin', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80', description: 'Attrape un maximum de pièces en 20 secondes.', dailyMission: 'Collecter un maximum de pièces en 20 secondes', points: 100, recommended: true, popular: true, fallback: '🪙', todayPlayers: 1240, dailyBestScores: [{ name: 'Amina', score: 42 }, { name: 'Paul', score: 38 }, { name: 'Karim', score: 35 }] },
      { id: 'neon-runner', name: 'Neon Runner', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80', description: 'Course infinie et ultra nerveuse.', dailyMission: 'Courir 3 minutes', points: 70, recommended: true, popular: true, fallback: '🕹️', todayPlayers: 790, dailyBestScores: [{ name: 'Ilyes', score: 29 }, { name: 'Aya', score: 27 }, { name: 'Nora', score: 25 }] }
    ], apps: [{ id: 'subway-surfers', name: 'Subway Surfers', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf', image: 'https://play-lh.googleusercontent.com/rIMQN2JTiHSCj7IezGHkhE39-F66y3Epqlt-iyvveGzT5n0CPOrYDpSePQ7rZBvMJRY=s256-rw', rating: '4.5', downloads: '1B+', points: 180, fallback: '🏃' }] },
];

export const playCategoryChips = [{ id: 'all', label: 'Tous' }, ...playCategories.map((c) => ({ id: c.id, label: c.label }))];

const allInstantPlay = playCategories.flatMap((category) => category.instantPlay.map((game) => ({ ...game, category: category.label })));

export const myGames = allInstantPlay.filter((g) => g.lastPlayed);
export const recommendedGames = allInstantPlay.filter((g) => g.recommended);
export const popularGames = allInstantPlay.filter((g) => g.popular);
