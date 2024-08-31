import React from 'react'

function Service() {
  return (
    <>
    <div id='service-page' className='w-full h-80 flex justify-center text-white items-center' >
        {/* this is for text part  */}
        <div className="ml-32 flex flex-col">
          <h1 className='text-2xl '>WHAT WE OFFER</h1>
          <div className='w-12 h-[2px] bg-blue-500 mt-2' ></div>
        <h1 className='text-3xl mt-5'>OUR APPROACH TO IT SERVICES IN <br />YOUR FIELD</h1>

        <p className='mt-8'>Our IT services are customized to fit your unique situation and <br /> objectives, so you can enjoy the best outcomes and benefits.</p>
          
        </div>
    </div>
    </>
  )
}

export default Service
