import React from "react";
import Logout from './Logout.jsx'
import Login from './Login.jsx'
import Spiner from './Spinner.jsx'

class Auth extends React.Component {
    

    state = {
        isLoggedIn: false,
        isLoading: false,
    }

    handleLoginClick = () => {
        this.setState({
            isLoading: true,
        });
        setTimeout(() => {
            this.setState({
                isLoading: false,
                isLoggedIn: true,
            });
        }, 2000)
    }

    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: false,
        });

    }
    render() {
        const { isLoggedIn, isLoading } = this.state;
        if (isLoading) {
            return <Spiner size={5}/>;
        }

        if (isLoggedIn) {
            return <Logout onLogout={this.handleLogoutClick} />
        }

        return <Login onLogin={this.handleLoginClick} />
    }
}

export default Auth;