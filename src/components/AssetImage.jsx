export default function AssetImage({ src, alt, fallback = '🎮', className = '', imgClassName = '', rounded = 'rounded-xl' }) {
  return (
    <div className={`relative overflow-hidden bg-zinc-800 ${rounded} ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imgClassName}`}
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-3xl">{fallback}</div>
    </div>
  );
}
