import React, { Component, useEffect, useState } from "react";

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}




const Clock = ({ offset, location }) => {
    const [time, setTime] = useState(
        getTimeWithOffset(offset).toLocaleTimeString('en-US', {
            hour: 'numeric',
            hour12: true,
            minute: 'numeric',
            second: 'numeric',
        })
    )



    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                getTimeWithOffset(offset).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    hour12: true,
                    minute: 'numeric',
                    second: 'numeric',
                })
            );
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (<div className="clock">
        <div className="clock__location">
            {location}
        </div>
        <div className="clock__time">
            {time}
        </div>
    </div>)
}





export default Clock;