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

    updateOfflineStatus = e => {
        this.changeState('offline');

    }

    updateOnlineStatus = e => {
        this.changeState('online');

    }

    changeState = status => {
        this.setState({
            status
        })
    }

    render() {
        const { status } = this.state;

        return <div className={`status ${status === 'offline' ? 'status_offline' : ''}`}>{status}</div >
    }
}

export default ConnectionStatus;