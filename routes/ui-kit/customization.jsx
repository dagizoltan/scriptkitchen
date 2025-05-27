import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

export default function CustomizationPage() {
  return (
    <section className="card">
      <div className="card-header">UI Kit Customization</div>
      <div className="card-body">
        <h2>How to Customize the UI Kit</h2>
        <p>
          The UI Kit is designed to be easily customizable. You can override
          variables, component styles, and add your own utilities without
          modifying the core files.
        </p>
        <h3>1. CSS Variable Overrides</h3>
        <p>
          All key design tokens (colors, border-radius, spacing, etc.) are
          defined as CSS variables in{" "}
          <code>_variables.css</code>. You can override these in{" "}
          <code>static/css/_custom/custom.css</code>:
        </p>
        <CodeBlock
          language="css"
          code={`:root {
  --primary: #e63946;
  --radius: 1em;
}`}
        />
        <h3>2. Component Style Overrides</h3>
        <p>
          You can override any component style by redefining its class in{" "}
          <code>_custom/custom.css</code>:
        </p>
        <CodeBlock
          language="css"
          code={`.card {
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
}`}
        />
        <h3>3. Add Custom Utilities</h3>
        <p>
          Add your own utility classes for project-specific needs:
        </p>
        <CodeBlock
          language="css"
          code={`.text-shadow {
  text-shadow: 1px 1px 2px #0002;
}`}
        />
        <h3>4. Import Order</h3>
        <p>
          <code>static/css/styles.css</code> imports{" "}
          <code>_custom/custom.css</code>{" "}
          last, so your overrides always take precedence.
        </p>
        <h3>5. Example</h3>
        <CodeBlock
          language="css"
          code={`/* static/css/_custom/custom.css */
:root {
  --primary: #e63946;
  --radius: 1em;
}
.button, .btn {
  font-family: 'Fira Sans', system-ui, sans-serif;
}`}
        />
        <p>
          For advanced customization, you can add more files to{" "}
          <code>_custom/</code> and import them as needed.
        </p>
      </div>
    </section>
  );
}
