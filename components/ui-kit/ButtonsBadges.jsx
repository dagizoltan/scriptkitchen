export default function ButtonsBadges() {
  return (
    <div className="demo-container">
      <h2>Button Variants</h2>
      <div className="demo-section">
        <h3>Filled Buttons</h3>
        <div className="button-group">
          <button type="button" className="btn">Primary</button>
          <button type="button" className="btn secondary">Secondary</button>
          <button type="button" className="btn success">Success</button>
          <button type="button" className="btn warning">Warning</button>
          <button type="button" className="btn error">Error</button>
          <button type="button" className="btn info">Info</button>
        </div>
        <pre><code>{`<button type="button" className="btn">Primary</button>
<button type="button" className="btn secondary">Secondary</button>
<button type="button" className="btn success">Success</button>
<button type="button" className="btn warning">Warning</button>
<button type="button" className="btn error">Error</button>
<button type="button" className="btn info">Info</button>`}</code></pre>
      </div>

      <div className="demo-section">
        <h3>Outline Buttons</h3>
        <div className="button-group">
          <button type="button" className="btn outline">Primary</button>
          <button type="button" className="btn outline secondary">Secondary</button>
          <button type="button" className="btn outline success">Success</button>
          <button type="button" className="btn outline warning">Warning</button>
          <button type="button" className="btn outline error">Error</button>
          <button type="button" className="btn outline info">Info</button>
        </div>
        <pre><code>{`<button type="button" className="btn outline">Primary</button>
<button type="button" className="btn outline secondary">Secondary</button>
<button type="button" className="btn outline success">Success</button>
<button type="button" className="btn outline warning">Warning</button>
<button type="button" className="btn outline error">Error</button>
<button type="button" className="btn outline info">Info</button>`}</code></pre>
      </div>

      <div className="demo-section">
        <h3>Ghost Buttons</h3>
        <div className="button-group">
          <button type="button" className="btn ghost">Primary</button>
          <button type="button" className="btn ghost secondary">Secondary</button>
          <button type="button" className="btn ghost success">Success</button>
          <button type="button" className="btn ghost warning">Warning</button>
          <button type="button" className="btn ghost error">Error</button>
          <button type="button" className="btn ghost info">Info</button>
        </div>
        <pre><code>{`<button type="button" className="btn ghost">Primary</button>
<button type="button" className="btn ghost secondary">Secondary</button>
<button type="button" className="btn ghost success">Success</button>
<button type="button" className="btn ghost warning">Warning</button>
<button type="button" className="btn ghost error">Error</button>
<button type="button" className="btn ghost info">Info</button>`}</code></pre>
      </div>

      <h2>Button Sizes</h2>
      <div className="demo-section">
        <div className="button-group">
          <button type="button" className="btn sm">Small</button>
          <button type="button" className="btn">Regular</button>
          <button type="button" className="btn lg">Large</button>
          <button type="button" className="btn xl">Extra Large</button>
        </div>
        <pre><code>{`<button type="button" className="btn sm">Small</button>
<button type="button" className="btn">Regular</button>
<button type="button" className="btn lg">Large</button>
<button type="button" className="btn xl">Extra Large</button>`}</code></pre>
      </div>

      <h2>Special Button Types</h2>
      <div className="demo-section">
        <h3>Loading Buttons</h3>
        <div className="button-group">
          <button type="button" className="btn loading">Loading...</button>
          <button type="button" className="btn success loading">Success Loading</button>
          <button type="button" className="btn outline loading">Outline Loading</button>
        </div>
        <pre><code>{`<button type="button" className="btn loading">Loading...</button>
<button type="button" className="btn success loading">Success Loading</button>
<button type="button" className="btn outline loading">Outline Loading</button>`}</code></pre>
      </div>

      <div className="demo-section">
        <h3>Full Width Button</h3>
        <button type="button" className="btn full-width">Full Width Button</button>
        <pre><code>{`<button type="button" className="btn full-width">Full Width Button</button>`}</code></pre>
      </div>

      <div className="demo-section">
        <h3>Icon-Only Buttons</h3>
        <div className="button-group">
          <button type="button" className="btn icon-only" title="Settings">⚙️</button>
          <button type="button" className="btn secondary icon-only" title="Edit">✏️</button>
          <button type="button" className="btn success icon-only" title="Check">✓</button>
          <button type="button" className="btn error icon-only" title="Delete">🗑️</button>
        </div>
        <pre><code>{`<button type="button" className="btn icon-only" title="Settings">⚙️</button>
<button type="button" className="btn secondary icon-only" title="Edit">✏️</button>
<button type="button" className="btn success icon-only" title="Check">✓</button>
<button type="button" className="btn error icon-only" title="Delete">🗑️</button>`}</code></pre>
      </div>

      <div className="demo-section">
        <h3>Floating Action Button (FAB)</h3>
        <button type="button" className="btn fab" title="Add new item" style={{position: 'relative', right: 'auto', bottom: 'auto'}}>+</button>
        <pre><code>{`<button type="button" className="btn fab" title="Add new item">+</button>`}</code></pre>
        <p><em>Note: FAB is normally fixed positioned in the bottom right corner</em></p>
      </div>

      <h2>Button Groups</h2>
      <div className="demo-section">
        <div className="btn-group">
          <button type="button" className="btn">First</button>
          <button type="button" className="btn">Second</button>
          <button type="button" className="btn">Third</button>
        </div>
        <pre><code>{`<div className="btn-group">
  <button type="button" className="btn">First</button>
  <button type="button" className="btn">Second</button>
  <button type="button" className="btn">Third</button>
</div>`}</code></pre>
      </div>

      <div className="demo-section">
        <h3>Mixed Button Group</h3>
        <div className="btn-group">
          <button type="button" className="btn outline">Cancel</button>
          <button type="button" className="btn">Save</button>
          <button type="button" className="btn success">Publish</button>
        </div>
        <pre><code>{`<div className="btn-group">
  <button type="button" className="btn outline">Cancel</button>
  <button type="button" className="btn">Save</button>
  <button type="button" className="btn success">Publish</button>
</div>`}</code></pre>
      </div>

      <h2>Button States</h2>
      <div className="demo-section">
        <div className="button-group">
          <button type="button" className="btn">Normal</button>
          <button type="button" className="btn" disabled>Disabled</button>
          <button type="button" className="btn" aria-pressed="true">Active</button>
        </div>
        <pre><code>{`<button type="button" className="btn">Normal</button>
<button type="button" className="btn" disabled>Disabled</button>
<button type="button" className="btn" aria-pressed="true">Active</button>`}</code></pre>
      </div>

      <h2>Badges</h2>
      <div className="demo-section">
        <div className="badge-group">
          <span className="badge primary">Primary</span>
          <span className="badge secondary">Secondary</span>
          <span className="badge success">Success</span>
          <span className="badge warning">Warning</span>
          <span className="badge error">Error</span>
          <span className="badge info">Info</span>
        </div>
        <pre><code>{`<span className="badge primary">Primary</span>
<span className="badge secondary">Secondary</span>
<span className="badge success">Success</span>
<span className="badge warning">Warning</span>
<span className="badge error">Error</span>
<span className="badge info">Info</span>`}</code></pre>
      </div>

      <h2>Key Features</h2>
      <ul className="features-list">
        <li>🎨 <strong>Multiple Variants:</strong> Filled, outline, and ghost button styles</li>
        <li>🌈 <strong>Color Themes:</strong> Primary, secondary, success, warning, error, and info</li>
        <li>📏 <strong>Size Options:</strong> Small, regular, large, and extra large</li>
        <li>⚡ <strong>Loading States:</strong> Built-in spinner animation for async actions</li>
        <li>🔗 <strong>Button Groups:</strong> Seamlessly connected button collections</li>
        <li>📱 <strong>Mobile Responsive:</strong> Touch-friendly sizing and spacing</li>
        <li>♿ <strong>Accessible:</strong> Proper focus states and ARIA support</li>
        <li>🎭 <strong>Icon Support:</strong> Icon-only and text+icon combinations</li>
        <li>🚀 <strong>Floating Action Button:</strong> Fixed positioned FAB for primary actions</li>
        <li>🌙 <strong>Dark Mode Ready:</strong> Automatic theme adaptation</li>
        <li>⚡ <strong>Smooth Animations:</strong> Hover effects with reduced motion support</li>
        <li>🎯 <strong>Semantic HTML:</strong> Proper button and link element usage</li>
      </ul>

      <h2>Usage Notes</h2>
      <div className="usage-notes">
        <h3>Accessibility</h3>
        <ul>
          <li>Use semantic <code>&lt;button&gt;</code> elements for actions</li>
          <li>Use <code>&lt;a&gt;</code> elements with <code>btn</code> class for navigation</li>
          <li>Always provide <code>title</code> attributes for icon-only buttons</li>
          <li>Use <code>aria-pressed</code> for toggle buttons</li>
          <li>Ensure sufficient color contrast in all themes</li>
        </ul>
        
        <h3>Performance</h3>
        <ul>
          <li>CSS-only animations for optimal performance</li>
          <li>Hardware-accelerated transforms for smooth interactions</li>
          <li>Minimal DOM manipulation required</li>
          <li>Responsive design without JavaScript</li>
        </ul>
      </div>
    </div>
  );
}
