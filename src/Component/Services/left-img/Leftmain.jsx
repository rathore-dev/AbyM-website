import React from 'react'
import Rightcard from '../right-img/Rightcard'
import Leftcard from './Leftcard'

function Leftmain() {
  const data = [
    {
      heading:"DIGITAL MARKETING",
      h1:"All-in-One Digital Marketing for You",
      p1:"AbyM Technology offers digital marketing services to help you grow your online business. We provide SEO, social media, email, content, and PPC solutions tailored to your goals and budget. Boost your brand, leads, and sales with us.",
      h2:"Get Online Marketing Success With Us",
      absolute: "https://abym.in/assets/img/shape/ser-post-bg.png",
      relative: "https://abym.in/assets/img/post/digital-post.png",
      option1 : "Healthcare",
      option2 : "Education",
      option3 : "E-commerce"
  },
   {
  heading:"IT CONSULTING SERVICES",
  h1:"Professional Guidance for Your IT Challenges",
  p1:"Get IT consulting services from AbyM Technology. We help you with IT infrastructure, processes, solutions, and risks. Improve your IT performance and security with us.",
  h2:"Our Ideation & Design Services",
  relative:"https://abym.in/assets/img/post/it-consult-post.png",
  option1 : "Healthcare",
  option2 : "Education",
  option3 : "E-commerce"

},
    
  ]
  return (
    <>
      <Rightcard 
      head={data[1].heading} 
      h1={data[1].h1}
      p1={data[1].p1}
      h2={data[1].h2}
      absolute={data[0].absolute}
      relative={data[1].relative}
      option1={data[1].option1}
      option2={data[1].option2}
      option3={data[1].option3}
      />
      <Leftcard 
      head={data[0].heading} 
      h1={data[0].h1}
      p1={data[0].p1}
      h2={data[0].h2}
      absolute={data[0].absolute}
      relative={data[0].relative}
      option1={data[0].option1}
      option2={data[0].option2}
      option3={data[0].option3}
      />
    </>
  )
}

export default Leftmain

