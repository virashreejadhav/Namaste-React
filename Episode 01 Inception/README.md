# 📘 Namaste React(course by Akshay Saini) - Episode 01: Inception

This folder contains the code and explanation for **Episode 01 - Inception**, where we start from plain HTML and slowly step into the world of React!

---

## 🚀 What This Episode Covers

In this episode, I learned how to go from a simple HTML page to dynamically creating elements using JavaScript, and finally rendering content using **React** and **ReactDOM**. It was the beginning of understanding how React actually works under the hood — no JSX yet, just pure `React.createElement()`.

---

## 🧱 Steps & Concepts Covered

### 1️⃣ Starting with Basic HTML

We began with a regular HTML file containing a simple `<h1>Hello World</h1>`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>React Inception</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```
### 2️⃣ Manipulating HTML with JavaScript
Next, instead of hardcoding the heading, we dynamically created it using vanilla JavaScript:

```html
<div id="root"></div>

<script>
  const rootElement = document.getElementById("root");
  const heading = document.createElement("h1");
  heading.innerText = "Hello World from JavaScript!";
  rootElement.appendChild(heading);
</script>
```
### 3️⃣ Adding React via CDN
To start using React without any build tools, we added the CDN links for:

'react.development.js':- (This file is the core of React which contains the whole code of React which is written in
JavaScript.)

'react-dom.development.js':- (Using this file, React interacts with the browser DOM.)
```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
### 4️⃣ Hello World Using React
We then created an element using React.createElement():
```js
const heading = React.createElement("h1", {}, "Hello World from React!");
```
And rendered it into the DOM:
```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```
### 5️⃣ Creating Nested React Elements
React lets you nest elements using React.createElement():
```js
const parent = React.createElement(
  "div", { id: "parent" },
  React.createElement(
    "div", { id: "child" },
    React.createElement("h1", {}, "I am inside a child div")
  )
);

root.render(parent);
```
### 6️⃣ Adding Siblings (Multiple Children)
To add multiple children, we passed an array as the third argument:
```js
const parent = React.createElement(
  "div", { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Heading 1 from Child 1"),
      React.createElement("h1", {}, "Heading 2 from Child 1"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Heading 1 from Child 2"),
      React.createElement("h1", {}, "Heading 2 from Child 2"),
    ]),
  ]
);

root.render(parent);
```
---
### 🧠 Key Learnings from This Episode
- React elements are just JavaScript objects.
- React.createElement() is how elements are created under the hood.
- ReactDOM.createRoot().render() mounts the elements into the real DOM.
- React can nest elements and add multiple siblings easily using arrays.
- This approach works without JSX, helping us understand what JSX simplifies.
