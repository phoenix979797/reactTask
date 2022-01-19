import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const rootElement = document.querySelector("#root");
const renderGreeting = (elem) => {
  const element = <h1 class="title">Todo List</h1>;

  ReactDOM.render(element, elem);
};

renderGreeting(rootElement);
