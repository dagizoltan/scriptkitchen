import { useState, useRef, useEffect } from "preact/hooks";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (
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

  // Keyboard accessibility: close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <section class="card">
      <div class="card-header">Dropdown</div>
      <div class="card-body">
        <div class={`dropdown${open ? " open" : ""}`}>
          <button
            class="dropdown-toggle btn"
            type="button"
            ref={buttonRef}
            onClick={() => setOpen((v) => !v)}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Dropdown
          </button>
          <div class="dropdown-menu" ref={menuRef}>
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
            <a href="#">Action 3</a>
          </div>
        </div>
      </div>
    </section>
  );
}
