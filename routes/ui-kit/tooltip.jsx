// Demo page for Tooltip
import Tooltip from "../../components/ui-kit/Tooltip.jsx";

export default function TooltipDemo() {
  return (
    <section>
      <h1>Tooltip</h1>
      <p>
        A comprehensive CSS-only tooltip system with multiple positioning options and interactive features. 
        Includes positioning variants (top, bottom, left, right), color themes (default, light, primary, 
        success, warning, error), size options (small, regular, large), animation styles (fade, slide), 
        and advanced features like rich content, interactive tooltips, arrow variants, and always-visible 
        modes. Perfect for form help text, icon explanations, status indicators, and contextual information. 
        Fully responsive with accessibility support and proper focus management.
      </p>
      <Tooltip />
    </section>
  );
}
