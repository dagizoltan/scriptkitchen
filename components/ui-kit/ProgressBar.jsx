// ProgressBar.jsx
// CSS-only progress bar example
export default function ProgressBar({ value = 60, max = 100 }) {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${(value / max) * 100}%` }} />
    </div>
  );
}
