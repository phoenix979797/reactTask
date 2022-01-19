import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.querySelector("#root");
const renderGreeting = (elem) => {
  const element = (
    <>
      <h1>Search Form</h1>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
    </>
  );

  ReactDOM.render(element, elem);
};

renderGreeting(rootElement);
