## Namaste React Course by Akshay Saini

# Episode 04 - Talk is cheap, show me the code

## Q1: Is `JSX` mandatory for React?

- JSX (JavaScript XML) is not required to build React applications, but it makes development cleaner and easier. It allows writing HTML-like syntax directly inside JavaScript. Behind the scenes, JSX is transformed into React.createElement() calls. You can build React apps without JSX, but it improves code readability and developer experience.

```
// With JSX
const element = <h1>Hello, React!</h1>;

// Without JSX
const element = React.createElement('h1', null, 'Hello, React!');
```

## Q2: Is `ES6` mandatory for React?

- React doesn’t enforce ES6 usage, but most modern React codebases use ES6+ syntax. ES6 introduces features like arrow functions, let/const, classes, destructuring, and modules — all of which simplify writing React components.

## Q3: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

- `{TitleComponent}`: Treats TitleComponent as a JavaScript variable or function. It won't render anything unless explicitly invoked.

- `<TitleComponent />`: Renders the component directly. It's a syntactic shortcut when there are no children.

- `<TitleComponent></TitleComponent>`: Same as above but allows child elements inside.

#### Example

```
<TitleComponent>
  <ChildOne />
  <ChildTwo />
</TitleComponent>
```

## Q4: How can I write `comments` in JSX?

- In JSX, use {/_ comment _/} syntax for both single and multi-line comments.

```
return (
  <div>
    {/* This is a comment */}
    {/*
      Multi-line
      JSX comment
    */}
  </div>
);
```

## Q5: What is `<React.Fragment></React.Fragment>` and `<></>`?

- React Fragments let you group multiple elements without adding extra nodes to the DOM.
- `<React.Fragment>`: Useful when you need to add key attributes.
- `<></>`: Shorthand for React.Fragment, but doesn’t support keys.

```
<React.Fragment>
  <Header />
  <Content />
</React.Fragment>

<>
  <Header />
  <Content />
</>
```

## Q6: What is `Reconciliation` in React?

- `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
  React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
  React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

## Q7: What is `React Fiber`?

- React Fiber is the new core algorithm introduced in React 16. It allows React to pause work, assign priorities, and manage updates in chunks, improving responsiveness and performance during rendering. Key benefits:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

## Q8: Why do we need `keys` in React?

- Keys uniquely identify elements in a list and help React track and optimize re-renders. Without proper keys, React may misidentify components and cause performance or UI bugs.

#### Example

```
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

## Q9: Can we use `index as keys` in React?

**✅ Yes, you can use the index of an item as a key when rendering lists in React, but it is not recommended unless:**

- The list is static and never changes,
- The items do not have a unique identifier,
- You are not reordering, inserting, or deleting items.

**⚠️ Why it's discouraged:**

- Using index as a key can lead to issues like:
- Incorrect component re-renders: React uses keys to determine which components have changed. If the order of items changes but the keys (indexes) remain the same, React may not properly update or preserve the component state.
- Unpredictable behavior in dynamic lists: Items may get reused incorrectly, leading to visual or data bugs.

**`✅ Best practice`: Always use a unique and stable identifier (like an id from the data) whenever possible**

## Q10: What is `props in React`? Ways to.

- Props (short for properties) are inputs to components. They let you pass data from parent to child components, making components reusable and dynamic.

#### Example:-

```
function Greet({ name }) {
  return <h1>Hello, {name}</h1>;
}

<Greet name="Virashree" />
```

## Q11: What is `Config Driven UI`?

- A Config-Driven UI (Configuration-Driven User Interface) is an approach where the structure, content, and behavior of the user interface are defined through configuration data—typically JSON or other structured formats—instead of being hardcoded in the source code.
- This design pattern separates UI logic from the data that controls it, allowing for more dynamic, scalable, and customizable interfaces

**✅ Key Features of Config-Driven UI**

- `📄 Configuration-Based Rendering`: UI elements (like forms, cards, lists, etc.) are rendered dynamically based on configuration files or data, rather than hardcoded JSX.
- `⚙️ Flexibility & Customization`: Changes to the UI can be made by simply updating configuration data—no code changes are needed. Great for admin-driven custom UIs.
- `♻️ Reusability & Consistency`: Promotes use of reusable components with consistent structure defined by a shared schema or config format.
- `🚀 Faster Development`: Developers can focus on building generic components while designers or non-devs define layouts or behaviors through configs.
- `🧩 Dynamic Adaptability`: Ideal for apps that require frequent UI updates or personalization (e.g., per user, city, or role).

## Q12: Difference between `Virtual DOM` and `Real DOM`?

- DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Virtual DOM`

  - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
  - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
  - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.

- `Real DOM` - The DOM represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

  | **Real DOM**                              | **Virtual DOM**                               |
  | ----------------------------------------- | --------------------------------------------- |
  | Directly updates the browser DOM          | Updates a lightweight copy (Virtual DOM)      |
  | Slower and expensive for large UIs        | Faster and optimized for performance          |
  | Entire DOM is re-rendered on each update  | Only the changed parts are updated            |
  | Interacts directly with the HTML elements | React syncs changes with real DOM efficiently |
  | Higher memory usage and performance cost  | Memory-efficient and optimized for diffing    |
  | Hard to manage and optimize large changes | Easier diffing and batching of changes        |
  | Represents the actual UI in the browser   | Represents a virtual snapshot of the UI       |
