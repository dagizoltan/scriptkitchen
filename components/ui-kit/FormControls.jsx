export default function FormControls() {
  return (
    <div>
      {/* Basic Form Controls */}
      <div>
        <h2>Basic Form Controls</h2>
        <form className="form-demo">
          <div className="form-group">
            <label htmlFor="text-input">Text Input</label>
            <input id="text-input" type="text" placeholder="Enter text..." className="form-control" />
            <small className="form-text">This is a standard text input field.</small>
          </div>

          <div className="form-group">
            <label htmlFor="email-input">Email Input</label>
            <input id="email-input" type="email" placeholder="your@email.com" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="password-input">Password Input</label>
            <input id="password-input" type="password" placeholder="Enter password..." className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="textarea-input">Textarea</label>
            <textarea id="textarea-input" rows="4" placeholder="Enter your message..." className="form-control"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="select-input">Select Dropdown</label>
            <select id="select-input" className="form-control">
              <option value="">Choose an option...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </form>
      </div>

      {/* Input Sizes */}
      <div>
        <h2>Input Sizes</h2>
        <form className="form-demo">
          <div className="form-group">
            <label htmlFor="input-sm">Small Input</label>
            <input id="input-sm" type="text" placeholder="Small size..." className="form-control form-control-sm" />
          </div>

          <div className="form-group">
            <label htmlFor="input-regular">Regular Input</label>
            <input id="input-regular" type="text" placeholder="Regular size..." className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="input-lg">Large Input</label>
            <input id="input-lg" type="text" placeholder="Large size..." className="form-control form-control-lg" />
          </div>
        </form>
      </div>

      {/* Validation States */}
      <div>
        <h2>Validation States</h2>
        <form className="form-demo">
          <div className="form-group">
            <label htmlFor="valid-input">Valid Input</label>
            <input id="valid-input" type="text" value="Valid content" className="form-control is-valid" readOnly />
            <small className="form-text success">This input is valid!</small>
          </div>

          <div className="form-group">
            <label htmlFor="invalid-input">Invalid Input</label>
            <input id="invalid-input" type="text" value="Invalid content" className="form-control is-invalid" readOnly />
            <small className="form-text error">This field has an error.</small>
          </div>

          <div className="form-group">
            <label htmlFor="warning-input">Warning Input</label>
            <input id="warning-input" type="text" value="Warning content" className="form-control is-warning" readOnly />
            <small className="form-text warning">This field needs attention.</small>
          </div>
        </form>
      </div>

      {/* Checkboxes and Radios */}
      <div>
        <h2>Checkboxes & Radio Buttons</h2>
        <form className="form-demo">
          <fieldset className="form-group">
            <legend>Checkbox Options</legend>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" aria-describedby="checkbox-help" /> 
                <span className="checkmark"></span>
                Primary Option
              </label>
              <label className="checkbox-label">
                <input type="checkbox" checked readOnly /> 
                <span className="checkmark"></span>
                Secondary Option (checked)
              </label>
              <label className="checkbox-label">
                <input type="checkbox" disabled /> 
                <span className="checkmark"></span>
                Disabled Option
              </label>
            </div>
            <small id="checkbox-help" className="form-text">
              Select one or more options from the list above.
            </small>
          </fieldset>

          <fieldset className="form-group">
            <legend>Radio Button Options</legend>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="radio-demo" value="option1" />
                <span className="radiomark"></span>
                Option 1
              </label>
              <label className="radio-label">
                <input type="radio" name="radio-demo" value="option2" checked readOnly />
                <span className="radiomark"></span>
                Option 2 (selected)
              </label>
              <label className="radio-label">
                <input type="radio" name="radio-demo" value="option3" disabled />
                <span className="radiomark"></span>
                Option 3 (disabled)
              </label>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Advanced Input Types */}
      <div>
        <h2>Advanced Input Types</h2>
        <form className="form-demo">
          <div className="form-group">
            <label htmlFor="number-input">Number Input</label>
            <input id="number-input" type="number" min="0" max="100" placeholder="0-100" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="range-input">Range Input</label>
            <input id="range-input" type="range" min="0" max="100" value="50" className="form-control" />
            <small className="form-text">Slide to adjust the value.</small>
          </div>

          <div className="form-group">
            <label htmlFor="date-input">Date Input</label>
            <input id="date-input" type="date" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="time-input">Time Input</label>
            <input id="time-input" type="time" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="color-input">Color Input</label>
            <input id="color-input" type="color" value="#3b82f6" className="form-control form-control-color" />
          </div>

          <div className="form-group">
            <label htmlFor="file-input">File Input</label>
            <input id="file-input" type="file" className="form-control" accept=".jpg,.png,.pdf" />
            <small className="form-text">Accepts JPG, PNG, and PDF files.</small>
          </div>
        </form>
      </div>

      {/* Input Groups */}
      <div>
        <h2>Input Groups</h2>
        <form className="form-demo">
          <div className="form-group">
            <label htmlFor="input-group-left">Input with Left Addon</label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input id="input-group-left" type="text" placeholder="Username" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="input-group-right">Input with Right Addon</label>
            <div className="input-group">
              <input id="input-group-right" type="text" placeholder="Amount" className="form-control" />
              <span className="input-group-text">USD</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="input-group-both">Input with Both Addons</label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input id="input-group-both" type="number" placeholder="0.00" className="form-control" />
              <span className="input-group-text">.00</span>
            </div>
          </div>
        </form>
      </div>

      {/* Loading States */}
      <div>
        <h2>Loading States</h2>
        <form className="form-demo">
          <div className="form-group">
            <label htmlFor="loading-input">Loading Input</label>
            <div className="input-loading">
              <input id="loading-input" type="text" placeholder="Loading..." className="form-control" disabled />
              <div className="input-spinner"></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="skeleton-input">Skeleton Loading</label>
            <div className="form-skeleton"></div>
          </div>
        </form>
      </div>

      {/* Features List */}
      <div>
        <h2>Form Controls Features</h2>
        <ul className="features-list">
          <li>✨ Multiple input types and sizes</li>
          <li>🎨 Validation states (valid, invalid, warning)</li>
          <li>🎯 Custom checkbox and radio styling</li>
          <li>📱 Mobile-responsive design</li>
          <li>♿ Full accessibility support</li>
          <li>🔄 Loading and skeleton states</li>
          <li>🎪 Input groups with addons</li>
          <li>🎭 Smooth hover and focus animations</li>
          <li>🌙 Dark mode compatible</li>
          <li>⚡ High contrast mode support</li>
          <li>🎬 Reduced motion support</li>
          <li>🎪 Modern CSS-only styling</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div>
        <h2>Usage Notes</h2>
        <div className="usage-notes">
          <p><strong>Accessibility:</strong> All form controls include proper labels, ARIA attributes, and keyboard navigation support.</p>
          <p><strong>Validation:</strong> Use <code>is-valid</code>, <code>is-invalid</code>, and <code>is-warning</code> classes for validation states.</p>
          <p><strong>Sizes:</strong> Add <code>form-control-sm</code> or <code>form-control-lg</code> classes for different sizes.</p>
          <p><strong>Input Groups:</strong> Wrap inputs with <code>input-group</code> and use <code>input-group-text</code> for addons.</p>
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h2>Code Examples</h2>
        <pre><code>{`<!-- Basic Input -->
<div class="form-group">
  <label for="example">Label</label>
  <input id="example" type="text" class="form-control" placeholder="Placeholder..." />
  <small class="form-text">Helper text</small>
</div>

<!-- Validation States -->
<input type="text" class="form-control is-valid" />
<input type="text" class="form-control is-invalid" />
<input type="text" class="form-control is-warning" />

<!-- Input Sizes -->
<input type="text" class="form-control form-control-sm" />
<input type="text" class="form-control form-control-lg" />

<!-- Input Group -->
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" />
</div>

<!-- Custom Checkbox -->
<label class="checkbox-label">
  <input type="checkbox" />
  <span class="checkmark"></span>
  Label text
</label>`}</code></pre>
      </div>
    </div>
  );
}
