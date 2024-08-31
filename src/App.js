
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Startpage/Navbar";
import Footer from "./Component/Startpage/Footer";







function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
     </>
  );
}

export default App;
