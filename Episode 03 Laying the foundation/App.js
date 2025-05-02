import React from "react";
import ReactDOM from "react-dom/client";

// created Title element using JSX
// JSX => React.createElement => Js Object => HTML (DOM) (babel does all the conversion)

const Title = () => {
  return <h1 className="head">This is Written using Jsx ✨</h1>;
};

// Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">This is Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
