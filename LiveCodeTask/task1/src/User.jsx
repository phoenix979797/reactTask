import React from 'react';

const User= ({age, name}) => {
    return (<li  className="user">
        <span className="user__name">{name}</span>
        <span className="user__age">{age}</span>
    </li>)
}

export default User;