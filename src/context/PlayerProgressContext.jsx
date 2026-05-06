import { createContext, useContext, useMemo, useState } from 'react';
import { playerDefaults } from '../data/mockGamingData';

const STORAGE_KEY = 'maxit_player_progress_v1';
const memoryStore = {};

const defaultState = {
  name: playerDefaults.name,
  avatar: playerDefaults.avatar,
  level: playerDefaults.level,
  xp: playerDefaults.xp,
  xpTarget: playerDefaults.xpTarget,
  points: playerDefaults.points,
  streakCount: playerDefaults.streakCount,
  lastClaimDate: playerDefaults.lastClaimDate,
  activities: playerDefaults.activities,
  bestScores: { 'catch-the-coin': 0 },
};

const PlayerProgressContext = createContext(null);
const sanitizeState = (raw) => ({ ...defaultState, ...(raw || {}), activities: Array.isArray(raw?.activities) ? raw.activities.slice(0, 12) : [], bestScores: raw?.bestScores && typeof raw.bestScores === 'object' ? raw.bestScores : defaultState.bestScores });

const safeGet = () => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return defaultState;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return sanitizeState(raw ? JSON.parse(raw) : defaultState);
  } catch {
    return sanitizeState(memoryStore[STORAGE_KEY] || defaultState);
  }
};

const safeSet = (value) => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) throw new Error('no localStorage');
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    memoryStore[STORAGE_KEY] = value;
  }
};

export function PlayerProgressProvider({ children }) {
  const [state, setState] = useState(() => safeGet());
  const persist = (updater) => setState((prev) => {
    const next = sanitizeState(typeof updater === 'function' ? updater(prev) : updater);
    safeSet(next);
    return next;
  });

  const addActivity = (label) => persist((prev) => ({ ...prev, activities: [label, ...prev.activities].slice(0, 12) }));
  const addPoints = (amount, reason = 'Récompense') => amount > 0 && persist((prev) => ({ ...prev, points: prev.points + amount, activities: [`${reason} +${amount} Max it Points`, ...prev.activities].slice(0, 12) }));
  const addXP = (amount, reason = 'Progression') => amount > 0 && persist((prev) => {
    let xp = prev.xp + amount;
    let level = prev.level;
    let xpTarget = prev.xpTarget;
    while (xp >= xpTarget) {
      xp -= xpTarget;
      level += 1;
      xpTarget += 500;
    }
    return { ...prev, xp, level, xpTarget, activities: [`${reason} +${amount} XP`, ...prev.activities].slice(0, 12) };
  });

  const spendPoints = (amount, reason = 'Utilisation') => {
    let ok = false;
    if (amount <= 0) return false;
    persist((prev) => {
      if (prev.points < amount) return prev;
      ok = true;
      return { ...prev, points: prev.points - amount, activities: [`${reason} -${amount} points`, ...prev.activities].slice(0, 12) };
    });
    return ok;
  };

  const claimDailyReward = () => {
    const today = new Date().toISOString().slice(0, 10);
    let claimed = false;
    persist((prev) => {
      if (prev.lastClaimDate === today) return prev;
      claimed = true;
      return { ...prev, points: prev.points + 30, streakCount: prev.streakCount + 1, lastClaimDate: today, activities: ['Récompense quotidienne +30 Max it Points', ...prev.activities].slice(0, 12) };
    });
    return claimed;
  };

  const updateBestScore = (gameId, score) => gameId && Number.isFinite(score) && persist((prev) => ({ ...prev, bestScores: { ...prev.bestScores, [gameId]: Math.max(prev.bestScores[gameId] || 0, score) } }));
  const resetDemoState = () => persist(defaultState);

  const value = useMemo(() => ({ ...state, addPoints, addXP, spendPoints, claimDailyReward, addActivity, updateBestScore, resetDemoState }), [state]);
  return <PlayerProgressContext.Provider value={value}>{children}</PlayerProgressContext.Provider>;
}

export const usePlayerProgress = () => {
  const ctx = useContext(PlayerProgressContext);
  if (!ctx) throw new Error('usePlayerProgress must be used within PlayerProgressProvider');
  return ctx;
};
