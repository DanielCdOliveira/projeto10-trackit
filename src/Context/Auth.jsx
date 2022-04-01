import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({ token: "", img: "" });
  const [progress,setProgress] = useState({done:5, total:20})
  const [percentage, setPercentage] = useState(progress.done/ progress.total)




   const navigate = useNavigate();
  function logIn(data) {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const promise = axios.post(URL, data);
    promise.then((response) => {
      console.log(response.data);
      setUser({ ...data, token: response.data.token, img: response.data.image });
      navigate("/hoje");
      promise.catch((e) => {
        console.log(e);
      });
    });
  }



  

  return (
    <AuthContext.Provider value={{ user, logIn, progress, setProgress, setPercentage ,percentage}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
