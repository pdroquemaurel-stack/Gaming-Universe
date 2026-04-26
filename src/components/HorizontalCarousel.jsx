export default function HorizontalCarousel({ items, renderItem }) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
      {items.map((item) => (
        <div key={item.id} className="w-52 flex-shrink-0">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
