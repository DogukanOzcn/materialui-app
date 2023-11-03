import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn/SignIn";
import BottomNavi from "./components/BottomNavi"
import "./index.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    
  );
}

export default App;
