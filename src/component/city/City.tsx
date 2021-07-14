import React from 'react';

import './City.css';

function City(props: any) {
    const getFlagEmoji = (countryCode:any)=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()))

    let emoji = getFlagEmoji(props.city.code);
    let population  = props.isActual ? props.city.population.toLocaleString("es") : "";
    return (
        <div className="cityBox">
            {/*<img className="flag" src="https://restcountries.eu/data/col.svg"></img>*/}
            {/*<img className="flag" src="https://flagcdn.com/160x120/gb.png"></img>*/}
            {/*https://robohash.org/rio%20de%20janeiro*/}
            {/*<img className="background" src={`https://robohash.org/${props.city.city}`}></img>*/}
            {/*<img className="background" src=""></img>*/}
            <div className="cityInfo">
                <div className="cityTitleBox">
                <h1 className="cityTitle">{props.city.city} , {props.city.country}</h1>
                <img className="countryFlag" src={`https://www.countryflags.io/${props.city.code}/shiny/64.png`} alt={`${props.city.country} flag`}/>
                </div>
                <span className="population">{`Population: ${population}`} </span>
            </div>
            <div className="actionsBox">
                {props.children}
            </div>
        </div>
    );
}
export default City;
