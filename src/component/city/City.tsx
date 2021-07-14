import React, {useState,useEffect} from 'react';

import './City.css';

function City(props: any) {
    const [width, setWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile: boolean = (width <= 800);

    let population  = props.isActual ? props.city.population.toLocaleString("es") : "";
    let heightImage = isMobile ? 48 : 64;

    return (
        <div className="cityBox">

            <div className="cityInfo">
                <div className="cityTitleBox">
                <h1 className="cityTitle">{props.city.city} , {props.city.country}</h1>
                <img className="countryFlag" src={`https://www.countryflags.io/${props.city.code}/shiny/${heightImage}.png`} alt={`${props.city.country} flag`}/>
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
