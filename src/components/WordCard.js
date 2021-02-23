import React, { Component } from "react";
import styled from "styled-components";
import "../assets/fonts.css";

const Card = styled.button`
  width: 15%;
  font-family: "Noto Sans JP", sans-serif;
  padding: 20px 10px;
  border: 1px solid #aaa;
  border-radius: 10px;
  margin: 10px;
  font-size: 1.2em;
  background-color: white;
  box-shadow: 10px 8px #666;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
    transform: translateY(-5px) translateX(5px);
  }
`;

class WordCard extends Component {
  render() {
    return (
      <Card onClick={() => this.props.playRound(this.props.word)}>
        {this.props.word}
      </Card>
    );
  }
}

export default WordCard;
