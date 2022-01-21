import React from "react";
import Counter from "./Counter.jsx";
const App = () => {
    return (<>
        <Counter start={21} interval={10000} />
        <Counter start={-21} interval={100} />
        <Counter start={-1111} interval={10} />
    </>
    )
}

export default App;