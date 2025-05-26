// Demo page for TimePicker
import TimePicker from '../../../components/ui-kit/TimePicker.jsx';

export default function TimePickerDemo() {
  return (
    <section>
      <h1>Time Picker</h1>
      <p>
        A simple, accessible time input component styled to match the UI kit. Useful for selecting a time value in forms or settings. Uses the native HTML <code>&lt;input type="time"&gt;</code> for best browser compatibility and accessibility.
      </p>
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <TimePicker />
      </div>
    </section>
  );
}
