import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const rootElement = document.querySelector("#root");
const renderGreeting = (elem) => {
  const element = (<>
  <h1 className="title">Todo List</h1>
  <main className="todo-list">
      <div className="actions">
          <input className="task-input" type="text"/>
          <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
  </main>
  </>);

  ReactDOM.render(element, elem);
};

renderGreeting(rootElement);
