import React from 'react'
import Service from './Service'
import Rightmain from './right-img/Rightmain'
import Banner from "./Banner/Banner"
import Leftmain from './left-img/Leftmain'

function ServiceMain() {
  return (
    <>
      <Service />
      <Rightmain />
      <Banner />
      <Leftmain />
      <div className='w-full h-12'></div>

    </>
  )
}

export default ServiceMain
