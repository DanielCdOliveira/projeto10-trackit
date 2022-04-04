import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../Start";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import History from "../History";
import GlobalStyle from "../../assets/css/globalStyles";
import AuthProvider from "../../Context/Auth";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/cadastro" element={<Register />}></Route>
          <Route path="/habitos" element={<Habits />}></Route>
          <Route path="/hoje" element={<Today />}></Route>
          <Route path="/historico" element={<History />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
