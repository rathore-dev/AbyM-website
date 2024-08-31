import React from 'react'
import Button from '../Button/Button'


function Leftside({ head , p1 , p2 , background , image1 }) {
  return (
    <div id='background-2' className='mt-20 w-full '>
      <div className='flex'>
        {/* this is img side  */}
        <div className='w-1/2 h-[64vh] '>
            <img className='absolute py-10 mt-5 w-[40vw] h-[60vh]' src={background} alt="" />   
            <img className='relative top-32 left-[35vw] w-80 ml-[-90px]' src={image1} alt="" />
        </div>
        {/* this is textside */}
        <div className='w-1/2 h-[64vh] px-20 py-16 ml-[-40px]'>
          <h1 className='text-3xl text-[#3E3D3D] font-semibold'>{head}</h1>
          <p className='text-[#838b94d3] leading-5 mt-7 text-md'>{p1}</p>
          <p className='text-[#838b94d3]  mt-4 text-md '>{p2}</p>  

            {/* this is button */}
            <Button btntxt={'VISIT WEBSITE'} />
        </div>
    </div>  
    </div>
  )
}

export default Leftside
