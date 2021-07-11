import React from 'react';
import {
    Link
} from "react-router-dom";
import './Lost.css';

function Lost(props: any) {


    return (
        <div className="lost">
            <h1>You lost!</h1>
            <p>Your score: {props.score}</p>
            <Link to="/home">Home</Link>
            <Link to="/game">Play again</Link>
        </div>
    );
}
export default Lost;
