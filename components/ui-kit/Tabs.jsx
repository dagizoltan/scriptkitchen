// Tabs: Enhanced tabbed navigation component with comprehensive features
export default function Tabs() {
  return (
    <div className="tabs-demo">
      {/* Basic Tabs */}
      <div>
        <h3>Basic Tabs</h3>
        <p>Standard horizontal tabs with clean styling and smooth transitions.</p>
        
        <div className="tabs">
          <div className="tab-nav">
            <input type="radio" id="basic-tab1" name="basic-tabs" className="tab-toggle" defaultChecked />
            <label htmlFor="basic-tab1" className="tab-label">
              <span className="tab-icon">🏠</span>
              Dashboard
            </label>
            
            <input type="radio" id="basic-tab2" name="basic-tabs" className="tab-toggle" />
            <label htmlFor="basic-tab2" className="tab-label">
              <span className="tab-icon">👥</span>
              Users
              <span className="tab-badge">3</span>
            </label>
            
            <input type="radio" id="basic-tab3" name="basic-tabs" className="tab-toggle" />
            <label htmlFor="basic-tab3" className="tab-label">
              <span className="tab-icon">📊</span>
              Analytics
            </label>
            
            <input type="radio" id="basic-tab4" name="basic-tabs" className="tab-toggle" />
            <label htmlFor="basic-tab4" className="tab-label">
              <span className="tab-icon">⚙️</span>
              Settings
            </label>
          </div>
          
          <div className="tab-content">
            <h4>Dashboard Overview</h4>
            <p>Welcome to your dashboard! Here you can see an overview of your account, recent activity, and key metrics.</p>
            <div className="grid compact">
              <div className="card">
                <div className="card-body">
                  <strong>Total Users</strong><br/>
                  <span style={{fontSize: '1.5rem', color: 'var(--primary)'}}>1,234</span>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <strong>Revenue</strong><br/>
                  <span style={{fontSize: '1.5rem', color: 'var(--success)'}}>$12,345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>User Management</h4>
            <p>Manage user accounts, permissions, and roles for your organization.</p>
            <div className="card">
              <div className="card-header">Recent Users</div>
              <div className="card-body">
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <div className="avatar sm">JD</div>
                    <div>
                      <div><strong>John Doe</strong></div>
                      <div style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>john@example.com</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <div className="avatar sm">JS</div>
                    <div>
                      <div><strong>Jane Smith</strong></div>
                      <div style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>jane@example.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>Analytics & Reports</h4>
            <p>View detailed analytics, generate reports, and track key performance indicators.</p>
            <div className="alert info">
              <div className="alert-content">
                <div className="alert-title">Analytics Overview</div>
                <div className="alert-description">Your analytics data shows a 15% increase in engagement this month.</div>
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>Settings & Configuration</h4>
            <p>Configure your application settings, preferences, and integrations.</p>
            <div className="form-group">
              <label>Organization Name</label>
              <input type="text" className="form-control" value="Acme Corporation" />
            </div>
            <div className="form-group">
              <label>Default Theme</label>
              <select className="form-control">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Variants */}
      <div>
        <h3>Tab Style Variants</h3>
        <p>Different visual styles for tabs including pills, underlined, and more.</p>
        
        <div className="grid standard">
          {/* Pills Variant */}
          <div className="card">
            <div className="card-header">Pills Style</div>
            <div className="card-body">
              <div className="tabs pills">
                <div className="tab-nav">
                  <input type="radio" id="pills-tab1" name="pills-tabs" className="tab-toggle" defaultChecked />
                  <label htmlFor="pills-tab1" className="tab-label">Overview</label>
                  
                  <input type="radio" id="pills-tab2" name="pills-tabs" className="tab-toggle" />
                  <label htmlFor="pills-tab2" className="tab-label">Details</label>
                  
                  <input type="radio" id="pills-tab3" name="pills-tabs" className="tab-toggle" />
                  <label htmlFor="pills-tab3" className="tab-label">History</label>
                </div>
                
                <div className="tab-content">
                  <p>Overview content with rounded pill-style tabs.</p>
                </div>
                <div className="tab-content">
                  <p>Detailed information and specifications.</p>
                </div>
                <div className="tab-content">
                  <p>Historical data and previous activities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Underline Variant */}
          <div className="card">
            <div className="card-header">Underline Style</div>
            <div className="card-body">
              <div className="tabs underline">
                <div className="tab-nav">
                  <input type="radio" id="underline-tab1" name="underline-tabs" className="tab-toggle" defaultChecked />
                  <label htmlFor="underline-tab1" className="tab-label">Files</label>
                  
                  <input type="radio" id="underline-tab2" name="underline-tabs" className="tab-toggle" />
                  <label htmlFor="underline-tab2" className="tab-label">Folders</label>
                  
                  <input type="radio" id="underline-tab3" name="underline-tabs" className="tab-toggle" />
                  <label htmlFor="underline-tab3" className="tab-label">Shared</label>
                </div>
                
                <div className="tab-content">
                  <p>File listing with minimal underline styling.</p>
                </div>
                <div className="tab-content">
                  <p>Folder structure and organization.</p>
                </div>
                <div className="tab-content">
                  <p>Shared documents and collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size Variants */}
      <div>
        <h3>Size Variants</h3>
        <p>Different tab sizes for various use cases and layouts.</p>
        
        <div className="grid standard">
          {/* Small Tabs */}
          <div className="card">
            <div className="card-header">Small Tabs</div>
            <div className="card-body">
              <div className="tabs sm">
                <div className="tab-nav">
                  <input type="radio" id="sm-tab1" name="sm-tabs" className="tab-toggle" defaultChecked />
                  <label htmlFor="sm-tab1" className="tab-label">Code</label>
                  
                  <input type="radio" id="sm-tab2" name="sm-tabs" className="tab-toggle" />
                  <label htmlFor="sm-tab2" className="tab-label">Preview</label>
                </div>
                
                <div className="tab-content">
                  <pre style={{fontSize: '0.75rem', padding: '0.5rem'}}>&lt;div class="example"&gt;
  Hello World
