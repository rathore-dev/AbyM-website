import React from 'react'

function Banner() {
  return (
    <div id='banner-page' className='flex w-full h-80 px-48 py-12'>
        {/* this is left side  */}
        <div className='text-center py-8 '>
            <h1 className='text-[#6436A2] text-6xl mr-16 font-semibold'>App Development</h1>
            <p className='flex text-center mt-8 text-zinc-500 mr-16 '>Fast, reliable, user-friendly apps for Android, iOS, or both. Latest technologies and best practices. <br />
             App maintenance and support. Free consultation and quote.</p>
        </div>
        {/* this is right side  */}
        <div className=' w-72 h-72'>
            <img className='ml-8' src="https://abym.in/assets/img/post/ser-dev-add.png" alt="" />
        </div>
      
    </div>
  )
}

export default Banner
