export default function Table() {
  return (
    <section class="card">
      <div class="card-header">Table</div>
      <div class="card-body table-responsive">
        <table class="table-striped table-hover">
          <thead>
            <tr><th>Name</th><th>Status</th><th>Role</th></tr>
          </thead>
          <tbody>
            <tr><td>Alice</td><td><span class="badge success">Active</span></td><td>Admin</td></tr>
            <tr><td>Bob</td><td><span class="badge warning">Pending</span></td><td>User</td></tr>
            <tr><td>Carol</td><td><span class="badge error">Banned</span></td><td>Guest</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
