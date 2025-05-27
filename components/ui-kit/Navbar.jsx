// Comprehensive Navbar component with multiple variants and features

export default function Navbar() {
  return (
    <div className="space-y-8">
      {/* Basic Navbar */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Basic Navbar</h3>
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
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
        </nav>
      </section>

      {/* Size Variants */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Small Navbar</h4>
            <nav className="navbar navbar--sm" role="navigation">
              <a href="#" className="navbar-brand">Small</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Large Navbar</h4>
            <nav className="navbar navbar--lg" role="navigation">
              <a href="#" className="navbar-brand">Large Brand</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
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
            </nav>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Color Variants</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Primary Navbar</h4>
            <nav className="navbar navbar--primary" role="navigation">
              <a href="#" className="navbar-brand">Primary</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Dark Navbar</h4>
            <nav className="navbar navbar--dark" role="navigation">
              <a href="#" className="navbar-brand">Dark Theme</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Light Navbar</h4>
            <nav className="navbar navbar--light" role="navigation">
              <a href="#" className="navbar-brand">Light Theme</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Style Variants */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Style Variants</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Transparent Navbar</h4>
            <nav className="navbar navbar--transparent" role="navigation">
              <a href="#" className="navbar-brand">Transparent</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Bordered Navbar</h4>
            <nav className="navbar navbar--bordered" role="navigation">
              <a href="#" className="navbar-brand">Bordered</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 text-gray-600">Floating Navbar</h4>
            <nav className="navbar navbar--floating" role="navigation">
              <a href="#" className="navbar-brand">Floating</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Navbar with Actions */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Navbar with Actions</h3>
        <nav className="navbar" role="navigation">
          <a href="#" className="navbar-brand">Brand</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
          </ul>
          <div className="navbar-actions">
            <button className="btn btn--sm btn--outline">Login</button>
            <button className="btn btn--sm btn--primary">Sign Up</button>
          </div>
          <button className="navbar-toggle" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
          </button>
        </nav>
      </section>

      {/* Navbar with Logo */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Navbar with Logo</h3>
        <nav className="navbar navbar--primary" role="navigation">
          <a href="#" className="navbar-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.79 5.16-1.05 9-5.24 9-10.79V7l-10-5z"/>
            </svg>
            ScriptKitchen
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">Dashboard</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Team</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Settings</a>
            </li>
          </ul>
        </nav>
      </section>

      {/* Navbar with Dropdown */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Navbar with Dropdown</h3>
        <nav className="navbar" role="navigation">
          <a href="#" className="navbar-brand">Brand</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link">
                Products ▼
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Web Development</a>
                <a href="#" className="dropdown-item">Mobile Apps</a>
                <a href="#" className="dropdown-item">UI/UX Design</a>
                <a href="#" className="dropdown-item">Consulting</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </section>

      {/* Mobile-Responsive Demo */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Mobile-Responsive Demo</h3>
        <p className="text-sm text-gray-600 mb-4">
          Resize your browser window to see the mobile navigation in action.
        </p>
        <nav className="navbar navbar--primary" role="navigation">
          <a href="#" className="navbar-brand">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
            Mobile Demo
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Support</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Blog</a>
            </li>
          </ul>
          <div className="navbar-actions">
            <button className="btn btn--sm btn--outline">Login</button>
            <button className="btn btn--sm btn--secondary">Get Started</button>
          </div>
          <button className="navbar-toggle" type="button" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
          </button>
        </nav>
      </section>
    </div>
  );
}
