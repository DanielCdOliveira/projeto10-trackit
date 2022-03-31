import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import Days from "./Days";
import { AuthContext } from "../../Context/Auth";

function NewHabit(props) {
  const { user } = useContext(AuthContext);
  const { addHabit, setAddHabit, setMyHabits } = props;
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [days, setDays] = useState([]);
  const [habit, setHabit] = useState("");
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  function cancel() {
    setAddHabit(false);
    setDays([]);
    setHabit("");
  }
  function save() {
    const data = { name: habit, days: days };
    console.log(data);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      data,
      config
    );
    promise.then((response) => {
      const promise = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      );

      promise.then((response) => {
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

  if (addHabit) {
    return (
      <New>
        <input
          type="text"
          name=""
          id=""
          placeholder="nome do hábito"
          value={habit}
          onChange={(e) => {
            setHabit(e.target.value);
          }}
        />
        <Days week={week} days={days} setDays={setDays} />
        <div className="buttons">
          <button onClick={() => cancel()} className="cancel">
            Cancelar
          </button>
          <button onClick={() => save()} className="save">
            Salvar
          </button>
        </div>
      </New>
    );
  } else {
    return <></>;
  }
}

const New = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;

  input {
    width: 88%;
    height: 45px;
    margin-bottom: 8px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    padding-left: 11px;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    width: 88%;
    font-size: 16px;
    line-height: 20px;
  }
  .cancel {
    width: 70px;
    height: 35px;
    background-color: #fff;
    color: var(--highlight-color);
    border: none;
  }
  .save {
    width: 85px;
    height: 35px;
    border: none;
    background-color: var(--highlight-color);
    color: #fff;
    border-radius: 5px;
    margin-left: 18px;
  }
`;

export default NewHabit;
