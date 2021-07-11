import React from 'react';

import './City.css';

function City(props: any) {
    const getFlagEmoji = (countryCode:any)=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()))

    let emoji = getFlagEmoji(props.city.code);
    return (
        <div className="cityBox">
            {/*<img className="flag" src="https://restcountries.eu/data/col.svg"></img>*/}
            {/*<img className="flag" src="https://flagcdn.com/160x120/gb.png"></img>*/}
            <div className="cityInfo">
                <h1>{props.city.city} , {props.city.country} {emoji}</h1>
                {props.isActual ? (
                //todo tomar el es/en del navegador
                    <p> { "Population: " + props.city.population.toLocaleString("es")} </p>
                ):""}
            </div>
        </div>
    );
}
export default City;
