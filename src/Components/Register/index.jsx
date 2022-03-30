import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import logo from "./../../assets/logo.png";
import Container from "./../../Utilities/Container.jsx";


function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
  const navigate = useNavigate()
  function newRegister(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, data);
    promise.then((e) =>{console.log(e)
    navigate("/")})
    promise.catch((e) =>{console.log(e)})
  }

  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={newRegister}>
        <input
          type="email"
          name=""
          id="email"
          placeholder="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          type="text"
          name=""
          id="name"
          placeholder="nome"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="url"
          name=""
          id="image"
          placeholder="foto"
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to={"/"}>
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

export default Register;
