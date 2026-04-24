import { useEffect, useRef } from 'react';

export default function Carousel({ items, renderItem, autoScrollMs = 3500, cardWidthClass = 'w-[86%]' }) {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || items.length <= 1) {
      return undefined;
    }

    // Simple auto-scroll for beginners: move one card every few seconds.
    const intervalId = setInterval(() => {
      const cardWidth = track.firstChild?.clientWidth || 280;
      const gap = 12;
      const maxScrollLeft = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft + cardWidth + gap >= maxScrollLeft) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      track.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }, autoScrollMs);

    return () => clearInterval(intervalId);
  }, [autoScrollMs, items.length]);

  return (
    <div ref={trackRef} className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1">
      {items.map((item, index) => (
        <div key={item.id || index} className={`${cardWidthClass} flex-shrink-0 snap-start`}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
