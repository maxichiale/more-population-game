import React from 'react';

import './City.css';

function City(props: any) {

    return (
        <div className="game">
            <h1>{props.city.city} , {props.city.country}</h1>
            {props.isActual ? (
            <p> {props.city.population} </p>
            ):""}
        </div>
    );
}
export default City;
