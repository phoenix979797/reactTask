import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Mailbox.jsx";
import './index.scss';

const rootElement = document.querySelector('#root');




ReactDOM.render(<Counter unreadMessages = {['h', 'f']}/>, rootElement);