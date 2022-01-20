import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment.jsx";
import './index.scss';


const rootElement = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://avatars.githubusercontent.com/u/87434917?s=400&u=fc7eec1bef8c1be177a45d235e630bbb243a9e8c&v=4'
};


ReactDOM.render(<Comment
    user={userInfo}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.566z')}
/>, rootElement);
