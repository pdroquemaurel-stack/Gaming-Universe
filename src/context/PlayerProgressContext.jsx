import { createContext, useContext, useMemo, useState } from 'react';

const STORAGE_KEY = 'maxit_player_progress_v2';
const memoryFallback = { value: null };

const defaultProgress = {
  points: 12450,
  xp: 650,
  level: 12,
  xpTarget: 1000,
  streakCount: 2,
  lastClaimDate: null,
  bestCatchTheCoinScore: 0,
  activities: [],
  isOnboardingDone: false,
  freeFireConnected: false,
};

const PlayerProgressContext = createContext(null);

function safeParse(raw) {
  try { return JSON.parse(raw); } catch { return null; }
}

function sanitize(data) {
  if (!data || typeof data !== 'object') return { ...defaultProgress };
  const merged = { ...defaultProgress, ...data };
  ['points', 'xp', 'level', 'xpTarget', 'streakCount', 'bestCatchTheCoinScore'].forEach((field) => {
    const num = Number(merged[field]);
    merged[field] = Number.isFinite(num) && num >= 0 ? num : defaultProgress[field];
  });
  if (!Array.isArray(merged.activities)) merged.activities = [];
  return merged;
}

function readStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return sanitize(raw ? safeParse(raw) : memoryFallback.value);
  } catch {
    return sanitize(memoryFallback.value);
  }
}

function writeStorage(value) {
  memoryFallback.value = value;
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch {}
}

export function PlayerProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => readStorage());
  const updateProgress = (updater) => {
    setProgress((previous) => {
      const next = sanitize(typeof updater === 'function' ? updater(previous) : updater);
      writeStorage(next);
      return next;
    });
  };
  const addActivity = (label) => updateProgress((previous) => ({ ...previous, activities: [label, ...previous.activities].slice(0, 10) }));
  const value = useMemo(() => ({ progress, updateProgress, addActivity }), [progress]);
  return <PlayerProgressContext.Provider value={value}>{children}</PlayerProgressContext.Provider>;
}

export function usePlayerProgress() {
  const context = useContext(PlayerProgressContext);
  if (!context) throw new Error('usePlayerProgress must be used within PlayerProgressProvider');
  return context;
}
