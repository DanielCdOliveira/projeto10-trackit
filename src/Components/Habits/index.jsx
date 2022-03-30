import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../Utilities/Header";  
import Main from "../../Utilities/Main";
import NewHabit from "./NewHabit";

import { BsPlusSquareFill } from "react-icons/bs";


function Habits() {
  const { image, token } = useLocation().state;
  const [addHabit, setAddHabbit] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config
    );

    promise.then((response) => {
      console.log(response)
    });
    promise.catch((response) => {
      console.log(response)
    });

  }, []);

function toggle(){
  if(addHabit)setAddHabbit(false)
  else setAddHabbit(true)
}
    
  

  return (
    <>
      <Main>
        <Header image={image} />
        <Title>
          <h2>Meus hábitos</h2>
          <BsPlusSquareFill onClick={()=>{toggle()}}/>
        </Title>
        <NewHabit addHabit={addHabit} setAddHabbit={setAddHabbit}/>
      </Main>
    </>
  );
}

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: var(--highlight-color);
  }
  svg {
    color: #52b6ff;
    font-size: 30px;
  }
`;

export default Habits;
