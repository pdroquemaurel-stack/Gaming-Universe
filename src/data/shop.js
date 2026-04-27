// Images en ligne : remplace `logo`, `image` et `items[].image` avec des URLs HTTPS.
// Ne télécharge pas les images dans le repo, garde des URLs distantes.
// Exemples de sources: Google Play, site officiel du jeu.
export const shopGames = [
  {
    id: 'fortnite', name: 'Fortnite', shortName: 'Fortnite', logo: 'https://play-lh.googleusercontent.com/FxJDPDIDJKlG9C8lOxaS041X27A0SrHAa46SGDIpPusAd4IEJihZTyGf-8rTZ_GpF34aeLvULilVuO0cpCJxTg=s256-rw', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.epicgames.fortnite', description: 'Connecte ton Player ID et débloque des bonus gaming.',
    items: [
      { id: 'vbucks-small', name: 'Pack V-Bucks', image: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=800&q=80', description: 'Pack de monnaie de démarrage.', price: '4.99€', pointsDiscount: 'Utilise 300 points pour -20%', badge: 'Populaire' },
      { id: 'battle-pass', name: 'Battle Pass', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=800&q=80', description: 'Récompenses premium de saison.', price: '8.99€', pointsDiscount: 'Utilise 500 points pour -25%', badge: 'Meilleure offre' },
    ],
  },
  { id: 'pubg-mobile', name: 'PUBG Mobile', shortName: 'PUBG', logo: 'https://play-lh.googleusercontent.com/BBcJg2SjdGN2XW8FRzv56Z3_MkfHSgCj50hiv6_4-3__B8fcQfFSn-quFWywbs0a1mXB=s256-rw', image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1400&q=80', storeUrl: 'https://play.google.com/store/apps/details?id=com.tencent.ig', description: 'Recharge UC et bundles premium.', items: [{ id: 'uc-pack', name: 'Pack UC', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80', description: 'Monnaie UC en jeu.', price: '5.49€', pointsDiscount: 'Utilise 280 points pour -15%' }] },
  { id: 'roblox', name: 'Roblox', shortName: 'Roblox', logo: 'https://play-lh.googleusercontent.com/7cIIPlWm4m7AGqVpEsIfyL-HW4cQla4ucXnfalMft1TMIYQIlf2vqgmthlZgbNAQoaQ=s256-rw', image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=1400&q=80', storeUrl: 'https://play.google.com/store/apps/details?id=com.roblox.client', description: 'Obtiens des Robux et packs créateur.', items: [{ id: 'robux', name: 'Bundle Robux', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80', description: 'Booste tes upgrades avatar.', price: '6.99€', pointsDiscount: 'Utilise 320 points pour -20%', badge: 'Populaire' }] },
];
