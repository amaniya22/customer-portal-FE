import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import "./index.css";
import LoginForm from "./pages/SignUp/LoginForm/loginForm.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth">
          <Route exact path="/auth/sign-up" element={<SignUp />} />
          <Route exact path="/auth/login" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
