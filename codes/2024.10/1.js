// 客户端组件渲染

import marked from 'marked'; // 35.9K (11.2K gzipped)
import sanitizeHtml from 'sanitize-html'; // 206K (63.3K gzipped)

function NoteWithMarkdown({text}) {
  const html = sanitizeHtml(marked(text));
  return (/* 渲染 */);
}


// 服务器组件渲染

import marked from 'marked'; // 零打包大小
import sanitizeHtml from 'sanitize-html'; // 零打包大小

function NoteWithMarkdown({text}) {
  // 与之前相同
}
