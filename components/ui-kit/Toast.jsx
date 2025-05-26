// Toast.jsx
// CSS-only toast/notification example
export default function Toast({ message = "This is a toast notification!", type = "info" }) {
  return (
    <div className={`toast toast-${type}`} role="alert">
      {message}
    </div>
  );
}
