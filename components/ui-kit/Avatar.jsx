// Avatar.jsx
// Enhanced avatar component with multiple variants and features
export default function Avatar() {
  return (
    <div className="avatar-showcase">
      {/* Image Avatars */}
      <div>
        <h3>Image Avatars</h3>
        <div className="avatar-group">
          <span className="avatar avatar-sm" title="John Doe">
            <img src="https://i.pravatar.cc/32?img=1" alt="John Doe" />
          </span>
          <span className="avatar" title="Jane Smith">
            <img src="https://i.pravatar.cc/40?img=2" alt="Jane Smith" />
          </span>
          <span className="avatar avatar-lg" title="Mike Johnson">
            <img src="https://i.pravatar.cc/64?img=3" alt="Mike Johnson" />
          </span>
          <span className="avatar avatar-xl" title="Sarah Wilson">
            <img src="https://i.pravatar.cc/80?img=4" alt="Sarah Wilson" />
          </span>
        </div>
      </div>

      {/* Initial Avatars */}
      <div>
        <h3>Initial Avatars</h3>
        <div className="avatar-group">
          <span className="avatar avatar-sm" title="John Doe">JD</span>
          <span className="avatar" title="Jane Smith">JS</span>
          <span className="avatar avatar-lg" title="Mike Johnson">MJ</span>
          <span className="avatar avatar-xl" title="Sarah Wilson">SW</span>
        </div>
      </div>

      {/* Colored Avatars */}
      <div>
        <h3>Colored Avatars</h3>
        <div className="avatar-group">
          <span className="avatar avatar-primary" title="Primary">AB</span>
          <span className="avatar avatar-success" title="Success">CD</span>
          <span className="avatar avatar-warning" title="Warning">EF</span>
          <span className="avatar avatar-error" title="Error">GH</span>
          <span className="avatar avatar-info" title="Info">IJ</span>
        </div>
      </div>

      {/* Avatar with Status */}
      <div>
        <h3>Avatar with Status</h3>
        <div className="avatar-group">
          <span className="avatar avatar-status" title="Online">
            <img src="https://i.pravatar.cc/40?img=5" alt="Online User" />
            <span className="avatar-status-dot status-online"></span>
          </span>
          <span className="avatar avatar-status" title="Away">
            <img src="https://i.pravatar.cc/40?img=6" alt="Away User" />
            <span className="avatar-status-dot status-away"></span>
          </span>
          <span className="avatar avatar-status" title="Busy">
            <img src="https://i.pravatar.cc/40?img=7" alt="Busy User" />
            <span className="avatar-status-dot status-busy"></span>
          </span>
          <span className="avatar avatar-status" title="Offline">
            <img src="https://i.pravatar.cc/40?img=8" alt="Offline User" />
            <span className="avatar-status-dot status-offline"></span>
          </span>
        </div>
      </div>

      {/* Avatar Shapes */}
      <div>
        <h3>Avatar Shapes</h3>
        <div className="avatar-group">
          <span className="avatar avatar-circle" title="Circle">
            <img src="https://i.pravatar.cc/40?img=9" alt="Circle Avatar" />
          </span>
          <span className="avatar avatar-rounded" title="Rounded">
            <img src="https://i.pravatar.cc/40?img=10" alt="Rounded Avatar" />
          </span>
          <span className="avatar avatar-square" title="Square">
            <img src="https://i.pravatar.cc/40?img=11" alt="Square Avatar" />
          </span>
        </div>
      </div>

      {/* Avatar Stack */}
      <div>
        <h3>Avatar Stack</h3>
        <div className="avatar-stack">
          <span className="avatar" title="User 1">
            <img src="https://i.pravatar.cc/40?img=5" alt="User 1" />
          </span>
          <span className="avatar" title="User 2">
            <img src="https://i.pravatar.cc/40?img=6" alt="User 2" />
          </span>
          <span className="avatar" title="User 3">
            <img src="https://i.pravatar.cc/40?img=7" alt="User 3" />
          </span>
          <span className="avatar avatar-count" title="5 more users">+5</span>
        </div>
      </div>

      {/* Interactive Avatars */}
      <div>
        <h3>Interactive Avatars</h3>
        <div className="avatar-group">
          <button type="button" className="avatar avatar-button" title="Click me">
            <img src="https://i.pravatar.cc/40?img=12" alt="Clickable Avatar" />
          </button>
          <a href="#" className="avatar avatar-link" title="Profile link">
            <img src="https://i.pravatar.cc/40?img=13" alt="Profile Avatar" />
          </a>
          <span className="avatar avatar-loading" title="Loading">
            <img src="https://i.pravatar.cc/40?img=14" alt="Loading Avatar" />
          </span>
        </div>
      </div>
    </div>
  );
}
