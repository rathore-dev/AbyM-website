import React from 'react';
import lalpath from '../../Image/LALPATH.png';
import hero from '../../Image/HEROMOTOR.png';
import oncquest from '../../Image/ONCQUEST.png';
import vivo from '../../Image/VIVO.png';


function Sixthpage() {
  return (
    <div className='w-full text-white h-96 bg-gradient-to-r from-teal-400 to-blue-500 p-10'>
      <div>
        <h1 className="text-2xl text-center font-thin text-white">CLIENTS</h1>
        <div className="flex justify-center">
          <div className="w-12 h-1 mt-3 bg-red-700 mb-4"></div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center text-4xl mb-5 ">
        Our Esteemed Clients
        </h1>
      </div>
      <div className="flex justify-center text-center ">
        <p className="">
        We take pride in working for brands having remarkable identity
        </p>
      </div>
      
      <div className='flex h-36 justify-between m-7 mr-14 ml-16'>
        <img className=''  src={lalpath} alt="" />
        <img src={hero} alt="" />
        <img src={oncquest} alt="" />
        <img src={vivo} alt="" />
      </div>
    </div>
  )
}

export default Sixthpage
