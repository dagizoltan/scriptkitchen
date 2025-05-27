// BreadcrumbDropdown.jsx
// CSS-only breadcrumb with dropdown functionality
export default function BreadcrumbDropdown() {
  return (
    <nav className="breadcrumb-dropdown" aria-label="Breadcrumb with dropdown">
      <a href="#" aria-label="Go to Home">Home</a>
      <span className="breadcrumb-sep" aria-hidden="true">/</span>
      
      <div className="breadcrumb-item-dropdown">
        <button 
          type="button" 
          className="breadcrumb-btn"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Navigate to section"
        >
          Products
        </button>
        <div className="breadcrumb-dropdown-menu" role="menu">
          <a href="#" role="menuitem">Electronics</a>
          <a href="#" role="menuitem">Clothing</a>
          <a href="#" role="menuitem">Books</a>
          <a href="#" role="menuitem">Home & Garden</a>
        </div>
      </div>
      
      <span className="breadcrumb-sep" aria-hidden="true">/</span>
      
      <div className="breadcrumb-item-dropdown">
        <button 
          type="button" 
          className="breadcrumb-btn"
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Navigate to category"
        >
          Electronics
        </button>
        <div className="breadcrumb-dropdown-menu" role="menu">
          <a href="#" role="menuitem">Smartphones</a>
          <a href="#" role="menuitem">Laptops</a>
          <a href="#" role="menuitem">Tablets</a>
          <a href="#" role="menuitem">Accessories</a>
        </div>
      </div>
      
      <span className="breadcrumb-sep" aria-hidden="true">/</span>
      <span aria-current="page">Smartphones</span>
    </nav>
  );
}
