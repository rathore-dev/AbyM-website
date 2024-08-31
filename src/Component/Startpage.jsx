import React from 'react'
import Navbar from "./Startpage/Navbar";
import Firstpage from "./Startpage/Firstpage";
import Pagecount from './Startpage/Pagecount';
import Second from './Startpage/Second';
import Thirdpage from './Startpage/Thirdpage';
import Fourthpage from './Startpage/Fourthpage';
import Fifthpage from './Startpage/Fifthpage';
import Sixthpage from './Startpage/Sixthpage';
import Testimonials from './Startpage/Testimonials';
import Consultation from './Startpage/Consultation';
import Footer from './Startpage/Footer';




function Startpage() {
  return (
    <>
      {/* <Navbar /> */}
      <Firstpage />
      <Pagecount />
      <Second />
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
      <Sixthpage />
      <Testimonials />
      <Consultation  />
      {/* <Footer /> */}

    </>
  )
}

export default Startpage
