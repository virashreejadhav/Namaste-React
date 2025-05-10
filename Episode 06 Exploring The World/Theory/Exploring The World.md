## Namaste React Course by Akshay Saini

# Episode 06 - Episode 6: Exploring the World of React

## Q1:What is Microservice?

- `Microservices` is an architectural style where an application is composed of small, independent services that communicate over well-defined APIs. Each microservice handles a specific business functionality and can be developed, deployed, and scaled independently.

## Q2:What is Monolith architecture?

- A `Monolithic architecture` is a traditional model where all features and components of an application (frontend, backend, business logic, and database) are tightly integrated into a single codebase and deployed together.

**🔹 Drawback:**

- Difficult to scale and maintain, as a small change requires rebuilding and redeploying the entire application.

## Q3: What is the difference between `Monolith and Microservice?

| Feature           | Monolith                     | Microservice                             |
| ----------------- | ---------------------------- | ---------------------------------------- |
| Structure         | Single codebase              | Multiple independent services            |
| Deployment        | Entire app deployed together | Each service can be deployed separately  |
| Scalability       | Harder to scale              | Easily scalable per service              |
| Development Speed | Slower with large teams      | Faster with independent teams            |
| Fault Isolation   | Failure affects whole app    | Failure in one service doesn’t crash all |

## Q4: Why do we need a useEffect Hook?

- The useEffect hook in React is used to perform side effects such as:

  - Fetching data from an API
  - Setting up subscriptions
  - Updating the DOM directly
  - Listening to window events

```jsx
useEffect(() => {
  getRestaurants(); // Fetch data when the component mounts
}, []);
```

## Q5:What is Optional Chaining?

- Optional Chaining (?.) is a safe way to access deeply nested object properties without causing runtime errors if a property is null or undefined.

```js
const name = restaurant?.info?.name;
```

## Q6: What is Shimmer UI?

- A Shimmer UI is a user interface design technique used to indicate that content is loading or placeholders are being displayed. It involves creating a subtle animation or visual effect that gives the impression of activity or content rendering, even when the actual content has not yet loaded. Shimmer UIs are often used in applications, websites, or mobile apps to enhance the user experience during loading times.

## Q7:What is the difference between JS expression and JS statement?

**🔹 JavaScript Expression**

- An expression is a piece of code that produces a value. It can be:

  - A literal value
  - A variable reference
  - A function invocation
  - A combination of values and operators

- Expressions can be used anywhere a value is expected, such as in assignments, function arguments, JSX, or return statements.

### ✅ Examples:

```js
5 + 3           // → 8
"Hello"         // → "Hello"
myVariable      // → value of the variable
func(4)         // → result of the function call
isLoggedIn && <UserComponent />  // → JSX expression
```

In React, JSX allows only expressions, not full statements.

**🔹 JavaScript Statement**

- A statement is a line of code that performs an action. It doesn't produce a direct value like expressions do. Statements control the program flow or define structures like loops, conditionals, functions, or variables.

### ✅ Examples:

```js

if (x > 10) {
  console.log("x is large");
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

function greet(name) {
  console.log("Hello, " + name);
}

let y = 42;
```

Statements cannot be directly used inside JSX. For example, you can’t write an if or for loop directly inside return.

### 🧠 Summary

| Feature | Expression                     | Statement                              |
| ------- | ------------------------------ | -------------------------------------- |
| Output  | Produces a value               | Performs an action                     |
| Usage   | Used where a value is expected | Used to control flow or structure code |
| In JSX  | ✅ Allowed                     | ❌ Not allowed                         |

## Q8: What is Conditional Rendering? explain with a code example.

- Conditional Rendering in React means rendering UI based on certain conditions.

```jsx
{
  isLoggedIn ? <User /> : <Login />
}
```

## Q9: What is CORS?

- CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts web pages from making requests to a different domain than the one that served the page.

## Q10: What is async and await?

- async and await are modern JavaScript keywords (introduced in ES2017) that make working with asynchronous operations—like API calls—simpler and more readable. They help you write asynchronous code in a synchronous-like manner without using .then() or deeply nested callbacks.

### 🔹 1. async Function

- The async keyword is used to declare a function that always returns a Promise, even if it returns a simple value.
- Inside an async function, you can use await to pause execution until a Promise is resolved.

```js
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json(); // waits until JSON is parsed
  return data; // returns a Promise with `data`
}
```

### 🔹 2. await Keyword

- The await keyword can only be used inside async functions. It pauses the execution until the Promise is resolved and then returns the resolved value.

```js
const data = await fetchData(); // waits for fetchData() to resolve
```

### 🔹 3. Error Handling with try...catch

- When using await, it's common to wrap your code in try...catch to handle errors gracefully.

```js
async function fetchData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const json = await res.json();
    return json;
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
```

### 🔹 4. Why Use async/await?

- ✅ Cleaner syntax than .then() chaining
- ✅ Easier to debug (use breakpoints like in sync code)
- ✅ Avoids callback hell (nested code becomes flat)
- ✅ Improves code readability especially in large React apps

### 🔸 Real Use Case :

```js
const getRestaurants = async () => {
  const data = await fetch(API_URL);
  const json = await data.json(); // parses and waits for full JSON response
  setRestaurants(json?.data?.restaurants); // updates React state
};
```

Here, await data.json() is critical. It waits for the HTTP response body to be fully parsed into a usable JavaScript object.

### 🧠 In Summary:

- | Keyword | Role                                       | Benefit                               |
  | ------- | ------------------------------------------ | ------------------------------------- |
  | `async` | Declares a function that returns a Promise | Enables use of `await` inside         |
  | `await` | Waits for a Promise to resolve             | Simplifies async flow, like `fetch()` |

## Q11: What is the use of const json = await data.json(); in getRestaurants()?

- This line converts the raw response from the fetch() API (which is a ReadableStream) into a usable JavaScript object.

```js
const json = await data.json();
```

**🔹 Why needed?**

- The fetch() method returns a Response object, and .json() reads and parses the response body as JSON.
