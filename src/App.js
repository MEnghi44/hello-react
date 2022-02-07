import React, { useState } from "react";
import Axios from "axios";
import Type from "./pages/Type";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

const App = () => {
  const [km, setkm] = useState([]);

  const getkm = () => {
    Axios.get("http://localhost:3000/km").then((response) => {
      setkm(response.data);
    });
  };

  return (
    <Router>
      <Navbar />
      <div className="container  mx-auto">
        <Routes>
          <Route path="/" element={<Home handledOnLoad={getkm} km={km} />} />
          <Route path="/Type" element={<Type />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
