import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Status.jsx";
import './index.scss';

const rootElement = document.querySelector('#root');




ReactDOM.render(<Counter isOnline={false} />, rootElement);