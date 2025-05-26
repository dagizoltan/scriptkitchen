export default function Popover() {
  return (
    <section class="card">
      <div class="card-header">Popover</div>
      <div class="card-body">
        <span class="popover open">
          <button class="btn" type="button">Show Popover</button>
          <div class="popover-content">
            <strong>Popover Title</strong>
            <p>This is a popover with <em>rich content</em>.</p>
          </div>
        </span>
      </div>
    </section>
  );
}
