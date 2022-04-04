import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../Utilities/Header";
import Main from "../../Utilities/Main";
import NewHabit from "./NewHabit";
import Footer from "../../Utilities/Footer";

import { BsPlusSquareFill } from "react-icons/bs";
import ShowMyHabits from "./ShowMyHabits";

function Habits() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [addHabit, setAddHabit] = useState(false);
  const [myHabits, setMyHabits] = useState([]);
  const [text, setText] = useState();

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
      setText(
        "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
      );
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
      <NewHabit
        addHabit={addHabit}
        setAddHabit={setAddHabit}
        setMyHabits={setMyHabits}
      />
      <ul>
        {myHabits.length > 0 ? (
          myHabits.map((item, index) => (
            <ShowMyHabits key={index} item={item} setMyHabits={setMyHabits} />
          ))
        ) : (
          <p>{text}</p>
        )}
      </ul>
      <Footer />
    </Main>
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
    color: #126ba5;
  }
  svg {
    color: var(--highlight-color);
    font-size: 30px;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
`;

export default Habits;
