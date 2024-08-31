import React from 'react'
import facebook from '../../Image/facebook.svg';
import insta from "../../Image/insta.svg";
import tweeter from '../../Image/tweeter.svg';
import linkedin from '../../Image/linkedin.svg';

function Footer() {
  return (
   <>
     
    <div id='footer-box' className=" relative flex justify-between w-[72vw] h-[16vh] ml-48 border-2 items-center bg-[#065885] rounded-xl px-10 mt-10">
        <div className="text-white">
          <h1 className="text-2xl font-semibold">GET FREE CONSULT FROM EXPERTS</h1>
          <p> Professional service for your software solutions</p>
        </div>
        {/* this div is for button */}
        <div>
        <button className="w-32 h-12 mr-10  bg-[#065885] rounded-md text-white hover:text-[#065885] hover:bg-white hover:border-[#065885] border-2">GET START</button>
        <button className="w-32 h-12 mr-10  bg-white rounded-md text-[#065885] hover:text-white hover:bg-[#065885] hover:border-white border-2 border-[#065885]">CALL US</button>
        </div>
      </div>
      
    <div id='footer'> 
      {/* ----- */}
      <div className="flex justify-between leading-8 p-20 px-32 ">
         
         <div>
            <ul>
                <li className='text-xl'>COMPANY INFO</li>
                <div className='font-thin mt-3'>
                <li>About us </li>
                <li>Introduction</li>
                <li>Brand Story</li>
                </div>
            </ul>
         </div>

         <div>
            <ul>
                <li className='text-xl'>DESIGN</li>
                <div className='font-thin mt-3'>
                <li>Development</li>
                <li>Digital Marketing</li>
                <li>IT Consulting Services</li>
                <li>DevOps</li>
                <li>Resource</li>
                <li>Content Writing</li>
                <li>Server Suport</li>
                <li>Industries</li>
                </div>
            </ul>
         </div>

         <div>
            <ul>
                <li className='text-xl'>INDUSTRIES </li>
                <div className='font-thin mt-3'>
                <li>Healthcare</li>
                <li>eCommerce</li>
                <li>Education</li>
                <li>Wellness</li>
                <li>Tour & Travel</li>
                <li>Skill Development</li>
                <li>Entertainment / Media</li>
                <li>Games</li>
                <button className='text-blue-500'>More...</button>
                </div>
            </ul>
         </div>

         <div>
            <ul>
                <li className='text-xl'>PORTFOLIO</li>
                <div className='font-thin mt-3'>
                <li>Lal path Labs</li>
                <li>Oncquest Labs</li>
                <li>Admissify</li>
                <li>HSBP Salon</li>
                <li>GO Contest</li>
                <li>Vcare</li>
                <li>Divine Beauty</li>
                <li>Holisol</li>
                <button className='text-blue-500'>More...</button>
                </div>
            </ul>
         </div>

         <div>
            <ul>
                <li className='text-xl'   >OTHER</li>
                <div className='font-thin mt-3'>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
                </div>

                <div className='flex mt-10 space-x-1 h-8'>
                  <img src={facebook} alt=''/>
                  <img src={insta} alt="" />
                  <img src={tweeter} alt="" />
                  <img src={linkedin} alt="" />
                </div>
            </ul>
         </div>

      </div>
    </div>
    
    <div className='flex justify-between px-28  text-zinc-600 h-8 items-center'>
         <div>
           <p className='font-thin'>Copyright © 2024 AbyM. Full stack mobile (iOS, Android) and web app design and development agency</p> 
         </div>
         <div className='flex font-thin list-none  space-x-5'>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
         </div>
      </div>
    </>
  )
}

export default Footer
