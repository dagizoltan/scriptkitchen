// Demo page for ProgressBar
import ProgressBar from "../../components/ui-kit/ProgressBar.jsx";

export default function ProgressBarDemo() {
  return (
    <section>
      <h1>Progress Bar</h1>
      <p>
        A visual indicator of progress for a particular process or task. Useful
        for showing upload, download, or completion status in a clear and
        accessible way.
      </p>
      <ProgressBar value={60} max={100} />
      <ProgressBar value={90} max={100} />
    </section>
  );
}
