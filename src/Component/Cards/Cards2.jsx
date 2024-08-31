import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Cards2({name , desc , img}) {
  return (
    <div className='mr-10 mt-10'>
        
         <div className="w-72 h-80 shadow-2xl rounded-2xl p-6">
      <div>
        <div className='w-10 mb-3 bg-slate-400'><img src={img} alt="" /></div>
        <h1 className='text-xl'>{name}</h1>
      </div>
      <p className="mt-5">{desc}</p>
        <div className='w-10 h-10 rounded-full bg-pink-700 top-1/2 p-3 text-white mt-10 ml-48 cursor-pointer'>
        <FaArrowRightLong/>
        </div>
    </div>
   
      
    </div>
  )
}

export default Cards2
