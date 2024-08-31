import React from 'react';
import Button from '../Button/Button';

function Rightside({ head , p1 , p2 , background , image1}) {
  return (
    <div className='flex h-[52vh] mt-10'>
        {/* this is textside */}
        <div className='w-1/2 h-[52vh] px-28 py-16'>
          <h1 className='text-3xl text-[#3E3D3D] font-semibold'>{head}</h1>
          <p className='text-[#838b94d3] leading-5 mt-7 text-md'>{p1}</p>
          <p className='text-[#838b94d3]  mt-4 text-md '>{p2}</p>  

            {/* this is button */}
            <Button btntxt={'VISIT WEBSITE'} />
        </div>
        {/* this is img side  */}
        <div className='w-1/2 h-[52vh] '>
            <img className='absolute  py-10 w-[48vw] h-[60vh] right-0' src={background} alt="" />   
            <img className='relative top-20 w-52 ml-[-70px]' src={image1} alt="" />
        </div>
    </div>
  )
}

export default Rightside
