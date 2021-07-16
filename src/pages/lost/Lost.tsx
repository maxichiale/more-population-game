import React, {useEffect, useState} from 'react';

import {
    Link
} from "react-router-dom";
import './Lost.css';


async function getImage() {
    const response = await fetch('https://some-random-api.ml/meme')
        .then(response => response.json());

    return response.image;
}
function Lost(props: any) {
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
            <h1>You lost!</h1>
            <p>Your score: {props.score}</p>
            <img className="memeImage" src={image}  alt="meme" />
            <div className="linksBox">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/game">Play again</Link>
            </div>
        </div>
    );
}
export default Lost;
