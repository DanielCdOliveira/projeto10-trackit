import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../Context/Auth";
import { BsCheckSquareFill } from "react-icons/bs";

function HabitsToday({ item, refreshData }) {
  const { user, progress, setProgress, setPercentage } =
    useContext(AuthContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  let css = item.done ? "check" : "";
  let current = (item.currentSequence > 0)? "streak" :""
  let equal = (item.currentSequence !==0 && item.currentSequence === item.highestSequence) ? "streak" : ""

  function check(id, done) {
    if (done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        null,
        config
      );
      promise.then((response) => {
        progress.done -= 1;
        setPercentage(progress.done / progress.total);
        setProgress({ ...progress });
        refreshData();
        console.log(response);
      });
      promise.catch((response) => {
        console.log(response);
      });
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        null,
        config
      );
      promise.then((response) => {
        progress.done += 1;
        setPercentage(progress.done / progress.total);
        setProgress({ ...progress });
        refreshData();
        console.log(response);
      });
      promise.catch((response) => {
        console.log(response);
      });
    }
   
  }

  return (
    <Habit current={item.currentSequence} highest={item.highestSequence}>
      <div className="info">
        <h4>{item.name}</h4>
        <p>
          Sequência atual:<span className={current}> {item.currentSequence}</span>
        </p>
        <p>
          Seu recorde:<span className={equal}> {item.highestSequence}</span>
        </p>
      </div>
      <div>
        <BsCheckSquareFill
          className={`check-box ${css}`}
          onClick={() => check(item.id, item.done)}
        />
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
  svg {
    font-size: 70px;
  }
  .check {
    color: #8fc54a;
  }
  .streak{
    color:#8FC549
  }
`;

export default HabitsToday;
