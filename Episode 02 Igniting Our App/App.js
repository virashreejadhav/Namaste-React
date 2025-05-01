// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Title From React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React! ✨"),
    React.createElement("h1", {}, "Second tag in child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "First tag in child2"),
    React.createElement("h1", {}, "Second tag in child2"),
  ]),
]);

//console.log(parent); // Object

root.render(parent);
