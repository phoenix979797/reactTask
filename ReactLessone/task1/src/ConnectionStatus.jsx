import React, { Component } from "react";


class ConnectionStatus extends Component {
    state = {
        status: 'online'
    }


    componentDidMount() {
        window.addEventListener('online', this.updateOnlineStatus)
        window.addEventListener('offline', this.updateOnlineStatus)
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.updateOnlineStatus)
        window.removeEventListener('offline', this.updateOnlineStatus)
    }

    updateOnlineStatus = e => {
        navigator.onLine ? this.changeState('online') : this.changeState('offline');

    }

    changeState = status => {
        this.setState({
            status
        })
    }

    render() {
        const { status } = this.state;
        
        return <div className={`status${status === 'offline' ? ' status_offline' : ''}`}> { status }</div >
    }
}

export default ConnectionStatus;