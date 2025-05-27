import { useState } from "preact/hooks";

export default function NavigationTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeNav, setActiveNav] = useState(0);
  const navLinks = ["Home", "Docs", "About"];
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <span className="navbar-brand">Brand</span>
        <div className="navbar-nav">
          {navLinks.map((label, i) => (
            <a
              href="#"
              className={"menu-link" + (activeNav === i ? " active" : "")}
              aria-current={activeNav === i ? "page" : undefined}
              tabIndex={0}
              onClick={() => setActiveNav(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveNav(i);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Library</li>
        <li>Data</li>
      </ul>
      <ul className="pagination">
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#" className="active">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
      </ul>
      <div className="tabs" role="tablist">
        {["Tab 1", "Tab 2", "Tab 3"].map((label, i) => (
          <button
            key={label}
            type="button"
            className={"tab" + (activeTab === i ? " active" : "")}
            role="tab"
            aria-selected={activeTab === i}
            tabIndex={activeTab === i ? 0 : -1}
            onClick={() => setActiveTab(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActiveTab(i);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
