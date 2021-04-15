import React from 'react';
import '../App.css';
import loaderIcon from '../img/clover.png';

function Loader() {
    return (
        <>
            <div className="load-cover"><img src={loaderIcon} alt={"loader"} /></div>
        </>
    )
}

export default Loader;