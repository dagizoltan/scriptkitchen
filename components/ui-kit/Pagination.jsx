// Pagination.jsx
// CSS-only pagination example
export default function Pagination() {
  return (
    <nav className="pagination" aria-label="Pagination">
      <a href="#" className="page-link">&laquo;</a>
      <a href="#" className="page-link active">1</a>
      <a href="#" className="page-link">2</a>
      <a href="#" className="page-link">3</a>
      <a href="#" className="page-link">&raquo;</a>
    </nav>
  );
}
