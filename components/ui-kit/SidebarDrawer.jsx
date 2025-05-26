// SidebarDrawer.jsx
// CSS-only sidebar/drawer shell
export default function SidebarDrawer() {
  return (
    <div className="sidebar-drawer">
      <input type="checkbox" id="drawer-toggle" className="drawer-toggle" />
      <label htmlFor="drawer-toggle" className="drawer-handle">☰</label>
      <nav className="drawer-content">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
      </nav>
    </div>
  );
}
