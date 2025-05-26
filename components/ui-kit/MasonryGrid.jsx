// MasonryGrid.jsx
// CSS-only masonry/card grid shell
export default function MasonryGrid() {
  return (
    <div className="masonry-grid">
      {[...Array(8)].map((_,i) => (
        <div key={i} className="masonry-item">Item {i+1}</div>
      ))}
    </div>
  );
}
