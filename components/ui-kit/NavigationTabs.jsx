export default function NavigationTabs() {
  return (
    <section class="card">
      <div class="card-header">Navigation & Tabs</div>
      <div class="card-body">
        <nav class="navbar">
          <span>Brand</span>
          <div>
            <a href="#">Home</a>
            <a href="#">Docs</a>
            <a href="#">About</a>
          </div>
        </nav>
        <ul class="breadcrumb">
          <li>Home</li>
          <li>Library</li>
          <li>Data</li>
        </ul>
        <ul class="pagination">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#" class="active">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
        <div class="tabs">
          <button class="tab active">Tab 1</button>
          <button class="tab">Tab 2</button>
          <button class="tab">Tab 3</button>
        </div>
      </div>
    </section>
  );
}
