// Carousel.jsx
// CSS-only carousel shell
export default function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        <div className="carousel-slide active">Slide 1</div>
        <div className="carousel-slide">Slide 2</div>
        <div className="carousel-slide">Slide 3</div>
      </div>
      <button className="carousel-control prev">&#8592;</button>
      <button className="carousel-control next">&#8594;</button>
    </div>
  );
}
