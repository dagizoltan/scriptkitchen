// AvatarBadge.jsx
// CSS-only avatar with status badge
export default function AvatarBadge({ src = '', alt = 'User', status = 'online' }) {
  return (
    <span className="avatar-badge-container">
      <img className="avatar-badge-img" src={src || 'https://i.pravatar.cc/40'} alt={alt} />
      <span className={`avatar-status avatar-status-${status}`}></span>
    </span>
  );
}
