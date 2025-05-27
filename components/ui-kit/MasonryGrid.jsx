// MasonryGrid.jsx
// CSS-only masonry/card grid with varied content
export default function MasonryGrid() {
  const items = [
    {
      title: "Beautiful Landscape",
      content:
        "A stunning view of mountains and valleys that stretches across the horizon.",
      category: "Nature",
      height: "tall",
    },
    {
      title: "Quick Tip",
      content: "Remember to save your work frequently!",
      category: "Tips",
      height: "short",
    },
    {
      title: "Recipe: Chocolate Cake",
      content:
        "Ingredients: flour, sugar, cocoa powder, eggs, butter. Mix ingredients, bake at 350°F for 30 minutes. Perfect for celebrations and special occasions.",
      category: "Food",
      height: "medium",
    },
    {
      title: "Code Snippet",
      content: "const greeting = 'Hello World'; console.log(greeting);",
      category: "Code",
      height: "short",
    },
    {
      title: "Travel Guide",
      content:
        "Exploring the ancient streets of Rome, you'll discover hidden gems around every corner. From the Colosseum to the Vatican, there's so much history to absorb. Don't forget to try authentic gelato!",
      category: "Travel",
      height: "tall",
    },
    {
      title: "Design Principles",
      content:
        "Good design is invisible. Focus on user experience and accessibility.",
      category: "Design",
      height: "medium",
    },
    {
      title: "Weather Update",
      content: "Sunny skies ahead with temperatures reaching 75°F.",
      category: "Weather",
      height: "short",
    },
    {
      title: "Book Review",
      content:
        "An incredible journey through time and space. This novel captures the essence of human emotion while exploring complex themes of love, loss, and redemption. Highly recommended for anyone who enjoys thought-provoking literature.",
      category: "Books",
      height: "tall",
    },
  ];

  return (
    <div className="masonry-grid">
      {items.map((item, i) => (
        <div key={i} className={`masonry-item masonry-item-${item.height}`}>
          <div className="masonry-item-category">{item.category}</div>
          <h3 className="masonry-item-title">{item.title}</h3>
          <p className="masonry-item-content">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
