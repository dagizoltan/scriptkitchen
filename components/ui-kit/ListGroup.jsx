export default function ListGroup() {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Inbox <span className="badge info">3</span>
        </li>
        <li className="list-group-item">
          Drafts <span className="badge warning">1</span>
        </li>
        <li className="list-group-item">
          Sent <span className="badge success">✓</span>
        </li>
      </ul>
    </div>
  );
}
