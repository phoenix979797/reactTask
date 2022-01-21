import React from "react";
import moment from "moment";

const formatDate = date => moment(date).format("DD MMM YY");

function Profile(props) {
   
    return (
        <>
            <div className="profile__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="profile__bitrth">
                {`Was born ${formatDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </div>
        </>
    )
}

export default Profile;