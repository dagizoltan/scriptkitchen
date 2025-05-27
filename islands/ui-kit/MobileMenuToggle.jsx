import { useEffect, useState } from "preact/hooks";

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sidebar = document.querySelector('.ui-kit-sidebar');
    if (sidebar) {
      if (isOpen) {
        sidebar.classList.add('open');
        // Focus the first menu item when opening
        const firstLink = sidebar.querySelector('a');
        if (firstLink) {
          firstLink.focus();
        }
      } else {
        sidebar.classList.remove('open');
      }
    }
  }, [isOpen]);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidebar = document.querySelector('.ui-kit-sidebar');
      const toggle = document.querySelector('.mobile-menu-toggle');
      
      if (isOpen && sidebar && !sidebar.contains(event.target) && !toggle.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <button 
      type="button"
      className="mobile-menu-toggle"
      onClick={toggleMenu}
      style={{ display: 'none' }}
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      aria-expanded={isOpen}
      aria-controls="ui-kit-sidebar"
    >
      {isOpen ? '✕' : '☰'}
    </button>
  );
}
