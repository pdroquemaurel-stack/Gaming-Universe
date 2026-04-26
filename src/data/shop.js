// Update game store URL in each `storeUrl` field.
// Update logos/covers/item images in `logo`, `image`, `items[].image`.
export const shopGames = [
  {
    id: 'fortnite', name: 'Fortnite', shortName: 'Fortnite', logo: '/assets/shop/games/fortnite.png', image: '/assets/shop/games/fortnite-cover.png',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.epicgames.fortnite', description: 'Connect your player ID and unlock gaming bonuses.',
    items: [
      { id: 'vbucks-small', name: 'V-Bucks Pack', image: '/assets/shop/items/vbucks.png', description: 'Starter currency pack.', price: '4.99€', pointsDiscount: 'Use 300 points for -20%', badge: 'Popular' },
      { id: 'battle-pass', name: 'Battle Pass', image: '/assets/shop/items/battle-pass.png', description: 'Season premium rewards.', price: '8.99€', pointsDiscount: 'Use 500 points for -25%', badge: 'Best deal' },
    ],
  },
  { id: 'pubg-mobile', name: 'PUBG Mobile', shortName: 'PUBG', logo: '/assets/shop/games/pubg.png', image: '/assets/shop/games/pubg-cover.png', storeUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig', description: 'Top up UC and premium bundles.', items: [{ id: 'uc-pack', name: 'UC Pack', image: '/assets/shop/items/uc-pack.png', description: 'In-game UC currency.', price: '5.49€', pointsDiscount: 'Use 280 points for -15%' }] },
  { id: 'roblox', name: 'Roblox', shortName: 'Roblox', logo: '/assets/shop/games/roblox.png', image: '/assets/shop/games/roblox-cover.png', storeUrl: 'https://play.google.com/store/apps/details?id=com.roblox.client', description: 'Get Robux and creator packs.', items: [{ id: 'robux', name: 'Robux Bundle', image: '/assets/shop/items/robux.png', description: 'Boost your avatar upgrades.', price: '6.99€', pointsDiscount: 'Use 320 points for -20%', badge: 'Popular' }] },
  { id: 'free-fire', name: 'Free Fire', shortName: 'Free Fire', logo: '/assets/shop/games/free-fire.png', image: '/assets/shop/games/free-fire-cover.png', storeUrl: 'https://play.google.com/store/apps/details?id=com.dts.freefireth', description: 'Diamonds and weapon skins.', items: [{ id: 'diamonds', name: 'Diamonds Pack', image: '/assets/shop/items/diamonds.png', description: 'Currency for skins and crates.', price: '3.99€', pointsDiscount: 'Use 250 points for -15%' }] },
  { id: 'ea-sports-fc', name: 'EA Sports FC', shortName: 'EA FC', logo: '/assets/shop/games/ea-fc.png', image: '/assets/shop/games/ea-fc-cover.png', storeUrl: 'https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile', description: 'Coins packs and player boosts.', items: [{ id: 'coins-pack', name: 'Coins Pack', image: '/assets/shop/items/coins-pack.png', description: 'Coins for team upgrades.', price: '4.49€', pointsDiscount: 'Use 220 points for -10%' }] },
  { id: 'league-of-legends', name: 'League of Legends', shortName: 'LoL', logo: '/assets/shop/games/lol.png', image: '/assets/shop/games/lol-cover.png', storeUrl: 'https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift', description: 'Wild Rift skins and bundles.', items: [{ id: 'wild-cores', name: 'Wild Cores', image: '/assets/shop/items/wild-cores.png', description: 'Premium currency bundle.', price: '7.99€', pointsDiscount: 'Use 450 points for -20%' }] },
];
