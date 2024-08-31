// src/Carousel.js
import React, { useState } from 'react';

const Carousel = () => {
  const slides = [
    { id: 1, image: 'https://abym.in/assets/img/banner/banner1.png' },
    { id: 2, image: 'https://abym.in/assets/img/banner/banner2.png' },
    { id: 3, image: 'https://abym.in/assets/img/banner/banner3.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
      {/* text  */}
      <div className="absolute inset-5 transform flex text-1 text-white ">
        <div className="ml-5 p-12">
          <h1 className="text-5xl">Transforming</h1>
          <h1 className="text-9xl">
            Customer <br /> Engagement
          </h1>
          <p className="text-1xl mt-5 ml-1">
            Our innovative technology and creative expertise empower <br />
            us to transform your vision inti a tangible solution.
          </p>
          <button className="mt-7 border-2 p-2 px-8 rounded-md border-white hover:bg-white hover:text-xl hover:text-[#0097BE] ">
            CONSULT OUR TEAM
          </button>
        </div>
      </div>
      {/* Pagination Dots */}
      <div className="absolute bottom-48 left-32 transform -translate-x-1/2 flex space-x-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
