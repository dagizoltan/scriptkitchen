export default function Divider() {
  return (
    <div>
      <div>Above the divider</div>
      <hr className="divider" />
      <div>Below the divider</div>
      <span>Left</span>
      <span className="divider vertical"></span>
      <span>Right</span>
    </div>
  );
}
