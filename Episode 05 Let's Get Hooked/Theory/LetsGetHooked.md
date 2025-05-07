# Episode 05: Let's Get Hooked!

### React Essentials: ES6 Exports, config.js, and React Hooks

**Q1. 🔄 What is the Difference Between Named export, Default export, and \* as export?**

- In modern JavaScript (ES6), modules allow you to split code into smaller, reusable parts. There are different ways to export and import modules:

### ✅ Named Export

- Lets you export multiple items from the same file.
- While importing, use curly braces {}.
- The imported name must match the exported one.

```js
// 📤 Exporting from components.js
export const Header = () => <h1>Welcome</h1>;
export const Footer = () => <footer>© 2025</footer>;

// 📥 Importing
import { Header, Footer } from "./components";

// ✅ Renaming on import
import { Footer as SiteFooter } from "./components";

```

### 🔷 Default Export

- Use when exporting only one main value from a file.
- No {} needed during import.
- You can name it anything while importing.

```js
// 📤 Exporting from Banner.js
const Banner = () => <div>This is a banner</div>;
export default Banner;

// 📥 Importing
import TopBanner from "./Banner"; // You can name it anything

```

### 🔷 Combining Default & Named Exports\

- You can export one default and multiple named values from the same file.

```js
// 📤 Exporting from Layout.js
export const Sidebar = () => <aside>Sidebar</aside>;
const Layout = () => <main>Main Layout</main>;
export default Layout;

// 📥 Importing
import Layout, { Sidebar } from "./Layout";

```

**Q2. What is the importance of `config.js` file?**

**🔹 What it is:**

- config.js is a file commonly used to store environment-specific or reusable configuration values.

**🔹 Why it’s important:**

- `Centralized Config:` Keeps settings like API URLs, feature flags, or environment variables in one place.
- `Environment Handling:` Makes it easy to switch between development, testing, and production. -` Cleaner Code:` Instead of hardcoding URLs or keys in components, I can import them from config.js.

**🧠 Example:**

```js
// config.js
const config = {
  API_BASE_URL: 'https://api.example.com',
  APP_NAME: 'MyApp'
};

export default config;

// usage
import config from './config';
fetch(`${config.API_BASE_URL}/users`);
```

**Q3. What are `React Hooks`?**

- Hooks are special functions introduced in React 16.8 that let us use state and lifecycle features in functional components.

  **🔹 Why they matter:**

- Before Hooks, only class components could use state/lifecycle methods.
- Hooks let us write cleaner, reusable logic in functional components.

  **🔹 Common Hooks:**

- `useState`: To manage states. Returns a stateful value and an updater function to update it.
- `useEffect`: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- `useContext`: To return the current value for a context.
- `useReducer`: A useState alternative to help with complex state management.
- `useCallback`: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- `useMemo`: It returns a memoized value that helps in performance optimizations.
- `useRef`: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- `useLayoutEffect`: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- `useDebugValue`: Helps to display a label in React DevTools for custom hooks.

**Q4. ✅ Why do we need useState Hook?**

**🔹 useState Purpose:**

- useState allows functional components to store and manage local state.

  **🔹 Before Hooks:**

- Only class components had this.state and this.setState().

  **🔹 With useState:**

- You can now do this in functional components:

### 📝 Syntax

```js
const [state, setState] = useState(initialState);
```

### 🛠 Importing

```js
import React, { useState } from "react";
```

### Example

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### 🧠 Key points:

- useState(initialValue) returns an array: [value, setterFunction]
- State updates trigger re-render of the component
- Helps manage UI interactivity like form inputs, toggles, counters, etc.
