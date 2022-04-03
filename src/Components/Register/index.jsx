import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import logo from "./../../assets/logo.png";
import Container from "./../../Utilities/Container.jsx";
import { ThreeDots } from  'react-loader-spinner'

function Register() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
  const [disabled, setDisbled] = useState(false);
  const navigate = useNavigate();

  function newRegister(e) {
    console.log(data)
    setDisbled(true)
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, data);
    promise.then((e) => {
      console.log(e);
      navigate("/");
    });
    promise.catch((e) => {
      setDisbled(false)
      console.log(e.data);
    });
  }

  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={newRegister}>
        <input
          disabled={disabled}
          type="email"
          name=""
          id="email"
          placeholder="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          disabled={disabled}
          type="password"
          name=""
          id="password"
          placeholder="senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          disabled={disabled}
          type="text"
          name=""
          id="name"
          placeholder="nome"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          disabled={disabled}
          type="url"
          name=""
          id="image"
          placeholder="foto"
          onChange={(e) => setData({ ...data, image: e.target.value })}
        />
        <button disabled={disabled} type="submit">{disabled ? 	<ThreeDots color="#FFF" height={13} width={50} />:"Cadastrar"}</button>
      </form>
      <Link to={"/"}>
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

export default Register;
