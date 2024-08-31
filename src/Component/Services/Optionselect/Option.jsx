import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs"; 


function Option(props) {
  return (
    <div>
     <div className='flex flex-col space-y-2 text-zinc-600 mb-9 leading-10 w-80'>
                    <div className='flex justify-between items-center text-lg font-thin'>
                        <h1>{props.option1}</h1>
                        <BsArrowRightCircle className='ml-5 text-2xl'  />
                    </div>
                    <div className='flex justify-between items-center text-lg font-thin'>
                        <h1>{props.option2}</h1>
                        <BsArrowRightCircle className='ml-5 text-2xl'  />
                    </div>
                    <div className='flex justify-between items-center text-lg font-thin'>
                        <h1>{props.option3}</h1>
                        <BsArrowRightCircle className='ml-5 text-2xl'  />
                    </div>
                </div>
    </div>
  )
}

export default Option
