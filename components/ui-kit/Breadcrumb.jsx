// Breadcrumb.jsx
// Enhanced breadcrumb navigation component with advanced features
export default function Breadcrumb({ 
  items = [], 
  separator = "/", 
  showIcons = false,
  maxItems = null,
  className = "",
  loading = false
}) {
  const defaultItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "UI Kit", href: "/ui-kit", icon: "🧩" },
    { label: "Components", href: "/ui-kit/components", icon: "📦" },
    { label: "Breadcrumbs", icon: "📍" }
  ];

  const breadcrumbItems = items.length > 0 ? items : defaultItems;
  
  // Handle max items with ellipsis
  const displayItems = maxItems && breadcrumbItems.length > maxItems
    ? [
        breadcrumbItems[0],
        { label: "...", isEllipsis: true },
        ...breadcrumbItems.slice(-2)
      ]
    : breadcrumbItems;

  // Generate CSS class for separator
  const separatorClass = () => {
    switch (separator) {
      case "›": return "separator-arrow";
      case "|": return "separator-pipe";
      case "•": return "separator-dot";
      case "▶": return "separator-chevron";
      default: return "separator-slash";
    }
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className={`breadcrumb ${separatorClass()} ${loading ? 'loading' : ''} ${className}`.trim()}>
        {displayItems.map((item, index) => (
          <li key={index} className={item.isEllipsis ? 'breadcrumb-ellipsis-item' : ''}>
            {item.isEllipsis ? (
              <span className="breadcrumb-ellipsis">{item.label}</span>
            ) : index === displayItems.length - 1 ? (
              <span className="breadcrumb-current" aria-current="page">
                {showIcons && item.icon && (
                  <span className="breadcrumb-icon" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </span>
            ) : (
              <a href={item.href || "#"} className="breadcrumb-link">
                {showIcons && item.icon && (
                  <span className="breadcrumb-icon" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
