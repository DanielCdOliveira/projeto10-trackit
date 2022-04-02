import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({ token: "", img: "" });
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [percentage, setPercentage] = useState(progress.done / progress.total);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  const navigate = useNavigate();

  function logIn(data) {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const promise = axios.post(URL, data);
    promise.then((response) => {
      console.log(response.data);
      setUser({
        ...data,
        token: response.data.token,
        img: response.data.image,
      });
      navigate("/hoje");
    });
    promise.catch((e) => {
      console.log(e);
    });
  }

function progressBar (){
    const promise2 = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise2.then((response) => {
      progress.total = response.data.length;
      progress.done = 0;
      response.data.forEach((item)=>{
        if(item.done){
          progress.done += 1
        }
      })
      if(progress.total === 0){
        setPercentage(0)
      }else{
        setPercentage(progress.done / progress.total);
      }
      setProgress({ ...progress });
    });
    promise2.catch((response) => {
      console.log(response);
    });
  }

  // function getLength() {
  //   const promise2 = axios.get(
  //     "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
  //     config
  //   );
  //   setProgress({ ...progress, done: 0 });
  //   promise2.then((response) => {
  //     progress.total = response.data.length;

  //     setProgress({ ...progress });
  //   });
  //   promise2.catch((response) => {
  //     console.log(response);
  //   });
  // }

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        progressBar,
        progress,
        setProgress,
        setPercentage,
        percentage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
