// Created nested React Elements

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "First tag in child1"),
    React.createElement("h2", {}, "Second tag in child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "First tag in child2"),
    React.createElement("h2", {}, "Second tag in child1"),
  ]),
]);

console.log(parent); //Object

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(parent);
