import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const User = ({ match }) => {
    const [userData, setUserData] = useState(null);
    const { userId } = useParams();
    useEffect(() => {

        fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error();
            })
            .then(data => {
                setUserData(data)
            })

    }, [match.params.userId])

    if (!userData) {
        return null;
    }

    const { name, location, avatar_url } = userData;

    return <div className="user">
        <img
            alt="User Avatar"
            src={avatar_url}
            className="user__avatar"
        />
        <div className="user__info">
            <span className="user__name">{name}</span>
            <span className="user__location">{location}</span>
        </div>
    </div>

}




export default User;