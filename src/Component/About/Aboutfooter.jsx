import React from 'react'

function Aboutfooter() {
  return (
    
    <div style={{backgroundImage: 'url(https://abym.in/assets/img/bg/solution-bg.png)'}}
    className='flex px-32 py-16 w-full mb-24 '>
        <div className='text-white'>
            <h1 className="text-2xl  mb-2">WHAT WE OFFER</h1>
            <div className="w-12 h-[2px] bg-white mb-3"></div>
            <h2 className="text-4xl mb-5">
            OUR APPROACH TO IT SERVICES IN YOUR FIELD
            </h2>
            <p className="">
            Our IT services are customized to fit your unique situation and objectives, so you can enjoy the best <br /> outcomes and benefits.
            </p>
        </div>
        <div className='ml-32 '>
            <img className='h-52' src="https://abym.in/assets/img/post/solution-img.png" alt="" />
        </div>
    </div>
  )
}

export default Aboutfooter
