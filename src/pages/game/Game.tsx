import React, {useState} from 'react';
import City from "../../component/city/City";
import './Game.css';
import data from "../../data";

const randomIntFromInterval =(min:number, max:number) =>{ // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Game() {
    const [actualCityPosition, setActualCityPosition] = useState(randomIntFromInterval(0,99));
    const [score, setScore] = useState(0);

    let randomNumber = randomIntFromInterval(0,99);

    if(randomNumber == actualCityPosition)
        randomNumber++;
    if(randomNumber > 99)
        randomNumber -=2;
    else if(randomNumber<0)
        randomNumber +=2;
    const [gameCityPosition, setGameCityPosition] = useState(randomNumber);

    const checkResult = (more:boolean) =>{
        if(more){
        if(data[actualCityPosition].population < data[randomNumber].population){
            setActualCityPosition(randomNumber);
            let random = randomIntFromInterval(0,99);

            if(random == actualCityPosition)
                random++;
            if(random > 99)
                random -=2;
            else if(random<0)
                random +=2;

            setGameCityPosition(random);
            setScore(score+1);
        }
        else
            console.log("no acerto")
            setScore(0);
        }
        else{
            if(data[actualCityPosition].population > data[randomNumber].population) {
                setActualCityPosition(randomNumber);
                let random = randomIntFromInterval(0,99);

                if(random == actualCityPosition)
                    random++;
                if(random > 99)
                    random -=2;
                else if(random<0)
                    random +=2;

                setGameCityPosition(random);
                setScore(score+1);

            }
            else{
                console.log("no acerto")
                setScore(0);
            }
        }

    }

    return (
        <div className="game">
            <h1>The More Population Game</h1>
            <City city={data[actualCityPosition]} isActual></City>
            <City city={data[randomNumber]}></City>
            <div>
                <button onClick={() =>checkResult(true)}> More</button>
                <button onClick={() =>checkResult(false)}> Less</button>
            </div>
            <h2>Score:{score}</h2>
        </div>
    );
}
export default Game;
