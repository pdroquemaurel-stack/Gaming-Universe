// NOTE: Update Play Store links directly in each `playStoreUrl` field below.
// Example format:
// https://play.google.com/store/apps/details?id=com.dreamgames.royalkingdom

export const playCategories = [
  {
    id: 'action',
    title: 'Action',
    instantPlay: [
      {
        id: 'blaze-ops',
        name: 'Blaze Ops',
        image: '/assets/games/blaze-ops.png',
        description: 'Fast rounds and tactical combat for quick reward sessions.',
        dailyMission: 'Win 2 matches today',
        points: 160,
        fallback: '⚔️',
      },
      {
        id: 'shadow-raid',
        name: 'Shadow Raid',
        image: '/assets/games/shadow-raid.png',
        description: 'Stealth action challenges with combo multipliers.',
        dailyMission: 'Complete 1 stealth run without damage',
        points: 140,
        fallback: '🥷',
      },
    ],
    apps: [
      { id: 'cod-mobile', name: 'Call of Duty Mobile', packageName: 'com.activision.callofduty.shooter', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter', image: '/assets/apps/cod-mobile.png', rating: '4.3', downloads: '100M+', points: 220, fallback: '🎯' },
      { id: 'ff-max', name: 'Free Fire MAX', packageName: 'com.dts.freefiremax', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dts.freefiremax', image: '/assets/apps/free-fire-max.png', rating: '4.2', downloads: '100M+', points: 210, fallback: '🔥' },
      { id: 'pubg-mobile', name: 'PUBG MOBILE', packageName: 'com.tencent.ig', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig', image: '/assets/apps/pubg-mobile.png', rating: '4.1', downloads: '500M+', points: 190, fallback: '🪖' },
      { id: 'brawl-stars', name: 'Brawl Stars', packageName: 'com.supercell.brawlstars', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars', image: '/assets/apps/brawl-stars.png', rating: '4.3', downloads: '100M+', points: 175, fallback: '💥' },
    ],
  },
  {
    id: 'puzzle',
    title: 'Puzzle',
    instantPlay: [
      {
        id: 'daily-puzzle',
        name: 'Daily Puzzle',
        image: '/assets/games/daily-puzzle.png',
        description: 'Solve short brain teasers and climb your weekly score.',
        dailyMission: 'Complete 3 levels today',
        points: 150,
        fallback: '🧩',
      },
      {
        id: 'brain-link',
        name: 'Brain Link',
        image: '/assets/games/brain-link.png',
        description: 'Chain symbols quickly before the timer runs out.',
        dailyMission: 'Finish 2 timed rounds',
        points: 130,
        fallback: '🧠',
      },
    ],
    apps: [
      { id: 'royal-match', name: 'Royal Match', packageName: 'net.dreamgames.royalmatch', playStoreUrl: 'https://play.google.com/store/apps/details?id=net.dreamgames.royalmatch', image: '/assets/apps/royal-match.png', rating: '4.6', downloads: '100M+', points: 200, fallback: '👑' },
      { id: 'royal-kingdom', name: 'Royal Kingdom', packageName: 'com.dreamgames.royalkingdom', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dreamgames.royalkingdom', image: '/assets/apps/royal-kingdom.png', rating: '4.5', downloads: '10M+', points: 205, fallback: '🏰' },
      { id: 'candy-crush', name: 'Candy Crush Saga', packageName: 'com.king.candycrushsaga', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga', image: '/assets/apps/candy-crush.png', rating: '4.5', downloads: '1B+', points: 170, fallback: '🍬' },
      { id: 'toon-blast', name: 'Toon Blast', packageName: 'net.peakgames.toonblast', playStoreUrl: 'https://play.google.com/store/apps/details?id=net.peakgames.toonblast', image: '/assets/apps/toon-blast.png', rating: '4.6', downloads: '100M+', points: 165, fallback: '🎈' },
    ],
  },
  {
    id: 'sports',
    title: 'Sports',
    instantPlay: [
      {
        id: 'street-striker',
        name: 'Street Striker',
        image: '/assets/games/street-striker.png',
        description: 'Quick football duels with daily rank bonuses.',
        dailyMission: 'Score 5 goals in total',
        points: 180,
        fallback: '⚽',
      },
      {
        id: 'hoops-now',
        name: 'Hoops Now',
        image: '/assets/games/hoops-now.png',
        description: 'Arcade basketball challenges in under 2 minutes.',
        dailyMission: 'Win 1 perfect streak',
        points: 145,
        fallback: '🏀',
      },
    ],
    apps: [
      { id: 'fc-mobile', name: 'EA SPORTS FC Mobile', packageName: 'com.ea.gp.fifamobile', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile', image: '/assets/apps/fc-mobile.png', rating: '4.4', downloads: '500M+', points: 230, fallback: '🥅' },
      { id: 'nba-live', name: 'NBA LIVE Mobile', packageName: 'com.ea.gp.nbamobile', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ea.gp.nbamobile', image: '/assets/apps/nba-live.png', rating: '4.3', downloads: '50M+', points: 180, fallback: '🏆' },
      { id: 'dream-league', name: 'Dream League Soccer', packageName: 'com.firsttouchgames.dls7', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.firsttouchgames.dls7', image: '/assets/apps/dream-league.png', rating: '4.2', downloads: '100M+', points: 175, fallback: '🎽' },
      { id: '8ball-pool', name: '8 Ball Pool', packageName: 'com.miniclip.eightballpool', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.miniclip.eightballpool', image: '/assets/apps/8ball-pool.png', rating: '4.6', downloads: '1B+', points: 155, fallback: '🎱' },
    ],
  },
  {
    id: 'arcade',
    title: 'Arcade',
    instantPlay: [
      {
        id: 'neon-runner',
        name: 'Neon Runner',
        image: '/assets/games/neon-runner.png',
        description: 'Endless running in neon arenas with timed boosts.',
        dailyMission: 'Collect 200 energy orbs',
        points: 170,
        fallback: '🕹️',
      },
      {
        id: 'rocket-dash',
        name: 'Rocket Dash',
        image: '/assets/games/rocket-dash.png',
        description: 'Dodge obstacles and set your best speedrun.',
        dailyMission: 'Reach checkpoint 7',
        points: 155,
        fallback: '🚀',
      },
    ],
    apps: [
      { id: 'subway-surfers', name: 'Subway Surfers', packageName: 'com.kiloo.subwaysurf', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf', image: '/assets/apps/subway-surfers.png', rating: '4.5', downloads: '1B+', points: 190, fallback: '🏃' },
      { id: 'temple-run-2', name: 'Temple Run 2', packageName: 'com.imangi.templerun2', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.imangi.templerun2', image: '/assets/apps/temple-run-2.png', rating: '4.3', downloads: '500M+', points: 160, fallback: '🗿' },
      { id: 'crossy-road', name: 'Crossy Road', packageName: 'com.yodo1.crossyroad', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yodo1.crossyroad', image: '/assets/apps/crossy-road.png', rating: '4.5', downloads: '100M+', points: 145, fallback: '🐔' },
      { id: 'jetpack-joyride', name: 'Jetpack Joyride', packageName: 'com.halfbrick.jetpackjoyride', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.halfbrick.jetpackjoyride', image: '/assets/apps/jetpack-joyride.png', rating: '4.4', downloads: '100M+', points: 150, fallback: '🎒' },
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy',
    instantPlay: [
      {
        id: 'sky-tactics',
        name: 'Sky Tactics',
        image: '/assets/games/sky-tactics.png',
        description: 'Plan your units and outsmart rivals in short battles.',
        dailyMission: 'Win 1 ranked strategy match',
        points: 190,
        fallback: '♟️',
      },
      {
        id: 'empire-grid',
        name: 'Empire Grid',
        image: '/assets/games/empire-grid.png',
        description: 'Build, defend, and capture zones in quick turns.',
        dailyMission: 'Capture 3 territories',
        points: 175,
        fallback: '🏯',
      },
    ],
    apps: [
      { id: 'clash-royale', name: 'Clash Royale', packageName: 'com.supercell.clashroyale', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale', image: '/assets/apps/clash-royale.png', rating: '4.2', downloads: '500M+', points: 210, fallback: '🛡️' },
      { id: 'clash-of-clans', name: 'Clash of Clans', packageName: 'com.supercell.clashofclans', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans', image: '/assets/apps/clash-of-clans.png', rating: '4.5', downloads: '500M+', points: 200, fallback: '⚒️' },
      { id: 'rise-of-kingdoms', name: 'Rise of Kingdoms', packageName: 'com.lilithgame.roc.gp', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.lilithgame.roc.gp', image: '/assets/apps/rise-of-kingdoms.png', rating: '4.3', downloads: '50M+', points: 170, fallback: '🗺️' },
      { id: 'chess-com', name: 'Chess.com', packageName: 'com.chess', playStoreUrl: 'https://play.google.com/store/apps/details?id=com.chess', image: '/assets/apps/chess-com.png', rating: '4.7', downloads: '100M+', points: 140, fallback: '♛' },
    ],
  },
];
