export default function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Modern, modular, CSS-only component library for building beautiful, accessible web interfaces"
        />
        <meta
          name="keywords"
          content="CSS framework, UI components, web design, HTML, CSS"
        />
        <meta name="author" content="scriptkitchen" />
        <title>ScriptKitchen - Modern CSS UI Framework</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
