// Demo page for AvatarBadge
import AvatarBadge from '../../../components/ui-kit/AvatarBadge.jsx';

export default function AvatarBadgeDemo() {
  return (
    <section>
      <h1>Avatar with Status Badge</h1>
      <p>
        Displays a user avatar image with a small status indicator (online, offline, busy, etc.). Useful for user lists, chat apps, or anywhere you want to show user presence or status.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <AvatarBadge status="online" />
        <AvatarBadge status="busy" />
        <AvatarBadge status="offline" />
      </div>
    </section>
  );
}
