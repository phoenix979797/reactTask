import React, { Component } from "react";


const rootElement = document.querySelector('.picker__title');

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: ''
        }
    }

    colorPicker = (color) => {
        this.setState({
            counter: color
        })

    }

    render() {
        return (
            <div>
                <div className="picker__title">{this.state.counter}</div>
                <div>
                    <button className="picker__button picker__button_coral"
                        onMouseEnter={() => this.colorPicker('Coral')}
                        onMouseLeave={() => this.colorPicker('')}></button>
                    <button className="picker__button picker__button_aqua"
                        onMouseEnter={() => this.colorPicker('Aqua')}
                        onMouseLeave={() => this.colorPicker('')}></button>
                    <button className="picker__button picker__button_bisque"
                        onMouseEnter={() => this.colorPicker('Bisque')}
                        onMouseLeave={() => this.colorPicker('')}></button>
                </div>
            </div >

        );
    }
}

export default Counter;