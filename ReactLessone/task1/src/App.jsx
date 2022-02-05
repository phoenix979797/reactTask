
import React, { Component } from "react";
import Search from "./Search";

class App extends Component {

    handleSubmit = user => {
        console.log(user)
    }

    render() {
        return <Search onSumbit={this.handleSubmit} />
    }
};

export default App;