// Calendar.jsx
// CSS-only calendar (date picker shell)
export default function Calendar() {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav" type="button">&#8592;</button>
        <span className="calendar-title">May 2025</span>
        <button className="calendar-nav" type="button">&#8594;</button>
      </div>
      <div className="calendar-grid">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d, i) => (
          <span key={i} className="calendar-day-label">{d}</span>
        ))}
        {[...Array(31)].map((_, i) => (
          <span key={i} className="calendar-day">{i + 1}</span>
        ))}
      </div>
    </div>
  );
}
