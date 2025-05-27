export default function Table() {
  return (
    <div className="demo-container">
      {/* Basic Tables */}
      <div className="demo-section">
        <h2>Basic Tables</h2>
        
        <h3>Simple Table</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice Johnson</td>
                <td>alice@example.com</td>
                <td>Administrator</td>
                <td><span className="badge success">Active</span></td>
              </tr>
              <tr>
                <td>Bob Smith</td>
                <td>bob@example.com</td>
                <td>Editor</td>
                <td><span className="badge warning">Pending</span></td>
              </tr>
              <tr>
                <td>Carol Davis</td>
                <td>carol@example.com</td>
                <td>User</td>
                <td><span className="badge error">Suspended</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Variants */}
      <div className="demo-section">
        <h2>Table Variants</h2>
        
        <h3>Striped Table</h3>
        <div className="table-responsive">
          <table className="table striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laptop</td>
                <td>$999</td>
                <td>25</td>
                <td>Electronics</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>$29</td>
                <td>150</td>
                <td>Accessories</td>
              </tr>
              <tr>
                <td>Keyboard</td>
                <td>$79</td>
                <td>80</td>
                <td>Accessories</td>
              </tr>
              <tr>
                <td>Monitor</td>
                <td>$299</td>
                <td>12</td>
                <td>Electronics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Hover Table</h3>
        <div className="table-responsive">
          <table className="table hover">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1001</td>
                <td>John Doe</td>
                <td>2024-01-15</td>
                <td>$249.99</td>
                <td><span className="badge primary">Processing</span></td>
              </tr>
              <tr>
                <td>#1002</td>
                <td>Jane Smith</td>
                <td>2024-01-14</td>
                <td>$89.50</td>
                <td><span className="badge success">Shipped</span></td>
              </tr>
              <tr>
                <td>#1003</td>
                <td>Mike Wilson</td>
                <td>2024-01-13</td>
                <td>$156.75</td>
                <td><span className="badge info">Delivered</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Bordered Table</h3>
        <div className="table-responsive">
          <table className="table bordered">
            <thead>
              <tr>
                <th>Country</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USA</td>
                <td>Washington D.C.</td>
                <td>331 million</td>
                <td>9.8M km²</td>
              </tr>
              <tr>
                <td>Canada</td>
                <td>Ottawa</td>
                <td>38 million</td>
                <td>10M km²</td>
              </tr>
              <tr>
                <td>Mexico</td>
                <td>Mexico City</td>
                <td>128 million</td>
                <td>2M km²</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table Sizes */}
      <div className="demo-section">
        <h2>Table Sizes</h2>
        
        <h3>Small Table</h3>
        <div className="table-responsive">
          <table className="table sm striped">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>US</td>
                <td>United States</td>
                <td>100</td>
              </tr>
              <tr>
                <td>CA</td>
                <td>Canada</td>
                <td>85</td>
              </tr>
              <tr>
                <td>MX</td>
                <td>Mexico</td>
                <td>72</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Large Table</h3>
        <div className="table-responsive">
          <table className="table lg hover">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Redesign</td>
                <td>Complete overhaul of the company website with modern design</td>
                <td><span className="badge primary">In Progress</span></td>
                <td>75%</td>
              </tr>
              <tr>
                <td>Mobile App</td>
                <td>Development of iOS and Android mobile applications</td>
                <td><span className="badge warning">Planning</span></td>
                <td>15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Tables */}
      <div className="demo-section">
        <h2>Interactive Tables</h2>
        
        <h3>Sortable Table</h3>
        <div className="table-responsive">
          <table className="table striped hover">
            <thead>
              <tr>
                <th className="sortable">
                  Name 
                  <span className="sort-icon">↕️</span>
                </th>
                <th className="sortable">
                  Age 
                  <span className="sort-icon">↕️</span>
                </th>
                <th className="sortable">
                  Score 
                  <span className="sort-icon">↕️</span>
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emma Thompson</td>
                <td>28</td>
                <td>95</td>
                <td>
                  <button type="button" className="btn sm outline">Edit</button>
                  <button type="button" className="btn sm error outline">Delete</button>
                </td>
              </tr>
              <tr>
                <td>David Brown</td>
                <td>34</td>
                <td>87</td>
                <td>
                  <button type="button" className="btn sm outline">Edit</button>
                  <button type="button" className="btn sm error outline">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Sarah Wilson</td>
                <td>25</td>
                <td>92</td>
                <td>
                  <button type="button" className="btn sm outline">Edit</button>
                  <button type="button" className="btn sm error outline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Selectable Table</h3>
        <div className="table-responsive">
          <table className="table bordered">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="select-all" />
                  <label for="select-all" className="sr-only">Select All</label>
                </th>
                <th>Task</th>
                <th>Assignee</th>
                <th>Due Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr className="selectable">
                <td>
                  <input type="checkbox" id="task-1" />
                  <label for="task-1" className="sr-only">Select Task 1</label>
                </td>
                <td>Design Homepage</td>
                <td>Alice</td>
                <td>2024-02-01</td>
                <td><span className="badge error">High</span></td>
              </tr>
              <tr className="selectable">
                <td>
                  <input type="checkbox" id="task-2" />
                  <label for="task-2" className="sr-only">Select Task 2</label>
                </td>
                <td>Write Documentation</td>
                <td>Bob</td>
                <td>2024-02-03</td>
                <td><span className="badge warning">Medium</span></td>
              </tr>
              <tr className="selectable">
                <td>
                  <input type="checkbox" id="task-3" />
                  <label for="task-3" className="sr-only">Select Task 3</label>
                </td>
                <td>Code Review</td>
                <td>Carol</td>
                <td>2024-02-05</td>
                <td><span className="badge success">Low</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Table with Pagination */}
      <div className="demo-section">
        <h2>Data Table with Controls</h2>
        <div className="table-controls">
          <div className="table-search">
            <input type="search" placeholder="Search..." className="form-control sm" />
          </div>
          <div className="table-actions">
            <button type="button" className="btn sm primary">Add New</button>
            <button type="button" className="btn sm outline">Export</button>
          </div>
        </div>
        
        <div className="table-responsive">
          <table className="table striped hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Last Order</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#C001</td>
                <td>John Smith</td>
                <td>john@example.com</td>
                <td>15</td>
                <td>$1,250.00</td>
                <td>2024-01-10</td>
                <td><span className="badge success">Active</span></td>
                <td>
                  <button type="button" className="btn xs outline" title="View">👁️</button>
                  <button type="button" className="btn xs outline" title="Edit">✏️</button>
                  <button type="button" className="btn xs error outline" title="Delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>#C002</td>
                <td>Jane Doe</td>
                <td>jane@example.com</td>
                <td>8</td>
                <td>$890.50</td>
                <td>2024-01-08</td>
                <td><span className="badge warning">Pending</span></td>
                <td>
                  <button type="button" className="btn xs outline" title="View">👁️</button>
                  <button type="button" className="btn xs outline" title="Edit">✏️</button>
                  <button type="button" className="btn xs error outline" title="Delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>#C003</td>
                <td>Mike Johnson</td>
                <td>mike@example.com</td>
                <td>22</td>
                <td>$2,180.75</td>
                <td>2024-01-12</td>
                <td><span className="badge primary">VIP</span></td>
                <td>
                  <button type="button" className="btn xs outline" title="View">👁️</button>
                  <button type="button" className="btn xs outline" title="Edit">✏️</button>
                  <button type="button" className="btn xs error outline" title="Delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="table-pagination">
          <div className="table-info">
            Showing 1-3 of 150 entries
          </div>
          <div className="pagination">
            <button type="button" className="btn xs outline" disabled>Previous</button>
            <button type="button" className="btn xs primary">1</button>
            <button type="button" className="btn xs outline">2</button>
            <button type="button" className="btn xs outline">3</button>
            <span>...</span>
            <button type="button" className="btn xs outline">50</button>
            <button type="button" className="btn xs outline">Next</button>
          </div>
        </div>
      </div>

      {/* Loading and Empty States */}
      <div className="demo-section">
        <h2>Table States</h2>
        
        <h3>Loading Table</h3>
        <div className="table-responsive">
          <table className="table loading">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div className="skeleton-line"></div></td>
                <td><div className="skeleton-line"></div></td>
                <td><div className="skeleton-line"></div></td>
              </tr>
              <tr>
                <td><div className="skeleton-line"></div></td>
                <td><div className="skeleton-line"></div></td>
                <td><div className="skeleton-line"></div></td>
              </tr>
              <tr>
                <td><div className="skeleton-line"></div></td>
                <td><div className="skeleton-line"></div></td>
                <td><div className="skeleton-line"></div></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Empty Table</h3>
        <div className="table-responsive">
          <table className="table bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="3" className="table-empty">
                  <div className="empty-state">
                    <div className="empty-icon">📭</div>
                    <h3>No data available</h3>
                    <p>There are no items to display at the moment.</p>
                    <button type="button" className="btn primary">Add Item</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Features List */}
      <div className="demo-section">
        <h2>Table Features</h2>
        <ul className="features-list">
          <li>📊 Multiple table variants (basic, striped, hover, bordered)</li>
          <li>📏 Size options (small, regular, large)</li>
          <li>🔄 Sortable columns with visual indicators</li>
          <li>✅ Row selection with checkboxes</li>
          <li>📱 Fully responsive design</li>
          <li>🎨 Consistent styling with theme colors</li>
          <li>⚡ Loading states with skeleton animation</li>
          <li>📭 Empty state handling</li>
          <li>🔍 Search and filter integration</li>
          <li>📄 Pagination support</li>
          <li>♿ Full accessibility compliance</li>
          <li>🌙 Dark mode compatibility</li>
        </ul>
      </div>

      {/* Usage Notes */}
      <div className="demo-section">
        <h2>Usage Notes</h2>
        <div className="usage-notes">
          <p><strong>Responsive:</strong> Always wrap tables in <code>.table-responsive</code> for horizontal scrolling on small screens.</p>
          <p><strong>Variants:</strong> Use <code>.striped</code>, <code>.hover</code>, or <code>.bordered</code> classes for different table styles.</p>
          <p><strong>Sizes:</strong> Add <code>.sm</code> or <code>.lg</code> classes for different table sizes.</p>
          <p><strong>Sortable:</strong> Add <code>.sortable</code> class to table headers and include sort icons.</p>
          <p><strong>Actions:</strong> Use small buttons in action columns for space efficiency.</p>
        </div>
      </div>
    </div>
  );
}
