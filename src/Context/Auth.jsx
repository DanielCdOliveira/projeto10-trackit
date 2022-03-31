import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({ token: "", img: "" });
  const navigate = useNavigate();

  function logIn(data) {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const promise = axios.post(URL, data);
    promise.then((response) => {
      console.log(response.data);
      setUser({ ...data, token: response.data.token, img: response.data.image });
      navigate("/habitos");
      promise.catch((e) => {
        console.log(e);
      });
    });
  }

  return (
    <AuthContext.Provider value={{ user, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
