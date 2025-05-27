// Demo page for Breadcrumb component
import Breadcrumb from "../../components/ui-kit/Breadcrumb.jsx";
import BreadcrumbDropdown from "../../components/ui-kit/BreadcrumbDropdown.jsx";
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

const basicExample = `<nav aria-label="Breadcrumb">
  <ol className="breadcrumb">
    <li><a href="/">Home</a></li>
    <li><a href="/products">Products</a></li>
    <li><a href="/products/electronics">Electronics</a></li>
    <li><span aria-current="page">Smartphones</span></li>
  </ol>
</nav>`;

const withIconsExample = `// React component usage
<Breadcrumb 
  items={[
    { label: "Home", href: "/", icon: "🏠" },
    { label: "Products", href: "/products", icon: "📦" },
    { label: "Electronics", href: "/electronics", icon: "⚡" },
    { label: "Smartphones", icon: "📱" }
  ]}
  showIcons={true}
/>`;

const customSeparatorExample = `// Custom separators
<Breadcrumb separator="›" />
<Breadcrumb separator="|" />
<Breadcrumb separator="•" />
<Breadcrumb separator="▶" />`;

const loadingExample = `// Loading state
<Breadcrumb loading={true} />`;

const dropdownExample = `<!-- Breadcrumb with dropdown navigation -->
<nav className="breadcrumb-dropdown">
  <a href="#">Home</a>
  <span className="breadcrumb-sep">/</span>
  <div className="breadcrumb-item-dropdown">
    <button type="button" className="breadcrumb-btn">Products</button>
    <div className="breadcrumb-dropdown-menu">
      <a href="#">Electronics</a>
      <a href="#">Clothing</a>
      <a href="#">Books</a>
    </div>
  </div>
  <span className="breadcrumb-sep">/</span>
  <span aria-current="page">Current Page</span>
</nav>`;

export default function BreadcrumbDemo() {
  const customItems = [
    { label: "Dashboard", href: "/dashboard", icon: "📊" },
    { label: "Projects", href: "/projects", icon: "📁" },
    { label: "Website Redesign", href: "/projects/redesign", icon: "🎨" },
    { label: "Design System", icon: "🎯" }
  ];

  return (
    <section>
      <h1>Breadcrumbs</h1>
      <p>
        Navigation aid that shows the user's location within a hierarchy. 
        Essential for helping users understand their current position and 
        navigate complex site structures efficiently.
      </p>

      <div className="component-showcase" style={{ margin: "2rem 0" }}>
        <h3>Basic Breadcrumb</h3>
        <div style={{ padding: "1rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px", marginBottom: "1rem" }}>
          <Breadcrumb />
        </div>
        
        <h3>With Icons</h3>
        <div style={{ padding: "1rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px", marginBottom: "1rem" }}>
          <Breadcrumb items={customItems} showIcons />
        </div>

        <h3>Custom Separators</h3>
        <div style={{ padding: "1rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px", marginBottom: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <strong>Arrow (›):</strong>
              <Breadcrumb separator="›" items={customItems} />
            </div>
            <div>
              <strong>Pipe (|):</strong>
              <Breadcrumb separator="|" items={customItems} />
            </div>
            <div>
              <strong>Dot (•):</strong>
              <Breadcrumb separator="•" items={customItems} />
            </div>
            <div>
              <strong>Chevron (▶):</strong>
              <Breadcrumb separator="▶" items={customItems} />
            </div>
          </div>
        </div>

        <h3>Loading State</h3>
        <div style={{ padding: "1rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px", marginBottom: "1rem" }}>
          <Breadcrumb loading />
        </div>

        <h3>With Dropdown Navigation</h3>
        <div style={{ padding: "1rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px", marginBottom: "1rem" }}>
          <BreadcrumbDropdown />
        </div>

        <h3>Truncated (Max 4 Items)</h3>
        <div style={{ padding: "1rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px", marginBottom: "1rem" }}>
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Category", href: "/category" },
              { label: "Subcategory", href: "/subcategory" },
              { label: "Product Type", href: "/product-type" },
              { label: "Brand", href: "/brand" },
              { label: "Model", href: "/model" },
              { label: "Current Item" }
            ]}
            maxItems={4}
          />
        </div>
      </div>

      <div className="code-examples">
        <h3>Basic Usage</h3>
        <CodeBlock code={basicExample} language="html" />

        <h3>With Icons (React Component)</h3>
        <CodeBlock code={withIconsExample} language="jsx" />

        <h3>Custom Separators</h3>
        <CodeBlock code={customSeparatorExample} language="jsx" />

        <h3>Loading State</h3>
        <CodeBlock code={loadingExample} language="jsx" />

        <h3>Dropdown Breadcrumb</h3>
        <CodeBlock code={dropdownExample} language="html" />
      </div>

      <div className="features-info" style={{ marginTop: "2rem", padding: "1.5rem", background: "var(--surface-variant, #f8f9fa)", borderRadius: "8px" }}>
        <h3>Features & Benefits</h3>
        <ul>
          <li>🧭 <strong>Clear Navigation:</strong> Shows hierarchical path to current location</li>
          <li>📱 <strong>Mobile Responsive:</strong> Automatically truncates on smaller screens</li>
          <li>♿ <strong>Accessible:</strong> Proper ARIA labels and semantic markup</li>
          <li>🎨 <strong>Customizable:</strong> Icons, separators, and styling options</li>
          <li>⚡ <strong>Interactive:</strong> Dropdown menus for complex navigation</li>
          <li>🎯 <strong>SEO Friendly:</strong> Structured data support</li>
          <li>🔄 <strong>Loading States:</strong> Visual feedback during navigation</li>
          <li>✨ <strong>Enhanced UX:</strong> Hover effects and smooth animations</li>
          <li>🌍 <strong>Custom Separators:</strong> Arrow, pipe, dot, chevron options</li>
          <li>📏 <strong>Ellipsis Support:</strong> Smart truncation for long paths</li>
        </ul>
      </div>
    </section>
  );
}
