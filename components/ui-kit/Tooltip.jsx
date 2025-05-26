// Tooltip.jsx
// CSS-only tooltip example
export default function Tooltip({ text = "Tooltip text", children }) {
  return (
    <span className="tooltip-container">
      {children || <button className="btn">Hover me</button>}
      <span className="tooltip">{text}</span>
    </span>
  );
}
