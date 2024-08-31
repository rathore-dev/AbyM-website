import React from "react";
import Abimg from "../About/images/ab-img1.png";
import MoveCard from "../About/MoveCard";

function AboutBody() {
  return (
    <>
    <div className="flex ">
      <div
        style={{
          backgroundImage: "url(https://abym.in/assets/img/shape/1.png)",
        }}
        className="w-1/2 h-[80vh]"
      >
        <div>
          <img src="" alt="" />
        </div>
        <div className="m-32">
          <img src={Abimg} alt="" />
        </div>
      </div>
      {/* text */}
      <div className="w-1/2 h-[80vh] px-12 m-5 flex py-16">
        <div className="">
          <h1 className="text-2xl text-blue-900 mb-2">MEET THE TEAM</h1>
          <div className="w-12 h-[2px] bg-red-500 mb-3"></div>
          <h2 className="text-4xl mb-5">
            Getting Ready for Your Success <br /> dependable source of IT
            services{" "}
          </h2>
          <p className="text-[#717F8D] ">
            Achieve Your Goals With AbyM Technology Your Reliable Partner For IT
            Solutions We <br /> are passionate about helping you succeed in the
            digital world. Whether you need IT <br /> consultancy, web
            development, or software engineering, we have the expertise and{" "}
            <br /> experience to deliver
          </p>

          <div className="flex mt-8">
            <h1 className="text-[#072B3E] text-[22px]">
              Technology Advisory
              <p className="mt-1 text-sm text-[#717F8D]">
                We offer professional advice and guidance on how to leverage
                technology for your <br /> business growth and efficiency.
              </p>
            </h1>
          </div>

          <div className=" flex ">
            <h1 className="mt-9 text-[#072B3E] text-[22px]">
              Recognized For Excellence
              <p className="text-[#717F8D] text-sm">
                We are proud of our achievements and recognition in the IT
                industry. We have won <br /> several awards for our excellence
                and customer satisfaction
              </p>
            </h1>
          </div>
        </div>

        <div className="h-12 flex justify-end">
          <img src="https://abym.in/assets/img/shape/11.png" alt="" />
        </div>
      </div>
    </div>
    {/* this is cards */}
    <div className="flex justify-between px-44">
    <MoveCard img={ <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-white"></div>
          <span className="text-2xl font-bold">100%</span>
        </div>} h1="Exceptional Customer Service"
       p1="At AbyM Technology, we care about your success and satisfaction. We offer the best solutions for your goals and budget. We work with you closely and deliver on time."/>
    <MoveCard h1="1.5K+" 
      h2="Customers worldwide"
      p1="From small startups to big enterprises, we have served over 1.5K+ customers in every corner of the world. Our portfolio is a testament to our adaptability and skill in the IT industry"/>
    </div>
     
    </>
  );
}

export default AboutBody;
