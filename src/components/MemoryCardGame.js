import React, { useState } from "react";
import styled from "styled-components";
import Game from "./Game";
import Button from "./Button";

const GameIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
const Score = styled.h3`
  font-family: "DotGothic16", sans-serif;
  font-size: 2em;
`;
const GameMessage = styled.h2`
  font-family: "DotGothic16", sans-serif;
  font-size: 2em;
  margin: 20px;
`;
const MemoryCardGame = (props) => {
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("");
  const startGame = () => {
    props.startGame();
  };
  const endGame = (score, gameMessage) => {
    props.endGame();
    enterNewScore(score);
    setMessage(gameMessage);
  };
  const enterNewScore = (score) => {
    if (score > highScore) {
      setHighScore(score);
    }
  };
  if (!props.isGamePlaying) {
    return (
      <GameIntro>
        <GameMessage>{message}</GameMessage>
        <Button onClick={props.startGame}>New Game</Button>
        <Score>High Score: {highScore}</Score>
      </GameIntro>
    );
  } else {
    return (
      <GameIntro>
        <Game endGame={endGame} />
      </GameIntro>
    );
  }
};

export default MemoryCardGame;
