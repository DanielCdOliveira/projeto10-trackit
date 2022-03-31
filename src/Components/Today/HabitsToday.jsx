import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../Context/Auth";

import { BsCheckSquareFill } from "react-icons/bs";

function HabitsToday({ item }) {
  






  return (
    <Habit >
      <div className="info">
        <h4>{item.name}</h4>
        <p>
          Sequência atual:<span> {item.currentSequence}</span>
        </p>
        <p>
          Seu recorde:<span> {item.highestSequence}</span>
        </p>
      </div>
      <div className="check">
        <BsCheckSquareFill />
      </div>
    </Habit>
  );
}

const Habit = styled.li`
  padding: 14px;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  color: var(--text);

  h4 {
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 7px;
  }
  p {
    font-size: 13px;
    line-height: 16px;
  }
  svg{
    font-size: 70px;
  }
`;

export default HabitsToday;
