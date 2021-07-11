import React from 'react';
import {
    Link
} from "react-router-dom";
import './Home.css';
import background from './../../images/Poblacion_Mundial_746x419.jpeg'
function Home() {


    return (
        <div className="home">
            <img src={background} className="background" alt="logo" />

            <div className="info">
                <div className="titleBox">

                <h1 className="title">The More Population Game</h1>
                </div>

                <p className="subtitle">Who has more population?</p>
                <Link className="play" to="/game">Play</Link>
            </div>

        </div>
    );
}
export default Home;
