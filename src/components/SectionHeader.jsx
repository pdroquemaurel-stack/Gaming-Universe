function SectionHeader({ title, subtitle }) {
  return (
    <header className="mb-5">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-zinc-300">{subtitle}</p> : null}
    </header>
  );
}

export default SectionHeader;
