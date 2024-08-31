import React from "react";
import quote from "../../Image/quote.png";
import profile1 from "../../Image/testimonials1.png";
import Button from "../Button/Button";
import Testimonialvid from '../../Image/testimonials1revers.png'

function Testimonials() {
  return (
    <div id="testimonials" className="w-full h-[72vh] p-10 px-28 flex">
      <div className="Wrapper ">
        <div>
          <h1 className="text-2xl font-thin">TESTIMONIALS</h1>
          <div>
            <div className="w-12 h-1 mt-3 bg-red-700 mb-4"></div>
          </div>
        </div>
        <div>
          <h1 className=" text-6xl font-semibold mb-5 ">
            Check what our client <br /> Says about us
          </h1>
        </div>
        <div className="flex ">
          <img className="w-12 h-12" src={quote} alt="" />
          <p className="text-zinc-400 py-8 px-2">
            "When i decided to start a my business,i had no idea where to start.
            The App
            <br /> development by AbyM groomed my business. Very professional and
            creative
          </p>
        </div>

        <div className="flex ml-16">
          <img className="w-20 h-20 rounded-full" src={profile1} alt="" />
          <div className="m-4">
            <h1 className="font-semibold">Neha Mehta</h1>
            <p className="font text-zinc-500 mt-1">Client of the company </p>
          </div>
          <div className="m-6 w-16 h-16">
            <Button className />
          </div>
        </div>
      </div>

{/* this is image part  */}
        <div className="ml-10">
          <img className="h-[72vh]" src={Testimonialvid} alt="" />
        </div>

    </div>
  );
}

export default Testimonials;
