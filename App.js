import React, { useContext } from "react";
import "./App.css";
import Dialog from "./Components/Profile/Dialog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Upload from "./Components/Home.js/Upload";
import { authContext } from "./Context/authContext";

function App() {
  const { token } = useContext(authContext);
  console.log("It is pushed....");
  return (
    <div className="AppContainer">
      <BrowserRouter>
        <Routes>
          {token && <Route path="/home" element={<Upload />} />}
          <Route path="/" element={<Dialog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
