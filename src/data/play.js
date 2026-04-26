// Edit Play Store URLs in each `playStoreUrl` field.
// Edit visuals in each `image` field. Use /public/assets/... paths.
// Edit rewards in each `points` field.
// Add/remove categories by editing this array.
export const playCategories = [
  {
    id: 'puzzle',
    label: 'Puzzle',
    instantPlay: [
      { id: 'bubble-dash', name: 'Bubble Dash', image: '/assets/games/bubble-dash.png', description: 'A quick casual puzzle game.', dailyMission: 'Complete 3 levels today', points: 80, lastPlayed: true, recommended: true, popular: true, fallback: '🧩' },
      { id: 'puzzle-rush', name: 'Puzzle Rush', image: '/assets/games/puzzle-rush.png', description: 'Match combos before time runs out.', dailyMission: 'Finish 2 rounds', points: 100, recommended: true, fallback: '🧠' },
    ],
    apps: [
      { id: 'royal-kingdom', name: 'Royal Kingdom', packageName: 'com.dreamgames.royalkingdom', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dreamgames.royalkingdom', image: '/assets/apps/royal-kingdom.png', rating: '4.5', downloads: '10M+', points: 200, recommended: true, popular: true, fallback: '🏰' },
      { id: 'candy-crush', name: 'Candy Crush Saga', packageName: 'com.king.candycrushsaga', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga', image: '/assets/apps/candy-crush.png', rating: '4.5', downloads: '1B+', points: 160, fallback: '🍬' },
    ],
  },
  {
    id: 'sport',
    label: 'Sport',
    instantPlay: [
      { id: 'street-kick', name: 'Street Kick', image: '/assets/games/street-kick.png', description: 'Arcade football in quick sessions.', dailyMission: 'Score 5 goals', points: 90, lastPlayed: true, popular: true, fallback: '⚽' },
    ],
    apps: [
      { id: 'pubg-mobile', name: 'PUBG Mobile', packageName: 'com.tencent.ig', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig', image: '/assets/apps/pubg-mobile.png', rating: '4.1', downloads: '500M+', points: 300, recommended: true, popular: true, fallback: '🪖' },
      { id: 'fc-mobile', name: 'EA Sports FC Mobile', packageName: 'com.ea.gp.fifamobile', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile', image: '/assets/apps/fc-mobile.png', rating: '4.4', downloads: '500M+', points: 220, fallback: '🥅' },
    ],
  },
  { id: 'arcade', label: 'Arcade', instantPlay: [
      { id: 'catch-the-coin', name: 'Catch the Coin', image: '/assets/games/catch-the-coin.png', description: 'Tap coins quickly in a 20-second challenge.', dailyMission: 'Collect as many coins as possible in 20 seconds', points: 100, recommended: true, popular: true, fallback: '🪙' },
      { id: 'neon-runner', name: 'Neon Runner', image: '/assets/games/neon-runner.png', description: 'Endless speedrun challenge.', dailyMission: 'Run 3 minutes', points: 70, recommended: true, popular: true, fallback: '🕹️' }
    ], apps: [{ id: 'subway-surfers', name: 'Subway Surfers', packageName: 'com.kiloo.subwaysurf', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf', image: '/assets/apps/subway-surfers.png', rating: '4.5', downloads: '1B+', points: 180, fallback: '🏃' }] },
  { id: 'racing', label: 'Racing', instantPlay: [{ id: 'nitro-loop', name: 'Nitro Loop', image: '/assets/games/nitro-loop.png', description: 'Mini racing cups.', dailyMission: 'Win 1 race', points: 85, fallback: '🏎️' }], apps: [{ id: 'asphalt-9', name: 'Asphalt 9', packageName: 'com.gameloft.android.ANMP.GloftA9HM', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM', image: '/assets/apps/asphalt9.png', rating: '4.4', downloads: '100M+', points: 210, fallback: '🚗' }] },
  { id: 'strategy', label: 'Strategy', instantPlay: [{ id: 'tile-war', name: 'Tile War', image: '/assets/games/tile-war.png', description: 'Turn-based territory battles.', dailyMission: 'Capture 3 tiles', points: 95, fallback: '♟️' }], apps: [{ id: 'clash-royale', name: 'Clash Royale', packageName: 'com.supercell.clashroyale', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale', image: '/assets/apps/clash-royale.png', rating: '4.2', downloads: '500M+', points: 190, fallback: '🛡️' }] },
  { id: 'battle', label: 'Battle', instantPlay: [{ id: 'arena-brawl', name: 'Arena Brawl', image: '/assets/games/arena-brawl.png', description: '1v1 arena battles.', dailyMission: 'Win 2 duels', points: 110, fallback: '⚔️' }], apps: [{ id: 'brawl-stars', name: 'Brawl Stars', packageName: 'com.supercell.brawlstars', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars', image: '/assets/apps/brawl-stars.png', rating: '4.3', downloads: '100M+', points: 170, fallback: '💥' }] },
  { id: 'casual', label: 'Casual', instantPlay: [{ id: 'pet-hop', name: 'Pet Hop', image: '/assets/games/pet-hop.png', description: 'Relaxed mini sessions.', dailyMission: 'Play 3 minutes', points: 50, fallback: '🐾' }], apps: [{ id: 'toon-blast', name: 'Toon Blast', packageName: 'net.peakgames.toonblast', playStoreUrl: 'https://play.google.com/store/apps/details?id=net.peakgames.toonblast', image: '/assets/apps/toon-blast.png', rating: '4.6', downloads: '100M+', points: 150, fallback: '🎈' }] },
];

export const playCategoryChips = [{ id: 'all', label: 'All' }, ...playCategories.map((c) => ({ id: c.id, label: c.label }))];

const allInstantPlay = playCategories.flatMap((category) => category.instantPlay.map((game) => ({ ...game, category: category.label })));

export const myGames = allInstantPlay.filter((g) => g.lastPlayed);
export const recommendedGames = allInstantPlay.filter((g) => g.recommended);
export const popularGames = allInstantPlay.filter((g) => g.popular);
