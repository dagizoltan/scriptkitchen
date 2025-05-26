import { useState, useRef, useEffect } from "preact/hooks";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Keyboard navigation
  function handleKeyDown(e) {
    if (e.key === "Escape") setOpen(false);
    if ((e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") && !open) {
      setOpen(true);
    }
  }

  return (
    <section className="card">
      <div className="card-header">Dropdown</div>
      <div className="card-body">
        <div className={"dropdown" + (open ? " open" : "")}
             ref={menuRef}
             style={{ position: 'relative', display: 'inline-block' }}>
          <button
            className="dropdown-toggle btn"
            type="button"
            ref={buttonRef}
            style={{ minWidth: '8em' }}
            onClick={() => setOpen((v) => !v)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Dropdown
          </button>
          <div
            className="dropdown-menu"
            role="menu"
            aria-label="Dropdown menu"
            style={{
              display: open ? 'block' : 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '10em',
              zIndex: 100,
            }}
          >
            <a href="#" role="menuitem" tabIndex={open ? 0 : -1}>Action 1</a>
            <a href="#" role="menuitem" tabIndex={open ? 0 : -1}>Action 2</a>
            <a href="#" role="menuitem" tabIndex={open ? 0 : -1}>Action 3</a>
          </div>
        </div>
      </div>
    </section>
  );
}
