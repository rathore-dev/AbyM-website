import React from "react"; 
import Certificate from '../../Image/certificate-icon.png';
import Award from '../../Image/award-icon.png';
import Button from "../Button/Button";

 
export default function Second() {
  return (
    <>
      <div className="flex">
        <div className="h-[90vh] w-1/2">
          <div>
            <img className="m-16 h-[600px] absolute" src="https://abym.in/assets/img/post/1.png" alt=""/>
          </div>
          <div >
            <h1
              id="blue-circle"
              className="relative top-60 left-60 bg-blue-900 w-56 h-56 flex justify-center items-center rounded-full "
            >
              15 Years of <br /> Experiance in <br />
              IT Services
            </h1>
          </div>
        </div>

        <div className=" w-1/2 h-[70vh] ">
          <div className="py-20">
            <h1 className="text-2xl text-blue-900 mb-2">WHO WE ARE </h1>
            <div className="w-12 h-1 bg-red-500 mb-3"></div>
            <h2 className="text-4xl mb-5">Trusted Partner for </h2>
            <h1 className="text-7xl mb-5">IT Industry</h1>
            <p className="text-[#717F8D] ">
              AbyM Technology is a certified and award winning IT company. We
              have been acclaimed for our IT work since 2010. We deliver the
              best IT solutions in Android, iOS, and web development
            </p>
            
            
            <div className="flex mt-8">
              <img className="w-" src={Certificate} alt="img"/>
              <h1 className="ml-8 text-[#072B3E] text-[20px] font-thin">Certified Company
              <p className="mt-1 text-sm text-[#717F8D]">Certified IT company with proven quality, security, speed. Best IT solutions for <br /> your business.</p>
              </h1> 
            </div>

            <div className=" flex flex-row ">
              <img className='mt-8' src={Award} alt="" />
              <h1 className="ml-8 mt-9 text-[#072B3E]">Award Winning
                <p className="text-[#717F8D]">Certified, award winning IT company since 2010. Best IT solutions in Android, <br /> iOS, web development</p>
              </h1>

            </div>
            <div className="flex mt-10 mr-10">
              <button className="w-32 h-12 mr-10  bg-[#065885] rounded-md text-white hover:text-[#065885] hover:bg-white hover:border-[#065885] border-2">GET START</button>

              <Button/>
              <p className="mt-3 ml-5 font-thin hover:text-blue-700 cursor-pointer">KNOW MORE</p> 
            </div>

 

          </div>
        </div>
        
      </div>
    </>
  );
}
