import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/Auth";

import logo from "./../../assets/logo.png";
import Container from "./../../Utilities/Container.jsx";
import { ThreeDots } from "react-loader-spinner";

function Start() {
  const { logIn } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisbled] = useState(false);


  if(localStorage.length>0){
    logIn(JSON.parse(localStorage.getItem("user")))
  }

  function login(e) {
    setDisbled(true);
    e.preventDefault();
    logIn(data, setDisbled);
  }
  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={login}>
        <input
          disabled={disabled}
          type="email"
          name=""
          id="email-login"
          placeholder="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          disabled={disabled}
          type="password"
          name=""
          id="senha-login"
          placeholder="senha"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button disabled={disabled} type="submit">
          {disabled ? (
            <ThreeDots color="#FFF" height={13} width={50} />
          ) : (
            "Entrar"
          )}
        </button>
      </form>
      <Link to={"/cadastro"}>
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

export default Start;
