import React from 'react';
import {
    Link
} from "react-router-dom";
import './Home.css';

function Home() {


    return (
        <div className="home">
            <h1>The More Population Game</h1>
            <p>Who has more population?</p>
            <Link to="/game">Play</Link>
        </div>
    );
}
export default Home;
