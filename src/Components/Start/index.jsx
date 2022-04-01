import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { AuthContext } from "../../Context/Auth";

import logo from "./../../assets/logo.png";
import Container from "./../../Utilities/Container.jsx"

function Start() {
  const {logIn} = useContext(AuthContext)
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  
  function login(e) {
    e.preventDefault();
    logIn(data)
  }
  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={login}>
        <input type="email" name="" id="email-login" placeholder="email" onChange={(e) => setData({ ...data, email: e.target.value })}/>
        <input type="password" name="" id="senha-login" placeholder="senha"onChange={(e) => setData({ ...data, password: e.target.value })}/>
        <button type="submit">Entrar</button>
      </form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

export default Start;