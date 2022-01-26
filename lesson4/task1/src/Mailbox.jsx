import React from "react";

const Mailbox = ({ unreadMessages }) => {
    const numberOfUnreadMessages = unreadMessages.length;

    return (
        <div className="mailbox">
            <span className="mailbox__text">Messages</span>
            {numberOfUnreadMessages > 0
                ? <span className="mailbox__count">{numberOfUnreadMessages}</span>
                : <></>
            }
        </div >
    );
};

export default Mailbox;