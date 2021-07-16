import React, {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";


import {
    Link
} from "react-router-dom";
import './Lost.css';

function Lost() {

    const location = useLocation();
    const {score} = location.state;

    const [image,setImage] = useState();
    useEffect(() => {
        getImage();
        }, []);

    const getImage = async () => {
        const response = await fetch('https://some-random-api.ml/meme');
        const data = await response.json();
        setImage(data.image);
    };

    return (
        <div className="lost">
            <h1 className="lostTitle">You lost!</h1>
            <p className="lostScoreText">Your score: </p>
            <span className="lostScore">{score}</span>
            <img className="memeImage" src={image}  alt="meme" />
            <div className="linksBox">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/game">Play again</Link>
            </div>
        </div>
    );
}
export default Lost;
