export default function Popover() {
  return (
    <div>
      {/* Basic Popovers */}
      <div>
        <h2>Basic Popovers</h2>
        <div className="demo-grid">
          <div className="popover open bottom">
            <button type="button" className="btn primary">Bottom Popover</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-header">
                <strong>Popover Title</strong>
              </div>
              <div className="popover-body">
                This is a simple popover with basic content positioned at the bottom.
              </div>
            </div>
          </div>

          <div className="popover open top">
            <button type="button" className="btn secondary">Top Popover</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-header">
                <strong>Top Positioned</strong>
              </div>
              <div className="popover-body">
                This popover appears above the trigger element.
              </div>
            </div>
          </div>

          <div className="popover open left">
            <button type="button" className="btn success">Left Popover</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-header">
                <strong>Left Side</strong>
              </div>
              <div className="popover-body">
                Positioned to the left of the trigger.
              </div>
            </div>
          </div>

          <div className="popover open right">
            <button type="button" className="btn warning">Right Popover</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-header">
                <strong>Right Side</strong>
              </div>
              <div className="popover-body">
                Positioned to the right of the trigger.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popover Variants */}
      <div>
        <h2>Popover Variants</h2>
        
        <h3>Different Themes</h3>
        <div className="demo-grid">
          <div className="popover open bottom light">
            <button type="button" className="btn outline">Light Theme</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">
                Light themed popover with subtle colors.
              </div>
            </div>
          </div>

          <div className="popover open bottom dark">
            <button type="button" className="btn outline">Dark Theme</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">
                Dark themed popover for contrast.
              </div>
            </div>
          </div>

          <div className="popover open bottom error">
            <button type="button" className="btn error outline">Error Theme</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">
                Error themed popover for warnings or alerts.
              </div>
            </div>
          </div>

          <div className="popover open bottom success">
            <button type="button" className="btn success outline">Success Theme</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">
                Success themed popover for confirmations.
              </div>
            </div>
          </div>
        </div>

        <h3>Different Sizes</h3>
        <div className="demo-grid">
          <div className="popover open bottom sm">
            <button type="button" className="btn sm">Small</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">Small popover content.</div>
            </div>
          </div>

          <div className="popover open bottom">
            <button type="button" className="btn">Regular</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">Regular sized popover with standard content.</div>
            </div>
          </div>

          <div className="popover open bottom lg">
            <button type="button" className="btn lg">Large</button>
            <div className="popover-content">
              <div className="popover-arrow"></div>
              <div className="popover-body">Large popover with more space for content and detailed information.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Popovers */}
      <div>
        <h2>Interactive Popovers</h2>
        
        <h3>Dismissible Popover</h3>
        <div className="popover open bottom dismissible">
          <button type="button" className="btn primary">Dismissible Popover</button>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-header">
              <strong>Interactive Content</strong>
              <button type="button" className="popover-close" title="Close popover">×</button>
            </div>
            <div className="popover-body">
              This popover can be dismissed using the close button or by clicking outside.
            </div>
            <div className="popover-footer">
              <button type="button" className="btn sm primary">Action</button>
              <button type="button" className="btn sm outline">Cancel</button>
            </div>
          </div>
        </div>

        <h3>Rich Content Popover</h3>
        <div className="popover open bottom">
          <button type="button" className="btn info">Rich Content</button>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-header">
              <div className="popover-title">User Profile</div>
              <div className="popover-subtitle">Online now</div>
            </div>
            <div className="popover-body">
              <div className="user-info">
                <div className="avatar sm">
                  <img src="https://via.placeholder.com/40x40" alt="User" />
                  <span className="avatar-status online"></span>
                </div>
                <div className="user-details">
                  <div className="user-name">Sarah Johnson</div>
                  <div className="user-role">Senior Developer</div>
                  <div className="user-email">sarah@example.com</div>
                </div>
              </div>
            </div>
            <div className="popover-footer">
              <button type="button" className="btn sm outline">View Profile</button>
              <button type="button" className="btn sm primary">Message</button>
            </div>
          </div>
        </div>

        <h3>Form Popover</h3>
        <div className="popover open right lg">
          <button type="button" className="btn secondary">Form Popover</button>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-header">
              <strong>Quick Contact</strong>
            </div>
            <div className="popover-body">
              <form className="popover-form">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input type="text" id="contact-name" className="form-control sm" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" className="form-control sm" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" className="form-control sm" rows="3" placeholder="Your message..."></textarea>
                </div>
              </form>
            </div>
            <div className="popover-footer">
              <button type="button" className="btn sm outline">Cancel</button>
              <button type="button" className="btn sm primary">Send</button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Popovers */}
      <div>
        <h2>Menu Popovers</h2>
        
        <h3>Action Menu</h3>
        <div className="popover open bottom menu">
          <button type="button" className="btn outline">Actions ⚙️</button>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-menu">
              <button type="button" className="menu-item">
                <span className="menu-icon">✏️</span>
                Edit
              </button>
              <button type="button" className="menu-item">
                <span className="menu-icon">📋</span>
                Copy
              </button>
              <button type="button" className="menu-item">
                <span className="menu-icon">📤</span>
                Share
              </button>
              <div className="menu-divider"></div>
              <button type="button" className="menu-item danger">
                <span className="menu-icon">🗑️</span>
                Delete
              </button>
            </div>
          </div>
        </div>

        <h3>Navigation Menu</h3>
        <div className="popover open bottom menu">
          <button type="button" className="btn outline">Navigation 📍</button>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-menu">
              <a href="#" className="menu-item">
                <span className="menu-icon">🏠</span>
                Dashboard
              </a>
              <a href="#" className="menu-item">
                <span className="menu-icon">👥</span>
                Users
              </a>
              <a href="#" className="menu-item">
                <span className="menu-icon">📊</span>
                Reports
              </a>
              <a href="#" className="menu-item">
                <span className="menu-icon">⚙️</span>
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover and Focus Triggers */}
      <div>
        <h2>Trigger Types</h2>
        
        <h3>Hover Trigger</h3>
        <div className="popover hover-trigger bottom">
          <button type="button" className="btn outline">Hover Me</button>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-body">
              This popover appears on hover and disappears when you move away.
            </div>
          </div>
        </div>

        <h3>Focus Trigger</h3>
        <div className="popover focus-trigger bottom">
          <input type="text" className="form-control" placeholder="Focus me for help" />
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-header">
              <strong>Input Help</strong>
            </div>
            <div className="popover-body">
              Enter your full name as it appears on your ID. This helps us verify your identity.
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div>
        <h2>Popover Features</h2>
        <ul className="features-list">
          <li>🎯 Multiple positioning options (top, bottom, left, right)</li>
          <li>🎨 Theme variants (light, dark, error, success)</li>
          <li>📏 Size options (small, regular, large)</li>
          <li>❌ Dismissible with close buttons</li>
          <li>🖱️ Multiple trigger types (click, hover, focus)</li>
          <li>📝 Rich content support (forms, images, menus)</li>
          <li>🔗 Interactive elements and actions</li>
          <li>➡️ Arrow indicators for clear association</li>
          <li>📱 Mobile-responsive design</li>
          <li>♿ Full accessibility support</li>
          <li>🎪 Smooth animations and transitions</li>
          <li>🌙 Dark mode compatibility</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div>
        <h2>Usage Notes</h2>
        <div className="usage-notes">
          <p><strong>Positioning:</strong> Use <code>.top</code>, <code>.bottom</code>, <code>.left</code>, or <code>.right</code> classes to control popover placement.</p>
          <p><strong>Themes:</strong> Apply <code>.light</code>, <code>.dark</code>, <code>.error</code>, or <code>.success</code> classes for different visual themes.</p>
          <p><strong>Sizes:</strong> Add <code>.sm</code> or <code>.lg</code> classes for different popover sizes.</p>
          <p><strong>Triggers:</strong> Use <code>.hover-trigger</code> or <code>.focus-trigger</code> for automatic display on interaction.</p>
          <p><strong>Accessibility:</strong> Always include proper ARIA attributes and keyboard navigation support.</p>
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h2>Code Examples</h2>
        <pre><code>{`<!-- Basic Popover -->
<div class="popover bottom">
  <button type="button" class="btn">Trigger</button>
  <div class="popover-content">
    <div class="popover-arrow"></div>
    <div class="popover-body">Content</div>
  </div>
</div>

<!-- Rich Popover -->
<div class="popover bottom dismissible">
  <button type="button" class="btn">Rich Content</button>
  <div class="popover-content">
    <div class="popover-arrow"></div>
    <div class="popover-header">
      <strong>Title</strong>
      <button class="popover-close">×</button>
    </div>
    <div class="popover-body">Content</div>
    <div class="popover-footer">
      <button class="btn sm">Action</button>
    </div>
  </div>
</div>

<!-- Menu Popover -->
<div class="popover bottom menu">
  <button type="button" class="btn">Menu</button>
  <div class="popover-content">
    <div class="popover-arrow"></div>
    <div class="popover-menu">
      <button class="menu-item">Item 1</button>
      <button class="menu-item">Item 2</button>
    </div>
  </div>
</div>`}</code></pre>
      </div>
    </div>
  );
}
