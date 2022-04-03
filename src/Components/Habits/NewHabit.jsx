import { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import Days from "./Days";
import { AuthContext } from "../../Context/Auth";
import { ThreeDots } from  'react-loader-spinner'

function NewHabit(props) {
  const { user , progressBar} = useContext(AuthContext);
  const { addHabit, setAddHabit, setMyHabits } = props;
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [days, setDays] = useState([]);
  const [habit, setHabit] = useState("");
  const [disabled, setDisbled] = useState(false)
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
    setDisbled(true)
    const data = { name: habit, days: days };
    console.log(data);
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      data,
      config
    );
    promise.then((response) => {
      const promise2 = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      );
      setDisbled(false)
      setDays([]);
      setHabit("");
        progressBar()
      promise2.then((response) => {
        setMyHabits(response.data);
      });
      promise2.catch((response) => {
        console.log(response);
      });
    });
    promise.catch((response) => {
      setDisbled(false)
      alert("Não foi possível concluir a ação!")
      console.log(response);
    });
  }

  if (addHabit) {
    return (
      <New>
        <input
        disabled={disabled}
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
          <button disabled={disabled} onClick={() => cancel()} className="cancel">
            Cancelar
          </button>
          <button disabled={disabled} onClick={() => save()} className="save">
          {disabled ? 	<ThreeDots color="#FFF" height={11} width={43} />:"Entrar"}
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;

export default NewHabit;
