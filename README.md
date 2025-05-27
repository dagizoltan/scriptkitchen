# ScriptKitchen - Modern CSS UI Framework

[![Deno](https://img.shields.io/badge/deno-ready-brightgreen.svg)](https://deno.dev)
[![CSS](https://img.shields.io/badge/CSS-only-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Accessibility](https://img.shields.io/badge/A11y-compliant-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

A modern, modular, CSS-only UI component library for building beautiful,
accessible web interfaces. Built with Fresh and Deno.

## ✨ Features

- 🧩 **35+ UI Components** - Buttons, cards, forms, navigation, and more
- 🎨 **CSS-Only** - No JavaScript dependencies, works everywhere
- ♿ **Accessible** - WCAG 2.1 compliant with proper ARIA support
- 📱 **Responsive** - Mobile-first design with flexible layouts
- 🎭 **Themeable** - CSS custom properties for easy customization
- ⚡ **Performant** - Minimal CSS, optimized for production
- 🛠️ **Developer Friendly** - Well-documented with live examples

## 🚀 Quick Start

### Prerequisites

- [Deno](https://docs.deno.com/runtime/getting_started/installation) v1.40+

### Installation

```bash
git clone https://github.com/your-username/scriptkitchen.git
cd scriptkitchen
```

### Development

```bash
# Start development server
deno task dev

# Run code quality checks
deno task check

# Check CSS file sizes
deno task css:check
```

The development server will start at `http://localhost:8000` with hot reloading.

## 📚 Documentation

Visit the [live documentation](http://localhost:8000/ui-kit) to explore all
components with:

- Interactive demos
- Copy-paste HTML examples
- Customization guides
- Accessibility notes

## 🎯 Component Categories

### Layout & Navigation

- Grid system and flex utilities
- Navigation bars and menus
- Breadcrumbs and tabs
- Sidebar and drawer

### Content & Media

- Cards and panels
- Typography and text utilities
- Images and avatars
- Dividers and separators

### Forms & Input

- Text inputs and textareas
- Select dropdowns
- Checkboxes and radio buttons
- Form validation styles

### Feedback & Status

- Alert messages
- Progress bars and spinners
- Tooltips and popovers
- Toast notifications

### Interactive Elements

- Buttons and badges
- Dropdown menus
- Accordions and tabs
- Carousels and modals

## 🎨 Customization

The framework uses CSS custom properties for easy theming:

```css
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --error: #e74c3c;
  --warning: #f39c12;
  --info: #17a2b8;
  --success: #28a745;

  --radius: 8px;
  --shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --transition: all 0.2s ease;
}
```

## 📁 Project Structure

```
scriptkitchen/
├── components/ui-kit/     # React components for demos
├── routes/ui-kit/         # Fresh routes for documentation
├── static/css/           # CSS framework files
│   ├── _components/      # Individual component styles
│   ├── _custom/          # Custom theme overrides
│   └── styles.css        # Main CSS bundle
├── islands/              # Interactive Preact islands
└── docs/                 # Additional documentation
```

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Make your changes
4. Run quality checks (`deno task check`)
5. Commit your changes (`git commit -am 'Add amazing component'`)
6. Push to the branch (`git push origin feature/amazing-component`)
7. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

## 🙏 Acknowledgments

- [Fresh](https://fresh.deno.dev/) - The web framework
- [Deno](https://deno.dev/) - The runtime
- [Bootstrap](https://getbootstrap.com/) - Design inspiration
- [Tailwind CSS](https://tailwindcss.com/) - Utility class concepts
