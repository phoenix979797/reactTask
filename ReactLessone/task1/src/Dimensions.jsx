import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Dimensions = () => {
    const [demensions, setDimensions] = useState({ width: null, height: null, })

    const { width, height } = demensions;

    useEffect(() => {
        const { innerHeight, innerWidth } = window;
        setDimensions({ width: innerWidth, height: innerHeight })
        const handleResize = e => {
            const { innerWidth, innerHeight } = e.target;
            setDimensions({ width: innerWidth, height: innerHeight })
        }
        window, addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className="dimensions">{`${width}px - ${height}px`}</div>
    );
};



export default Dimensions;