import { Routes, Route } from "react-router-dom"
import Home from "./Components/MainArea/Home"
import Navbar from "./Components/Navbar/NavBar"
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Sidebar/Profile";

function App() {

  return (
    <div  className='flex flex-wrap bg-dark-blue text-white'>
      <Navbar />
      <Sidebar />
      <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="profile" element= { <Profile />} />
      </Routes>
      </div>
    </div>
  )
}

export default App