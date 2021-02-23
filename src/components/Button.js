import React from "react";
import styled from "styled-components";
import "../assets/fonts.css";

const SButton = styled.button`
  background-color: white;
  border: 1 px solid #333;
  font-family: "DotGothic16", sans-serif;
  font-size: 2em;
  width: 20%;
  &:hover {
    transform: scale(1.05);
    background-color: #ccc;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return <SButton onClick={props.onClick}>{props.children}</SButton>;
};

export default Button;
