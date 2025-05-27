import Stepper from "../../components/ui-kit/Stepper.jsx";

export default function StepperPage() {
  return (
    <section>
      <h1>Stepper</h1>
      <p>
        A comprehensive CSS-only stepper component for displaying progress through a sequence
        of steps. Perfect for multi-step forms, onboarding flows, checkout processes, or any 
        workflow that can be broken down into sequential stages.
      </p>

      <div className="section-divider">
        <h2>✨ Features</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>🎯 Multiple Orientations</h3>
            <p>Horizontal and vertical stepper layouts</p>
          </div>
          <div className="feature-item">
            <h3>📏 Size Variants</h3>
            <p>Small, regular, and large sizing options</p>
          </div>
          <div className="feature-item">
            <h3>🔄 Step States</h3>
            <p>Completed, active, disabled, and error states</p>
          </div>
          <div className="feature-item">
            <h3>🎨 Color Variants</h3>
            <p>Primary, success, warning, info color schemes</p>
          </div>
          <div className="feature-item">
            <h3>📝 Rich Content</h3>
            <p>Support for step titles and descriptions</p>
          </div>
          <div className="feature-item">
            <h3>🖱️ Interactive</h3>
            <p>Clickable steps with navigation support</p>
          </div>
          <div className="feature-item">
            <h3>♿ Accessible</h3>
            <p>Full ARIA support and keyboard navigation</p>
          </div>
          <div className="feature-item">
            <h3>📱 Responsive</h3>
            <p>Mobile-friendly adaptive layouts</p>
          </div>
        </div>
      </div>

      <div className="section-divider">
        <h2>🔧 Usage</h2>
        <p>
          Add the <code>stepper</code> class to create a stepper component. Use size modifiers
          (<code>stepper-sm</code>, <code>stepper-lg</code>), orientation classes 
          (<code>stepper-vertical</code>), and color variants (<code>stepper-success</code>, etc.)
          to customize appearance.
        </p>

        <div className="code-example">
          <h3>Basic HTML Structure:</h3>
          <pre><code>{`<!-- Basic Stepper -->
<div class="stepper">
  <div class="stepper-item completed">
    <div class="stepper-marker">1</div>
    <div class="stepper-content">
      <div class="stepper-title">Personal Info</div>
    </div>
  </div>
  <div class="stepper-item active">
    <div class="stepper-marker">2</div>
    <div class="stepper-content">
      <div class="stepper-title">Account Details</div>
    </div>
  </div>
  <div class="stepper-item">
    <div class="stepper-marker">3</div>
    <div class="stepper-content">
      <div class="stepper-title">Confirmation</div>
    </div>
  </div>
</div>`}</code></pre>
        </div>

        <div className="code-example">
          <h3>Advanced Example with Descriptions:</h3>
          <pre><code>{`<!-- Stepper with Descriptions -->
<div class="stepper stepper-lg stepper-success">
  <div class="stepper-item completed">
    <div class="stepper-marker">✓</div>
    <div class="stepper-content">
      <div class="stepper-title">Order Placed</div>
      <div class="stepper-description">Your order has been confirmed</div>
    </div>
  </div>
  <div class="stepper-item active">
    <div class="stepper-marker">2</div>
    <div class="stepper-content">
      <div class="stepper-title">Processing</div>
      <div class="stepper-description">We're preparing your items</div>
    </div>
  </div>
  <div class="stepper-item">
    <div class="stepper-marker">3</div>
    <div class="stepper-content">
      <div class="stepper-title">Shipped</div>
      <div class="stepper-description">Your order is on its way</div>
    </div>
  </div>
</div>`}</code></pre>
        </div>
      </div>

      <div className="section-divider">
        <h2>🎨 CSS Classes</h2>
        <div className="css-reference">
          <div className="css-section">
            <h3>Base Classes</h3>
            <ul>
              <li><code>.stepper</code> - Base stepper container</li>
              <li><code>.stepper-item</code> - Individual step item</li>
              <li><code>.stepper-marker</code> - Step number/icon marker</li>
              <li><code>.stepper-content</code> - Step content container</li>
              <li><code>.stepper-title</code> - Step title text</li>
              <li><code>.stepper-description</code> - Step description text</li>
            </ul>
          </div>

          <div className="css-section">
            <h3>Size Variants</h3>
            <ul>
              <li><code>.stepper-sm</code> - Small stepper (24px markers)</li>
              <li><code>.stepper</code> - Regular stepper (32px markers)</li>
              <li><code>.stepper-lg</code> - Large stepper (40px markers)</li>
            </ul>
          </div>

          <div className="css-section">
            <h3>Orientation</h3>
            <ul>
              <li><code>.stepper</code> - Horizontal layout (default)</li>
              <li><code>.stepper-vertical</code> - Vertical layout</li>
            </ul>
          </div>

          <div className="css-section">
            <h3>Color Variants</h3>
            <ul>
              <li><code>.stepper</code> - Primary color (default)</li>
              <li><code>.stepper-success</code> - Success green</li>
              <li><code>.stepper-warning</code> - Warning orange</li>
              <li><code>.stepper-info</code> - Info blue</li>
            </ul>
          </div>

          <div className="css-section">
            <h3>Step States</h3>
            <ul>
              <li><code>.completed</code> - Completed step state</li>
              <li><code>.active</code> - Current/active step state</li>
              <li><code>.disabled</code> - Disabled step state</li>
              <li><code>.error</code> - Error step state</li>
            </ul>
          </div>

          <div className="css-section">
            <h3>Style Modifiers</h3>
            <ul>
              <li><code>.stepper-clickable</code> - Makes steps interactive</li>
              <li><code>.stepper-progress</code> - Progress bar style</li>
              <li><code>.stepper-connector-dashed</code> - Dashed connectors</li>
              <li><code>.stepper-connector-dotted</code> - Dotted connectors</li>
              <li><code>.stepper-shape-rounded</code> - Rounded square markers</li>
              <li><code>.stepper-shape-square</code> - Square markers</li>
            </ul>
          </div>
        </div>
      </div>

      <Stepper />
    </section>
  );
}
