import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../Utilities/Header";
import Main from "../../Utilities/Main";
import NewHabit from "./NewHabit";
import Footer from "../../Utilities/Footer";
import { AuthContext } from "../../Context/Auth";

import { BsPlusSquareFill } from "react-icons/bs";
import ShowMyHabits from "./ShowMyHabits";

function Habits() {
  const { user } = useContext(AuthContext);
  const [addHabit, setAddHabit] = useState(false);
  const [myHabits, setMyHabits] = useState([]);
 
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
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
  }, []);
 
  
  function toggle() {
    setAddHabit(true);
  }


  
    return (
      <Main>
        <Header image={user.img} />
        <Title>
          <h2>Meus hábitos</h2>
          <BsPlusSquareFill
            onClick={() => {
              toggle();
            }}
          />
        </Title>
        <NewHabit addHabit={addHabit} setAddHabit={setAddHabit} setMyHabits={setMyHabits}/>
        <ul>
          {myHabits.map((item,index,) => (
            <ShowMyHabits key={index}item={item} setMyHabits={setMyHabits} />
          ))}
        </ul>
        <Footer />
      </Main>)
  
  
}

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  svg {
    color: var(--highlight-color);
    font-size: 30px;
  }
  ul{
    display: flex;
    flex-direction: column;
  }
`;

export default Habits;
