import React, { Component } from "react";
import Greeting from './Greeting.jsx'
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";



class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }


    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    }
    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }
    render() {
        const { isLoggedIn } = this.state;
        return (
            <div className="panel">
                <Greeting isLoggedIn={ isLoggedIn }/>
                {this.state.isLoggedIn
                    ?
                    (< Logout onLogout={this.handleLogout} />)
                    :
                    (<Login onLogin={this.handleLogin} />)
                }
            </div>

        );
    }
}
export default Auth;