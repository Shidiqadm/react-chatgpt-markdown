var _excluded = ["node", "inline", "className", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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
var MarkdownRenderer = function MarkdownRenderer(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/React.createElement(ReactMarkdown, {
    children: content,
    remarkPlugins: [remarkGfm],
    components: {
      code: function code(_ref2) {
        var node = _ref2.node,
          inline = _ref2.inline,
          className = _ref2.className,
          children = _ref2.children,
          props = _objectWithoutProperties(_ref2, _excluded);
        var match = /language-(\w+)/.exec(className || "");
        if (!inline && match) {
          if (match[1] === "json") {
            try {
              var jsonContent = JSON.stringify(JSON.parse(children), null, 2);
              return /*#__PURE__*/React.createElement(SyntaxHighlighter, _extends({
                style: coy,
                language: "json",
                PreTag: "div"
              }, props), jsonContent);
            } catch (e) {
              // If JSON is invalid, render as is
            }
          }
          return /*#__PURE__*/React.createElement(SyntaxHighlighter, _extends({
            style: coy,
            language: match[1],
            PreTag: "div"
          }, props), String(children).replace(/\n$/, ""));
        } else {
          return /*#__PURE__*/React.createElement("code", _extends({
            className: className
          }, props), children);
        }
      },
      table: function table(_ref3) {
        var children = _ref3.children;
        return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, children));
      },
      th: function th(_ref4) {
        var children = _ref4.children;
        return /*#__PURE__*/React.createElement("th", null, children);
      },
      td: function td(_ref5) {
        var children = _ref5.children;
        return /*#__PURE__*/React.createElement("td", null, children);
      }
    }
  });
};
export default MarkdownRenderer;