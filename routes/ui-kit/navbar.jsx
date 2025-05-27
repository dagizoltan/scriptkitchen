// Demo page for Navbar component
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";
import Navbar from "../../components/ui-kit/Navbar.jsx";

const basicNavbarExample = `<nav className="navbar" role="navigation" aria-label="Main Navigation">
  <a href="#" className="navbar-brand">Brand</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active" aria-current="page">Home</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">About</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Services</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>
  <button className="navbar-toggle" type="button" aria-label="Toggle navigation">
    <span className="navbar-toggle-icon"></span>
  </button>
</nav>`;

const sizeVariantsExample = `<!-- Small Navbar -->
<nav className="navbar navbar--sm">
  <a href="#" className="navbar-brand">Small</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active">Home</a>
    </li>
  </ul>
</nav>

<!-- Large Navbar -->
<nav className="navbar navbar--lg">
  <a href="#" className="navbar-brand">Large Brand</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active">Home</a>
    </li>
  </ul>
</nav>`;

const colorVariantsExample = `<!-- Primary Theme -->
<nav className="navbar navbar--primary">
  <a href="#" className="navbar-brand">Primary</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active">Home</a>
    </li>
  </ul>
</nav>

<!-- Dark Theme -->
<nav className="navbar navbar--dark">
  <a href="#" className="navbar-brand">Dark Theme</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active">Home</a>
    </li>
  </ul>
</nav>

<!-- Light Theme -->
<nav className="navbar navbar--light">
  <a href="#" className="navbar-brand">Light Theme</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active">Home</a>
    </li>
  </ul>
</nav>`;

const withActionsExample = `<nav className="navbar" role="navigation">
  <a href="#" className="navbar-brand">Brand</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link active">Home</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link">About</a>
    </li>
  </ul>
  <div className="navbar-actions">
    <button className="btn btn--sm btn--outline">Login</button>
    <button className="btn btn--sm btn--primary">Sign Up</button>
  </div>
  <button className="navbar-toggle" type="button" aria-label="Toggle navigation">
    <span className="navbar-toggle-icon"></span>
  </button>
</nav>`;

export default function NavbarDemo() {
  return (
    <section>
      <h1>Navbar</h1>
      <p>
        A comprehensive responsive navigation bar component with multiple size variants, 
        color themes, and advanced features including mobile navigation, dropdown menus, 
        and customizable actions. Perfect for creating modern, accessible navigation systems.
      </p>

      <Navbar />

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
          <CodeBlock code={basicNavbarExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
          <CodeBlock code={sizeVariantsExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Color Variants</h3>
          <CodeBlock code={colorVariantsExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Navbar with Actions</h3>
          <CodeBlock code={withActionsExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Available Classes</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Base:</strong> <code>.navbar</code></p>
            <p><strong>Sizes:</strong> <code>.navbar--sm</code>, <code>.navbar--lg</code></p>
            <p><strong>Colors:</strong> <code>.navbar--primary</code>, <code>.navbar--secondary</code>, <code>.navbar--dark</code>, <code>.navbar--light</code></p>
            <p><strong>Styles:</strong> <code>.navbar--transparent</code>, <code>.navbar--bordered</code>, <code>.navbar--floating</code></p>
            <p><strong>Positioning:</strong> <code>.navbar--sticky</code>, <code>.navbar--fixed</code></p>
            <p><strong>Elements:</strong> <code>.navbar-brand</code>, <code>.navbar-nav</code>, <code>.nav-item</code>, <code>.nav-link</code>, <code>.navbar-actions</code>, <code>.navbar-toggle</code></p>
          </div>
        </div>
      </div>
    </section>
  );
}
