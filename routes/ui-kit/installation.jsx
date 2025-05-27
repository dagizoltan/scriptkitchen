// Installation guide for the UI Kit
import CodeBlock from "../../components/ui-kit/CodeBlock.jsx";

export default function InstallationPage() {
  return (
    <section>
      <h1>Installation</h1>
      <p>
        Get started with the ScriptKitchen CSS UI framework in just a few steps.
      </p>

      <h2>Option 1: Download CSS Files</h2>
      <p>
        Download the compiled CSS files and include them in your project:
      </p>
      <CodeBlock
        language="html"
        code={`<!-- Include the main stylesheet -->
<link rel="stylesheet" href="path/to/scriptkitchen/styles.css" />`}
      />

      <h2>Option 2: Clone Repository</h2>
      <p>
        Clone the repository to customize and build your own version:
      </p>
      <CodeBlock
        language="bash"
        code={`git clone https://github.com/scriptkitchen/ui-framework.git
cd ui-framework`}
      />

      <h2>Option 3: CDN (Coming Soon)</h2>
      <p>
        Use our CDN for quick prototyping (coming soon):
      </p>
      <CodeBlock
        language="html"
        code={`<!-- CDN link (coming soon) -->
<link rel="stylesheet" href="https://cdn.scriptkitchen.com/latest/styles.css" />`}
      />

      <h2>Basic HTML Template</h2>
      <p>
        Here's a basic HTML template to get you started:
      </p>
      <CodeBlock
        language="html"
        code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My ScriptKitchen App</title>
  <link rel="stylesheet" href="path/to/scriptkitchen/styles.css">
</head>
<body>
  <main>
    <h1>Hello, ScriptKitchen!</h1>
    <button className="btn primary">Get Started</button>
  </main>
</body>
</html>`}
      />

      <h2>What's Included</h2>
      <ul>
        <li>Complete CSS framework with 35+ components</li>
        <li>Responsive grid system</li>
        <li>Utility classes</li>
        <li>Dark/light mode support</li>
        <li>Accessibility features</li>
        <li>Custom CSS properties for easy theming</li>
      </ul>

      <p>
        Next, check out the <a href="/ui-kit/usage">Usage</a>{" "}
        guide to learn how to use the components.
      </p>
    </section>
  );
}
