import { useContext } from "react";
import styled from "styled-components";

import Header from "../../Utilities/Header";
import Main from "../../Utilities/Main";
import Footer from "../../Utilities/Footer";
import { AuthContext } from "../../Context/Auth";
function History() {
  const { user } = useContext(AuthContext);
  return (
    <Main>
      <Header image={user.img} />
      <Text>
        <h2>Histórico</h2>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      </Text>

      <Footer />
    </Main>
  );
}

const Text = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 17px;
  }
  h3 {
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;

export default History;
