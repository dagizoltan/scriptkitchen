// TreeView.jsx
// CSS-only tree view shell
export default function TreeView() {
  return (
    <ul className="tree-view">
      <li>Root
        <ul>
          <li>Child 1</li>
          <li>Child 2
            <ul>
              <li>Grandchild</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
