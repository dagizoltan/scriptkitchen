import MobileMenuToggle from "../../islands/ui-kit/MobileMenuToggle.jsx";

const componentGroups = [
  {
    title: "General",
    items: [
      { name: "Typography", path: "/ui-kit/typography" },
      { name: "Divider", path: "/ui-kit/divider" },
      { name: "Avatar", path: "/ui-kit/avatar" },
      {
        name: "Avatar with Status Badge",
        path: "/ui-kit/avatar-badge",
      },
      { name: "Chip & Pill", path: "/ui-kit/chip-pill" },
      { name: "Badge", path: "/ui-kit/badge" },
      { name: "Skeleton Loader", path: "/ui-kit/skeleton-loader" },
    ],
  },
  {
    title: "Layout & Navigation",
    items: [
      { name: "Grid & Cards", path: "/ui-kit/grid-cards" },
      { name: "Masonry / Card Grid", path: "/ui-kit/masonry-grid" },
      { name: "Vertical Menu", path: "/ui-kit/vertical-menu" },
      { name: "Sidebar / Drawer", path: "/ui-kit/sidebar-drawer" },
      { name: "Navbar", path: "/ui-kit/navbar" },
      { name: "Breadcrumbs", path: "/ui-kit/breadcrumb" },
      {
        name: "Breadcrumbs with Dropdown",
        path: "/ui-kit/breadcrumb-dropdown",
      },
      { name: "Tabs", path: "/ui-kit/tabs" },
      { name: "Pagination", path: "/ui-kit/pagination" },
      { name: "Stepper", path: "/ui-kit/stepper" },
      { name: "Timeline", path: "/ui-kit/timeline" },
      { name: "Tree View", path: "/ui-kit/tree-view" },
    ],
  },
  {
    title: "Forms & Inputs",
    items: [
      { name: "Form Controls", path: "/ui-kit/form-controls" },
      { name: "Dropdown", path: "/ui-kit/dropdown" },
      { name: "Calendar / Date Picker", path: "/ui-kit/calendar" },
      { name: "Time Picker", path: "/ui-kit/time-picker" },
      { name: "List Group", path: "/ui-kit/list-group" },
      { name: "Rating / Stars", path: "/ui-kit/rating-stars" },
    ],
  },
  {
    title: "Feedback & Data Display",
    items: [
      { name: "Alerts", path: "/ui-kit/alerts" },
      { name: "Toast", path: "/ui-kit/toast" },
      { name: "Popover", path: "/ui-kit/popover" },
      { name: "Tooltip", path: "/ui-kit/tooltip" },
      { name: "Progress Bar", path: "/ui-kit/progress-bar" },
      { name: "Spinner", path: "/ui-kit/spinner" },
      { name: "Accordion", path: "/ui-kit/accordion" },
      { name: "Carousel", path: "/ui-kit/carousel" },
      { name: "Table", path: "/ui-kit/table" },
      { name: "CodeBlock", path: "/ui-kit/code-block" },
    ],
  },
  {
    title: "Examples",
    items: [
      { name: "Aside Example", path: "/ui-kit/aside-example" },
      {
        name: "Progress, Toast, Tooltip",
        path: "/ui-kit/progress-toast-tooltip",
      },
      { name: "Navigation & Tabs", path: "/ui-kit/navigation-tabs" },
      { name: "Buttons & Badges", path: "/ui-kit/buttons-badges" },
    ],
  },
];

export default function UiKitLayout({ Component }) {
  return (
    <div className="ui-kit-layout">
      <MobileMenuToggle />
      <aside id="ui-kit-sidebar" className="ui-kit-sidebar" role="navigation" aria-label="UI Kit Navigation">
        <nav className="vertical-menu">
          <div className="menu-section-title">Getting started</div>
          <a href="/ui-kit">Overview</a>
          <a href="/ui-kit/installation">Installation</a>
          <a href="/ui-kit/usage">Usage</a>
          <a href="/ui-kit/customization">Customization</a>
          <div className="menu-section-title">Components</div>
          {componentGroups.map((group) => (
            <div key={group.title}>
              <div className="menu-group-title">{group.title}</div>
              {group.items.map((c) => <a key={c.path} href={c.path}>{c.name}
              </a>)}
            </div>
          ))}
        </nav>
      </aside>
      <main className="ui-kit-main">
        <Component />
      </main>
    </div>
  );
}
