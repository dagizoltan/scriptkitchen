// Accordion.jsx - Comprehensive accordion/collapse component with multiple variants and features
export default function Accordion() {
  return (
    <div >
      {/* Basic Accordion */}
      <section>
        <h2>Basic Accordion</h2>
        <p>Standard accordion with collapsible content sections.</p>
        
        <div className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="basic1" className="accordion-toggle" />
            <label htmlFor="basic1" className="accordion-header">
              <span className="accordion-title">What is Fresh?</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>Fresh is a web framework that lets you build projects fast, reliable, and scalable. It runs on Deno and combines the best of server-side rendering with islands architecture for optimal performance.</p>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <input type="checkbox" id="basic2" className="accordion-toggle" />
            <label htmlFor="basic2" className="accordion-header">
              <span className="accordion-title">Why choose Fresh?</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>Fresh offers zero-config setup, TypeScript support out of the box, automatic code splitting, and excellent developer experience. It's perfect for modern web applications that need to be fast and maintainable.</p>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <input type="checkbox" id="basic3" className="accordion-toggle" />
            <label htmlFor="basic3" className="accordion-header">
              <span className="accordion-title">Getting Started</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>To get started with Fresh, you need Deno installed. Then run:</p>
                <pre><code>deno run -A -r https://fresh.deno.dev my-project</code></pre>
                <p>This will create a new Fresh project with all the necessary files and dependencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Size Variants */}
      <section>
        <h2>Size Variants</h2>
        <p>Accordion components in different sizes for various use cases.</p>
        
        <div className="demo-grid">
          <div>
            <h3>Small</h3>
            <div className="accordion sm">
              <div className="accordion-item">
                <input type="checkbox" id="small1" className="accordion-toggle" />
                <label htmlFor="small1" className="accordion-header">
                  <span className="accordion-title">Compact Interface</span>
                  <span className="accordion-icon chevron"></span>
                </label>
                <div className="accordion-body">
                  <div className="accordion-content">
                    <p>Perfect for sidebars and compact layouts where space is limited.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3>Large</h3>
            <div className="accordion lg">
              <div className="accordion-item">
                <input type="checkbox" id="large1" className="accordion-toggle" />
                <label htmlFor="large1" className="accordion-header">
                  <span className="accordion-title">Spacious Design</span>
                  <span className="accordion-icon chevron"></span>
                </label>
                <div className="accordion-body">
                  <div className="accordion-content">
                    <p>Ideal for main content areas where readability and prominence are important.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Style Variants */}
      <section>
        <h2>Style Variants</h2>
        <p>Different accordion styles for various design needs.</p>
        
        <div>
          <h3>Flush Style</h3>
          <div className="accordion flush">
            <div className="accordion-item">
              <input type="checkbox" id="flush1" className="accordion-toggle" />
              <label htmlFor="flush1" className="accordion-header">
                <span className="accordion-title">Borderless Design</span>
                <span className="accordion-icon chevron"></span>
              </label>
              <div className="accordion-body">
                <div className="accordion-content">
                  <p>Clean, minimal design without borders or shadows. Perfect for integration with existing layouts.</p>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <input type="checkbox" id="flush2" className="accordion-toggle" />
              <label htmlFor="flush2" className="accordion-header">
                <span className="accordion-title">Seamless Integration</span>
                <span className="accordion-icon chevron"></span>
              </label>
              <div className="accordion-body">
                <div className="accordion-content">
                  <p>Blends naturally with surrounding content while maintaining full functionality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Variants */}
      <section>
        <h2>Icon Variants</h2>
        <p>Different icon styles for accordion indicators.</p>
        
        <div className="demo-grid">
          <div>
            <h3>Plus/Minus Icons</h3>
            <div className="accordion sm">
              <div className="accordion-item">
                <input type="checkbox" id="plus1" className="accordion-toggle" />
                <label htmlFor="plus1" className="accordion-header">
                  <span className="accordion-title">Expand/Collapse</span>
                  <span className="accordion-icon plus"></span>
                </label>
                <div className="accordion-body">
                  <div className="accordion-content">
                    <p>Uses plus and minus icons to indicate expand/collapse state.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3>Caret Icons</h3>
            <div className="accordion sm">
              <div className="accordion-item">
                <input type="checkbox" id="caret1" className="accordion-toggle" />
                <label htmlFor="caret1" className="accordion-header">
                  <span className="accordion-title">Arrow Indicator</span>
                  <span className="accordion-icon caret"></span>
                </label>
                <div className="accordion-body">
                  <div className="accordion-content">
                    <p>Uses right-pointing arrow that rotates to indicate state.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Content */}
      <section>
        <h2>Enhanced Content</h2>
        <p>Accordion with rich content including subtitles and badges.</p>
        
        <div className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="enhanced1" className="accordion-toggle" />
            <label htmlFor="enhanced1" className="accordion-header">
              <div className="accordion-title">
                Advanced Features
                <span className="accordion-subtitle">Comprehensive functionality overview</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span className="accordion-badge">New</span>
                <span className="accordion-icon chevron"></span>
              </div>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <h4>Key Features</h4>
                <ul>
                  <li>Smooth animations and transitions</li>
                  <li>Accessibility-compliant design</li>
                  <li>Responsive layout support</li>
                  <li>Keyboard navigation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <input type="checkbox" id="enhanced2" className="accordion-toggle" />
            <label htmlFor="enhanced2" className="accordion-header">
              <div className="accordion-title">
                Configuration Options
                <span className="accordion-subtitle">Customization and theming</span>
              </div>
              <div style="display: flex; align-items: center;">
                <span className="accordion-badge">5</span>
                <span className="accordion-icon chevron"></span>
              </div>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <h4>Available Options</h4>
                <p>The accordion component supports multiple configuration options:</p>
                <ul>
                  <li><strong>Size variants:</strong> sm, regular, lg</li>
                  <li><strong>Style variants:</strong> default, flush</li>
                  <li><strong>Icon styles:</strong> chevron, plus, caret</li>
                  <li><strong>Theme support:</strong> light, dark modes</li>
                  <li><strong>Animation control:</strong> smooth or reduced motion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme */}
      <section>
        <h2>Dark Theme</h2>
        <p>Accordion with dark theme styling.</p>
        
        <div className="accordion dark">
          <div className="accordion-item">
            <input type="checkbox" id="dark1" className="accordion-toggle" />
            <label htmlFor="dark1" className="accordion-header">
              <span className="accordion-title">Dark Mode Support</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>The accordion component includes built-in dark theme support with appropriate color schemes and contrast ratios for optimal readability.</p>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <input type="checkbox" id="dark2" className="accordion-toggle" />
            <label htmlFor="dark2" className="accordion-header">
              <span className="accordion-title">Automatic Theming</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>Colors automatically adjust to maintain proper contrast and visual hierarchy in dark environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nested Accordions */}
      <section>
        <h2>Nested Accordions</h2>
        <p>Accordion items can contain nested accordions for hierarchical content.</p>
        
        <div className="accordion">
          <div className="accordion-item">
            <input type="checkbox" id="nested1" className="accordion-toggle" />
            <label htmlFor="nested1" className="accordion-header">
              <span className="accordion-title">Parent Section</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>This section contains nested accordion items:</p>
                
                <div className="accordion">
                  <div className="accordion-item">
                    <input type="checkbox" id="nested1-1" className="accordion-toggle" />
                    <label htmlFor="nested1-1" className="accordion-header">
                      <span className="accordion-title">Nested Item 1</span>
                      <span className="accordion-icon chevron"></span>
                    </label>
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>Content for the first nested item.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item">
                    <input type="checkbox" id="nested1-2" className="accordion-toggle" />
                    <label htmlFor="nested1-2" className="accordion-header">
                      <span className="accordion-title">Nested Item 2</span>
                      <span className="accordion-icon chevron"></span>
                    </label>
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>Content for the second nested item.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Example */}
      <section>
        <h2>FAQ Example</h2>
        <p>Common use case: Frequently Asked Questions.</p>
        
        <div className="accordion flush">
          <div className="accordion-item">
            <input type="checkbox" id="faq1" className="accordion-toggle" />
            <label htmlFor="faq1" className="accordion-header">
              <span className="accordion-title">How do I install the component library?</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>You can install the component library by including the CSS files in your project. For Fresh/Deno projects, simply import the styles in your main CSS file.</p>
                <pre><code>@import "./static/css/main.css";</code></pre>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <input type="checkbox" id="faq2" className="accordion-toggle" />
            <label htmlFor="faq2" className="accordion-header">
              <span className="accordion-title">Is the accordion accessible?</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>Yes! The accordion follows accessibility best practices including:</p>
                <ul>
                  <li>Proper keyboard navigation</li>
                  <li>Focus management</li>
                  <li>Screen reader support</li>
                  <li>High contrast mode compatibility</li>
                  <li>Reduced motion support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <input type="checkbox" id="faq3" className="accordion-toggle" />
            <label htmlFor="faq3" className="accordion-header">
              <span className="accordion-title">Can I customize the styling?</span>
              <span className="accordion-icon chevron"></span>
            </label>
            <div className="accordion-body">
              <div className="accordion-content">
                <p>Absolutely! The accordion uses CSS custom properties for easy theming. You can override any of the CSS variables to match your design system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
