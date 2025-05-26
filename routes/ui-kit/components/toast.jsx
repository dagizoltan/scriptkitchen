// Demo page for Toast
import Toast from '../../../components/ui-kit/Toast.jsx';

export default function ToastDemo() {
  return (
    <section>
      <h1>Toast</h1>
      <p>
        Toasts are small, unobtrusive notifications that appear temporarily to inform users of a process or event. Includes styles for info, success, warning, and error states.
      </p>
      <Toast message="This is an info toast!" type="info" />
      <Toast message="This is a success toast!" type="success" />
      <Toast message="This is a warning toast!" type="warning" />
      <Toast message="This is an error toast!" type="error" />
    </section>
  );
}
