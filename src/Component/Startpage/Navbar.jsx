import React from 'react'
import { Link } from 'react-router-dom' 

export default function Navbar() {
  return (
    <div className='sticky top-0 z-10' >
<nav className="border-gray-200 dark:bg-[#065885]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to=''>
    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://abym.in/assets/img/logo/logo.png" className="h-[60px] w-[200px]"  alt="AbyM Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div  className="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul  className="font-large flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 items-center ">
        <li>
        <div className='w-3 h-0.5 bg-white hover:w-5 '></div>
        <Link to="">
        <a href="" className="block py-2 px-3  md:border-0 md:p-0">Home
        </a>
        </Link>
        </li>
        <Link to='/about'>
        <li>
          <div className='w-3 h-0.5 bg-white hover:w-5'></div>
          <a href="" className="block py-2 px-3 md:border-0 md:p-0">About Us
          </a>
        </li>
        </Link>
        <Link to='/service'>
        <li>
        <div className='w-3 h-0.5 bg-white hover:w-5'></div>
          <a href="" className="block py-2 px-3 md:border-0 ">Services</a>
        </li>
        </Link>
        <Link to="/portfolio">
        <li>
        <div className='w-3 h-0.5 bg-white hover:w-5'></div>
          <a href="" className="block py-2 px-3 md:border-0 ">Portfolio </a>
        </li>
        </Link>
        <li>
        <div className='w-3 h-0.5 bg-white hover:w-5'></div>
          <a href="" className="block py-2 px-3 md:border-0">Products</a>
        </li>
        
        <button class="demo">Contact Us
        <svg id='right-arrow' class="w-[25px] h-[15px]  dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>

          <svg width="22px" height="22px" className='mt-1 ml-1' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#526569"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#065885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
