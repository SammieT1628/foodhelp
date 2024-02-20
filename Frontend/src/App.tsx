import { Routes, Route } from "react-router-dom"
import Home from "./MainArea/Home"
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/NavBar"
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div  className='flex flex-wrap'>
      <Navbar />
      <Sidebar />
      <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
      </div>
    </div>
  )
}

export default App