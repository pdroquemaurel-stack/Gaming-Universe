import { useEffect, useState } from 'react';

export default function AssetImage({ src, alt, fallback = '🎮', className = '', imgClassName = '', rounded = 'rounded-xl' }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const shouldShowImage = Boolean(src) && !hasError;

  return (
    <div className={`relative overflow-hidden bg-zinc-800 ${rounded} ${className}`}>
      {shouldShowImage ? (
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imgClassName}`}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-3xl">{fallback}</div>
      )}
    </div>
  );
}
