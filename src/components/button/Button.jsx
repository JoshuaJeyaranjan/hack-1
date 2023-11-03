import React from "react";
import './Button.scss'
import {Winner} from "../winner/Winner"
import { useState } from "react";

export default function ({ char1, char2 }) {


  const { powerstats: char1Powerstats } = char1;
  const { powerstats: char2Powerstats } = char2;

  const [winner, setWinner] = useState(null);

  const onBattleHandler = () => {
    const sumChar1 = Object.values(char1Powerstats).reduce(
      (sum, value) => sum + parseInt(value),
      0
    );
    const sumChar2 = Object.values(char2Powerstats).reduce(
      (sum, value) => sum + parseInt(value),
      0
    );

    if (sumChar1 === sumChar2) {
       console.log("Both characters have the same powerstats sum");
       
    } else if (sumChar1 > sumChar2) {
       console.log("char1Powerstats has the max sum");
       setWinner(char1.name);
    } else {
       console.log("char2Powerstats has the max sum");
       setWinner(char2.name);
    }
  };

  return (
    <>
      {winner && <h1 className="winner">{`${winner} is Superior`}</h1>}
      <button onClick={onBattleHandler} className="cta">
        Who is better!
      </button>
    </>
  );
}
