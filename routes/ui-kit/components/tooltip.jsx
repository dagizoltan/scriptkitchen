// Demo page for Tooltip
import Tooltip from '../../../components/ui-kit/Tooltip.jsx';

export default function TooltipDemo() {
  return (
    <section>
      <h1>Tooltip</h1>
      <p>
        Tooltips are small, interactive popups that display informative text when users hover over, focus on, or tap an element. Useful for providing extra context or hints without cluttering the UI.
      </p>
      <p>Hover the button to see the tooltip:</p>
      <Tooltip text="This is a tooltip!">
        <button className="btn" type="button">Hover me</button>
      </Tooltip>
    </section>
  );
}
