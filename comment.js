const script = document.createElement('script');
script.src = 'https://utteranc.es/client.js';
script.async = true;
script.crossOrigin = 'anonymous';
script.setAttribute('repo', 'liguwe/liguwe.github.io');
script.setAttribute('issue-term', 'pathname');
script.setAttribute('label', 'Comment');
script.setAttribute('theme', 'github-dark');
document.querySelector('#liguwe-comment').appendChild(script);
