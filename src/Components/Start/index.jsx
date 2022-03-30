import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import logo from "./../../assets/logo.png";
import Container from "./../../Utilities/Container.jsx"

function Start() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const promise = axios.post(URL, data);
    promise.then((e) =>{console.log(e)
    navigate("/habitos")})
    promise.catch((e) =>{console.log(e)})
  }
  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={login}>
        <input type="email" name="" id="" placeholder="email" onChange={(e) => setData({ ...data, email: e.target.value })}/>
        <input type="password" name="" id="" placeholder="senha"onChange={(e) => setData({ ...data, password: e.target.value })}/>
        <button type="submit">Entrar</button>
      </form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

export default Start;