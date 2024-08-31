import React from 'react';
import Rightcard from '../right-img/Rightcard';
import Leftcard from '../left-img/Leftcard';

 
const data = [
    {
        heading:"DESIGN",
        h1:"Stunning Visual Designs that Boost Your Conversion Rate",
        p1:"We make designs that look good, work well, and feel right. We make your product easy and delightful to use. Logo, landing page, UI/UX design - we do it all.",
        h2:"We Bring Your Ideas and Designs to Life",
        absolute: "https://abym.in/assets/img/shape/ser-post-bg.png",
        relative: "https://abym.in/assets/img/post/design-post.png",
        option1 : "Healthcare",
        option2 : "Education",
        option3 : "E-commerce"
    },
    {
      heading:"DEVELOPMENT",
      h1:"From Idea to Impact, We’ve Got Your Back",
      p1:"Vision + Skills = Stunning Solutions. Websites, Apps, and More. From Idea to <br/> Launch and Beyond. AbyM Technology: Partners in Digital Innovation.",
      h2:"End-to-End Product Development Solutions for Various Industries",
      relative: "https://abym.in/assets/img/post/development-post.png",
      option1 : "Healthcare",
      option2 : "Education",
      option3 : "E-commerce"

  },
    
  ]

function Rightmain() {
  return (
    <>
     <Rightcard 
     head={data[0].heading }
     h1={data[0].h1}
     p1={data[0].p1}
     h2={data[0].h2} 
     absolute={data[0].absolute}
     relative={data[0].relative}
     option1={data[0].option1}
    option2={data[0].option2}
    option3={data[0].option3}
     /> 
     <Leftcard 
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
    </>
  )
}

export default Rightmain
