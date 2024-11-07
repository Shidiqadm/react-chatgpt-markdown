# react-chatgpt-markdown

**react-chatgpt-markdown** is a React component that renders Markdown content with styling similar to the ChatGPT interface. It supports advanced Markdown features such as tables, syntax-highlighted code snippets, and JSON formatting, providing an enhanced user experience for chat applications and other projects requiring rich text rendering.

[![npm version](https://badge.fury.io/js/react-chatgpt-markdown.svg)](https://badge.fury.io/js/react-chatgpt-markdown)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Table of Contents

- [react-chatgpt-markdown](#react-chatgpt-markdown)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Example Usage](#example-usage)
    - [1. Basic Rendering](#1-basic-rendering)
    - [2. Rendering in a Chat Application](#2-rendering-in-a-chat-application)
    - [3. Handling Code Snippets and Tables](#3-handling-code-snippets-and-tables)
  - [API Reference](#api-reference)
    - [MarkdownRenderer](#markdownrenderer)
  - [Customization](#customization)
    - [Styling](#styling)
      - [Override CSS Classes](#override-css-classes)
      - [Using Styled Components](#using-styled-components)
    - [Syntax Highlighting](#syntax-highlighting)
      - [Changing the Theme](#changing-the-theme)
      - [Adding Languages](#adding-languages)
    - [Supported Languages](#supported-languages)
  - [Best Practices](#best-practices)
  - [Common Issues](#common-issues)
    - [1. CSS Not Applying](#1-css-not-applying)
    - [2. Syntax Highlighting Not Working](#2-syntax-highlighting-not-working)
    - [3. Module Resolution Errors](#3-module-resolution-errors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)
  - [Additional Information](#additional-information)
    - [Peer Dependencies](#peer-dependencies)
    - [Including TypeScript Definitions (Optional)](#including-typescript-definitions-optional)
  - [Contact](#contact)

---

## Introduction

**react-chatgpt-markdown** is designed to seamlessly render Markdown content in React applications with a focus on chat interfaces. By mimicking the ChatGPT styling, it provides a familiar and user-friendly way to display rich text responses, making it ideal for AI-based chat applications, documentation tools, and any project that requires Markdown rendering with advanced features.

## Features

- **ChatGPT Styling**: Provides a UI that resembles the ChatGPT interface.
- **Markdown Rendering**: Converts Markdown content into React components.
- **Tables Support**: Renders tables with proper styling and formatting.
- **Syntax Highlighted Code Blocks**: Supports syntax highlighting for code snippets in various programming languages.
- **JSON Formatting**: Automatically formats and highlights JSON code blocks.
- **GitHub Flavored Markdown (GFM)**: Supports GFM features like strikethrough, task lists, and tables.
- **Customizable**: Easily adjust styling and functionality to suit your application's needs.

## Installation

Install the package using npm:

```bash
npm install react-chatgpt-markdown
```

Ensure that you have `react` and `react-dom` installed as they are peer dependencies:

```bash
npm install react react-dom
```

## Quick Start

Here's a minimal example to get you started:

```jsx
import React from 'react';
import MarkdownRenderer from 'react-chatgpt-markdown';

const markdownContent = `
# Hello, World!

This is a **Markdown** message rendered with *ChatGPT* styling.

## Code Snippet

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
`;

const App = () => {
  return <MarkdownRenderer content={markdownContent} />;
};

export default App;
```

## Example Usage

### 1. Basic Rendering

Render simple Markdown content:

```jsx
import React from 'react';
import MarkdownRenderer from 'react-chatgpt-markdown';

const markdownContent = `
# Welcome!

This is a simple markdown message.

- Item 1
- Item 2
`;

const BasicExample = () => {
  return <MarkdownRenderer content={markdownContent} />;
};

export default BasicExample;
```

### 2. Rendering in a Chat Application

Integrate `MarkdownRenderer` into a chat application to display messages:

```jsx
import React from 'react';
import MarkdownRenderer from 'react-chatgpt-markdown';

const ChatMessage = ({ message, isBot }) => {
  return (
    <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
      <MarkdownRenderer content={message} />
    </div>
  );
};

export default ChatMessage;
```

### 3. Handling Code Snippets and Tables

Render code snippets with syntax highlighting and tables:

```jsx
import React from 'react';
import MarkdownRenderer from 'react-chatgpt-markdown';

const markdownContent = `
## Code Example

\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

## Data Table

| Name    | Age |
|---------|-----|
| Alice   | 25  |
| Bob     | 30  |
`;

const AdvancedExample = () => {
  return <MarkdownRenderer content={markdownContent} />;
};

export default AdvancedExample;
```

## API Reference

### MarkdownRenderer

**Props:**

| Prop      | Type   | Required | Description                               |
|-----------|--------|----------|-------------------------------------------|
| `content` | string | Yes      | The Markdown content to be rendered.      |

**Usage:**

```jsx
<MarkdownRenderer content={markdownContent} />
```

## Customization

### Styling

The component comes with default styles to mimic the ChatGPT interface. You can customize the styles in several ways:

#### Override CSS Classes

Each element has class names assigned. You can override these styles in your CSS file:

```css
/* Override code block styling */
.markdown-renderer pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
}

/* Override table styling */
.markdown-renderer table {
  border: 1px solid #ccc;
}
```

#### Using Styled Components

If you're using `styled-components`, you can wrap the `MarkdownRenderer`:

```jsx
import styled from 'styled-components';
import MarkdownRenderer from 'react-chatgpt-markdown';

const CustomMarkdownRenderer = styled(MarkdownRenderer)`
  /* Custom styles here */
`;

const App = () => {
  return <CustomMarkdownRenderer content={markdownContent} />;
};
```

### Syntax Highlighting

The component uses `react-syntax-highlighter` for code blocks.

#### Changing the Theme

To change the syntax highlighting theme:

```jsx
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

<SyntaxHighlighter style={materialOceanic} language={language}>
  {code}
</SyntaxHighlighter>;
```

#### Adding Languages

By default, only JavaScript and JSON are registered. To add more languages:

```jsx
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';

SyntaxHighlighter.registerLanguage('python', python);
```

### Supported Languages

You can add support for more languages as needed. Available languages can be found in the [`react-syntax-highlighter`](https://github.com/react-syntax-highlighter/react-syntax-highlighter) documentation.

## Best Practices

- **Memoization**: If rendering large amounts of content, consider using `React.memo` to prevent unnecessary re-renders.
- **Security**: By default, the component does not sanitize HTML content. Avoid rendering untrusted Markdown content to prevent XSS attacks.
- **Performance**: Limit the amount of content rendered at once. For chat applications, consider virtualizing the message list.

## Common Issues

### 1. CSS Not Applying

Ensure that your bundler handles CSS imports from `node_modules`. If you're using Webpack or Create React App, this should work by default.

### 2. Syntax Highlighting Not Working

Make sure you've registered the language you want to highlight:

```jsx
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';

SyntaxHighlighter.registerLanguage('java', java);
```

### 3. Module Resolution Errors

If you encounter module resolution errors (e.g., with Vite), ensure that:

- The package is properly built and includes the `dist` directory.
- The `main` and `module` fields in `package.json` point to the correct files.
- Your application supports ES modules.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **[react-markdown](https://github.com/remarkjs/react-markdown)**: For rendering Markdown.
- **[react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)**: For syntax highlighting.
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)**: For GitHub Flavored Markdown support.

---

## Additional Information

### Peer Dependencies

The package has peer dependencies on `react` and `react-dom`. Ensure they are installed in your project.

### Including TypeScript Definitions (Optional)

If you want to add TypeScript support:

1. **Install TypeScript**

   ```bash
   npm install --save-dev typescript @types/react
   ```

2. **Add Type Definitions**

   Create an `index.d.ts` file with type definitions.

3. **Update `package.json`**

   ```json
   "types": "dist/index.d.ts",
   ```

## Contact

For any questions or support, please contact [Shidiq Ahmed](mailto:shidiqadm@gmail.com).

---