import React from 'react';
import Option from '../Optionselect/Option';
import Button from '../Button/Button';


function Leftcard({ head , h1 , p1 , h2 , absolute , relative , option1 , option2 , option3  }) {
  return (
    <>
      <div className='flex justify-between '>
        <div id='right-background' className='w-1/2 px-28 p-4' >
          <img className='absolute w-[40vw] h-[64vh] ' src={absolute} alt="" />
          <img className='relative w-[36vw] mt-16 ml-12' src={relative} alt="" />
        </div>
        <div className='w-1/2 py-16 px-8'>
          <h1 className="text-2xl text-zinc-600  mb-2">{ head }</h1>
            <div className="w-40 h-[1.5px] bg-red-500 mb-3"></div>
            <h2 className="text-lg mb-5 font-semibold text-[#3E3D3D]">{ h1 }</h2>
            <p className="text-[#717F8D] leading-7 text-[18px] ">
            { p1 }
            </p>
            <h2 className="text-lg mb-5 mt-5 font-semibold text-[#3E3D3D]">{ h2 }</h2>
            {/* this is option to select */}
            <Option
              option1={option1}
              option2={option2}
              option3={option3}
            />
               
            {/* imported from btn */}
            <Button btntxt={"VALIDATE YOUR PRODUCT IDEA"} />
        </div>
    </div>

    </>
  )
}

export default Leftcard
