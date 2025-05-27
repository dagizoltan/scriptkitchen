export default function ProgressToastTooltip() {
  return (
    <div>
      <div className="progress">
        <div className="progress-bar" style="width: 60%"></div>
      </div>
      <div className="toast" style="opacity:1;position:static;">
        This is a toast notification.
      </div>
      <div className="tooltip">
        Hover me<span className="text">Tooltip text</span>
      </div>
      <details>
        <summary>Accordion summary</summary>
        <div>Accordion content goes here.</div>
      </details>
    </div>
  );
}
