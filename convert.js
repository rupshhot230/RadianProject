const fs = require('fs');

let html = fs.readFileSync('raw.html', 'utf8');

// Replace class with className
html = html.replace(/class=/g, 'className=');

// Replace inline styles
html = html.replace(/style="([^"]*)"/g, (match, styles) => {
    const styleObj = {};
    styles.split(';').forEach(style => {
        if (!style.trim()) return;
        let [key, value] = style.split(':').map(s => s.trim());
        if (!key || !value) return;
        
        // Convert kebab-case to camelCase
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        
        // Handle numbers vs strings
        if (!isNaN(value) && value !== '') {
            value = Number(value);
        } else {
            value = `'${value.replace(/'/g, "\\'")}'`;
        }
        
        styleObj[key] = value;
    });
    
    const styleString = Object.entries(styleObj)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ');
        
    return `style={{ ${styleString} }}`;
});

// Replace self-closing tags
html = html.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
html = html.replace(/<br>/g, '<br />');

// Replace SVG and boolean attributes
html = html.replace(/playsinline=""/g, 'playsInline');
html = html.replace(/webkit-playsinline=""/g, 'webKitPlaysInline');
html = html.replace(/muted=""/g, 'muted');
html = html.replace(/stroke-width/g, 'strokeWidth');
html = html.replace(/stroke-miterlimit/g, 'strokeMiterlimit');
html = html.replace(/xml:space/g, 'xmlSpace');
html = html.replace(/xmlns:xlink/g, 'xmlnsXlink');
html = html.replace(/enable-background/g, 'enableBackground');
html = html.replace(/srcset=/g, 'srcSet=');

// Create the final component
const component = `import React from 'react';
import './App.css';

function App() {
  return (
    <>
${html}
    </>
  );
}

export default App;
`;

fs.writeFileSync('src/App.jsx', component);
console.log('Conversion complete');
