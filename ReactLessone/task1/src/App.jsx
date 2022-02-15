import React, { Component, useState } from "react";
import Clock from './Clock.jsx'



const App = () => {
    const [visible, setVisible] = useState(true)

    const toggle = () => {
        setVisible(!visible)
    }


    return (
        <>
            <button onClick={toggle}>Toggle</button>
            <div>
                {visible &&
                    <><Clock location='New York' offset={-5} />
                        <Clock location='Kyiv' offset={2} />
                        <Clock location='London' offset={0} /></>}
            </div>
        </>
    )
}



export default App;