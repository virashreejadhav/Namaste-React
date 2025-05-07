## Episode 01 - Inception

1.  **What is a CDN and why do we use it?**

- A CDN, or Content Delivery Network, is a geographically distributed network of servers that delivers static assets like JavaScript, CSS, images, or videos to users based on their location.
- Instead of loading these resources directly from the origin server every time, a CDN caches them across multiple edge servers around the world. So, when a user visits a website, the content is served from the server closest to their location, which significantly reduces latency and load time.

### We use CDNs for several key reasons:

- **Performance**: Faster delivery of assets improves page load time and user experience.
- **Scalability**: CDNs handle high traffic more efficiently without overloading the main server.
- **Reliability**: If one server fails, others can serve the content, increasing availability.
- **Bandwidth Efficiency**: Since content is cached, it reduces the number of requests to the main server.
- **Security**: Many CDNs offer protection against DDoS attacks and support for HTTPS.
- For example, we often use a CDN to load libraries like React or Bootstrap by injecting it in an html file:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```

2. **What is crossorigin and why do we use it in React CDN ?**

- The crossorigin attribute in the <script> tag is used to handle Cross-Origin Resource Sharing (CORS) when we’re loading external resources, like a React CDN.
- When we load React from a CDN (which is a different domain), the browser treats it as a cross-origin request. The crossorigin attribute tells the browser how to handle credentials (cookies, HTTP authentication) and whether to make a CORS request.
- **crossorigin** ensures that when we fetch React or other libraries from a CDN, we comply with CORS policies and allow the browser to securely verify the resource, especially when using integrity checks.

```html
<script
  src="https://unpkg.com/react@18/umd/react.production.min.js"
  integrity="sha384-xxxxx"
  crossorigin="anonymous">
</script>
```

3. **What is difference between `react.development.js` and `react.production.js` files via CDN?**

   **React.development.js**

- This file is the core of React.
- This file contains the whole code of React which is written in
  JavaScript.

  **React-dom.development.js**

- Using this file, React interacts with the browser DOM.

4.  **What is Emmet ?**

- Emmet is a developer tool and plugin available in most code editors (like VS Code, Sublime Text, etc.) that helps you write HTML and CSS faster using abbreviations or shorthand syntax.

5.  **What is the difference between a framework and a library ?**

The main difference lies in who controls the flow of the application — you or the tool.

- A `library` is a collection of pre-written functions or utilities that you call when needed. You stay in control of the application flow.
  **Example:** React is a library — you decide when and where to use components or hooks.
- A `framework` provides a complete structure and dictates how your code should be written and organized. It calls your code at the right time.
  **Example:** Angular is a framework — it defines the project structure, handles routing, and controls the entire flow.

### 🔹 Simple analogy:

- Using a library is like hiring a helper — you tell them what to do.
- Using a framework is like joining the army — you follow its rules and structure.

6.  **Why is React named “React” ?**

- React is abruptly named because it “reacts” quickly to the changes without reloading the whole page.
- It uses the virtual DOM to efficiently update parts of a webpage.
- It’s built around components that ‘react’ and update.

7. **What is difference between `React and ReactDOM`?**

- `React` and `ReactDOM` are both packages provided by the React library, but they serve different purposes:

1. **React**

- Found in: react package
- Responsible for:
  Creating components
  Managing state, hooks, JSX, and component logic
- It provides the core functionality to build user interfaces.

  **✅ Example:**

```jsx
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return <h1>{count}</h1>;
}
```

2. **ReactDOM**

- Found in: react-dom package
- Responsible for:
  Rendering React elements/components into the actual DOM.
  Bridging React’s virtual DOM to the browser’s DOM

- Used mostly in web applications.
- **✅ Example:**

```jsx
import ReactDOM from 'react-dom/client';
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
```

- **✅ Summary:**

"React is used to build components and manage UI logic, while ReactDOM takes those components and renders them to the DOM in a browser environment."

8.**What is async and defer in <script> tags?**

- Both async and defer are attributes used in the <script> tag to control how external JavaScript files are loaded and executed in the browser — especially to improve page performance.
- They are mainly used when placing scripts in the <head> to prevent render-blocking.

## Without async or defer:

- Scripts block HTML parsing.
- Browser downloads and executes the script immediately, then resumes rendering.

## async

- Downloads the script in parallel with HTML parsing.
- But executes it immediately once downloaded, which can interrupt HTML parsing.
- Suitable for independent scripts (like analytics, ads) that don’t rely on other code or DOM.
- **✅ Example:**

```html
<script src="main.js" defer></script>
```

## defer

- Also downloads the script in parallel, but waits until HTML parsing is complete before executing.
- Executes in order (if multiple deferred scripts are present).
- Best for scripts that manipulate the DOM or depend on HTML being fully parsed.
- **✅ Example:**

```html
<script src="main.js" defer></script>
```

## **✅ Summary:**

- async loads and executes the script as soon as it’s ready, potentially before the HTML is fully parsed, while defer waits to execute the script after HTML is fully parsed — making it safer for DOM-related operations.
