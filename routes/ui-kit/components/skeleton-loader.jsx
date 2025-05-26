// Demo page for SkeletonLoader
import SkeletonLoader from '../../../components/ui-kit/SkeletonLoader.jsx';

export default function SkeletonLoaderDemo() {
  return (
    <section>
      <h1>Skeleton Loader</h1>
      <p>
        A CSS-only skeleton loader for indicating loading state. Useful for improving perceived performance by showing animated placeholders while content is loading.
      </p>
      <SkeletonLoader width="200px" height="1.5em" />
      <SkeletonLoader width="100%" height="2em" style={{ margin: '1em 0' }} />
    </section>
  );
}
