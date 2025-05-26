export default function Divider() {
  return (
    <section class="card">
      <div class="card-header">Divider</div>
      <div class="card-body">
        <div>Above the divider</div>
        <hr class="divider" />
        <div>Below the divider</div>
        <span>Left</span><span class="divider vertical"></span><span>Right</span>
      </div>
    </section>
  );
}
