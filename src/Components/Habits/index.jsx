import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../Utilities/Header";
import Main from "../../Utilities/Main";
import NewHabit from "./NewHabit";
import { AuthContext } from "../../Context/Auth";

import { BsPlusSquareFill } from "react-icons/bs";

function Habits() {
  const [addHabit, setAddHabit] = useState(false);
  const { user } = useContext(AuthContext);

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
      console.log(response);
    });
    promise.catch((response) => {
      console.log(response);
    });
  }, []);

  function toggle() {
    setAddHabit(true);
  }

  return (
    <>
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
        <NewHabit addHabit={addHabit} setAddHabit={setAddHabit} />
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
    font-size: 23px;
    line-height: 29px;
    color: var(--highlight-color);
  }
  svg {
    color: #52b6ff;
    font-size: 30px;
  }
`;

export default Habits;
