import React from 'react';
import Filter from './Filter';
import User from './User';

class UserList extends React.Component {
    state = {
        filterText: ''
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            filterText: value
        });
    };



    render() {

        const usersList = [...this.props.users];
        const sortUserList = this.state.filterText === ''
            ? usersList
            : usersList.filter(user => user.name.toLowerCase().includes(this.state.filterText))
        return (
            <div>
                <Filter count={sortUserList.length} filterText={this.state.filterText} onChange={this.handleChange} />
                <ul className='users'>
                    {sortUserList.map(user => <User key={user.name} {...user} />)}
                </ul>
            </div>
        );
    }
}

export default UserList;
