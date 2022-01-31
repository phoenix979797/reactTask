import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import List from './NumbersList';


const rootElement = document.querySelector('#root');

ReactDOM.render(<List numbers={[2, 3, 4, 5, 6]} />, rootElement);

