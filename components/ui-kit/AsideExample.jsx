export default function AsideExample() {
  return (
    <section class="card">
      <div class="card-header">Aside Example</div>
      <div class="card-body">
        <div style="display: flex; gap: 2rem; align-items: flex-start;">
          <main style="flex:2;">
            <h2>Main Content</h2>
            <p>
              This is the main content area. Resize the window to see how the
              aside behaves responsively.
            </p>
          </main>
          <aside class="card" style="flex:1; min-width: 200px;">
            <div class="card-header">Aside</div>
            <div class="card-body">
              <p>
                This is an <code>&lt;aside&gt;</code> element, often used for
                sidebars, tips, or related content.
              </p>
              <ul>
                <li>
                  <span class="badge info">Info</span> Sidebar item
                </li>
                <li>
                  <span class="badge warning">Warning</span> Sidebar item
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
