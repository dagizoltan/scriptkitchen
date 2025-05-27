// Comprehensive Carousel component with multiple variants and features

// CSS-only, accessible, auto-play Carousel
export default function Carousel() {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">CSS-Only Auto-play Carousel</h3>
      <div className="carousel carousel--autoplay">
        {/* Hidden radio inputs for each slide */}
        <input type="radio" name="carousel-autoplay" id="carousel-slide-1" className="carousel-radio" defaultChecked />
        <input type="radio" name="carousel-autoplay" id="carousel-slide-2" className="carousel-radio" />
        <input type="radio" name="carousel-autoplay" id="carousel-slide-3" className="carousel-radio" />
        <div className="carousel-inner">
          <div className="carousel-track">
            <div className="carousel-slide">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Slide 1</h3>
                <p>Auto-advancing slide content</p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Slide 2</h3>
                <p>Automatically transitions every 5 seconds</p>
              </div>
            </div>
            <div className="carousel-slide">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Slide 3</h3>
                <p>Pause on hover for better user experience</p>
              </div>
            </div>
          </div>
          {/* Controls as labels for radio inputs */}
          <label htmlFor="carousel-slide-3" className="carousel-controls prev" aria-label="Previous slide">&#8249;</label>
          <label htmlFor="carousel-slide-2" className="carousel-controls prev" aria-label="Previous slide" style={{display: 'none'}}></label>
          <label htmlFor="carousel-slide-1" className="carousel-controls prev" aria-label="Previous slide" style={{display: 'none'}}></label>
          <label htmlFor="carousel-slide-2" className="carousel-controls next" aria-label="Next slide">&#8250;</label>
          <label htmlFor="carousel-slide-3" className="carousel-controls next" aria-label="Next slide" style={{display: 'none'}}></label>
          <label htmlFor="carousel-slide-1" className="carousel-controls next" aria-label="Next slide" style={{display: 'none'}}></label>
          {/* Indicators */}
          <div className="carousel-indicators">
            <label htmlFor="carousel-slide-1" className="carousel-indicator" aria-label="Go to slide 1"></label>
            <label htmlFor="carousel-slide-2" className="carousel-indicator" aria-label="Go to slide 2"></label>
            <label htmlFor="carousel-slide-3" className="carousel-indicator" aria-label="Go to slide 3"></label>
          </div>
        </div>
      </div>
    </section>
  );
}
