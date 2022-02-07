import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

class App extends Component {

    state = {
        userData: null,
    };


    componentDidMount() {
        this.fetchUser(this.props.userId)
    }

    fetchUser = userId => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                this.setState({ userData })
            })
    };

    render() {
        const { userData } = this.state
        return (
            <div className="page" >
                <header className="header">
                    <UserMenu userData={userData} />
                </header>
                <UserProfile userData={userData} />
            </div>

        )
    }

}

export default App;