import React from 'react'

function Aboutsecond() {
  return (
    <div style={{backgroundImage: 'url(https://abym.in/assets/img/bg/why-chose-bg.png)'}} className='flex justify-center flex-col items-center py-12'>
        <div>
            <h1 className='text-4xl font-semibold text-[#3A3737] mb-5 '>Why Choose Us</h1>
        </div>
        <div>
            <p className='text-[#3A3737] text-lg'>AbyM Technology is a rising star in the IT industry. We have created over 500+ Android Apps, 230+ iOS Apps,<br /> and 1000+ Websites for our clients. We have earned a reputation for excellence and innovation in the market.</p>
        </div>

        <div className='flex mt-20 space-x-16'>
            <div className='flex flex-col justify-between p-3 text-[#065885] font-thin '>
                <h1 className='text-6xl'>500+
                <p className='text-2xl font-normal'>Android Apps</p>
                </h1>
                
                <h1 className='text-6xl'>230+
                <p className='text-2xl font-normal'>iOS Apps</p>
                </h1>
                
            </div>
            <div >
                <img className='h-80' src="https://abym.in/assets/img/shape/why-choose-img.png" alt="" />
            </div>
            <div className='ml-5 flex flex-col justify-between p-3 text-[#065885] font-thin'>
                <h1 className='text-6xl'>1000+
                <p className='text-2xl font-normal '>Websites</p>
                </h1>
                
                <h1 className='text-6xl'>1450+
                <p className='text-2xl font-normal'>Happy Clients</p>

                </h1>
            </div>
        </div>
      
    </div>
  )
}

export default Aboutsecond
