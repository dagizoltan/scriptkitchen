import Spinner from "../../components/ui-kit/Spinner.jsx";
export default function SpinnerPage() {
  return (
    <section>
      <h1>Spinner</h1>
      <p>
        A comprehensive CSS-only loading spinner system with multiple variants and animations. 
        Features include size options (xs, sm, md, lg, xl), color themes (primary, success, 
        warning, danger, white, dark), animation styles (spin, dots, pulse, grow), and 
        accessibility support. Perfect for form submissions, data loading, button states, 
        and any loading indicators. Includes overlay spinners, text integration, and 
        proper screen reader support with reduced motion preferences.
      </p>
      <Spinner />
    </section>
  );
}
