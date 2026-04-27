const fs = require('fs');
let content = fs.readFileSync('docs/.vitepress/theme/Layout.vue', 'utf8');

// 1. Remove all the fake vertical lines pseudo-elements
content = content.replace(/<div class="default-border-text-color pointer-events-none absolute top-0 [^>]+>\s*<div class="absolute top-0 bottom-0 left-1\/2 flex w-px -translate-x-1\/2 flex-col">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '');
// The above regex might fail if there are different tags. Let's use a simpler one.
// Notice that the block is always <div class="default-border-text-color ..."> ... </div>
// and it's inside a <span>...</span>

content = content.replace(/\s*<div class="default-border-text-color[^>]*>[\s\S]*?<\/div>\s*<\/div>/g, '');

// 2. Replace border-transparent with border-[var(--border)] in all the spans that used to hold these
// Actually, let's just do a global replace of border-transparent with border-[var(--border)] on the spans that have border-x, border-l, border-r
content = content.replace(/border-transparent/g, 'border-[var(--border)]');

fs.writeFileSync('docs/.vitepress/theme/Layout.vue', content);
