// Usage guide for the UI Kit
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

export default function UsagePage() {
  return (
    <section>
      <h1>Usage</h1>
      <p>
        Learn how to use ScriptKitchen components in your projects.
      </p>

      <h2>Basic Usage</h2>
      <p>
        After including the CSS file, you can start using components by adding
        the appropriate class names to your HTML elements:
      </p>
      <CodeBlock
        language="html"
        code={`<!-- Button example -->
<button className="btn primary">Primary Button</button>
<button className="btn secondary">Secondary Button</button>

<!-- Card example -->
<div className="card">
  <div className="card-header">Card Title</div>
  <div className="card-body">
    <p>Card content goes here.</p>
  </div>
</div>`}
      />

      <h2>Component Structure</h2>
      <p>
        Most components follow a consistent naming pattern:
      </p>
      <ul>
        <li>
          <strong>Base class:</strong> The main component class (e.g.,{" "}
          <code>.card</code>, <code>.btn</code>)
        </li>
        <li>
          <strong>Modifiers:</strong> Variations of the component (e.g.,{" "}
          <code>.primary</code>, <code>.large</code>)
        </li>
        <li>
          <strong>Elements:</strong> Sub-components (e.g.,{" "}
          <code>.card-header</code>, <code>.card-body</code>)
        </li>
      </ul>

      <h2>Responsive Design</h2>
      <p>
        All components are designed to be responsive. Use utility classes for
        responsive behavior:
      </p>
      <CodeBlock
        language="html"
        code={`<!-- Responsive grid -->
<div className="grid">
  <div className="col-12 md:col-6 lg:col-4">Column 1</div>
  <div className="col-12 md:col-6 lg:col-4">Column 2</div>
  <div className="col-12 md:col-6 lg:col-4">Column 3</div>
</div>`}
      />

      <h2>Color System</h2>
      <p>
        Components support a consistent color palette:
      </p>
      <div style={{ display: "flex", gap: "0.5em", marginBottom: "1em" }}>
        <span className="badge primary">Primary</span>
        <span className="badge secondary">Secondary</span>
        <span className="badge success">Success</span>
        <span className="badge warning">Warning</span>
        <span className="badge error">Error</span>
      </div>

      <h2>Accessibility</h2>
      <p>
        Components include accessibility features out of the box:
      </p>
      <ul>
        <li>Semantic HTML elements</li>
        <li>ARIA attributes where needed</li>
        <li>Keyboard navigation support</li>
        <li>High contrast ratios</li>
        <li>Screen reader friendly markup</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>Always use semantic HTML elements</li>
        <li>Add appropriate ARIA labels for interactive elements</li>
        <li>Test with keyboard navigation</li>
        <li>Use consistent spacing with utility classes</li>
        <li>Follow the component documentation for proper markup</li>
      </ul>

      <p>
        Ready to customize? Check out the{" "}
        <a href="/ui-kit/customization">Customization</a> guide.
      </p>
    </section>
  );
}
