// Demo page for Carousel component
import Carousel from "../../components/ui-kit/Carousel.jsx";
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

const basicCarouselExample = `<div className="carousel">
  <div className="carousel-inner">
    <div className="carousel-track">
      <div className="carousel-slide active">
        <div className="p-8">
          <h3>Slide 1</h3>
          <p>Your content here</p>
        </div>
      </div>
      <div className="carousel-slide">
        <div className="p-8">
          <h3>Slide 2</h3>
          <p>More content here</p>
        </div>
      </div>
    </div>
    <button className="carousel-controls prev" type="button" aria-label="Previous">‹</button>
    <button className="carousel-controls next" type="button" aria-label="Next">›</button>
    <div className="carousel-indicators">
      <button className="carousel-indicator active" aria-label="Slide 1"></button>
      <button className="carousel-indicator" aria-label="Slide 2"></button>
    </div>
  </div>
</div>`;

const imageCarouselExample = `<div className="carousel carousel--rounded">
  <div className="carousel-inner">
    <div className="carousel-track">
      <div className="carousel-slide active">
        <img src="image1.jpg" alt="Description" />
        <div className="carousel-slide-content">
          <h3>Image Title</h3>
          <p>Image description text</p>
          <button className="btn btn--sm">Learn More</button>
        </div>
      </div>
    </div>
    <button className="carousel-controls prev" type="button">‹</button>
    <button className="carousel-controls next" type="button">›</button>
  </div>
</div>`;

const sizeVariantsExample = `<!-- Small Carousel -->
<div className="carousel carousel--sm">
  <div className="carousel-inner">
    <!-- slides -->
  </div>
</div>

<!-- Large Carousel -->
<div className="carousel carousel--lg">
  <div className="carousel-inner">
    <!-- slides -->
  </div>
</div>`;

export default function CarouselDemo() {
  return (
    <section>
      <h1>Carousel</h1>
      <p>
        A comprehensive image and content carousel component with multiple size variants, 
        smooth transitions, auto-play functionality, and full responsive design. Perfect 
        for image galleries, featured content, testimonials, and any scenario where you 
        want to showcase multiple items in an engaging, space-efficient manner.
      </p>

      <Carousel />

      <div className="space-y-8 mt-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Basic Usage</h3>
          <CodeBlock code={basicCarouselExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Image Carousel</h3>
          <CodeBlock code={imageCarouselExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Size Variants</h3>
          <CodeBlock code={sizeVariantsExample} language="html" />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Available Classes</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Base:</strong> <code>.carousel</code></p>
            <p><strong>Sizes:</strong> <code>.carousel--sm</code>, <code>.carousel--lg</code></p>
            <p><strong>Styles:</strong> <code>.carousel--rounded</code>, <code>.carousel--no-shadow</code>, <code>.carousel--elevated</code>, <code>.carousel--fade</code>, <code>.carousel--fullscreen</code></p>
            <p><strong>Structure:</strong> <code>.carousel-inner</code>, <code>.carousel-track</code>, <code>.carousel-slide</code></p>
            <p><strong>Controls:</strong> <code>.carousel-controls</code>, <code>.carousel-indicators</code>, <code>.carousel-indicator</code></p>
            <p><strong>Content:</strong> <code>.carousel-slide-content</code>, <code>.carousel-caption</code></p>
            <p><strong>Thumbnails:</strong> <code>.carousel-thumbnails</code>, <code>.carousel-thumbnail</code></p>
            <p><strong>Indicators:</strong> <code>.carousel-indicators--dots</code>, <code>.carousel-indicators--bars</code></p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-1 text-sm">
            <li>• Multiple size variants (small, regular, large)</li>
            <li>• Image carousel with overlay content</li>
            <li>• Card-based carousel layouts</li>
            <li>• Thumbnail navigation support</li>
            <li>• Auto-play functionality with progress indicators</li>
            <li>• Fade and slide transition effects</li>
            <li>• Fullscreen carousel mode</li>
            <li>• Touch/swipe gesture support (mobile)</li>
            <li>• Keyboard navigation accessibility</li>
            <li>• Reduced motion preference support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
