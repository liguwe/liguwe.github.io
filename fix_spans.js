const fs = require('fs');
let content = fs.readFileSync('docs/.vitepress/theme/Layout.vue', 'utf8');

let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<span class="relative z-[1]')) {
        // Only replace if it has border-transparent
        lines[i] = lines[i].replace(/border-transparent/g, 'border-[var(--border)]');
        // Also remove default-border-color if it's there to avoid conflicts
        lines[i] = lines[i].replace(/default-border-color/g, '');
    }
}

// Now we need to hide the fake pseudo-element lines by adding a CSS rule to styles.css
let css = fs.readFileSync('docs/.vitepress/theme/styles.css', 'utf8');
if (!css.includes('.default-border-text-color')) {
    css += '\n/* Hide the fake blurry pseudo-element lines to use crisp 1px borders instead */\n.default-border-text-color {\n  display: none !important;\n}\n';
    fs.writeFileSync('docs/.vitepress/theme/styles.css', css);
}

fs.writeFileSync('docs/.vitepress/theme/Layout.vue', lines.join('\n'));
