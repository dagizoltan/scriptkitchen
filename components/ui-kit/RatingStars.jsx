// RatingStars.jsx
// CSS-only star rating
export default function RatingStars({ value = 3, max = 5 }) {
  return (
    <span className="rating-stars">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < value ? "star filled" : "star"}>★</span>
      ))}
    </span>
  );
}
