// Helper function to convert markdown to HTML
const markdownToHtml = (text) => {
  if (!text) return '';

  // First, unescape any escaped newlines
  let result = text.replace(/\\n/g, '\n');
  
  // Handle code blocks with language specification
  result = result.replace(/```(?:([a-z]+)\n)?([\s\S]*?)```/g, (match, lang, code) => {
    const language = lang || '';
    // Preserve all line breaks and indentation
    const formattedCode = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/\n/g, '<br>')  // Convert newlines to <br> tags
      .replace(/ /g, '&nbsp;'); // Convert spaces to non-breaking spaces
    
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
