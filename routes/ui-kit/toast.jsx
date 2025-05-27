// Demo page for Toast
import Toast from "../../components/ui-kit/Toast.jsx";

export default function ToastDemo() {
  return (
    <section>
      <h1>Toast</h1>
      <p>
        A comprehensive toast notification system with multiple variants and interactive features. 
        Includes message types (info, success, warning, error), size options (small, regular, large), 
        theme variants (dark, light), positioning options (top/bottom + left/center/right), and 
        enhanced features like titles, action buttons, close buttons, progress indicators, and 
        auto-dismiss functionality. Perfect for user feedback, system notifications, form responses, 
        and any temporary messaging needs. Fully accessible with proper ARIA attributes and 
        responsive design.
      </p>
      <Toast />
    </section>
  );
}
