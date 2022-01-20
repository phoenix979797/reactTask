import React from "react";
import ReactDOM from "react-dom";
import './index.scss'
import { Greeting } from "./Search.jsx";
import './search.scss'


const rootElement = document.querySelector('#root');




ReactDOM.render(<Greeting name="Tom" />, rootElement);
