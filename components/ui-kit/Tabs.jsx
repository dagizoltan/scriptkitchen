// Tabs.jsx
// CSS-only tabs example
export default function Tabs() {
  return (
    <div className="tabs">
      <input type="radio" id="tab1" name="tabset" defaultChecked className="tab-toggle" />
      <label htmlFor="tab1" className="tab-label">Tab 1</label>
      <input type="radio" id="tab2" name="tabset" className="tab-toggle" />
      <label htmlFor="tab2" className="tab-label">Tab 2</label>
      <div className="tab-content">Content for Tab 1</div>
      <div className="tab-content">Content for Tab 2</div>
    </div>
  );
}
