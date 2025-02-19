import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home.";
import Statistics from "../components/Statistics";
import Category from "../components/Category";
import Courses from "../components/Courses";
import Form from "../components/Form";
import Faq from "../components/Faq";
import Footer from "../components/Footer/Footer";
function MainLayouts() {
  return (
    <>
      <Navbar />

      <Home />

      <Statistics />

      <Category />

      <Courses />

      <Form />

      <Faq />

      <Footer />


    </>
  )
}

export default MainLayouts