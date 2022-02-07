import React from "react";

const UserMenu = ({ userData }) => {
    if (!userData) {
        return null;
    }

    const { avatar_url, name } = userData;
    return (
        <div className="menu">
            <span class="menu__greeting">
                {`Hello, ${name}`}
            </span>
            <img src={avatar_url} alt="User avatar" className="menu__avatar"></img>
        </div>
    )



}

export default UserMenu;