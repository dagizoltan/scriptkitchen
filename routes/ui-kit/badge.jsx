// Demo page for Badge component
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

const badgeExample = `<span className="badge primary">Primary</span>
<span className="badge secondary">Secondary</span>
<span className="badge success">Success</span>
<span className="badge warning">Warning</span>
<span className="badge error">Error</span>`;

export default function BadgeDemo() {
  return (
    <section>
      <h1>Badge</h1>
      <p>
        Small status indicators and labels for showing counts, status, or
        categories. Useful for notification counts, status indicators, or
        content tagging.
      </p>

      <h3>Example Usage</h3>
      <div style={{ display: "flex", gap: "0.5em", marginBottom: "1em" }}>
        <span className="badge primary">Primary</span>
        <span className="badge secondary">Secondary</span>
        <span className="badge success">Success</span>
        <span className="badge warning">Warning</span>
        <span className="badge error">Error</span>
      </div>

      <CodeBlock code={badgeExample} language="html" />
    </section>
  );
}
