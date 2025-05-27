// VerticalMenu.jsx
export default function VerticalMenu() {
  return (
    <nav className="vertical-menu card">
      <div className="menu-section">
        <div className="menu-section-title">Main</div>
        <a href="#dashboard" className="menu-link active">
          <span className="icon">🏠</span> Dashboard
        </a>
        <a href="#projects" className="menu-link">
          <span className="icon">📁</span> Projects
        </a>
        <a href="#teams" className="menu-link">
          <span className="icon">👥</span> Teams
        </a>
      </div>
      <div className="menu-section">
        <div className="menu-section-title">Management</div>
        <a href="#users" className="menu-link">
          <span className="icon">🧑‍💼</span> Users
        </a>
        <a href="#settings" className="menu-link">
          <span className="icon">⚙️</span> Settings
        </a>
      </div>
      <div className="menu-section">
        <div className="menu-section-title">Other</div>
        <a href="#help" className="menu-link">
          <span className="icon">❓</span> Help
        </a>
        <a href="#logout" className="menu-link">
          <span className="icon">🚪</span> Logout
        </a>
      </div>
    </nav>
  );
}
