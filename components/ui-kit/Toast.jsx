// Toast.jsx - Comprehensive toast notification component with multiple variants and features
export default function Toast() {
  return (
    <div >
      {/* Basic Toasts */}
      <section>
        <h2>Basic Toast Types</h2>
        <p>Standard toast notifications for different message types.</p>
        
        <div className="demo-grid">
          <div className="toast info">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <p className="toast-message">This is an informational message.</p>
            </div>
          </div>
          
          <div className="toast success">
            <div className="toast-icon success"></div>
            <div className="toast-content">
              <p className="toast-message">Operation completed successfully!</p>
            </div>
          </div>
          
          <div className="toast warning">
            <div className="toast-icon warning"></div>
            <div className="toast-content">
              <p className="toast-message">Please review this warning message.</p>
            </div>
          </div>
          
          <div className="toast error">
            <div className="toast-icon error"></div>
            <div className="toast-content">
              <p className="toast-message">An error occurred while processing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toast with Titles */}
      <section>
        <h2>Toasts with Titles</h2>
        <p>Enhanced toast notifications with titles and detailed messages.</p>
        
        <div className="demo-grid">
          <div className="toast info">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <h4 className="toast-title">Information</h4>
              <p className="toast-message">Your account settings have been updated. Changes will take effect immediately.</p>
            </div>
          </div>
          
          <div className="toast success">
            <div className="toast-icon success"></div>
            <div className="toast-content">
              <h4 className="toast-title">Success</h4>
              <p className="toast-message">File uploaded successfully. You can now share it with your team members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dismissible Toasts */}
      <section>
        <h2>Dismissible Toasts</h2>
        <p>Toast notifications with close buttons for manual dismissal.</p>
        
        <div className="demo-grid">
          <div className="toast info">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <h4 className="toast-title">New Feature Available</h4>
              <p className="toast-message">Check out our new dashboard analytics feature!</p>
            </div>
            <button className="toast-close" aria-label="Close notification">×</button>
          </div>
          
          <div className="toast warning">
            <div className="toast-icon warning"></div>
            <div className="toast-content">
              <h4 className="toast-title">Session Expiring</h4>
              <p className="toast-message">Your session will expire in 5 minutes. Save your work to prevent data loss.</p>
            </div>
            <button className="toast-close" aria-label="Close notification">×</button>
          </div>
        </div>
      </section>

      {/* Toasts with Actions */}
      <section>
        <h2>Toasts with Actions</h2>
        <p>Interactive toast notifications with action buttons.</p>
        
        <div className="demo-grid">
          <div className="toast info">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <h4 className="toast-title">App Update Available</h4>
              <p className="toast-message">A new version is available with bug fixes and improvements.</p>
              <div className="toast-actions">
                <button className="toast-action">Update Now</button>
                <button className="toast-action">Later</button>
              </div>
            </div>
          </div>
          
          <div className="toast error">
            <div className="toast-icon error"></div>
            <div className="toast-content">
              <h4 className="toast-title">Connection Lost</h4>
              <p className="toast-message">Unable to connect to the server. Check your internet connection.</p>
              <div className="toast-actions">
                <button className="toast-action">Retry</button>
                <button className="toast-action">Offline Mode</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2>Size Variants</h2>
        <p>Toast notifications in different sizes for various use cases.</p>
        
        <div className="demo-grid">
          <div className="toast success sm">
            <div className="toast-icon success"></div>
            <div className="toast-content">
              <p className="toast-message">Small toast notification</p>
            </div>
          </div>
          
          <div className="toast info">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <p className="toast-message">Regular size toast notification</p>
            </div>
          </div>
          
          <div className="toast warning lg">
            <div className="toast-icon warning"></div>
            <div className="toast-content">
              <h4 className="toast-title">Large Toast</h4>
              <p className="toast-message">This is a larger toast notification with more prominent styling for important messages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Light Theme Variants */}
      <section>
        <h2>Light Theme Variants</h2>
        <p>Toast notifications with light background styling.</p>
        
        <div className="demo-grid">
          <div className="toast info light">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <h4 className="toast-title">Information</h4>
              <p className="toast-message">Light theme informational message</p>
            </div>
          </div>
          
          <div className="toast success light">
            <div className="toast-icon success"></div>
            <div className="toast-content">
              <h4 className="toast-title">Success</h4>
              <p className="toast-message">Light theme success message</p>
            </div>
          </div>
          
          <div className="toast warning light">
            <div className="toast-icon warning"></div>
            <div className="toast-content">
              <h4 className="toast-title">Warning</h4>
              <p className="toast-message">Light theme warning message</p>
            </div>
          </div>
          
          <div className="toast error light">
            <div className="toast-icon error"></div>
            <div className="toast-content">
              <h4 className="toast-title">Error</h4>
              <p className="toast-message">Light theme error message</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toast with Progress */}
      <section>
        <h2>Toast with Progress Indicator</h2>
        <p>Toast notifications with auto-dismiss progress indicators.</p>
        
        <div className="demo-grid">
          <div className="toast info" style="position: relative;">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <h4 className="toast-title">Auto-dismiss</h4>
              <p className="toast-message">This toast will automatically dismiss after 5 seconds.</p>
            </div>
            <div className="toast-progress"></div>
          </div>
          
          <div className="toast success" style="position: relative;">
            <div className="toast-icon success"></div>
            <div className="toast-content">
              <p className="toast-message">Task completed! Dismissing automatically...</p>
            </div>
            <div className="toast-progress"></div>
          </div>
        </div>
      </section>

      {/* Animation Variants */}
      <section>
        <h2>Animation Variants</h2>
        <p>Different animation styles for toast appearance.</p>
        
        <div className="demo-grid">
          <div className="toast info slide-up">
            <div className="toast-icon info"></div>
            <div className="toast-content">
              <p className="toast-message">Slide up animation</p>
            </div>
          </div>
          
          <div className="toast success fade-in">
            <div className="toast-icon success"></div>
            <div className="toast-content">
              <p className="toast-message">Fade in animation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Container Examples */}
      <section>
        <h2>Toast Positioning</h2>
        <p>Examples of how toasts appear in different screen positions.</p>
        
        <div className="alert info">
          <h4>Positioning Options:</h4>
          <ul>
            <li><strong>top-right:</strong> Most common position for notifications</li>
            <li><strong>top-left:</strong> Alternative for left-aligned layouts</li>
            <li><strong>top-center:</strong> Centered at the top of the screen</li>
            <li><strong>bottom-right:</strong> Bottom-right corner positioning</li>
            <li><strong>bottom-left:</strong> Bottom-left corner positioning</li>
            <li><strong>bottom-center:</strong> Centered at the bottom of the screen</li>
          </ul>
        </div>
        
        <div style="border: 2px dashed #ccc; padding: 2rem; border-radius: 0.5rem; background: #f9f9f9; position: relative; height: 200px;">
          <p style="text-align: center; margin: 0; color: #666;">Toast Container Preview Area</p>
          <div style="position: absolute; top: 1rem; right: 1rem;">
            <div className="toast info sm">
              <div className="toast-icon info"></div>
              <div className="toast-content">
                <p className="toast-message">Top-right position</p>
              </div>
            </div>
          </div>
          <div style="position: absolute; bottom: 1rem; left: 1rem;">
            <div className="toast success sm">
              <div className="toast-icon success"></div>
              <div className="toast-content">
                <p className="toast-message">Bottom-left position</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h2>Real-world Examples</h2>
        <p>Common toast notification patterns in applications.</p>
        
        <div className="demo-grid">
          <div>
            <h3>Form Submission</h3>
            <div className="toast success">
              <div className="toast-icon success"></div>
              <div className="toast-content">
                <h4 className="toast-title">Form Submitted</h4>
                <p className="toast-message">Your contact form has been submitted successfully. We'll get back to you within 24 hours.</p>
              </div>
              <button className="toast-close" aria-label="Close notification">×</button>
            </div>
          </div>
          
          <div>
            <h3>File Operations</h3>
            <div className="toast info">
              <div className="toast-icon info"></div>
              <div className="toast-content">
                <h4 className="toast-title">Upload in Progress</h4>
                <p className="toast-message">Uploading "document.pdf" - 45% complete</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3>System Notifications</h3>
            <div className="toast warning">
              <div className="toast-icon warning"></div>
              <div className="toast-content">
                <h4 className="toast-title">Maintenance Scheduled</h4>
                <p className="toast-message">System maintenance is scheduled for tonight at 2:00 AM EST. Expected downtime: 30 minutes.</p>
                <div className="toast-actions">
                  <button className="toast-action">More Info</button>
                  <button className="toast-action">Remind Me</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3>Undo Actions</h3>
            <div className="toast error">
              <div className="toast-icon error"></div>
              <div className="toast-content">
                <h4 className="toast-title">Item Deleted</h4>
                <p className="toast-message">"Project Alpha" has been moved to trash.</p>
                <div className="toast-actions">
                  <button className="toast-action">Undo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Notes */}
      <section>
        <h2>Implementation Notes</h2>
        <div className="alert info">
          <h4>Usage Guidelines:</h4>
          <ul>
            <li>Use <code>role="alert"</code> for important messages that require immediate attention</li>
            <li>Provide appropriate <code>aria-label</code> attributes for close buttons</li>
            <li>Consider auto-dismiss timing carefully - critical messages should not auto-dismiss</li>
            <li>Use consistent positioning throughout your application</li>
            <li>Limit the number of simultaneous toasts to avoid overwhelming users</li>
            <li>Ensure sufficient color contrast for accessibility</li>
            <li>Test with screen readers to verify proper announcement behavior</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
