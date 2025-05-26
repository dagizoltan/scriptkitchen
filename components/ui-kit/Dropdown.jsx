import { useState } from "preact/hooks";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  return (
    <section class="card">
      <div class="card-header">Dropdown</div>
      <div class="card-body">
        <div class="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
          <button
            class="dropdown-toggle btn"
            type="button"
            style={{ minWidth: '8em' }}
            onClick={() => setOpen((v) => !v)}
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Dropdown
          </button>
          <div
            class="dropdown-menu"
            style={{
              display: open ? 'block' : 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              minWidth: '10em',
              zIndex: 100,
            }}
          >
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
            <a href="#">Action 3</a>
          </div>
        </div>
      </div>
    </section>
  );
}
