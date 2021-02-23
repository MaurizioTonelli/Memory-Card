import styled from "styled-components";
import "./assets/reset.css";
import "./assets/fonts.css";
import MemoryCardGame from "./components/MemoryCardGame";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Nav = styled(animated.nav)`
  background-color: #ccc;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 40px 40px;
`;
const Title = styled.h1`
  font-family: "DotGothic16", sans-serif;
  font-size: 4em;
  color: #444;
`;
const Credit = styled.h3`
  font-family: "DotGothic16", sans-serif;
  font-size: 2em;
  color: #999;
`;

function App() {
  const [isGamePlaying, setIsGamePlaying] = useState(false);
  const startGame = () => {
    setIsGamePlaying(true);
  };
  const endGame = () => {
    setIsGamePlaying(false);
  };
  const props = useSpring({
    height: !isGamePlaying ? "50vh" : "30vh",
    from: { height: !isGamePlaying ? "30vh" : "50vh" },
  });
  return (
    <AppWrapper>
      <Nav style={props}>
        <Title>Memory Card game</Title>
        <Credit>By Maurizio Tonelli</Credit>
      </Nav>
      <MemoryCardGame
        isGamePlaying={isGamePlaying}
        startGame={startGame}
        endGame={endGame}
      />
    </AppWrapper>
  );
}

export default App;
