import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import City from "../../component/city/City";
import './Game.css';

import data from "../../data";

const randomIntFromInterval =(min:number, max:number) =>{ // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Game() {
    const [actualCityPosition, setActualCityPosition] = useState(randomIntFromInterval(0,99));
    const [score, setScore] = useState(0);
    let history = useHistory();

    let randomNumber = randomIntFromInterval(0,99);

    if(randomNumber == actualCityPosition)
        randomNumber++;
    if(randomNumber > 99)
        randomNumber -=2;
    else if(randomNumber<0)
        randomNumber +=2;

    const checkResult = (more:boolean) =>{
        if(more){
        if(data[actualCityPosition].population < data[randomNumber].population){
            setActualCityPosition(randomNumber);
            setScore(score+1);
        }
        else{
            console.log("no acerto")
            let highScore = localStorage.getItem('highScore');

            debugger;
            if(highScore) {
                let hs = parseInt(highScore);
                if(hs < score)
                    localStorage.setItem('highScore', score.toString());
            }else{
                localStorage.setItem('highScore', score.toString());
            }
            history.push("/lost");

        }
        }
        else{
            if(data[actualCityPosition].population > data[randomNumber].population) {
                setActualCityPosition(randomNumber);
                setScore(score+1);
            }
            else{
                console.log("no acerto")
                let highScore = localStorage.getItem('highScore');

                if(highScore) {
                    let hs = parseInt(highScore);
                    if(hs < score)
                        localStorage.setItem('highScore', score.toString());
                }else{
                    localStorage.setItem('highScore', score.toString());
                }
                history.push("/lost");
            }
        }

    }
    const highScore = localStorage.getItem('highScore');

    return (
        <div className="game">
                <div className="box">
                    <div className="boxFirstCity">
                    <City city={data[actualCityPosition]} isActual/>
                    </div>
                    <div className="boxSecondCity">
                    <City city={data[randomNumber]}>
                        <button className="actionButton" onClick={() =>checkResult(true)}> More</button>
                        <button className="actionButton" onClick={() =>checkResult(false)}> Less</button>
                    </City>
                    </div>
                </div>
            <div className="score">
                <h2>Score: {score}</h2>
            </div>
            <div className="highScore">
                <h2>High Score: {highScore ?? 0}</h2>
            </div>
        </div>
    );
}
export default Game;
