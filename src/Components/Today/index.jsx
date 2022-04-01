import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../../Utilities/Header";
import Main from "../../Utilities/Main";
import FormatDate from "./FormatDate";

import { AuthContext } from "../../Context/Auth";
import HabitsToday from "./HabitsToday";
import Footer from "../../Utilities/Footer";

function Today() {
  const { user } = useContext(AuthContext);
  const [todayHabits, setTodayHabits] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((response) => {
      setTodayHabits(response.data);
    });
    promise.catch((response) => {
      console.log(response);
    });
  }, []);

  function refreshData() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((response) => {
      setTodayHabits(response.data);
    });
    promise.catch((response) => {
      console.log(response);
    });
  }

  return (
    <Main>
      <Header image={user.img} />
      <Title>
        <FormatDate />
        <h3></h3>
      </Title>
      <ul>
        {todayHabits.map((item) => (
          <HabitsToday key={item.id} item={item} refreshData={refreshData} />
        ))}
      </ul>
      <Footer/>
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
  ul {
    margin-top: 28px;
  }
`;

export default Today;
