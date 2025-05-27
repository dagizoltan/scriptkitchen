import Avatar from "../../components/ui-kit/Avatar.jsx";
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

const avatarCode = `<!-- Basic Avatar with Image -->
<span class="avatar">
  <img src="https://i.pravatar.cc/40?img=1" alt="John Doe" />
</span>

<!-- Avatar with Initials -->
<span class="avatar">JD</span>

<!-- Different Sizes -->
<span class="avatar avatar-sm">JS</span>
<span class="avatar avatar-lg">MJ</span>
<span class="avatar avatar-xl">SW</span>

<!-- Shape Variants -->
<span class="avatar avatar-circle">
  <img src="https://i.pravatar.cc/40?img=2" alt="Circle" />
</span>
<span class="avatar avatar-rounded">
  <img src="https://i.pravatar.cc/40?img=3" alt="Rounded" />
</span>
<span class="avatar avatar-square">
  <img src="https://i.pravatar.cc/40?img=4" alt="Square" />
</span>

<!-- Status Indicators -->
<span class="avatar avatar-status">
  <img src="https://i.pravatar.cc/40?img=5" alt="Online User" />
  <span class="avatar-status-dot status-online"></span>
</span>
<span class="avatar avatar-status">
  <img src="https://i.pravatar.cc/40?img=6" alt="Away User" />
  <span class="avatar-status-dot status-away"></span>
</span>

<!-- Interactive States -->
<button class="avatar avatar-button" title="Click me">
  <img src="https://i.pravatar.cc/40?img=7" alt="Clickable Avatar" />
</button>
<a href="#" class="avatar avatar-link" title="Profile Link">
  <img src="https://i.pravatar.cc/40?img=8" alt="Link Avatar" />
</a>

<!-- Colored Variants -->
<span class="avatar avatar-primary">AB</span>
<span class="avatar avatar-success">CD</span>
<span class="avatar avatar-warning">EF</span>
<span class="avatar avatar-error">GH</span>
<span class="avatar avatar-info">IJ</span>

<!-- Loading State -->
<span class="avatar avatar-loading">
  <img src="https://i.pravatar.cc/40?img=9" alt="Loading Avatar" />
</span>

<!-- Avatar Stack -->
<div class="avatar-stack">
  <span class="avatar">
    <img src="https://i.pravatar.cc/40?img=10" alt="User 1" />
  </span>
  <span class="avatar">
    <img src="https://i.pravatar.cc/40?img=11" alt="User 2" />
  </span>
  <span class="avatar">
    <img src="https://i.pravatar.cc/40?img=12" alt="User 3" />
  </span>
  <span class="avatar avatar-count">+5</span>
</div>`;

export default function AvatarPage() {
  return (
    <section>
      <h1>Avatar</h1>
      <p>
        Versatile avatar components for displaying user profile images, initials, or status indicators. 
        Perfect for user lists, comments, team displays, or anywhere you need to represent users visually.
      </p>
      
      <div className="features-list" style={{ margin: "1.5em 0" }}>
        <h3>Features:</h3>
        <ul>
          <li>🖼️ <strong>Image Support:</strong> Automatic image sizing and cropping</li>
          <li>🔤 <strong>Initials Fallback:</strong> Text-based avatars when no image is available</li>
          <li>📏 <strong>Multiple Sizes:</strong> Small, default, large, and extra-large variants</li>
          <li>🎨 <strong>Color Variants:</strong> Primary, success, warning, error, and info themes</li>
          <li>🔵 <strong>Status Indicators:</strong> Online, away, busy, and offline status dots</li>
          <li>🔸 <strong>Shape Variants:</strong> Circle, rounded rectangle, and square options</li>
          <li>🖱️ <strong>Interactive States:</strong> Button and link variants with enhanced hover effects</li>
          <li>👥 <strong>Avatar Stacks:</strong> Display multiple users with overlap effect and count indicators</li>
          <li>⚡ <strong>Loading States:</strong> Shimmer animation for loading placeholders</li>
          <li>♿ <strong>Accessibility:</strong> Proper focus states, ARIA support, and reduced motion compliance</li>
          <li>📱 <strong>Responsive:</strong> Optimized for mobile devices with touch-friendly interactions</li>
          <li>🌙 <strong>Dark Mode:</strong> Automatic dark theme support with proper contrast</li>
        </ul>
      </div>

      <h2>Live Examples</h2>
      <Avatar />

      <h2>Usage</h2>
      <CodeBlock code={avatarCode} language="html" />
      
      <div className="usage-notes" style={{ marginTop: "2em", padding: "1em", background: "#f8f9fa", borderRadius: "8px" }}>
        <h3>Usage Notes:</h3>
        <ul>
          <li><strong>Accessibility:</strong> Always include meaningful alt text for images and title attributes for interactive avatars</li>
          <li><strong>Initials:</strong> Use 1-2 characters for best visual balance</li>
          <li><strong>Image URLs:</strong> Ensure images are square (1:1 aspect ratio) for best results</li>
          <li><strong>Responsive:</strong> Avatar sizes are relative (em-based) and scale with font size</li>
          <li><strong>Status Indicators:</strong> Combine with <code>avatar-status</code> class and appropriate status dot</li>
          <li><strong>Interactive States:</strong> Use <code>avatar-button</code> or <code>avatar-link</code> classes for clickable avatars</li>
          <li><strong>Avatar Stacks:</strong> Wrap multiple avatars in <code>avatar-stack</code> container for overlap effect</li>
          <li><strong>Performance:</strong> Loading states provide visual feedback while images load</li>
        </ul>
      </div>
    </section>
  );
}
