// Spinner.jsx - Comprehensive loading spinner component with multiple variants and features
export default function Spinner() {
  return (
    <>
    {/* Basic Spinners */}
      <section>
        <h2>Basic Spinners</h2>
        <p>Standard loading spinners for indicating ongoing processes.</p>
        
        <div className="row">
          <div style="text-align: center;">
            <span className="spinner" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Default</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner primary" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Primary</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner success" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Success</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner warning" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Warning</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner danger" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Danger</p>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2>Size Variants</h2>
        <p>Spinners in different sizes for various use cases.</p>
        
        <div className="row">
          <div style="text-align: center;">
            <span className="spinner xs" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Extra Small</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner sm" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Small</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Medium</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner lg" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Large</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner xl" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Extra Large</p>
          </div>
        </div>
      </section>

      {/* Style Variants */}
      <section>
        <h2>Style Variants</h2>
        <p>Different animation styles for various design needs.</p>
        
        <div className="row">
          <div style="text-align: center;">
            <span className="spinner" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Spin</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner dots lg" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Dots</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner pulse" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Pulse</p>
          </div>
          
          <div style="text-align: center;">
            <span className="spinner grow" aria-label="Loading"></span>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">Grow</p>
          </div>
        </div>
      </section>

      {/* Spinners with Text */}
      <section>
        <h2>Spinners with Text</h2>
        <p>Loading indicators combined with descriptive text.</p>
        
        <div>
          <div>
            <h3>Horizontal Layout</h3>
            <div className="spinner-container">
              <span className="spinner sm" aria-label="Loading"></span>
              <span className="spinner-text">Loading...</span>
            </div>
            
            <div className="spinner-container" style="margin-top: 1rem;">
              <span className="spinner sm success" aria-label="Processing"></span>
              <span className="spinner-text">Processing data...</span>
            </div>
            
            <div className="spinner-container" style="margin-top: 1rem;">
              <span className="spinner sm warning" aria-label="Uploading"></span>
              <span className="spinner-text">Uploading files...</span>
            </div>
          </div>
          
          <div>
            <h3>Vertical Layout</h3>
            <div className="spinner-container vertical">
              <span className="spinner lg" aria-label="Loading"></span>
              <span className="spinner-text">Loading content...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Background Examples */}
      <section>
        <h2>Dark Backgrounds</h2>
        <p>Spinners optimized for dark backgrounds and themes.</p>
        
        <div className="row">
          <div>
            <div style="text-align: center;">
              <span className="spinner white" aria-label="Loading"></span>
              <p style="margin-top: 0.5rem; font-size: 0.875rem; color: white;">White</p>
            </div>
            
            <div style="text-align: center;">
              <span className="spinner white sm" aria-label="Loading"></span>
              <span style="color: white; margin-left: 0.5rem;">Loading...</span>
            </div>
            
            <div style="text-align: center;">
              <div className="spinner-container vertical" style="color: white;">
                <span className="spinner white lg" aria-label="Loading"></span>
                <span className="spinner-text">Please wait...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Integration */}
      <section>
        <h2>Button Integration</h2>
        <p>Spinners integrated with buttons for form submissions and actions.</p>
        
        <div className="row">
          <div>
            <button className="btn primary">
              <span className="spinner xs white" aria-hidden="true"></span>
              Loading...
            </button>
          </div>
          
          <div>
            <button className="btn secondary loading">
              <span className="spinner xs" aria-hidden="true"></span>
              Processing...
            </button>
          </div>
          
          <div>
            <button className="btn success">
              <span className="spinner xs white" aria-hidden="true"></span>
              Saving changes...
            </button>
          </div>
          
          <div>
            <button className="btn danger">
              <span className="spinner xs white" aria-hidden="true"></span>
              Deleting...
            </button>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section>
        <h2>Loading States</h2>
        <p>Different loading state representations for various contexts.</p>
        
        <div>
          <div>
            <h3>Inline Loading</h3>
            <p>
              Content is loading 
              <span className="spinner xs" aria-label="Loading" style="margin: 0 0.5rem;"></span>
              please wait...
            </p>
          </div>
          
          <div>
            <h3>Card Loading</h3>
            <div className="card" style="padding: 2rem; text-align: center;">
              <div className="spinner-container vertical">
                <span className="spinner lg" aria-label="Loading content"></span>
                <span className="spinner-text">Loading content...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2>Accessibility Features</h2>
        <p>Proper accessibility implementation for screen readers and reduced motion preferences.</p>
        
        <div>
          <div>
            <h3>Screen Reader Support</h3>
            <div className="spinner-container">
              <span className="spinner" aria-label="Loading page content"></span>
              <span className="spinner-text">Loading...</span>
              <span className="sr-only">Content is being loaded, please wait.</span>
            </div>
          </div>
          
          <div>
            <h3>Reduced Motion</h3>
            <p style="font-size: 0.875rem; color: #666;">
              Users with motion sensitivity preferences will see slower, less intense animations.
              The spinner respects <code>prefers-reduced-motion</code> settings.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section>
        <h2>Common Use Cases</h2>
        <p>Real-world examples of spinner usage in different scenarios.</p>
        
        <div>
          <div>
            <h3>Form Submission</h3>
            <form style="border: 1px solid #ddd; padding: 1rem; border-radius: 0.5rem;">
              <div style="margin-bottom: 1rem;">
                <label>Email:</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button className="btn primary" type="submit">
                <span className="spinner xs white" aria-hidden="true"></span>
                Subscribing...
              </button>
            </form>
          </div>
          
          <div>
            <h3>Data Loading</h3>
            <div style="border: 1px solid #ddd; padding: 2rem; border-radius: 0.5rem; text-align: center;">
              <div className="spinner-container vertical">
                <span className="spinner lg primary" aria-label="Loading data"></span>
                <span className="spinner-text">Fetching latest data...</span>
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
            <li>Always include appropriate <code>aria-label</code> attributes for accessibility</li>
            <li>Use <code>aria-hidden="true"</code> on decorative spinners when descriptive text is present</li>
            <li>Consider using <code>sr-only</code> class for additional screen reader context</li>
            <li>Match spinner color to your brand or context (success, warning, etc.)</li>
            <li>Choose appropriate size based on the surrounding content</li>
            <li>Use overlay spinners sparingly to avoid poor user experience</li>
          </ul>
        </div>
      </section>
    </>
  );
}
