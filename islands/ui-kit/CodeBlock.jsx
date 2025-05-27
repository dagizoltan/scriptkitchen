// CodeBlock.jsx
// SSR-safe: highlight code using regex and render as React elements (no dangerouslySetInnerHTML)
function highlightTokens(code, language) {
  // Escape HTML entities
  code = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
    />/g,
    "&gt;",
  );
  let tokens = [{ text: code, type: null }];

  // Helper: split tokens by regex, assign type
  function splitTokens(regex, type, groupMap) {
    const newTokens = [];
    tokens.forEach((token) => {
      if (token.type) {
        newTokens.push(token);
      } else {
        let lastIndex = 0;
        let match;
        while ((match = regex.exec(token.text)) !== null) {
          if (match.index > lastIndex) {
            newTokens.push({
              text: token.text.slice(lastIndex, match.index),
              type: null,
            });
          }
          if (groupMap) {
            for (let i = 1; i < match.length; i++) {
              if (groupMap[i]) {
                newTokens.push({ text: match[i], type: groupMap[i] });
              }
            }
          } else {
            newTokens.push({ text: match[0], type });
          }
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < token.text.length) {
          newTokens.push({ text: token.text.slice(lastIndex), type: null });
        }
      }
    });
    tokens = newTokens;
  }

  if (language === "css") {
    splitTokens(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, "comment"); // comments
    splitTokens(/([.#]?[a-zA-Z0-9_-]+)(?=\s*\{)/g, null, { 1: "selector" }); // selectors
    splitTokens(/([a-z-]+)(?=\s*:)/g, null, { 1: "property" }); // properties
    splitTokens(/(:\s*)([^;\n]+)/g, null, { 1: "punctuation", 2: "string" }); // values
    splitTokens(/(;)/g, "punctuation"); // semicolons
    splitTokens(/(\{|\})/g, "punctuation"); // braces
  } else if (language === "js" || language === "javascript") {
    splitTokens(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, "comment"); // comments
    splitTokens(/("[^"]*"|'[^']*'|`[^`]*`)/g, "string"); // strings
    splitTokens(
      /\b(function|return|const|let|var|if|else|for|while|import|from|export|default|class|new|extends|super|this|throw|catch|try|await|async|typeof|in|of)\b/g,
      "keyword",
    ); // keywords
    splitTokens(/\b([0-9]+)\b/g, null, { 1: "number" }); // numbers
    splitTokens(/([{}()[\];,.])/g, "punctuation"); // punctuation
    splitTokens(/([=+\-*/%<>!&|^~]+)/g, "operator"); // operators
    splitTokens(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g, null, { 1: "variable" }); // variables (fallback)
  } else if (language === "html") {
    // Comments
    splitTokens(/(&lt;!--[\s\S]*?--&gt;)/g, "comment");
    // Tags: <tag ...>
    splitTokens(/(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(\/?&gt;)/g, null, {
      1: "punctuation",
      2: "tag",
      3: null,
      4: "punctuation",
    });
    // Attributes inside tag
    splitTokens(/([a-zA-Z-:]+)(=)("[^"]*"|'[^']*')/g, null, {
      1: "property",
      2: "operator",
      3: "string",
    });
    // Standalone attribute names (boolean attrs)
    splitTokens(/([a-zA-Z-:]+)/g, "property");
  }
  return tokens.filter((t) => t.text !== "");
}

export default function CodeBlock({ code, language = "css" }) {
  const tokens = highlightTokens(code, language);
  return (
    <pre className={`code-block code-block-${language}`} tabIndex={0}>
      <code className={`language-${language}`}>{
        tokens.map((t, i) => t.type ? <span key={i} className={`token ${t.type}`}>{t.text}</span> : t.text)
      }</code>
    </pre>
  );
}
