// Helper function to convert markdown bold syntax to HTML
const markdownToHtml = (text) => {
  if (!text) return '';
  
  // Replace **text** with <strong>text</strong>
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
};

export { markdownToHtml };
