import React from 'react';
import UsersList from './UsersList';

const users = [
    { id: 1, name: 'John', age: 37 },
    { id: 2, name: 'Jack', age: 22 },
    { id: 3, name: 'Tom', age: 21 },
    { id: 4, name: 'Tim', age: 23 },
    { id: 5, name: 'Tory', age: 27 },
    { id: 6, name: 'Mitch', age: 18 },
    { id: 7, name: 'Ann', age: 65 },
    { id: 8, name: 'Bob', age: 12 },
    { id: 9, name: 'Po', age: 11 },
];

const App = () => <UsersList users={users} />;

export default App;