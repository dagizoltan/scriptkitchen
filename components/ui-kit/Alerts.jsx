export default function Alerts() {
  return (
    <div className="demo-container">
      {/* Basic Alerts */}
      <div className="demo-section">
        <h2>Basic Alerts</h2>
        <div className="alert success">
          <span className="alert-icon">✓</span>
          <div className="alert-content">
            <strong>Success!</strong> Your action was completed successfully.
          </div>
        </div>
        
        <div className="alert warning">
          <span className="alert-icon">⚠️</span>
          <div className="alert-content">
            <strong>Warning!</strong> Please review this information carefully.
          </div>
        </div>
        
        <div className="alert error">
          <span className="alert-icon">❌</span>
          <div className="alert-content">
            <strong>Error!</strong> Something went wrong. Please try again.
          </div>
        </div>
        
        <div className="alert info">
          <span className="alert-icon">ℹ️</span>
          <div className="alert-content">
            <strong>Info:</strong> Here's some helpful information.
          </div>
        </div>
      </div>

      {/* Alert Variants */}
      <div className="demo-section">
        <h2>Alert Variants</h2>
        
        <h3>Filled Alerts</h3>
        <div className="alert primary">
          <span className="alert-icon">🔵</span>
          <div className="alert-content">Primary alert with filled background</div>
        </div>
        
        <div className="alert secondary">
          <span className="alert-icon">⚫</span>
          <div className="alert-content">Secondary alert with filled background</div>
        </div>

        <h3>Outline Alerts</h3>
        <div className="alert outline success">
          <span className="alert-icon">✓</span>
          <div className="alert-content">
            <strong>Success!</strong> This is an outline success alert.
          </div>
        </div>
        
        <div className="alert outline warning">
          <span className="alert-icon">⚠️</span>
          <div className="alert-content">
            <strong>Warning!</strong> This is an outline warning alert.
          </div>
        </div>
        
        <div className="alert outline error">
          <span className="alert-icon">❌</span>
          <div className="alert-content">
            <strong>Error!</strong> This is an outline error alert.
          </div>
        </div>
        
        <div className="alert outline info">
          <span className="alert-icon">ℹ️</span>
          <div className="alert-content">
            <strong>Info:</strong> This is an outline info alert.
          </div>
        </div>

        <h3>Ghost Alerts</h3>
        <div className="alert ghost success">
          <span className="alert-icon">✓</span>
          <div className="alert-content">This is a ghost success alert with subtle background.</div>
        </div>
        
        <div className="alert ghost warning">
          <span className="alert-icon">⚠️</span>
          <div className="alert-content">This is a ghost warning alert with subtle background.</div>
        </div>
      </div>

      {/* Dismissible Alerts */}
      <div className="demo-section">
        <h2>Dismissible Alerts</h2>
        <div className="alert success dismissible">
          <span className="alert-icon">✓</span>
          <div className="alert-content">
            <strong>Great job!</strong> This alert can be dismissed by clicking the X button.
          </div>
          <button type="button" className="alert-close" title="Dismiss alert">×</button>
        </div>
        
        <div className="alert outline info dismissible">
          <span className="alert-icon">ℹ️</span>
          <div className="alert-content">
            You can dismiss this outline alert as well.
          </div>
          <button type="button" className="alert-close" title="Dismiss alert">×</button>
        </div>
      </div>

      {/* Complex Alerts */}
      <div className="demo-section">
        <h2>Complex Alerts with Actions</h2>
        <div className="alert warning">
          <span className="alert-icon">⚠️</span>
          <div className="alert-content">
            <div className="alert-title">Update Required</div>
            <div className="alert-description">
              A new version is available. Update now to get the latest features and security improvements.
            </div>
            <div className="alert-actions">
              <button type="button" className="btn sm">Update Now</button>
              <button type="button" className="btn ghost sm">Later</button>
            </div>
          </div>
          <button type="button" className="alert-close" title="Dismiss alert">×</button>
        </div>
        
        <div className="alert outline error">
          <span className="alert-icon">❌</span>
          <div className="alert-content">
            <div className="alert-title">Payment Failed</div>
            <div className="alert-description">
              Your payment could not be processed. Please check your payment details and try again.
            </div>
            <div className="alert-actions">
              <button type="button" className="btn error sm">Retry Payment</button>
              <button type="button" className="btn outline sm">Contact Support</button>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Sizes */}
      <div className="demo-section">
        <h2>Alert Sizes</h2>
        <div className="alert sm success">
          <span className="alert-icon">✓</span>
          <div className="alert-content">Small success alert</div>
        </div>
        
        <div className="alert success">
          <span className="alert-icon">✓</span>
          <div className="alert-content">Regular success alert</div>
        </div>
        
        <div className="alert lg success">
          <span className="alert-icon">✓</span>
          <div className="alert-content">Large success alert with more content space</div>
        </div>
      </div>

      {/* Simple Alerts (no icons) */}
      <div className="demo-section">
        <h2>Simple Alerts (No Icons)</h2>
        <div className="alert success simple">
          Simple success message without icon
        </div>
        
        <div className="alert outline warning simple">
          Simple outline warning message
        </div>
        
        <div className="alert ghost info simple">
          Simple ghost info message
        </div>
      </div>

      {/* Features List */}
      <div className="demo-section">
        <h2>Alert Features</h2>
        <ul className="features-list">
          <li>🎨 Multiple variants (filled, outline, ghost)</li>
          <li>🌈 Color themes (success, warning, error, info, primary, secondary)</li>
          <li>📏 Size options (small, regular, large)</li>
          <li>❌ Dismissible with close button</li>
          <li>🎯 Icon support with proper spacing</li>
          <li>📝 Complex content with titles, descriptions, and actions</li>
          <li>🎭 Simple variant without icons</li>
          <li>📱 Mobile-responsive design</li>
          <li>♿ Full accessibility support</li>
          <li>🎪 Smooth animations and transitions</li>
          <li>🌙 Dark mode compatibility</li>
          <li>⚡ High contrast mode support</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div className="demo-section">
        <h2>Usage Notes</h2>
        <div className="usage-notes">
          <p><strong>Semantic Usage:</strong> Use appropriate alert types - success for confirmations, warning for cautions, error for problems, info for general information.</p>
          <p><strong>Dismissible Alerts:</strong> Add <code>dismissible</code> class and include a <code>&lt;button class="alert-close"&gt;</code> for closeable alerts.</p>
          <p><strong>Icons:</strong> Wrap icons in <code>&lt;span class="alert-icon"&gt;</code> for proper spacing and alignment.</p>
          <p><strong>Complex Content:</strong> Use <code>alert-title</code>, <code>alert-description</code>, and <code>alert-actions</code> classes for structured content.</p>
        </div>
      </div>

      {/* Code Examples */}
      <div className="demo-section">
        <h2>Code Examples</h2>
        <pre><code>{`<!-- Basic Alert -->
<div class="alert success">
  <span class="alert-icon">✓</span>
  <div class="alert-content">
    <strong>Success!</strong> Your action completed.
  </div>
</div>

<!-- Outline Alert -->
<div class="alert outline warning">
  <span class="alert-icon">⚠️</span>
  <div class="alert-content">Warning message</div>
</div>

<!-- Dismissible Alert -->
<div class="alert success dismissible">
  <span class="alert-icon">✓</span>
  <div class="alert-content">Dismissible alert</div>
  <button type="button" class="alert-close">×</button>
</div>

<!-- Complex Alert -->
<div class="alert warning">
  <span class="alert-icon">⚠️</span>
  <div class="alert-content">
    <div class="alert-title">Title</div>
    <div class="alert-description">Description</div>
    <div class="alert-actions">
      <button class="btn sm">Action</button>
    </div>
  </div>
</div>

<!-- Size Variants -->
<div class="alert sm success">Small</div>
<div class="alert lg success">Large</div>

<!-- Simple Alert -->
<div class="alert success simple">Simple</div>`}</code></pre>
      </div>
    </div>
  );
}
