// Accordion.jsx
// CSS-only accordion/collapse example
export default function Accordion() {
  return (
    <div className="accordion">
      <input type="checkbox" id="acc1" className="accordion-toggle" />
      <label htmlFor="acc1" className="accordion-header">Accordion Item 1</label>
      <div className="accordion-body">This is the content for item 1.</div>
      <input type="checkbox" id="acc2" className="accordion-toggle" />
      <label htmlFor="acc2" className="accordion-header">Accordion Item 2</label>
      <div className="accordion-body">This is the content for item 2.</div>
    </div>
  );
}
