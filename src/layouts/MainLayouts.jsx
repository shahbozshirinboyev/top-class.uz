import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home.";
import Statistics from "../components/Statistics";
function MainLayouts() {
  return (
    <>
      <Navbar />

      <Home />
      
      <Statistics />


    </>
  )
}

export default MainLayouts