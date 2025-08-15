import React, { useEffect } from "react";
import Router from "./routes/index.jsx";
import { useDispatch } from "react-redux";
import { refreshTokenThunk } from "./redux/slices/userAuthSlice.js";
import "./index.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshTokenThunk());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
