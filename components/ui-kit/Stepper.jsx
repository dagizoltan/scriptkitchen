// Comprehensive Stepper component with multiple variants and features

export default function Stepper() {
  return (
    <div className="space-y-8">
      {/* Basic Stepper */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Basic Stepper</h3>
        <div className="stepper">
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">1</span>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-circle">
              <span className="step-number">2</span>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle">
              <span className="step-number">3</span>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle">
              <span className="step-number">4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Small Stepper</h4>
            <div className="stepper stepper--sm">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Large Stepper</h4>
            <div className="stepper stepper--lg">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper with Labels */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Stepper with Labels</h3>
        <div className="stepper">
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">1</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Account Setup</h4>
              <p className="step-description">Create your account details</p>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-circle">
              <span className="step-number">2</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Profile Information</h4>
              <p className="step-description">Add your personal information</p>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle">
              <span className="step-number">3</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Verification</h4>
              <p className="step-description">Verify your email address</p>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle">
              <span className="step-number">4</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Complete</h4>
              <p className="step-description">Setup complete</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Stepper */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Vertical Stepper</h3>
        <div className="stepper stepper--vertical">
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">1</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Order Placed</h4>
              <p className="step-description">Your order has been received and is being processed.</p>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">2</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Processing</h4>
              <p className="step-description">Your order is being prepared for shipment.</p>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-circle">
              <span className="step-number">3</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Shipped</h4>
              <p className="step-description">Your order has been shipped and is on the way.</p>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle">
              <span className="step-number">4</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Delivered</h4>
              <p className="step-description">Your order has been delivered successfully.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Color Variants</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Success Stepper</h4>
            <div className="stepper stepper--success">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">4</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Warning Stepper</h4>
            <div className="stepper stepper--warning">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Stepper */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Progress Stepper</h3>
        <div className="stepper stepper--progress" data-progress="2">
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">1</span>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">2</span>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-circle">
              <span className="step-number">3</span>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle">
              <span className="step-number">4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper with Different States */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Stepper with Different States</h3>
        <div className="stepper">
          <div className="step completed">
            <div className="step-circle">
              <span className="step-number">1</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Completed</h4>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step error">
            <div className="step-circle">
              <span className="step-number">2</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Error State</h4>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-circle">
              <span className="step-number">3</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Current Step</h4>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step disabled">
            <div className="step-circle">
              <span className="step-number">4</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Disabled</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Clickable Stepper */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Clickable Stepper</h3>
        <div className="stepper stepper--clickable">
          <div className="step completed">
            <div className="step-circle" tabIndex="0" role="button" aria-label="Go to step 1">
              <span className="step-number">1</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Personal Info</h4>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step completed">
            <div className="step-circle" tabIndex="0" role="button" aria-label="Go to step 2">
              <span className="step-number">2</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Contact Details</h4>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-circle" tabIndex="0" role="button" aria-label="Current step 3">
              <span className="step-number">3</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Payment</h4>
            </div>
            <div className="step-connector"></div>
          </div>
          <div className="step">
            <div className="step-circle" tabIndex="0" role="button" aria-label="Go to step 4">
              <span className="step-number">4</span>
            </div>
            <div className="step-content">
              <h4 className="step-title">Confirmation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Connector Styles */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Alternative Connector Styles</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Dashed Connectors</h4>
            <div className="stepper stepper--dashed">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Dotted Connectors</h4>
            <div className="stepper stepper--dotted">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Step Shapes */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Alternative Step Shapes</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Rounded Steps</h4>
            <div className="stepper stepper--rounded">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Square Steps</h4>
            <div className="stepper stepper--square">
              <div className="step completed">
                <div className="step-circle">
                  <span className="step-number">1</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step active">
                <div className="step-circle">
                  <span className="step-number">2</span>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-circle">
                  <span className="step-number">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
