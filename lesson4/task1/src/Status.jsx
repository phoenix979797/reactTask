import React, { Component } from "react";

import Online from "./Online.jsx"
import Offline from "./Offline.jsx"


class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOnline: props.isOnline
        };
    }



    render() {
        return (<div className="status">
            {this.state.isOnline ? <Online /> : <Offline />}</div>
        )
    }
};

export default Page;