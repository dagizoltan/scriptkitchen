export default function ListGroup() {
  return (
    <section class="card">
      <div class="card-header">List Group</div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">Inbox <span class="badge info">3</span></li>
          <li class="list-group-item">Drafts <span class="badge warning">1</span></li>
          <li class="list-group-item">Sent <span class="badge success">✓</span></li>
        </ul>
      </div>
    </section>
  );
}
