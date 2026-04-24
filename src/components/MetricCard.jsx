function MetricCard({ label, value, hint }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
      <p className="text-xs uppercase tracking-wide text-zinc-400">{label}</p>
      <p className="mt-1 text-lg font-bold text-gamingOrange">{value}</p>
      <p className="mt-1 text-xs text-zinc-300">{hint}</p>
    </div>
  );
}

export default MetricCard;
