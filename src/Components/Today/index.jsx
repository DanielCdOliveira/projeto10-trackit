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
  const { progress, setProgress, setPercentage, percentage } =
    useContext(AuthContext);
  const [todayHabits, setTodayHabits] = useState([]);
  const user =JSON.parse(localStorage.getItem("userData"));

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
      progress.total = response.data.length;
      progress.done = 0;
      response.data.forEach((item) => {
        if (item.done) {
          progress.done += 1;
        }
      });
      setProgress({ ...progress });
      setPercentage(progress.done / progress.total);
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
        {progress.done > 0 ? (
          <h3 className="subtitle green">
            {percentage * 100}% dos hábitos concluídos
          </h3>
        ) : (
          <h3 className="subtitle">Nenhum hábito concluído ainda</h3>
        )}
      </Title>
      <ul>
        {todayHabits.map((item) => (
          <HabitsToday key={item.id} item={item} refreshData={refreshData} />
        ))}
      </ul>
      <Footer />
    </Main>
  );
}
const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  .subtitle {
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
  .green {
    color: #8fc549;
  }
`;

export default Today;
