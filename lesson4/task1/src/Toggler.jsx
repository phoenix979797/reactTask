import React, { Component } from "react";



class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 'Off'
        }
    }
    setOnOff = () => {
        if (this.state.counter === 'Off') {
            this.setState({
                counter: 'On',
            });
            return;
        }
        this.setState({
            counter: 'Off',
        });
    }
    render() {
        return (
            <button className="toggler" onClick={this.setOnOff} >{this.state.counter}</button>
        );
    }
}

export default Counter;