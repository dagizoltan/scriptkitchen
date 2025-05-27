// SkeletonLoader.jsx
// CSS-only skeleton loading placeholder
export default function SkeletonLoader(
  { width = "100%", height = "1.5em", style = {} },
) {
  return (
    <span className="skeleton-loader" style={{ width, height, ...style }} />
  );
}
