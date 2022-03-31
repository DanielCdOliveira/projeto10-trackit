// import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
// import { BsPlusSquareFill } from "react-icons/bs";
// import axios from "axios";
import Days from "./Days";

function NewHabit(props) {
  const { addHabit, setAddHabit } = props;
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [days,setDays] = useState([])
  

  function cancel(){
    setAddHabit(false)
    setDays([])
  }
  function save(){

  }



  if (addHabit) {
    return (
      <New>
        <input type="text" name="" id="" placeholder="nome do hábito" />
        <Days week={week} days={days} setDays={setDays}/>
        <div className="buttons">
          <button onClick={()=>cancel()} className="cancel">Cancelar</button>
          <button className="save">Salvar</button>
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
  background-color: red;
  

  input {
    width: 88%;
    height: 45px;
    margin-bottom: 8px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
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
