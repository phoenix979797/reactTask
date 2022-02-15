import React, { Component, useEffect, useState } from "react";


const ConnectionStatus = () => {
    const [status, setStatusConnect] = useState('online')


    useEffect(() => {

        const updateOfflineStatus = () => {
            setStatusConnect('offline')
        }

        const updateOnlineStatus = () => {
            setStatusConnect('online')
        }

        window.addEventListener('online', updateOnlineStatus)
        window.addEventListener('offline', updateOfflineStatus)

        return () => {
            window.removeEventListener('online', updateOnlineStatus)
            window.removeEventListener('offline', updateOfflineStatus)
        }
    }, [])

    return <div className={`status ${status === 'offline' ? 'status_offline' : ''}`}>{status}</div >
}








export default ConnectionStatus;