&lt;/div&gt;</pre>
                </div>
                <div className="tab-content">
                  <div className="example">Hello World</div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Tabs */}
          <div className="card">
            <div className="card-header">Large Tabs</div>
            <div className="card-body">
              <div className="tabs lg">
                <div className="tab-nav">
                  <input type="radio" id="lg-tab1" name="lg-tabs" className="tab-toggle" defaultChecked />
                  <label htmlFor="lg-tab1" className="tab-label">
                    <span className="tab-icon">📋</span>
                    Projects
                  </label>
                  
                  <input type="radio" id="lg-tab2" name="lg-tabs" className="tab-toggle" />
                  <label htmlFor="lg-tab2" className="tab-label">
                    <span className="tab-icon">👥</span>
                    Team
                  </label>
                </div>
                
                <div className="tab-content">
                  <h4>Project Overview</h4>
                  <p>Large tabs are perfect for main navigation areas.</p>
                </div>
                <div className="tab-content">
                  <h4>Team Members</h4>
                  <p>Enhanced spacing for important content sections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Tabs */}
      <div>
        <h3>Vertical Tabs</h3>
        <p>Vertical tab layout for sidebar navigation or when horizontal space is limited.</p>
        
        <div className="tabs vertical">
          <div className="tab-nav">
            <input type="radio" id="vertical-tab1" name="vertical-tabs" className="tab-toggle" defaultChecked />
            <label htmlFor="vertical-tab1" className="tab-label">
              <span className="tab-icon">🏠</span>
              Home
            </label>
            
            <input type="radio" id="vertical-tab2" name="vertical-tabs" className="tab-toggle" />
            <label htmlFor="vertical-tab2" className="tab-label">
              <span className="tab-icon">📊</span>
              Reports
              <span className="tab-badge">5</span>
            </label>
            
            <input type="radio" id="vertical-tab3" name="vertical-tabs" className="tab-toggle" />
            <label htmlFor="vertical-tab3" className="tab-label">
              <span className="tab-icon">💼</span>
              Workspace
            </label>
            
            <input type="radio" id="vertical-tab4" name="vertical-tabs" className="tab-toggle" />
            <label htmlFor="vertical-tab4" className="tab-label">
              <span className="tab-icon">⚙️</span>
              Settings
            </label>
          </div>
          
          <div className="tab-content">
            <h4>Home Dashboard</h4>
            <p>Welcome to your main dashboard. Here you can access all your important information and quick actions.</p>
            <div className="alert success">
              <div className="alert-content">
                <div className="alert-title">Welcome Back!</div>
                <div className="alert-description">You have 3 new notifications and 2 pending tasks.</div>
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>Reports & Analytics</h4>
            <p>View and generate detailed reports about your data and performance metrics.</p>
            <div className="features-list">
              <li>📈 Sales Performance</li>
              <li>👥 User Analytics</li>
              <li>💰 Revenue Reports</li>
              <li>📊 Custom Dashboards</li>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>Workspace Management</h4>
            <p>Manage your workspace settings, team members, and project configurations.</p>
            <div className="card">
              <div className="card-header">Quick Actions</div>
              <div className="card-body">
                <div className="button-group">
                  <button className="btn sm">Create Project</button>
                  <button className="btn sm outline">Invite Member</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>Settings & Preferences</h4>
            <p>Configure your application settings, user preferences, and system options.</p>
            <div className="form-group">
              <label>
                <input type="checkbox" /> Enable dark mode
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" defaultChecked /> Email notifications
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div>
        <h3>Advanced Features</h3>
        <p>Tabs with scrollable navigation, closeable tabs, and additional actions.</p>
        
        <div className="tabs scrollable">
          <div className="tab-nav">
            <input type="radio" id="scroll-tab1" name="scroll-tabs" className="tab-toggle" defaultChecked />
            <label htmlFor="scroll-tab1" className="tab-label">
              Overview
            </label>
            
            <input type="radio" id="scroll-tab2" name="scroll-tabs" className="tab-toggle" />
            <label htmlFor="scroll-tab2" className="tab-label">
              Performance Analytics
            </label>
            
            <input type="radio" id="scroll-tab3" name="scroll-tabs" className="tab-toggle" />
            <label htmlFor="scroll-tab3" className="tab-label">
              User Management System
            </label>
            
            <input type="radio" id="scroll-tab4" name="scroll-tabs" className="tab-toggle" />
            <label htmlFor="scroll-tab4" className="tab-label">
              Configuration Settings
            </label>
            
            <input type="radio" id="scroll-tab5" name="scroll-tabs" className="tab-toggle" />
            <label htmlFor="scroll-tab5" className="tab-label">
              Advanced Reports
            </label>
            
            <input type="radio" id="scroll-tab6" name="scroll-tabs" className="tab-toggle" />
            <label htmlFor="scroll-tab6" className="tab-label">
              Integration Hub
            </label>
            
            <div className="tab-actions">
              <button className="tab-action-btn" title="Add new tab">
                +
              </button>
              <button className="tab-action-btn" title="Tab options">
                ⋯
              </button>
            </div>
          </div>
          
          <div className="tab-content">
            <h4>System Overview</h4>
            <p>This tab container demonstrates scrollable navigation when there are many tabs.</p>
          </div>
          
          <div className="tab-content">
            <h4>Performance Analytics</h4>
            <p>Detailed performance metrics and analytics dashboard.</p>
          </div>
          
          <div className="tab-content">
            <h4>User Management System</h4>
            <p>Comprehensive user management with roles and permissions.</p>
          </div>
          
          <div className="tab-content">
            <h4>Configuration Settings</h4>
            <p>System configuration and application settings.</p>
          </div>
          
          <div className="tab-content">
            <h4>Advanced Reports</h4>
            <p>Generate and customize advanced reporting features.</p>
          </div>
          
          <div className="tab-content">
            <h4>Integration Hub</h4>
            <p>Manage third-party integrations and API connections.</p>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div>
        <h3>Tab Features</h3>
        <ul className="features-list">
          <li>🎨 Multiple style variants (standard, pills, underline)</li>
          <li>📏 Size options (small, regular, large)</li>
          <li>📱 Responsive design with mobile optimization</li>
          <li>🔄 Vertical and horizontal orientations</li>
          <li>📊 Icon and badge support</li>
          <li>🎯 Scrollable navigation for many tabs</li>
          <li>⌨️ Full keyboard navigation support</li>
          <li>♿ ARIA-compliant accessibility</li>
          <li>🎭 Smooth animations and transitions</li>
          <li>🎪 CSS-only implementation</li>
          <li>🌙 Dark mode compatibility</li>
          <li>🎬 Reduced motion support</li>
          <li>🖨️ Print-friendly styles</li>
          <li>🎪 High contrast mode support</li>
          <li>⚡ Lightweight and performant</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div className="usage-notes">
        <h3>Usage Guidelines</h3>
        <p><strong>Accessibility:</strong> Each tab includes proper ARIA attributes and keyboard navigation with arrow keys and Enter/Space activation.</p>
        <p><strong>Performance:</strong> CSS-only implementation ensures optimal performance without JavaScript dependencies.</p>
        <p><strong>Responsive:</strong> Tabs automatically adapt to mobile screens with horizontal scrolling when needed.</p>
        <p><strong>Customization:</strong> Use CSS custom properties to easily customize colors, spacing, and animations.</p>
        <p><strong>Integration:</strong> Works seamlessly with existing form controls, cards, and other UI components.</p>
      </div>
    </div>
  );
}
