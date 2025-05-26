export default function ProgressToastTooltip() {
  return (
    <section class="card">
      <div class="card-header">Progress, Toast, Tooltip, Modal</div>
      <div class="card-body">
        <div class="progress">
          <div class="progress-bar" style="width: 60%"></div>
        </div>
        <div class="toast" style="opacity:1;position:static;">
          This is a toast notification.
        </div>
        <div class="tooltip">
          Hover me<span class="text">Tooltip text</span>
        </div>
        <details>
          <summary>Accordion summary</summary>
          <div>Accordion content goes here.</div>
        </details>
      </div>
    </section>
  );
}
