import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const rootElement = document.querySelector("#root");
const renderGreeting = (elem) => {
  const element = (
    <div className="greeting">
      <div className="greeting__title">Hello, world!</div>
      <div className="greeting__text">I'm learning React</div>
    </div>
  );

  ReactDOM.render(element, elem);
};

renderGreeting(rootElement);
