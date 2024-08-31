import React from "react";
import Cards2 from "../Cards/Cards2";
import icon1 from "../../Cardicon/icon-1.png";
import icon2 from "../../Cardicon/icon-2.svg";
import icon3 from "../../Cardicon/icon-3.png";
import icon4 from "../../Cardicon/icon-4.png";
import icon5 from "../../Cardicon/icon-5.png";
import icon6 from "../../Cardicon/icon-6.png";
import icon7 from "../../Cardicon/icon-7.png";

function Fifthpage() {
  return (
    <div className="w-full h-[1000px] px-20">
      <div className="">
        <h1 className="text-2xl text-center font-thin">
          WE ARE SPECIALIZED IN
        </h1>
        <div className="flex justify-center">
          <div className="w-12 h-1 mt-3 bg-red-700 mb-4"></div>
        </div>
      </div>
      <div>
        <h1 className="flex justify-center text-4xl mb-5 ">
          WE INTEGRATE TECHNOLOGY AND IDEAS
        </h1>
      </div>
      <div className="flex justify-center text-center ">
        <p className="text-zinc-400">
          From custom web design to responsive development and SEO optimization,
          our team <br /> of skilled developers has you covered. Contact us
          today to take your online presence to the <br /> next level!
        </p>
      </div>
      <div className="ml-10 ">
        <div className="flex flex-wrap flex-row ">
          <Cards2
            img={icon1}
            name="Design"
            desc="We make designs that look <br /> good, work well, and feel right. <br /> We make you
        product easy and <br /> delightful to use"
          />
          <Cards2
            img={icon2}
            name="Development"
            desc="Vision + Skills = Stunning Solutions. Websites, Apps, and More. From Idea to Launch and Beyond"
          />
          <Cards2
            img={icon3}
            name="Digital marketing"
            desc="Digital marketing services to help you grow your online business. We provide SEO solutions tailored to your goals"
          />
          <Cards2
            img={icon4}
            name="IT consultant and Service  "
            desc="We help you with IT infrastructure, processes, solutions, and risks. Improve your IT performance and security with"
          />
          <Cards2
            img={icon5}
            name="Content Writing"
            desc="Content writing is the process of creating and publishing written content for a variety of purposes, including marketing, education,"
          />
          <Cards2
            img={icon6}
            name="Server support"
            desc="Whether you need to set the server from the scratch or manage your network infrastructure."
          />
          <Cards2
            img={icon7}
            name="Devops"
            desc="DevOps speeds delivery of higher quality software by combining and automating the work of software development."
          />
          <button className="h-12 w-32 flex justify-center items-center cursor-pointer bg-blue-600 rounded text-white hover:text-blue-600 hover:bg-white border-2 hover:border-blue-600 text-base mt-64 ml-24">
            see more
            <svg
              id="right-arrow"
              class="w-[25px] h-[15px] hover:bg-blue-600 dark:text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
            <svg
              width="22px"
              height="22px"
              className="mt-1 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#526569"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#065885"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fifthpage;
