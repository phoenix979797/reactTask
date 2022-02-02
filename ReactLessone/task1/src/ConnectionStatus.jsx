import React, { Component } from "react";


class ConnectionStatus extends Component {
    state = {
        isOnline: true
    }


    componentDidMount() {
        window.addEventListener('online', this.updateOnlineStatus)
        window.addEventListener('offline', this.updateOnlineStatus)
    }



    updateOnlineStatus = e => {
        navigator.onLine ? this.changeState(true) : this.changeState(false)

    }

    changeState = status => {
        this.setState({
            isOnline: status
        })
    }

    render() {
        const { isOnline } = this.state;

        if (isOnline) {
            return (< div className="status status_online" > Online</div >)
        }

        return <div className="status status_offline">Offline</div>
    }
}

export default ConnectionStatus;