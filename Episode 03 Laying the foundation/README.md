# ⚡ Namaste React - Episode 03 - Laying the Foundation

In this chapter, I laid the basic groundwork to kick off a React project properly using Parcel and explored React fundamentals like JSX, components, and rendering.

---

## 🛠️ Part 1 - Setting Up with NPM Scripts

- You can initially run Parcel like this:
  ```bash
  npx parcel index.html
  ```
- But it’s easier in the long run to add scripts inside package.json. That way, you can use simpler commands.
- scripts block

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  "test": "jest"
}
```

- Now, instead of typing out long commands, you can just run:

```bash
npm start
```

---

## 🖼️ Part 2 - Creating and Rendering Elements in React

- **React elements** can be created using the `createElement` method, and they are rendered using root.render().
- **React.createElement** returns a plain JS object representing a DOM node, which React converts into real HTML on the page.

---

## 🔄 Part 3 - JSX vs React.createElement

- **JSX** is a syntax extension that lets you write HTML-like code inside JavaScript. It’s not required, but it definitely makes things easier.

### For example:

- Without JSX:

```js
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React Using Core React.createElement ✨"
);
```

- With JSX

```js
const jsxHeading = <h1>Namaste React using JSX ✨</h1>;
```

- Both ultimately produce the same object — a React element.

### How JSX works behind the scenes:

1. Babel **transpiles** JSX into **React.createElement()** calls.
2. These calls create **React elements** (JavaScript objects).
3. React **renders** those into real **DOM elements(HTML elements)**.

### JSX Syntax Tips:

- Use `className` instead of `class`.
- Wrap multi-line JSX in parentheses.
- Use **camelCase** for attribute names.

---

## 🔧 Part 4 - Introduction to React Components

### Two main types of components:

1. **Class-based Components** :- older way using ES6 classes
2. **Functional Components** :- modern approach using JavaScript functions and widely used

### Functional component examples:

- With return keyword:

```jsx
const HeadingComponent = () => {
  return <h1>This is React's Functional Component ✨</h1>;
};
```

- Without return (implicit return):

```jsx
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component ✨</h1>
  </div>
);
```

- Both are valid. The second version is cleaner when your component just returns JSX.

---

## 🏗️ Part 5 - Combining Components (Composition)

## Rendering individual elements and components:

- Rendering a **React element**:

```jsx
const heading = (
  <h1 className="head" tabIndex="5">Namaste React Element!</h1>
);
root.render(heading);
```

- Rendering a functional component:

```jsx
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">Namaste React Functional Component ✨</h1>
  </div>
);
root.render(<HeadingComponent />);
```

### Component Composition Example:

- You can nest components inside each other to build a UI:

```jsx
const Title = () => (
  <h1 className="head">Namaste React Title ✨</h1>
);

const Heading = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component ✨</h1>
  </div>
);
```

- This approach is called **Component Composition** and it helps in keeping code modular and organized.

---

### 📝 Part 6 - Arrow Functions vs Normal Functions

- You can use both regular functions and arrow functions to write components.

- Using a regular function:

```jsx
const Title = function () {
  return <h1>This is written using a normal function!</h1>;
};
```

- Arrow functions are preferred nowadays because they’re shorter and cleaner.

---

## 🔐 Part 7 - JSX and Security

- JSX escapes values by default, which helps prevent XSS (Cross-Site Scripting) attacks.
- You can insert JavaScript expressions using {} inside JSX.

### Rendering Components in JSX:

- All of the following are valid ways to render a component:

1. {Title()}
2. <Title />
3. <Title></Title>

That wraps up Episode 3! Learned a lot about how React works under the hood, especially with JSX and components. Next up — diving deeper into dynamic content and props 🚀
