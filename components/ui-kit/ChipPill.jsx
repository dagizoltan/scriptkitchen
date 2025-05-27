export default function ChipPill() {
  return (
    <div>
      {/* Basic Chips */}
      <div>
        <h2>Basic Chips</h2>
        <div className="chip-group">
          <span className="chip">Default</span>
          <span className="chip primary">Primary</span>
          <span className="chip secondary">Secondary</span>
          <span className="chip success">Success</span>
          <span className="chip warning">Warning</span>
          <span className="chip error">Error</span>
          <span className="chip info">Info</span>
        </div>
      </div>

      {/* Chip Variants */}
      <div>
        <h2>Chip Variants</h2>
        
        <h3>Outline Chips</h3>
        <div className="chip-group">
          <span className="chip outline">Default</span>
          <span className="chip outline primary">Primary</span>
          <span className="chip outline secondary">Secondary</span>
          <span className="chip outline success">Success</span>
          <span className="chip outline warning">Warning</span>
          <span className="chip outline error">Error</span>
          <span className="chip outline info">Info</span>
        </div>

        <h3>Ghost Chips</h3>
        <div className="chip-group">
          <span className="chip ghost">Default</span>
          <span className="chip ghost primary">Primary</span>
          <span className="chip ghost secondary">Secondary</span>
          <span className="chip ghost success">Success</span>
          <span className="chip ghost warning">Warning</span>
          <span className="chip ghost error">Error</span>
          <span className="chip ghost info">Info</span>
        </div>
      </div>

      {/* Chip Sizes */}
      <div>
        <h2>Chip Sizes</h2>
        <div className="chip-group">
          <span className="chip sm">Small</span>
          <span className="chip">Regular</span>
          <span className="chip lg">Large</span>
        </div>
      </div>

      {/* Interactive Chips */}
      <div>
        <h2>Interactive Chips</h2>
        
        <h3>Clickable Chips</h3>
        <div className="chip-group">
          <button type="button" className="chip clickable primary">Button Chip</button>
          <a href="#" className="chip clickable success">Link Chip</a>
          <span className="chip clickable warning">Span Chip</span>
        </div>

        <h3>Deletable Chips</h3>
        <div className="chip-group">
          <span className="chip deletable primary">
            JavaScript
            <button type="button" className="chip-delete" title="Remove JavaScript tag">×</button>
          </span>
          <span className="chip deletable success">
            React
            <button type="button" className="chip-delete" title="Remove React tag">×</button>
          </span>
          <span className="chip deletable info">
            CSS
            <button type="button" className="chip-delete" title="Remove CSS tag">×</button>
          </span>
        </div>
      </div>

      {/* Chips with Icons */}
      <div>
        <h2>Chips with Icons</h2>
        <div className="chip-group">
          <span className="chip primary">
            <span className="chip-icon">👤</span>
            User
          </span>
          <span className="chip success">
            <span className="chip-icon">✓</span>
            Completed
          </span>
          <span className="chip warning">
            <span className="chip-icon">⚠️</span>
            Warning
          </span>
          <span className="chip error">
            <span className="chip-icon">❌</span>
            Error
          </span>
          <span className="chip info">
            <span className="chip-icon">ℹ️</span>
            Information
          </span>
        </div>
      </div>

      {/* Pills */}
      <div>
        <h2>Pills (Fully Rounded)</h2>
        <div className="chip-group">
          <span className="pill">Default</span>
          <span className="pill primary">Primary</span>
          <span className="pill secondary">Secondary</span>
          <span className="pill success">Success</span>
          <span className="pill warning">Warning</span>
          <span className="pill error">Error</span>
          <span className="pill info">Info</span>
        </div>

        <h3>Outline Pills</h3>
        <div className="chip-group">
          <span className="pill outline primary">Primary</span>
          <span className="pill outline success">Success</span>
          <span className="pill outline warning">Warning</span>
          <span className="pill outline error">Error</span>
        </div>
      </div>

      {/* Chip Groups */}
      <div>
        <h2>Chip Groups & Categories</h2>
        
        <h3>Technologies</h3>
        <div className="chip-group">
          <span className="chip primary">Frontend</span>
          <span className="chip secondary">Backend</span>
          <span className="chip success">Database</span>
          <span className="chip info">DevOps</span>
        </div>

        <h3>Status Indicators</h3>
        <div className="chip-group">
          <span className="chip success">Online</span>
          <span className="chip warning">Away</span>
          <span className="chip error">Busy</span>
          <span className="pill outline">Offline</span>
        </div>

        <h3>Filter Tags</h3>
        <div className="chip-group">
          <span className="chip outline clickable">All</span>
          <span className="chip primary clickable">Active</span>
          <span className="chip ghost clickable">Archived</span>
          <span className="chip ghost clickable">Draft</span>
        </div>
      </div>

      {/* Loading and Disabled States */}
      <div>
        <h2>Special States</h2>
        
        <h3>Disabled Chips</h3>
        <div className="chip-group">
          <span className="chip disabled">Disabled</span>
          <span className="chip primary disabled">Primary Disabled</span>
          <button type="button" className="chip clickable disabled" disabled>Button Disabled</button>
        </div>

        <h3>Loading Chips</h3>
        <div className="chip-group">
          <span className="chip loading">Loading...</span>
          <span className="chip primary loading">Processing...</span>
        </div>
      </div>

      {/* Features List */}
      <div>
        <h2>Chip & Pill Features</h2>
        <ul className="features-list">
          <li>🎨 Multiple variants (filled, outline, ghost)</li>
          <li>🌈 Color themes (primary, secondary, success, warning, error, info)</li>
          <li>📏 Size options (small, regular, large)</li>
          <li>🖱️ Interactive states (clickable, deletable)</li>
          <li>🎯 Icon support with proper spacing</li>
          <li>💊 Pill variant with full rounded corners</li>
          <li>🔄 Loading and disabled states</li>
          <li>📱 Mobile-responsive design</li>
          <li>♿ Full accessibility support</li>
          <li>🎭 Smooth hover and focus animations</li>
          <li>🌙 Dark mode compatibility</li>
          <li>⚡ High contrast mode support</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div>
        <h2>Usage Notes</h2>
        <div className="usage-notes">
          <p><strong>Semantic HTML:</strong> Use <code>&lt;button&gt;</code> for clickable chips, <code>&lt;a&gt;</code> for links, and <code>&lt;span&gt;</code> for display-only.</p>
          <p><strong>Deletable Chips:</strong> Add <code>deletable</code> class and include a <code>&lt;button class="chip-delete"&gt;</code> for removal functionality.</p>
          <p><strong>Icons:</strong> Wrap icons in <code>&lt;span class="chip-icon"&gt;</code> for proper spacing and alignment.</p>
          <p><strong>Accessibility:</strong> Always provide <code>title</code> attributes for delete buttons and ensure sufficient color contrast.</p>
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h2>Code Examples</h2>
        <pre><code>{`<!-- Basic Chip -->
<span class="chip primary">Primary</span>

<!-- Outline Chip -->
<span class="chip outline success">Success</span>

<!-- Clickable Chip -->
<button class="chip clickable primary">Click me</button>

<!-- Deletable Chip -->
<span class="chip deletable primary">
  JavaScript
  <button class="chip-delete" title="Remove">×</button>
</span>

<!-- Chip with Icon -->
<span class="chip success">
  <span class="chip-icon">✓</span>
  Completed
</span>

<!-- Pill Variant -->
<span class="pill primary">Pill</span>

<!-- Size Variants -->
<span class="chip sm">Small</span>
<span class="chip">Regular</span>
<span class="chip lg">Large</span>`}</code></pre>
      </div>
    </div>
  );
}
