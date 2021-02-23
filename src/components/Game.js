import React, { useState, useEffect } from "react";
import WordCard from "./WordCard";
import Lives from "./Lives";
import styled from "styled-components";
import "../assets/fonts.css";
const Score = styled.h2`
  font-family: "DotGothic16", sans-serif;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const GameWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Game = (props) => {
  const [words, setWords] = useState([]);
  const [usedWords, setUsedWords] = useState([]);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchWords() {
      const response = await fetch("data/words.json");
      const wordsJson = await response.json();
      setWords(selectCards(wordsJson.data, 100));
    }
    fetchWords();
  }, []);

  useEffect(() => {
    if (lives === 0) {
      props.endGame(score, "You lost");
    }
    if (usedWords.length === 100) {
      props.endGame(score, "You won, you finished all 100 words!");
    }
  }, [usedWords, lives, score, props]);

  const selectCards = (arr, n) => {
    var array = arr;
    var shuffled = array.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, n);
    return selected;
  };

  const addUsedWord = (word) => {
    setUsedWords(usedWords.concat(word));
  };

  const playRound = (word) => {
    if (usedWords.includes(word)) {
      setLives(lives - 1);
      return;
    }
    addUsedWord(word);
    setScore(score + 1);
  };
  const selectRoundWords = () => {
    let selectedCards = [];
    if (usedWords.length <= 2) {
      selectedCards.push(...selectCards(usedWords, usedWords.length));
    } else {
      selectedCards.push(...selectCards(usedWords, 2));
    }
    let unusedWords = words.filter((word) => !usedWords.includes(word));
    selectedCards.push(...selectCards(unusedWords, 3 - selectedCards.length));
    return shuffle(selectedCards);
  };

  if (words.length === 0) {
    return <div>loading</div>;
  } else {
    let selectedWords = selectRoundWords();
    return (
      <GameWrapper>
        <Score>Score: {score}</Score>
        <Lives lives={lives} />
        <CardWrapper>
          <WordCard word={selectedWords[0]} playRound={playRound} />
          <WordCard word={selectedWords[1]} playRound={playRound} />
          <WordCard word={selectedWords[2]} playRound={playRound} />
        </CardWrapper>
      </GameWrapper>
    );
  }
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default Game;
