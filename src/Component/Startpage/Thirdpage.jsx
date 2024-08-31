import React from "react";

export default function Thirdpage() {
  return (
    <div id="thirdpage-background" className="h-screen w-full p-10">
      <div>
        <h1 className="text-2xl text-center font-thin">PROCESS</h1>
        <div className="flex justify-center">
          <div className="w-12 h-1 mt-3 bg-red-700 mb-4"></div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center text-4xl mb-5 ">
          Our Working Process
        </h1>
      </div>
      <div className="flex justify-center text-center ">
        <p className="text-zinc-400">
          As a website-building firm, we are constantly attempting to innovate
          and experiment with <br /> new layouts. Modernization is something we
          like. We can design an excellent website for you <br /> that is
          creative, appealing, informational, and efficient.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          className="w-[65rem] h-[409px] mt-16"
          src="https://abym.in/assets/img/post/working-process.svg"
          alt=""
        />
      </div>
    </div>
  );
}
