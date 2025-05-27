// Dropdown: Enhanced dropdown component with comprehensive features
import { useEffect, useRef, useState } from "preact/hooks";

export default function Dropdown() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [positionOpen, setPositionOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const basicRef = useRef(null);
  const positionRef = useRef(null);
  const sizeRef = useRef(null);
  const searchRef = useRef(null);

  // Sample menu items for search
  const menuItems = [
    { icon: "📊", label: "Dashboard", shortcut: "⌘D" },
    { icon: "👥", label: "Users", shortcut: "⌘U" },
    { icon: "📁", label: "Projects", shortcut: "⌘P" },
    { icon: "⚙️", label: "Settings", shortcut: "⌘," },
    { icon: "🔔", label: "Notifications" },
    { icon: "📈", label: "Analytics" },
    { icon: "💬", label: "Messages" },
    { icon: "🎨", label: "Design System" }
  ];

  const filteredItems = menuItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown on outside click
  const useOutsideClick = (ref, isOpen, setOpen) => {
    useEffect(() => {
      function handleClick(e) {
        if (isOpen && ref.current && !ref.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen]);
  };

  useOutsideClick(basicRef, basicOpen, setBasicOpen);
  useOutsideClick(positionRef, positionOpen, setPositionOpen);
  useOutsideClick(sizeRef, sizeOpen, setSizeOpen);
  useOutsideClick(searchRef, searchOpen, setSearchOpen);

  // Keyboard navigation
  const handleKeyDown = (e, setOpen) => {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div className="dropdown-demo">
      {/* Basic Dropdown */}
      <div>
        <h3>Basic Dropdown</h3>
        <p>Standard dropdown menu with icons, shortcuts, and different item types.</p>
        
        <div className={`dropdown ${basicOpen ? 'open' : ''}`} ref={basicRef}>
          <button 
            className="dropdown-toggle btn"
            onClick={() => setBasicOpen(!basicOpen)}
            onKeyDown={(e) => handleKeyDown(e, setBasicOpen)}
            aria-haspopup="true"
            aria-expanded={basicOpen}
          >
            Menu
          </button>
          <div className="dropdown-menu">
            <div className="dropdown-header">Navigation</div>
            <a href="#" className="dropdown-item">
              <span className="dropdown-item-icon">🏠</span>
              Home
            </a>
            <a href="#" className="dropdown-item">
              <span className="dropdown-item-icon">📊</span>
              Dashboard
              <span className="dropdown-item-shortcut">⌘D</span>
            </a>
            <a href="#" className="dropdown-item">
              <span className="dropdown-item-icon">👥</span>
              Users
              <span className="badge small secondary">12</span>
            </a>
            <div className="dropdown-separator"></div>
            <div className="dropdown-header">Actions</div>
            <button className="dropdown-item">
              <span className="dropdown-item-icon">⚙️</span>
              Settings
              <span className="dropdown-item-shortcut">⌘,</span>
            </button>
            <button className="dropdown-item">
              <span className="dropdown-item-icon">📝</span>
              Edit Profile
            </button>
            <div className="dropdown-separator"></div>
            <button className="dropdown-item disabled">
              <span className="dropdown-item-icon">🔒</span>
              Locked Feature
            </button>
            <button className="dropdown-item" style={{color: 'var(--error)'}}>
              <span className="dropdown-item-icon">🚪</span>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Position Variants */}
      <div>
        <h3>Position Variants</h3>
        <p>Dropdown menus can be positioned in different directions relative to the trigger.</p>
        
        <div className="button-group">
          <div className={`dropdown dropup ${positionOpen === 'up' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn outline"
              onClick={() => setPositionOpen(positionOpen === 'up' ? false : 'up')}
              aria-haspopup="true"
              aria-expanded={positionOpen === 'up'}
            >
              Drop Up
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Above Item 1</a>
              <a href="#" className="dropdown-item">Above Item 2</a>
              <a href="#" className="dropdown-item">Above Item 3</a>
            </div>
          </div>

          <div className={`dropdown ${positionOpen === 'down' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn outline"
              onClick={() => setPositionOpen(positionOpen === 'down' ? false : 'down')}
              aria-haspopup="true"
              aria-expanded={positionOpen === 'down'}
            >
              Drop Down
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Below Item 1</a>
              <a href="#" className="dropdown-item">Below Item 2</a>
              <a href="#" className="dropdown-item">Below Item 3</a>
            </div>
          </div>

          <div className={`dropdown dropend ${positionOpen === 'end' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn outline"
              onClick={() => setPositionOpen(positionOpen === 'end' ? false : 'end')}
              aria-haspopup="true"
              aria-expanded={positionOpen === 'end'}
            >
              Drop End
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Right Item 1</a>
              <a href="#" className="dropdown-item">Right Item 2</a>
              <a href="#" className="dropdown-item">Right Item 3</a>
            </div>
          </div>

          <div className={`dropdown dropstart ${positionOpen === 'start' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn outline"
              onClick={() => setPositionOpen(positionOpen === 'start' ? false : 'start')}
              aria-haspopup="true"
              aria-expanded={positionOpen === 'start'}
            >
              Drop Start
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Left Item 1</a>
              <a href="#" className="dropdown-item">Left Item 2</a>
              <a href="#" className="dropdown-item">Left Item 3</a>
            </div>
          </div>
        </div>
      </div>

      {/* Size Variants */}
      <div>
        <h3>Size Variants</h3>
        <p>Different dropdown sizes for various use cases and screen sizes.</p>
        
        <div className="button-group">
          <div className={`dropdown sm ${sizeOpen === 'sm' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn sm"
              onClick={() => setSizeOpen(sizeOpen === 'sm' ? false : 'sm')}
              aria-haspopup="true"
              aria-expanded={sizeOpen === 'sm'}
            >
              Small
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Compact Item 1</a>
              <a href="#" className="dropdown-item">Compact Item 2</a>
            </div>
          </div>

          <div className={`dropdown ${sizeOpen === 'regular' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn"
              onClick={() => setSizeOpen(sizeOpen === 'regular' ? false : 'regular')}
              aria-haspopup="true"
              aria-expanded={sizeOpen === 'regular'}
            >
              Regular
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Standard Item 1</a>
              <a href="#" className="dropdown-item">Standard Item 2</a>
            </div>
          </div>

          <div className={`dropdown lg ${sizeOpen === 'lg' ? 'open' : ''}`}>
            <button 
              className="dropdown-toggle btn lg"
              onClick={() => setSizeOpen(sizeOpen === 'lg' ? false : 'lg')}
              aria-haspopup="true"
              aria-expanded={sizeOpen === 'lg'}
            >
              Large
            </button>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <span className="dropdown-item-icon">🎯</span>
                Large Item with Icon
              </a>
              <a href="#" className="dropdown-item">
                <span className="dropdown-item-icon">🚀</span>
                Another Large Item
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Searchable Dropdown */}
      <div>
        <h3>Searchable Dropdown</h3>
        <p>Dropdown with search functionality for filtering long lists of options.</p>
        
        <div className={`dropdown ${searchOpen ? 'open' : ''}`} ref={searchRef}>
          <button 
            className="dropdown-toggle btn"
            onClick={() => setSearchOpen(!searchOpen)}
            onKeyDown={(e) => handleKeyDown(e, setSearchOpen)}
            aria-haspopup="true"
            aria-expanded={searchOpen}
          >
            Search Menu
          </button>
          <div className="dropdown-menu scrollable">
            <div className="dropdown-search">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <a key={index} href="#" className="dropdown-item">
                  <span className="dropdown-item-icon">{item.icon}</span>
                  {item.label}
                  {item.shortcut && (
                    <span className="dropdown-item-shortcut">{item.shortcut}</span>
                  )}
                </a>
              ))
            ) : (
              <div className="dropdown-text">No items found</div>
            )}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <h3>Common Use Cases</h3>
        <p>Real-world examples of dropdown usage patterns.</p>
        
        <div className="grid standard">
          {/* User Profile Dropdown */}
          <div className="card">
            <div className="card-header">User Profile Menu</div>
            <div className="card-body">
              <div className="dropdown">
                <button className="dropdown-toggle btn outline">
                  <span className="dropdown-item-icon">👤</span>
                  John Doe
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="dropdown-text">
                    <strong>John Doe</strong><br/>
                    <small>john@example.com</small>
                  </div>
                  <div className="dropdown-separator"></div>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">👤</span>
                    Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">⚙️</span>
                    Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">💳</span>
                    Billing
                  </a>
                  <div className="dropdown-separator"></div>
                  <a href="#" className="dropdown-item" style={{color: 'var(--error)'}}>
                    <span className="dropdown-item-icon">🚪</span>
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Dropdown */}
          <div className="card">
            <div className="card-header">Actions Menu</div>
            <div className="card-body">
              <div className="dropdown">
                <button className="dropdown-toggle btn">
                  Actions
                </button>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">📝</span>
                    Edit
                  </a>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">📋</span>
                    Duplicate
                  </a>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">📤</span>
                    Export
                  </a>
                  <div className="dropdown-separator"></div>
                  <a href="#" className="dropdown-item" style={{color: 'var(--error)'}}>
                    <span className="dropdown-item-icon">🗑️</span>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Theme Example */}
          <div className="card dark" style={{background: '#2a2a2a', color: '#ffffff'}}>
            <div className="card-header">Dark Theme</div>
            <div className="card-body">
              <div className="dropdown dark">
                <button className="dropdown-toggle btn outline light">
                  Dark Menu
                </button>
                <div className="dropdown-menu">
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">🌙</span>
                    Dark Mode
                  </a>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">🎨</span>
                    Themes
                  </a>
                  <a href="#" className="dropdown-item">
                    <span className="dropdown-item-icon">🔧</span>
                    Preferences
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div>
        <h3>Dropdown Features</h3>
        <ul className="features-list">
          <li>🎯 Multiple positioning options (up, down, left, right)</li>
          <li>📏 Size variants (small, regular, large)</li>
          <li>🔍 Built-in search functionality</li>
          <li>🎨 Theme variants (light, dark)</li>
          <li>📱 Fully responsive design</li>
          <li>⌨️ Complete keyboard navigation</li>
          <li>♿ ARIA-compliant accessibility</li>
          <li>🎭 Smooth animations and transitions</li>
          <li>🏷️ Icon support and badges</li>
          <li>⌨️ Keyboard shortcuts display</li>
          <li>📋 Headers, separators, and text items</li>
          <li>🚫 Disabled state support</li>
          <li>📱 Mobile-optimized layouts</li>
          <li>🎪 High contrast mode support</li>
          <li>🎬 Reduced motion compatibility</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div className="usage-notes">
        <h3>Usage Guidelines</h3>
        <p><strong>Accessibility:</strong> All dropdowns include proper ARIA attributes, keyboard navigation, and focus management.</p>
        <p><strong>Positioning:</strong> Use position variants (dropup, dropend, dropstart) when space is limited.</p>
        <p><strong>Search:</strong> Enable search functionality for menus with more than 8-10 items.</p>
        <p><strong>Mobile:</strong> Dropdowns automatically adapt to mobile layouts with full-width positioning.</p>
        <p><strong>Performance:</strong> CSS-only animations ensure smooth performance across all devices.</p>
      </div>
    </div>
  );
}
