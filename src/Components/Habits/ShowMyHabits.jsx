import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../../Context/Auth";
import { useContext } from "react";
import { BsTrash } from "react-icons/bs";

function ShowMyHabits({ item, setMyHabits }) {
  const { user, progressBar } = useContext(AuthContext);
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function deleteHabit(id) {
    if (window.confirm("Tem certeza que deseja remover este hábito?")) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        config
      );
      promise.then(() => {
        const promise = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          config
        );

        promise.then((response) => {
          progressBar();
          setMyHabits(response.data);
        });
        promise.catch((response) => {
          console.log(response);
        });
      });
      promise.catch((response) => {
        console.log(response);
      });
    }
    console.log(id);
  }

  return (
    <Habit>
      <h4>{item.name}</h4>
      <ul>
        {week.map((day, index) => {
          let css = item.days.indexOf(index) > -1 ? "day selected" : "day";
          return (
            <li key={index + 565} className={css}>
              {day}
            </li>
          );
        })}
      </ul>
      <BsTrash
        onClick={() => {
          deleteHabit(item.id);
        }}
      />
    </Habit>
  );
}

const Habit = styled.li`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 15px 30px 15px 15px;
  justify-content: center;
  position: relative;
  word-break: break-all;
  .day {
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cfcfcf;
    margin-right: 4px;
  }
  h4 {
    color: var(--text);
    margin-bottom: 8px;
  }
  .selected {
    background-color: #cfcfcf;
    color: #fff;
  }
  ul {
    display: flex;
  }
  svg {
    position: absolute;
    font-size: 15px;
    right: 10px;
    top: 11px;
    color: var(--text);
  }
  p {
    color: var(--text);
    font-size: 18px;
  }
`;

export default ShowMyHabits;
