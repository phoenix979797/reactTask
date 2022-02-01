import React from 'react';
import User from './User';

const UsersList = (props) => {
    
    return (
        <ul class="users">
            {props.usersList.map(user => <User key={props.usersList.id} {...user} />)}
        </ul>
    );

}

export default UsersList;