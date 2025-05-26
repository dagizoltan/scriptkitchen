// BreadcrumbDropdown.jsx
// CSS-only breadcrumb with dropdown
export default function BreadcrumbDropdown() {
  return (
    <nav className="breadcrumb-dropdown">
      <a href="#">Home</a>
      <span className="breadcrumb-sep">/</span>
      <div className="breadcrumb-item-dropdown">
        <button className="breadcrumb-btn">Section ▼</button>
        <div className="breadcrumb-dropdown-menu">
          <a href="#">Subsection 1</a>
          <a href="#">Subsection 2</a>
        </div>
      </div>
      <span className="breadcrumb-sep">/</span>
      <a href="#">Current</a>
    </nav>
  );
}
