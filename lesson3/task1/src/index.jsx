import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Search.jsx";
import './search.scss'


const rootElement = document.querySelector('#root');




ReactDOM.render(<Greeting name="Tom" />, rootElement);
