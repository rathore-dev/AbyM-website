import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Abouthead() {
  return (
    <div style={{backgroundImage: 'url(https://abym.in/assets/img/banner/about-banner.png)', zIndex:"100"}}   >

      <div className=' text-center bg-zinc-800 h-64 text-white py-16 bg-blue-300 bg-opacity-5' >
        <div className=''>
            <h1 className='text-7xl '>About Us</h1>
        </div>
        <div className='flex justify-center items-center space-x-2 py-5 font-semibold'>
        <FaHome />
        <p>Home</p>
        <p><MdOutlineKeyboardArrowRight/></p>
        <p>About</p>

        </div>
      </div>
      
    </div>
  )
}

export default Abouthead

