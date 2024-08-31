import React from "react";

function Consultation() {
  return (
    <>
      <div className="container w-full h-[96vh] bg-[#072B3E] flex justify-center py-32 mt-6">
        <div className="flex">
          {/* this is form part */}
          <div className="border-2 h-[80vh] w-[44vw] bg-white p-10 px-20">
                    <div>
                    <div>
                        <h1 className="text-2xl font-thin">ARE YOU PLANNING?</h1>
                        <div className="">
                        <div className="w-12 h-[2px] mt-2 bg-red-700 mb-2"></div>
                        </div>
                    </div>    
                    <div>
                        <h1 className="text-3xl mb-2 font-thin leading-10">
                        Get Estimation and technology <br /> suggestion from expert free of cost.
                        </h1>
                    </div>
                    </div>

            <form className="flex flex-col ">
              <input className="border-2 h-14 rounded px-2 mt-5" placeholder="Name*" type="text" />
              <input className="border-2 h-14 rounded px-2 mt-5" placeholder="Mobile number*" type="text" />
              <input className="border-2 h-14 rounded px-2 mt-5" placeholder="Email ID*" type="text" />
              <input className="border-2 h-14 rounded px-2 mt-5" placeholder="Tell us about your requirement.(minimum 20 words)*" type="text" />
            </form>
           <button className="py-3 px-6 mt-5 bg-[#065885] rounded-lg text-white  border-none">SUBMIT</button>
          </div>

          {/* this is image part  */}
          
          <div className=" h-[80vh] w-[44vw] " id="consultation-background">

          </div>
          </div>
          
      </div>
      {/* ------------- */}
    
    </>
  );
}

export default Consultation;
