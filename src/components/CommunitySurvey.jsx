import { useMemo, useState } from 'react';
import SectionHeader from './SectionHeader';
import { COMMUNITY_SURVEY_STORAGE_KEY, consoleSurvey } from '../data/communitySurvey';

const memoryStore = {};

const safeStorage = {
  get(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return key in memoryStore ? memoryStore[key] : fallback;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      memoryStore[key] = value;
    }
  },
};

export default function CommunitySurvey() {
  const initialVote = safeStorage.get(COMMUNITY_SURVEY_STORAGE_KEY, null);
  const [selectedOption, setSelectedOption] = useState(initialVote);

  const selectedLabel = useMemo(
    () => consoleSurvey.options.find((option) => option.id === selectedOption)?.label,
    [selectedOption],
  );

  const vote = (optionId) => {
    if (selectedOption) return;
    setSelectedOption(optionId);
    safeStorage.set(COMMUNITY_SURVEY_STORAGE_KEY, optionId);
  };

  return (
    <div className="card-base">
      <SectionHeader title={consoleSurvey.title} subtitle={consoleSurvey.subtitle} />
      <p className="mt-1 text-sm font-semibold text-white">{consoleSurvey.question}</p>

      {!selectedOption ? (
        <>
          <p className="mt-1 text-xs text-zinc-400">{consoleSurvey.beforeVoteText}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {consoleSurvey.options.map((option) => (
              <button
                key={option.id}
                onClick={() => vote(option.id)}
                className="rounded-xl border border-zinc-700 bg-zinc-900/80 p-3 text-left transition hover:border-orangeBrand hover:bg-zinc-900"
              >
                <p className="text-lg">{option.emoji}</p>
                <p className="mt-1 text-sm font-semibold text-white">{option.label}</p>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-zinc-500">1 248 votes</p>
        </>
      ) : (
        <>
          <p className="mt-1 text-xs text-orangeBrand">Merci pour ton vote !</p>
          <p className="mt-1 text-xs text-zinc-300">Tu fais partie de la team {selectedLabel}.</p>
          <div className="mt-3 space-y-2">
            {consoleSurvey.options.map((option) => {
              const isSelected = option.id === selectedOption;

              return (
                <div
                  key={option.id}
                  className={`rounded-lg border p-2 ${isSelected ? 'border-orangeBrand bg-orangeBrand/10' : 'border-zinc-800 bg-zinc-900/60'}`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <p className={`font-semibold ${isSelected ? 'text-orangeBrand' : 'text-zinc-200'}`}>
                      {option.emoji} {option.label}
                    </p>
                    <span className={isSelected ? 'text-orangeBrand' : 'text-zinc-400'}>{option.percentage}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-orangeBrand"
                      style={{ width: `${option.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-zinc-500">1 248 votes</p>
        </>
      )}
    </div>
  );
}
