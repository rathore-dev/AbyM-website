import React from 'react'

function Portfolio() {
  return (
    <>
      <div id='portfolio-bg' className='flex text-white '>
        {/* this is your text area  */}
        <div className='w-[60%] h-[52vh] px-28 py-16 '>
          <h1 className='text-5xl font-semibold'>Our Portfolio</h1>
          <h1 className='text-7xl mb-10 font-semibold' >See our amazing <br /> work</h1>
          <hr className='w-[40vw]' />
          <p className='mt-10 text-lg'>We are “AbyM Technology”, a company that provides IT and digital promotion <br /> services. We create stunning solutions for your needs. Trust us, we know what we’re doing!</p>
        </div>
        {/* this your image area  */}
        <div  className='ml-[-50px] py-20   ' >
          <img className='px-3 w-96' src="https://abym.in/assets/img/post/portfolio-banner-img.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Portfolio
