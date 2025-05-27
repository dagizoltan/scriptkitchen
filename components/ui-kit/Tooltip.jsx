// Tooltip.jsx - Comprehensive tooltip component with positioning, theming, and interactive features
export default function Tooltip() {
  return (
    <div className="container">
      {/* Basic Tooltips */}
      <section className="demo-section">
        <h2>Basic Tooltips</h2>
        <p>Standard tooltips with different positioning options.</p>
        
        <div className="demo-grid" style="gap: 3rem; justify-items: center; padding: 4rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn">Top Tooltip</button>
              <span className="tooltip top">This tooltip appears on top</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Bottom Tooltip</button>
              <span className="tooltip bottom">This tooltip appears on bottom</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Left Tooltip</button>
              <span className="tooltip left">This tooltip appears on left</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Right Tooltip</button>
              <span className="tooltip right">This tooltip appears on right</span>
            </span>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section className="demo-section">
        <h2>Color Variants</h2>
        <p>Tooltips with different color themes for various contexts.</p>
        
        <div className="demo-grid" style="gap: 2rem; justify-items: center; padding: 3rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn">Default</button>
              <span className="tooltip">Default dark tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Light</button>
              <span className="tooltip light">Light themed tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn primary">Primary</button>
              <span className="tooltip primary">Primary colored tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn success">Success</button>
              <span className="tooltip success">Success message tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn warning">Warning</button>
              <span className="tooltip warning">Warning message tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn danger">Error</button>
              <span className="tooltip error">Error message tooltip</span>
            </span>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section className="demo-section">
        <h2>Size Variants</h2>
        <p>Tooltips in different sizes for various use cases.</p>
        
        <div className="demo-grid" style="gap: 2rem; justify-items: center; padding: 3rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn sm">Small</button>
              <span className="tooltip sm">Small tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Regular</button>
              <span className="tooltip">Regular size tooltip</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn lg">Large</button>
              <span className="tooltip lg">Large tooltip with more space</span>
            </span>
          </div>
        </div>
      </section>

      {/* Rich Content Tooltips */}
      <section className="demo-section">
        <h2>Rich Content Tooltips</h2>
        <p>Tooltips with structured content including titles and descriptions.</p>
        
        <div className="demo-grid" style="gap: 3rem; justify-items: center; padding: 4rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn primary">User Info</button>
              <span className="tooltip rich light bottom">
                <div className="tooltip-title">John Doe</div>
                <div className="tooltip-content">
                  Senior Developer<br />
                  <strong>Last active:</strong> 2 hours ago<br />
                  <strong>Status:</strong> Online
                </div>
              </span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <span style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border: 1px solid #ddd; border-radius: 0.375rem;">
                📊 Analytics
              </span>
              <span className="tooltip rich primary right">
                <div className="tooltip-title">Performance Metrics</div>
                <div className="tooltip-content">
                  <strong>Page Views:</strong> 1,234<br />
                  <strong>Unique Visitors:</strong> 892<br />
                  <strong>Bounce Rate:</strong> 32%<br />
                  <strong>Avg. Session:</strong> 3m 45s
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Animation Variants */}
      <section className="demo-section">
        <h2>Animation Variants</h2>
        <p>Different animation styles for tooltip appearance.</p>
        
        <div className="demo-grid" style="gap: 2rem; justify-items: center; padding: 3rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn">Fade</button>
              <span className="tooltip fade">Fade animation</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Slide Top</button>
              <span className="tooltip slide top">Slides in from top</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Slide Left</button>
              <span className="tooltip slide left">Slides in from left</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">Slide Right</button>
              <span className="tooltip slide right">Slides in from right</span>
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Tooltips */}
      <section className="demo-section">
        <h2>Interactive Tooltips</h2>
        <p>Tooltips that can be hovered and contain interactive elements.</p>
        
        <div className="demo-grid" style="gap: 3rem; justify-items: center; padding: 4rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn primary">Hover for Actions</button>
              <span className="tooltip interactive rich light bottom">
                <button className="tooltip-close" aria-label="Close">×</button>
                <div className="tooltip-title">Quick Actions</div>
                <div className="tooltip-content">
                  <button style="display: block; width: 100%; margin: 0.25rem 0; padding: 0.25rem 0.5rem; border: 1px solid #ddd; border-radius: 0.25rem; background: white;">Edit Profile</button>
                  <button style="display: block; width: 100%; margin: 0.25rem 0; padding: 0.25rem 0.5rem; border: 1px solid #ddd; border-radius: 0.25rem; background: white;">View Settings</button>
                  <button style="display: block; width: 100%; margin: 0.25rem 0; padding: 0.25rem 0.5rem; border: 1px solid #ddd; border-radius: 0.25rem; background: white;">Sign Out</button>
                </div>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* No Arrow Tooltips */}
      <section className="demo-section">
        <h2>Arrow Variants</h2>
        <p>Tooltips with and without pointing arrows.</p>
        
        <div className="demo-grid" style="gap: 2rem; justify-items: center; padding: 3rem 2rem;">
          <div>
            <span className="tooltip-container">
              <button className="btn">With Arrow</button>
              <span className="tooltip">Standard tooltip with arrow</span>
            </span>
          </div>
          
          <div>
            <span className="tooltip-container">
              <button className="btn">No Arrow</button>
              <span className="tooltip no-arrow">Tooltip without arrow</span>
            </span>
          </div>
        </div>
      </section>

      {/* Always Visible */}
      <section className="demo-section">
        <h2>Always Visible Tooltips</h2>
        <p>Tooltips that are always shown, useful for demonstrations or critical information.</p>
        
        <div style="text-align: center; padding: 2rem;">
          <span className="tooltip-container">
            <span style="display: inline-block; padding: 0.5rem 1rem; border: 2px dashed #ccc; border-radius: 0.5rem;">
              Important Element
            </span>
            <span className="tooltip always-visible top warning">
              This is always visible!
            </span>
          </span>
        </div>
      </section>

      {/* Tooltips in Context */}
      <section className="demo-section">
        <h2>Real-world Examples</h2>
        <p>Common tooltip usage patterns in user interfaces.</p>
        
        <div className="demo-grid">
          <div>
            <h3>Form Field Help</h3>
            <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 0.5rem;">
              <label style="display: block; margin-bottom: 0.5rem;">
                Password 
                <span className="tooltip-container">
                  <span style="cursor: help; color: #666;">ⓘ</span>
                  <span className="tooltip right light">
                    Password must be at least 8 characters with uppercase, lowercase, number, and special character.
                  </span>
                </span>
              </label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>
          </div>
          
          <div>
            <h3>Icon Actions</h3>
            <div style="display: flex; gap: 1rem; align-items: center;">
              <span className="tooltip-container">
                <button style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">📄</button>
                <span className="tooltip">View Document</span>
              </span>
              
              <span className="tooltip-container">
                <button style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✏️</button>
                <span className="tooltip">Edit Content</span>
              </span>
              
              <span className="tooltip-container">
                <button style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">🗑️</button>
                <span className="tooltip error">Delete Item</span>
              </span>
              
              <span className="tooltip-container">
                <button style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">💾</button>
                <span className="tooltip success">Save Changes</span>
              </span>
            </div>
          </div>
          
          <div>
            <h3>Status Indicators</h3>
            <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
              <span className="tooltip-container">
                <span style="display: inline-block; width: 0.75rem; height: 0.75rem; background: #10b981; border-radius: 50%;"></span>
                <span className="tooltip success">Online - Available</span>
              </span>
              
              <span className="tooltip-container">
                <span style="display: inline-block; width: 0.75rem; height: 0.75rem; background: #f59e0b; border-radius: 50%;"></span>
                <span className="tooltip warning">Away - Back in 15 min</span>
              </span>
              
              <span className="tooltip-container">
                <span style="display: inline-block; width: 0.75rem; height: 0.75rem; background: #ef4444; border-radius: 50%;"></span>
                <span className="tooltip error">Busy - Do not disturb</span>
              </span>
              
              <span className="tooltip-container">
                <span style="display: inline-block; width: 0.75rem; height: 0.75rem; background: #6b7280; border-radius: 50%;"></span>
                <span className="tooltip">Offline - Last seen 2 hours ago</span>
              </span>
            </div>
          </div>
          
          <div>
            <h3>Progress Indicators</h3>
            <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 0.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span>Upload Progress</span>
                <span className="tooltip-container">
                  <span style="cursor: help;">75%</span>
                  <span className="tooltip rich light left">
                    <div className="tooltip-title">Upload Details</div>
                    <div className="tooltip-content">
                      <strong>File:</strong> document.pdf<br />
                      <strong>Size:</strong> 2.4 MB<br />
                      <strong>Speed:</strong> 1.2 MB/s<br />
                      <strong>Remaining:</strong> ~2 seconds
                    </div>
                  </span>
                </span>
              </div>
              <div style="width: 100%; height: 0.5rem; background: #e5e7eb; border-radius: 0.25rem;">
                <div style="width: 75%; height: 100%; background: #3b82f6; border-radius: 0.25rem;"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="demo-section">
        <h2>Implementation Notes</h2>
        <div className="alert info">
          <h4>Usage Guidelines:</h4>
          <ul>
            <li>Keep tooltip text concise and helpful</li>
            <li>Use appropriate positioning to avoid viewport clipping</li>
            <li>Ensure sufficient color contrast for accessibility</li>
            <li>Consider mobile users - tooltips may not work well on touch devices</li>
            <li>Test with keyboard navigation and screen readers</li>
            <li>Use interactive tooltips sparingly to avoid UI confusion</li>
            <li>Implement proper focus management for keyboard users</li>
            <li>Consider using <code>aria-describedby</code> for semantic relationships</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
