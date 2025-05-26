export default function Timeline({ items = [] }) {
  return (
    <section className="card">
      <div className="card-header">Timeline</div>
      <div className="card-body">
        <div className="timeline">
          {items.map(({ date, label }, i) => (
            <div className="timeline-item" key={i}>
              <time dateTime={date}>{date}</time> {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Default items for showcase/demo
Timeline.defaultProps = {
  items: [
    { date: "2025-05-01", label: "Project started" },
    { date: "2025-05-10", label: "First release" },
    { date: "2025-05-20", label: "Major update" },
  ],
};
