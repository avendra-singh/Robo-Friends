import React from 'react';
import'./Card.css';
 const Card=({robot})=>{
 return(
    <div id="card">
        <img src={`https://robohash.org/${robot.name}`} alt="robots"/>
        <h1>{robot.name}</h1>
        <p>{robot.email}</p>
    </div>
 );
 }
 export default Card;