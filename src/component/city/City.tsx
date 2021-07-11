import React from 'react';

import './City.css';

function City(props: any) {

    return (
        <div className="cityBox">
            <h1>{props.city.city} , {props.city.country}</h1>
            {props.isActual ? (
                //todo tomar el es/en del navegador
            <p> { "Population: " + props.city.population.toLocaleString("es")} </p>
            ):""}
        </div>
    );
}
export default City;
