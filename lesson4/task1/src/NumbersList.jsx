import React from 'react';

const listNumbers = ({ numbers }) => {
    const numberElem = numbers.map(num => <li>{num}</li>)
    return (<ul>{numberElem}</ul>);
}

export default listNumbers;