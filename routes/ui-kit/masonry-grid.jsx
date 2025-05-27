// Demo page for MasonryGrid
import MasonryGrid from "../../components/ui-kit/MasonryGrid.jsx";

export default function MasonryGridDemo() {
  return (
    <section>
      <h1>Masonry / Card Grid</h1>
      <p>
        A responsive CSS-only masonry grid layout for displaying cards or items
        in a Pinterest-style, multi-column format. Perfect for galleries,
        portfolios, blogs, or any content that benefits from a dynamic,
        space-efficient layout.
      </p>

      <div
        className="component-info"
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          backgroundColor: "var(--surface-variant, #f5f5f5)",
          borderRadius: "8px",
        }}
      >
        <h3>Features:</h3>
        <ul>
          <li>
            📱 <strong>Responsive:</strong>{" "}
            Adapts from 3 columns to 1 column on mobile
          </li>
          <li>
            🎨 <strong>CSS Variables:</strong> Themeable with your design system
          </li>
          <li>
            ♿ <strong>Accessible:</strong>{" "}
            Proper focus states and contrast support
          </li>
          <li>
            ⚡ <strong>Performance:</strong> CSS-only, no JavaScript required
          </li>
          <li>
            🔧 <strong>Flexible:</strong>{" "}
            Different content heights create natural masonry effect
          </li>
        </ul>
      </div>

      <MasonryGrid />

      <div
        className="usage-example"
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "var(--surface-variant, #f5f5f5)",
          borderRadius: "8px",
        }}
      >
        <h3>Usage Tips:</h3>
        <ul>
          <li>Items automatically break to avoid splitting across columns</li>
          <li>Hover effects provide visual feedback</li>
          <li>Categories help organize different types of content</li>
          <li>Varying heights create an organic, Pinterest-like layout</li>
        </ul>
      </div>
    </section>
  );
}
