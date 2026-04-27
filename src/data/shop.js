// ===============================
// DONNÉES SHOP (POC / mock only)
// ===============================
// ✅ Où modifier les images : champs `logo`, `image` et `items[].image` / `shopPromotions[].image` / `shopECards[].image`
// ✅ Où modifier les prix : champs `price`, `originalPrice`, `promoPrice`, `priceLabel`
// ✅ Où modifier les réductions Max it Points : champs `pointsDiscount`, `pointsOption`
// ✅ Où ajouter/supprimer des jeux : tableau `popularShopGames`

export const popularShopGames = [
  {
    id: 'fortnite',
    name: 'Fortnite',
    shortName: 'Fortnite',
    logo: 'https://play-lh.googleusercontent.com/FxJDPDIDJKlG9C8lOxaS041X27A0SrHAa46SGDIpPusAd4IEJihZTyGf-8rTZ_GpF34aeLvULilVuO0cpCJxTg=s96-rw',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://www.fortnite.com/download',
    description: 'Connecte ton ID joueur pour accéder à tes contenus Fortnite.',
    items: [
      { id: 'vbucks-pack', name: 'Pack V-Bucks', image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=900&q=80', description: 'Monnaie virtuelle Fortnite.', price: '8,99€', pointsDiscount: 'Utilise 400 points pour -10%', badge: 'Populaire' },
      { id: 'fortnite-pass', name: 'Battle Pass', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80', description: 'Passe de saison premium.', price: '10,99€', pointsDiscount: 'Utilise 700 points pour -20%', badge: 'Meilleure offre' },
      { id: 'fortnite-skin', name: 'Skin Pack', image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80', description: 'Pack cosmétique exclusif.', price: '6,99€', pointsDiscount: 'Réduction Max it Points disponible', badge: 'Nouveau' },
    ],
  },
  {
    id: 'pubg-mobile',
    name: 'PUBG Mobile',
    shortName: 'PUBG',
    logo: 'https://play-lh.googleusercontent.com/BBcJg2SjdGN2XW8FRzv56Z3_MkfHSgCj50hiv6_4-3__B8fcQfFSn-quFWywbs0a1mXB=s96-rw',
    image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig',
    description: 'Recharge ton compte PUBG et débloque des contenus premium.',
    items: [
      { id: 'pubg-uc', name: 'UC Pack', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80', description: 'Monnaie UC en jeu.', price: '5,99€', pointsDiscount: 'Utilise 300 points pour -10%', badge: 'Populaire' },
      { id: 'pubg-royale', name: 'Royale Pass', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80', description: 'Pass premium saisonnier.', price: '9,99€', pointsDiscount: 'Utilise 700 points pour -20%' },
    ],
  },
  {
    id: 'roblox',
    name: 'Roblox',
    shortName: 'Roblox',
    logo: 'https://play-lh.googleusercontent.com/7cIIPlWm4m7AGqVpEsIfyL-HW4cQla4ucXnfalMft1TMIYQIlf2vqgmthlZgbNAQoaQ=s96-rw',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://www.roblox.com/download',
    description: 'Connecte ton compte Roblox pour acheter des Robux.',
    items: [
      { id: 'robux-pack', name: 'Pack Robux', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80', description: 'Crédits Robux pour tes achats.', price: '8,49€', pointsDiscount: 'Utilise 500 points pour -10%', badge: 'Populaire' },
    ],
  },
  {
    id: 'free-fire',
    name: 'Free Fire',
    shortName: 'Free Fire',
    logo: 'https://play-lh.googleusercontent.com/Tzh1vMigK1Cn7_KIaMvKBVQRQapIMWMMqqyA6UqJTAYRpino4vvX6ZvYcVjZ_D8g19-DfHKCVeO2QPWl8vHGzw=s96-rw',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.dts.freefireth',
    description: 'Accède aux packs Diamonds et passes élite.',
    items: [
      { id: 'ff-diamonds', name: 'Diamonds', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80', description: 'Diamonds pour cosmétiques et bundles.', price: '4,99€', pointsDiscount: 'Utilise 300 points pour -15%', badge: 'Populaire' },
      { id: 'ff-elite-pass', name: 'Elite Pass', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=80', description: 'Récompenses élite mensuelles.', price: '7,99€', pointsDiscount: 'Réduction Max it Points disponible' },
    ],
  },
  {
    id: 'ea-fc-mobile',
    name: 'EA Sports FC Mobile',
    shortName: 'EA FC',
    logo: 'https://play-lh.googleusercontent.com/yQHb1bk88ENXLZ2_ZO-st7cuG78pva5yRAge2CjhBPoBoEng1ouxyx30vK4s4Z7553Kohd9pPVm1GC2Phs8slA=s96-rw',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile',
    description: 'Achète des FC Points et packs Ultimate Team mobile.',
    items: [
      { id: 'fc-points', name: 'FC Points', image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=80', description: 'Monnaie premium FC Mobile.', price: '9,99€', pointsDiscount: 'Utilise 700 points pour -20%', badge: 'Meilleure offre' },
    ],
  },
  {
    id: 'cod-mobile',
    name: 'Call of Duty Mobile',
    shortName: 'COD Mobile',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Call_of_Duty_Logo.svg/512px-Call_of_Duty_Logo.svg.png',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter',
    description: 'Connecte-toi pour acheter des COD Points.',
    items: [
      { id: 'cod-points', name: 'COD Points', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80', description: 'Crédits premium COD Mobile.', price: '6,99€', pointsDiscount: 'Utilise 300 points pour -10%', badge: 'Populaire' },
    ],
  },
  {
    id: 'mobile-legends',
    name: 'Mobile Legends',
    shortName: 'MLBB',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Mobile_Legends_logo.png/512px-Mobile_Legends_logo.png',
    image: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.mobile.legends',
    description: 'Recharge des Diamonds et offres héroïques.',
    items: [
      { id: 'ml-diamonds', name: 'Diamonds MLBB', image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80', description: 'Monnaie premium pour héros et skins.', price: '5,49€', pointsDiscount: 'Réduction Max it Points disponible', badge: 'Nouveau' },
    ],
  },
  {
    id: 'clash-royale',
    name: 'Clash Royale',
    shortName: 'Clash Royale',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Clash_Royale_Logo.svg/512px-Clash_Royale_Logo.svg.png',
    image: 'https://images.unsplash.com/photo-1579370318443-8da816457f49?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.supercell.clashroyale',
    description: 'Débloque Gems et Pass Royale en quelques clics.',
    items: [
      { id: 'cr-gems', name: 'Pack Gems', image: 'https://images.unsplash.com/photo-1573567161165-2fe7adca0649?auto=format&fit=crop&w=900&q=80', description: 'Gems pour coffres et achats.', price: '4,99€', pointsDiscount: 'Utilise 300 points pour -10%' },
      { id: 'cr-pass', name: 'Pass Royale', image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=900&q=80', description: 'Pass saisonnier premium.', price: '6,49€', pointsDiscount: 'Utilise 500 points pour -15%', badge: 'Populaire' },
    ],
  },
  {
    id: 'brawl-stars',
    name: 'Brawl Stars',
    shortName: 'Brawl',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Brawl_Stars_logo.svg/512px-Brawl_Stars_logo.svg.png',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.supercell.brawlstars',
    description: 'Achète Gems et Brawl Pass pour progresser plus vite.',
    items: [
      { id: 'brawl-gems', name: 'Gems', image: 'https://images.unsplash.com/photo-1573567161165-2fe7adca0649?auto=format&fit=crop&w=900&q=80', description: 'Monnaie premium Brawl Stars.', price: '4,49€', pointsDiscount: 'Réduction Max it Points disponible' },
      { id: 'brawl-pass', name: 'Brawl Pass', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80', description: 'Pass premium saisonnier.', price: '7,99€', pointsDiscount: 'Utilise 700 points pour -20%', badge: 'Meilleure offre' },
    ],
  },
  {
    id: 'genshin-impact',
    name: 'Genshin Impact',
    shortName: 'Genshin',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/512px-Genshin_Impact_logo.svg.png',
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact',
    description: 'Recharge des Genesis Crystals pour tes invocations.',
    items: [
      { id: 'genshin-crystals', name: 'Genesis Crystals', image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=900&q=80', description: 'Cristaux premium Genshin.', price: '10,99€', pointsDiscount: 'Utilise 700 points pour -20%', badge: 'Populaire' },
    ],
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    shortName: 'Minecraft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Minecraft_logo.svg/512px-Minecraft_logo.svg.png',
    image: 'https://images.unsplash.com/photo-1627856014754-2907e2355f2e?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://www.minecraft.net/fr-fr/download',
    description: 'Achète des Minecoins et contenus du marketplace.',
    items: [
      { id: 'minecoins', name: 'Minecoins', image: 'https://images.unsplash.com/photo-1627856014754-2907e2355f2e?auto=format&fit=crop&w=900&q=80', description: 'Crédits pour mondes et skins.', price: '5,99€', pointsDiscount: 'Utilise 400 points pour -10%', badge: 'Nouveau' },
    ],
  },
  {
    id: 'wild-rift',
    name: 'League of Legends: Wild Rift',
    shortName: 'Wild Rift',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/League_of_Legends_2019_vector.svg/512px-League_of_Legends_2019_vector.svg.png',
    image: 'https://images.unsplash.com/photo-1548686304-89d188a80029?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.riotgames.league.wildrift',
    description: 'Relie ton profil et obtiens des Wild Cores.',
    items: [
      { id: 'wild-cores', name: 'Wild Cores', image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=900&q=80', description: 'Monnaie premium Wild Rift.', price: '8,99€', pointsDiscount: 'Utilise 500 points pour -10%', badge: 'Populaire' },
    ],
  },
];

export const shopPromotions = [
  { id: 'freefire-diamonds-promo', title: 'Pack Diamonds Free Fire', game: 'Free Fire', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80', originalPrice: '5,99€', promoPrice: '4,99€', pointsDiscount: 'Utilise 300 points pour -15%', badge: 'Promo' },
  { id: 'robux-bonus-promo', title: 'Pack Robux Bonus', game: 'Roblox', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=80', originalPrice: '9,99€', promoPrice: '8,49€', pointsDiscount: 'Utilise 500 points pour -10%', badge: 'Promo' },
  { id: 'pubg-battle-pass-promo', title: 'Battle Pass PUBG', game: 'PUBG Mobile', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80', originalPrice: '11,99€', promoPrice: '9,99€', pointsDiscount: 'Utilise 700 points pour -20%', badge: 'Promo' },
  { id: 'fortnite-vbucks-promo', title: 'V-Bucks Fortnite', game: 'Fortnite', image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=900&q=80', originalPrice: '8,99€', promoPrice: '7,99€', pointsDiscount: 'Utilise 400 points pour -10%', badge: 'Promo' },
];

export const shopSubscriptions = [
  {
    id: 'gaming-pass-1-day',
    name: 'Gaming Pass 1 jour',
    duration: '1 jour',
    benefits: ['Accès vidéos premium', 'Bonus points', 'Tournois premium'],
    price: '0,49€',
    pointsOption: 'ou 100 points',
  },
  {
    id: 'gaming-pass-7-days',
    name: 'Gaming Pass 7 jours',
    duration: '7 jours',
    benefits: ['Vidéos premium', 'Tournois premium', 'Bonus quotidien'],
    price: '1,99€',
    pointsOption: 'ou 500 points',
    badge: 'Populaire',
  },
  {
    id: 'gaming-pass-30-days',
    name: 'Gaming Pass 30 jours',
    duration: '30 jours',
    benefits: ['Tout inclus', 'Contenus premium', 'Bonus points x2'],
    price: '4,99€',
    pointsOption: 'ou 1 500 points',
    badge: 'Meilleure offre',
  },
  {
    id: 'mini-games-no-ads',
    name: 'Mini-jeux sans pub',
    duration: 'Mensuel',
    benefits: ['Expérience sans publicité', 'Parties plus fluides'],
    price: '1,49€',
    pointsOption: 'Utilise 400 points pour -20%',
  },
];

export const shopECards = [
  { id: 'playstation-card', name: 'PlayStation Store', image: 'https://gmedia.playstation.com/is/image/SIEPDC/gift-cards-digital-card-keyart-01-en-20oct22?$facebook$', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: '-5% avec 500 points', badge: 'Digital' },
  { id: 'xbox-card', name: 'Xbox', image: 'https://thumbs.dreamstime.com/b/e-r-143552371.jpg', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: '-10% avec 1 000 points', badge: 'Instantané' },
  { id: 'steam-card', name: 'Steam', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPF9UGCqP5ee_owuCZs_rkxb8gcT80bTWIw&s', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: '-5% avec 500 points', badge: 'Digital' },
  { id: 'google-play-card', name: 'Google Play', image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: 'Bonus 200 points offert', badge: 'Instantané' },
  { id: 'nintendo-card', name: 'Nintendo eShop', image: 'https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?auto=format&fit=crop&w=900&q=80', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: '-5% avec 500 points', badge: 'Digital' },
  { id: 'riot-card', name: 'Riot Games', image: 'https://images.unsplash.com/photo-1548686304-89d188a80029?auto=format&fit=crop&w=900&q=80', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: '-10% avec 1 000 points', badge: 'Digital' },
  { id: 'roblox-card', name: 'Roblox', image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=900&q=80', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: 'Bonus 200 points offert', badge: 'Instantané' },
  { id: 'garena-card', name: 'Garena / Free Fire', image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=900&q=80', amounts: ['5€', '10€', '20€', '50€'], priceLabel: 'À partir de 5€', pointsDiscount: '-5% avec 500 points', badge: 'Digital' },
];

// Compatibilité rétro : conserve l'ancien export utilisé dans d'autres écrans potentiels.
export const shopGames = popularShopGames;
