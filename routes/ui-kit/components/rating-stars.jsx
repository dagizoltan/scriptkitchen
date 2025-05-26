// Demo page for RatingStars
import RatingStars from '../../../components/ui-kit/RatingStars.jsx';

export default function RatingStarsDemo() {
  return (
    <section>
      <h1>Rating / Stars</h1>
      <p>
        A CSS-only star rating component for displaying and collecting user feedback. Useful for reviews, product ratings, or any scenario where a visual rating is needed.
      </p>
      <RatingStars value={3} max={5} />
      <RatingStars value={5} max={5} />
    </section>
  );
}
