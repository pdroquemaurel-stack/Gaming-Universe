import { useEffect, useState } from 'react';

export default function AssetImage({
  src,
  alt,
  fallback = '🎮',
  className = '',
  imgClassName = '',
  rounded = 'rounded-xl',
  fit = 'cover',
}) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const shouldShowImage = Boolean(src) && !hasError;
  const fitClass = fit === 'contain' ? 'object-contain p-2' : 'object-cover';

  return (
    <div className={`relative overflow-hidden bg-zinc-800 ${rounded} ${className}`}>
      {shouldShowImage ? (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full ${fitClass} ${imgClassName}`}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-zinc-900 text-zinc-300">
          <span className="text-3xl">{fallback}</span>
          <span className="text-[10px] uppercase tracking-wide text-zinc-500">Image indisponible</span>
        </div>
      )}
    </div>
  );
}
