import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";

function Button(props) {
  return (
    <div className='px-4 py-10'>
      <button className='flex items-center border-2 border-[#065885] px-4 py-2 rounded-lg justify-between text-[#065885]'>{props.btntxt} <BsArrowRightCircle className='ml-5 text-2xl'  /> </button>
    </div>
  )
}

export default Button
