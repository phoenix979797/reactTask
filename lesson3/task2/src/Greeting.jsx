import React from "react";


function Greeting(props) {
    const birthDate = props.birthDate;
    const todayDate = new Date();
    const yearsOld = Math.floor((todayDate - birthDate) / (1000 * 60 * 60 * 24 * 365));

    return (
        <div className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${yearsOld} years old`}
        </div>
    )
}

export default Greeting;