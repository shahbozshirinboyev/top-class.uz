import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
function MainLayouts() {
  return (
    <>
      <Navbar />
      <img src="annie-spratt-R33HNllqgHs-unsplash.jpg" alt="" />
      <div>MainLayouts</div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  )
}

export default MainLayouts