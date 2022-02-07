import React, { Component } from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
    state = {
        userData: {
            firstName: 'John',
            lastName: 'Doe'
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        })
    }


    render() {
        const { userData } = this.state;
        const { lastName, firstName } = userData;
        return (
            <div className="page">
                <h1 className="title">{`Hello, ${firstName} ${lastName}`}</h1>
                <main className="content">
                    <ShoppingCart userData={userData} />
                    <Profile userData={userData} handleChange={this.handleChange} />
                </main>
            </div>


        )
    }

}

export default App;