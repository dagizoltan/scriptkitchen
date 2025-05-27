// GridCards: Comprehensive grid layouts with enhanced card components
export default function GridCards() {
  const cardData = [
    {
      title: "Product Dashboard",
      subtitle: "Analytics & Metrics",
      content: "Monitor your product performance with real-time analytics, user engagement metrics, and conversion tracking.",
      badge: "Premium",
      action: "View Dashboard",
      image: true,
      variant: "primary"
    },
    {
      title: "User Management",
      subtitle: "Team & Permissions",
      content: "Manage user accounts, roles, and permissions across your organization with advanced security controls.",
      badge: "Active",
      action: "Manage Users",
      variant: "secondary"
    },
    {
      title: "API Documentation",
      subtitle: "Developer Resources",
      content: "Complete API reference with examples, authentication guides, and integration tutorials for developers.",
      badge: "Updated",
      action: "View Docs",
      variant: "success"
    },
    {
      title: "Security Center",
      subtitle: "Monitoring & Alerts",
      content: "Advanced security monitoring with threat detection, compliance reporting, and automated response systems.",
      badge: "Critical",
      action: "Check Status",
      variant: "error"
    },
    {
      title: "Data Analytics",
      subtitle: "Insights & Reports",
      content: "Deep dive into your data with customizable reports, trending analysis, and predictive insights powered by AI.",
      badge: "New",
      action: "Explore Data",
      variant: "info"
    },
    {
      title: "Integration Hub",
      subtitle: "Third-party Services",
      content: "Connect with popular services and tools. Streamline your workflow with automated integrations and webhooks.",
      badge: "Beta",
      action: "Browse Apps",
      variant: "warning"
    }
  ];

  const simpleCards = [
    { title: "Card 1", content: "Simple card example with minimal content." },
    { title: "Card 2", content: "Another example demonstrating basic card structure." },
    { title: "Card 3", content: "Third card showing consistent spacing and alignment." },
    { title: "Card 4", content: "Fourth card completing the basic grid layout." }
  ];

  return (
    <div className="grid-cards-demo">
      {/* Enhanced Cards Grid */}
      <div className="demo-section">
        <h3>Enhanced Card Grid</h3>
        <p>Comprehensive card components with various content types, badges, and actions in a responsive grid layout.</p>
        
        <div className="grid enhanced">
          {cardData.map((card, index) => (
            <div key={index} className={`card enhanced ${card.variant || ''}`}>
              {card.image && (
                <div className="card-image">
                  <div className="placeholder-image">
                    <svg width="100%" height="120" viewBox="0 0 300 120" fill="none">
                      <rect width="300" height="120" fill="currentColor" opacity="0.1"/>
                      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="currentColor" opacity="0.6">
                        📊 Chart Preview
                      </text>
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="card-header">
                <div className="card-title-group">
                  <h4 className="card-title">{card.title}</h4>
                  {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
                </div>
                {card.badge && <span className={`badge ${card.variant}`}>{card.badge}</span>}
              </div>
              
              <div className="card-body">
                <p>{card.content}</p>
              </div>
              
              <div className="card-footer">
                <button className={`btn ${card.variant} sm`}>{card.action}</button>
                <button className="btn ghost sm">Share</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Size Variants */}
      <div className="demo-section">
        <h3>Grid Size Variants</h3>
        <p>Different grid layouts for various content densities and screen sizes.</p>
        
        <div className="grid-examples">
          <div className="grid-example">
            <h4>Compact Grid (4 columns)</h4>
            <div className="grid compact">
              {simpleCards.map((card, index) => (
                <div key={index} className="card compact">
                  <div className="card-header">{card.title}</div>
                  <div className="card-body">{card.content}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid-example">
            <h4>Standard Grid (3 columns)</h4>
            <div className="grid standard">
              {simpleCards.slice(0, 3).map((card, index) => (
                <div key={index} className="card">
                  <div className="card-header">{card.title}</div>
                  <div className="card-body">{card.content}</div>
                  <div className="card-footer">Action</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid-example">
            <h4>Wide Grid (2 columns)</h4>
            <div className="grid wide">
              {simpleCards.slice(0, 2).map((card, index) => (
                <div key={index} className="card wide">
                  <div className="card-header">{card.title}</div>
                  <div className="card-body">
                    {card.content} This is a wider card format with more space for detailed content and descriptions.
                  </div>
                  <div className="card-footer">
                    <button className="btn primary sm">Primary Action</button>
                    <button className="btn outline sm">Secondary</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Variants */}
      <div className="demo-section">
        <h3>Card Style Variants</h3>
        <p>Different card styles including elevated, outlined, and flat variants.</p>
        
        <div className="grid standard">
          <div className="card elevated">
            <div className="card-header">Elevated Card</div>
            <div className="card-body">
              Enhanced shadow and hover effects for important content.
            </div>
            <div className="card-footer">Elevated Style</div>
          </div>
          
          <div className="card outlined">
            <div className="card-header">Outlined Card</div>
            <div className="card-body">
              Clean border style without shadow for minimal designs.
            </div>
            <div className="card-footer">Outlined Style</div>
          </div>
          
          <div className="card flat">
            <div className="card-header">Flat Card</div>
            <div className="card-body">
              No shadow or border for seamless integration.
            </div>
            <div className="card-footer">Flat Style</div>
          </div>
        </div>
      </div>

      {/* Interactive Cards */}
      <div className="demo-section">
        <h3>Interactive Cards</h3>
        <p>Cards with hover effects, clickable areas, and loading states.</p>
        
        <div className="grid standard">
          <div className="card interactive">
            <div className="card-header">Hover Card</div>
            <div className="card-body">
              This card has enhanced hover effects and is clickable.
            </div>
            <div className="card-footer">Click to interact</div>
          </div>
          
          <div className="card interactive selectable">
            <div className="card-header">
              Selectable Card
              <input type="checkbox" className="card-checkbox" />
            </div>
            <div className="card-body">
              This card can be selected for bulk operations.
            </div>
            <div className="card-footer">Multi-select enabled</div>
          </div>
          
          <div className="card loading">
            <div className="card-header">Loading Card</div>
            <div className="card-body">
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line short"></div>
            </div>
            <div className="card-footer">Loading...</div>
          </div>
        </div>
      </div>

      {/* Usage Notes */}
      <div className="usage-notes">
        <h3>Grid & Cards Features</h3>
        <ul>
          <li><strong>Responsive Design:</strong> Automatic column adjustment based on screen size</li>
          <li><strong>Flexible Grid Sizes:</strong> Compact (4-col), standard (3-col), wide (2-col) layouts</li>
          <li><strong>Enhanced Cards:</strong> Support for images, badges, actions, and complex content</li>
          <li><strong>Card Variants:</strong> Elevated, outlined, flat, and interactive styles</li>
          <li><strong>Loading States:</strong> Built-in skeleton loading animations</li>
          <li><strong>Accessibility:</strong> Proper focus management and keyboard navigation</li>
          <li><strong>Theme Support:</strong> Color variants and dark mode compatibility</li>
          <li><strong>Interactive Features:</strong> Hover effects, selection, and clickable cards</li>
        </ul>
      </div>
    </div>
  );
}
