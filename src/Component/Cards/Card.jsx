import React from 'react'
import './card.css'

const Card = ({title , imgSrc}) => {
  return (
    <div className="m-4" id="element">
      <img className="w-full" src="/src/Image/certificate-icon." alt="" />
      <div className="px-6 py-4">
        <div className="border border-2 w-44 -mt-11 ml-5 rounded-xl"><img className='rounded-2xl' src={imgSrc} alt="" /></div>
        <p className="text-gray-700 text-base text-lg font-thin m-5">{title}</p>
      </div>
    </div>
  )
}

export default Card;

