import CodeBlock from "../../../components/ui-kit/CodeBlock.jsx";

const cssExample = `/* CSS Example */\n.button {\n  background: var(--primary);\n  color: #fff;\n  border-radius: 0.5em;\n}`;

const jsExample = `// JS Example\nfunction greet(name) {\n  const msg = ` + "`Hello, ${name}!`" + `;\n  return msg;\n}`;

const htmlExample = `<!-- HTML Example -->\n<div class="card">\n  <h2>Title</h2>\n  <p>Hello world!</p>\n</div>`;

export default function CodeBlockDemo() {
  return (
    <section className="card">
      <div className="card-header">CodeBlock Component</div>
      <div className="card-body">
        <p>
          A syntax highlighting code block component supporting CSS, JavaScript, and HTML. Useful for documentation, code samples, and developer guides.
        </p>
        <h3>CSS Highlight</h3>
        <CodeBlock code={cssExample} language="css" />
        <h3>JavaScript Highlight</h3>
        <CodeBlock code={jsExample} language="js" />
        <h3>HTML Highlight</h3>
        <CodeBlock code={htmlExample} language="html" />
      </div>
    </section>
  );
}
