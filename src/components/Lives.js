import React, { Component } from "react";
import { AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const Heart = styled.i`
  font-size: 2em;
  margin: 20px 5px;
`;

class Lives extends Component {
  render() {
    const Heart1 = styled(Heart)`
      color: ${this.props.lives >= 1 ? "red" : "#ccc"};
    `;
    const Heart2 = styled(Heart)`
      color: ${this.props.lives >= 2 ? "red" : "#ccc"};
    `;
    const Heart3 = styled(Heart)`
      color: ${this.props.lives >= 3 ? "red" : "#ccc"};
    `;
    return (
      <div>
        <Heart1>
          <AiFillHeart />
        </Heart1>
        <Heart2>
          <AiFillHeart />
        </Heart2>
        <Heart3>
          <AiFillHeart />
        </Heart3>
      </div>
    );
  }
}

export default Lives;
