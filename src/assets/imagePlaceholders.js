import discoverTrendingGame from './images/discover/discover-trending-game.png';
import discoverWeeklyTournament from './images/discover/discover-weekly-tournament.png';
import discoverShopPromo from './images/discover/discover-shop-promo.png';
import discoverDailyChallenge from './images/discover/discover-daily-challenge.png';

// Central place for future local image imports.
// 1) Drop images inside src/assets/images/<section>/
// 2) Import them here
// 3) Replace empty strings with imported variables
// Example:
// import playGamePuzzle from './images/play/play-game-puzzle.png';

export const imagePlaceholders = {
  discover: {
    // discover-trending-game.png
    trending: discoverTrendingGame,
    // discover-weekly-tournament.png
    weekly: discoverWeeklyTournament,
    // discover-shop-promo.png
    promo: discoverShopPromo,
    // discover-daily-challenge.png
    challenge: discoverDailyChallenge,
  },
  play: {
    // play-game-puzzle.png
    puzzle: '',
    // play-game-action.png
    action: '',
    // play-game-sports.png
    sports: '',
  },
  shop: {
    // shop-coins-pack.png
    coins: '',
    // shop-premium-pass.png
    pass: '',
  },
  esport: {
    // esport-featured-tournament.png
    featured: '',
  },
  favorites: {
    // favorite-neon-runner.png
    runner: '',
  },
  purchase: {
    // purchase-diamond-pack.png
    diamonds: '',
  },
};
