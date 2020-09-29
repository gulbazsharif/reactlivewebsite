import React from "react";

function Card(props){ 
    console.log (props);
    return(
        <>
        <div> 
           
            <img src={props.imgsrc} alt="random" className="dark" grow/>
    <p>{props.title}</p>
    <h1>{props.sname}</h1>
            <a href={props.link} target="movie">
            <button>Watch Now</button>
            </a>
        </div> 
        </>
    )
};

export default Card; 