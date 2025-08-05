import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import PATHS from "./routes/path.js"
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.AUTH}>
          <Route exact path={PATHS.SIGNUP} element={<SignUp />} />
          <Route exact path={PATHS.LOGIN} element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
