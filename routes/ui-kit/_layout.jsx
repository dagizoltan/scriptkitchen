const componentGroups = [
  {
    title: "General",
    items: [
      { name: "Typography", path: "/ui-kit/components/typography" },
      { name: "Divider", path: "/ui-kit/components/divider" },
      { name: "Avatar", path: "/ui-kit/components/avatar" },
      { name: "Avatar with Status Badge", path: "/ui-kit/components/avatar-badge" },
      { name: "Chip & Pill", path: "/ui-kit/components/chip-pill" },
      { name: "Badge", path: "/ui-kit/components/badge" },
      { name: "Skeleton Loader", path: "/ui-kit/components/skeleton-loader" },
    ]
  },
  {
    title: "Layout & Navigation",
    items: [
      { name: "Grid & Cards", path: "/ui-kit/components/grid-cards" },
      { name: "Masonry / Card Grid", path: "/ui-kit/components/masonry-grid" },
      { name: "Vertical Menu", path: "/ui-kit/components/vertical-menu" },
      { name: "Sidebar / Drawer", path: "/ui-kit/components/sidebar-drawer" },
      { name: "Navbar", path: "/ui-kit/components/navbar" },
      { name: "Breadcrumbs", path: "/ui-kit/components/breadcrumb" },
      { name: "Breadcrumbs with Dropdown", path: "/ui-kit/components/breadcrumb-dropdown" },
      { name: "Tabs", path: "/ui-kit/components/tabs" },
      { name: "Pagination", path: "/ui-kit/components/pagination" },
      { name: "Stepper", path: "/ui-kit/components/stepper" },
      { name: "Timeline", path: "/ui-kit/components/timeline" },
      { name: "Tree View", path: "/ui-kit/components/tree-view" },
    ]
  },
  {
    title: "Forms & Inputs",
    items: [
      { name: "Form Controls", path: "/ui-kit/components/form-controls" },
      { name: "Dropdown", path: "/ui-kit/components/dropdown" },
      { name: "Calendar / Date Picker", path: "/ui-kit/components/calendar" },
      { name: "Time Picker", path: "/ui-kit/components/time-picker" },
      { name: "List Group", path: "/ui-kit/components/list-group" },
      { name: "Rating / Stars", path: "/ui-kit/components/rating-stars" },
    ]
  },
  {
    title: "Feedback & Data Display",
    items: [
      { name: "Alerts", path: "/ui-kit/components/alerts" },
      { name: "Toast", path: "/ui-kit/components/toast" },
      { name: "Popover", path: "/ui-kit/components/popover" },
      { name: "Tooltip", path: "/ui-kit/components/tooltip" },
      { name: "Progress Bar", path: "/ui-kit/components/progress-bar" },
      { name: "Spinner", path: "/ui-kit/components/spinner" },
      { name: "Accordion", path: "/ui-kit/components/accordion" },
      { name: "Carousel", path: "/ui-kit/components/carousel" },
      { name: "Table", path: "/ui-kit/components/table" },
      { name: "CodeBlock", path: "/ui-kit/components/code-block" },
    ]
  },
  {
    title: "Examples",
    items: [
      { name: "Aside Example", path: "/ui-kit/components/aside-example" },
      { name: "Progress, Toast, Tooltip", path: "/ui-kit/components/progress-toast-tooltip" },
      { name: "Navigation & Tabs", path: "/ui-kit/components/navigation-tabs" },
      { name: "Buttons & Badges", path: "/ui-kit/components/buttons-badges" },
    ]
  }
];

export default function UiKitLayout({ Component }) {
  return (
    <div className="ui-kit-layout" style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ minWidth: 220, background: "var(--surface)", borderRight: "1px solid #eee", padding: "2em 0 2em 0.5em" }}>
        <nav className="vertical-menu">
          <div className="menu-section-title">Getting started</div>
          <a href="/ui-kit">Overview</a>
          <a href="/ui-kit/installation">Installation</a>
          <a href="/ui-kit/usage">Usage</a>
          <a href="/ui-kit/customization">Customization</a>
          <div className="menu-section-title">Components</div>
          {componentGroups.map(group => (
            <div key={group.title}>
              <div className="menu-group-title">{group.title}</div>
              {group.items.map(c => (
                <a key={c.path} href={c.path}>{c.name}</a>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2em" }}><Component /></main>
    </div>
  );
}
