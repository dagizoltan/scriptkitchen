// Demo page for Calendar
import Calendar from "../../components/ui-kit/Calendar.jsx";
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

const exampleCode = `<div className="calendar">
  <div className="calendar-header">
    <button className="calendar-nav" type="button">←</button>
    <span className="calendar-title">May 2025</span>
    <button className="calendar-nav" type="button">→</button>
  </div>
  <div className="calendar-grid">
    <span className="calendar-day-label">Su</span>
    <span className="calendar-day-label">Mo</span>
    <span className="calendar-day-label">Tu</span>
    <span className="calendar-day-label">We</span>
    <span className="calendar-day-label">Th</span>
    <span className="calendar-day-label">Fr</span>
    <span className="calendar-day-label">Sa</span>
    <!-- ...days 1-31... -->
    <span className="calendar-day">1</span>
    <span className="calendar-day">2</span>
    <!-- ... -->
    <span className="calendar-day">31</span>
  </div>
</div>`;

export default function CalendarDemo() {
  return (
    <section>
      <h1>Calendar / Date Picker</h1>
      <p>
        A visual calendar component for date selection. Displays a month view
        with navigation controls. Useful as a base for a date picker or for
        showing events in a calendar format.
      </p>
      <h3>Example Usage</h3>
      <Calendar />
      <CodeBlock code={exampleCode} language="html" />
    </section>
  );
}
