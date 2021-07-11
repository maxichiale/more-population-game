import React from 'react';

import './City.css';

function City(props: any) {

    return (
        <div className="game">
            <h1>{props.city.city} , {props.city.country}</h1>
            {props.isActual ? (
                //todo tomar el es/en del navegador
            <p> {props.city.population.toLocaleString("es")} </p>
            ):""}
        </div>
    );
}
export default City;
