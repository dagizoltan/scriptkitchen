function highlightTokens(code, language) {
  // Use raw code (do NOT escape here!)
  let tokens = [{ text: code, type: null }];

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
          newTokens.push({
            text: token.text.slice(lastIndex),
            type: null,
          });
        }
      }
    });
    tokens = newTokens;
  }

  if (language === "css") {
    splitTokens(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, "comment"); // comments
    splitTokens(/([.#]?[a-zA-Z0-9_-]+)(?=\s*\{)/g, null, { 1: "selector" });
    splitTokens(/([a-z-]+)(?=\s*:)/g, null, { 1: "property" });
    splitTokens(/(:\s*)([^;\n]+)/g, null, { 1: "punctuation", 2: "string" });
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
    splitTokens(/(<!--[\s\S]*?-->)/g, "comment");
    // Tags: <tag ...>
    splitTokens(
      /(<\/?)([a-zA-Z0-9-]+)(.*?)(\/?>)/g,
      null,
      { 1: "punctuation", 2: "tag", 3: null, 4: "punctuation" },
    );
    // Attributes inside tag
    splitTokens(
      /([a-zA-Z-:]+)(=)("[^"]*"|'[^']*')/g,
      null,
      { 1: "property", 2: "operator", 3: "string" },
    );
    // Standalone attribute names (boolean attrs)
    splitTokens(/([a-zA-Z-:]+)/g, "property");
  }

  return tokens.filter((t) => t.text !== "");
}

export default function CodeBlock({ code, language = "html" }) {
  // Tokenize the raw code
  const tokens = highlightTokens(code, language);

  return (
    <pre className={`code-block code-block-${language}`} tabIndex={0}>
      <code className={`language-${language}`}>
        {tokens.map((t, i) => (
          <span
            key={i}
            className={t.type ? `token ${t.type}` : undefined}
          >
            {t.text}
          </span>
        ))}
      </code>
    </pre>
  );
}
