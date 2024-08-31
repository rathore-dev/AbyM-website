import React from 'react'

function MoveCard({ h1 ,p1 , img , h2}) {
  return (
    <>
    <div className='flex'>
    <div className="bg-gradient-to-b from-[#02218f] via-[#0e72e3] to-[#661a3e] text-white p-8 rounded-lg shadow-lg max-w-lg flex items-center space-x-5">
      <div className="flex-shrink-0">
        {/* Circle with 100% text */}
       {img}
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2">{h1}</h2>
        <h2 className="text-2xl font-semibold mb-2">{h2}</h2>
        <p>
          {p1}
        </p>
      </div>
    </div>
    </div>
    </>
 
  )
}

export default MoveCard
