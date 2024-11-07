// src/MarkdownRenderer.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// Import languages you need
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
// Import a theme of your choice
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import './MarkdownRenderer.css';

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("json", json);

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          if (!inline && match) {
            if (match[1] === "json") {
              try {
                const jsonContent = JSON.stringify(
                  JSON.parse(children),
                  null,
                  2
                );
                return (
                  <SyntaxHighlighter
                    style={coy}
                    language="json"
                    PreTag="div"
                    {...props}
                  >
                    {jsonContent}
                  </SyntaxHighlighter>
                );
              } catch (e) {
                // If JSON is invalid, render as is
              }
            }
            return (
              <SyntaxHighlighter
                style={coy}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          } else {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        },
        table({ children }) {
          return (
            <table>
              <tbody>{children}</tbody>
            </table>
          );
        },
        th({ children }) {
          return <th>{children}</th>;
        },
        td({ children }) {
          return <td>{children}</td>;
        },
      }}
    />
  );
};

export default MarkdownRenderer;
