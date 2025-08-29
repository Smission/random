// Helper function to convert markdown to HTML
const markdownToHtml = (text) => {
  if (!text) return '';

  // First, unescape any escaped newlines
  let result = text.replace(/\\n/g, '\n');
  
  // Handle code blocks with language specification
  result = result.replace(/```(?:([a-z]+)\n)?([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || '';
    // Clean up the code by removing escape slashes
    const cleanCode = code
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\')
      .replace(/\\([\\`*_{}\[\]()#+\-.!])/g, '$1')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Split into lines and handle indentation
    const lines = cleanCode.split('\n');
    const formattedLines = lines.map(line => {
      // Replace leading spaces with non-breaking spaces to preserve indentation
      const leadingSpaces = line.match(/^\s*/)[0];
      const content = line.substring(leadingSpaces.length);
      const nbsp = '&nbsp;'.repeat(leadingSpaces.length);
      return nbsp + content;
    });
    
    // Join lines with <br> tags
    const formattedCode = formattedLines.join('<br>');
    
    return `
      <div class="code-block">
        <pre><code class="language-${language}">${formattedCode}</code></pre>
      </div>`;
  });
  
  // Handle headings
  result = result.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  result = result.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  result = result.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');
  
  // Handle bold text
  result = result.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  
  // Handle inline code
  result = result.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Handle lists
  result = result.replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>');
  result = result.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    return `<ul>${match.replace(/\n/g, '')}</ul>`;
  });
  
  // Handle paragraphs
  result = result.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<') && block.endsWith('>')) {
      return block;
    }
    return `<p>${block}</p>`;
  }).join('\n');
  
  // Clean up any double paragraphs
  result = result.replace(/<\/p>\n<p>/g, '\n');
  
  return result;
};

export { markdownToHtml };
