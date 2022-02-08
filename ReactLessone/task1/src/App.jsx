import React, { Component } from "react";
import Dialog from "./Dialog";



class App extends Component {

    state = {
        isOpen: false
    }

    hideDialog = () => {
        this.setState({
            isOpen: false
        })
    }

    openDialog = () => {
        this.setState({
            isOpen: true
        })
    }

    render() {
        const elem = (
            <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
        )
        return (
            <div className="app">
                <button className="btn" onClick={this.openDialog}>Show dialog</button>
                <Dialog onClose={this.hideDialog} title="some text" isOpen={this.state.isOpen}>{elem}</Dialog>
            </div>
        )
    }
}

export default App;