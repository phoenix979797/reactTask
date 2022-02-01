import React from 'react';
import Pagination from './Pagination';
import UsersList from './UsersList';

class App extends React.Component {
    state = {
        pageNumber: 3
    }



    usersList = [
        { id: 1, name: "Bob", age: 21 },
        { id: 2, name: "Sam", age: 45 },
        { id: 3, name: "Con", age: 22 },
        { id: 4, name: "Man", age: 55 },
        { id: 5, name: "Boy", age: 55 },
        { id: 6, name: "Her", age: 31 },
        { id: 7, name: "Her", age: 31 },
    ];

    prevBtnHandler = () => {

    }

    nextBtnHandler = () => {

    }

    render() {
        const { pageNumber } = this.state;
        const itemsPerPage = 3;

        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;


        const userToRender = this.usersList.slice(startIndex, endIndex);

        return (
            <div>
                <Pagination pageNumber={this.state.pageNumber} prev={this.prevBtnHandler} next={this.nextBtnHandler} />
                <UsersList usersList={userToRender} />
            </div >
        )
    }

}

export default App;