function addComment() {
    try {
        setTimeout(() => {
            const comment = document.querySelector('#liguwe-comment');
            if (comment && comment.innerHTML) return;
            const script = document.createElement('script');
            script.src = 'https://utteranc.es/client.js';
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.setAttribute('repo', 'liguwe/liguwe.github.io');
            script.setAttribute('issue-term', 'pathname');
            script.setAttribute('label', 'Comment');
            script.setAttribute('theme', 'github-dark');
            comment.appendChild(script);
        }, 2000);
    } catch (e) {
        console.log(e);
    }
}

addComment();
const bindEventListener = function (type) {
    const historyEvent = history[type];
    return function () {
        const newEvent = historyEvent.apply(this, arguments);
        const e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return newEvent;
    };
};
history.pushState = bindEventListener('pushState');
history.replaceState = bindEventListener('replaceState');
window.addEventListener('replaceState', function (e) {
    addComment();
});
window.addEventListener('pushState', function (e) {
    addComment();
});
window.addEventListener("popstate", function (event) {
    addComment();
})
