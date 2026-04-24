export default function ProgressBar({ value = 0 }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
      <div className="h-full rounded-full bg-orangeBrand transition-all" style={{ width: `${value}%` }} />
    </div>
  );
}
