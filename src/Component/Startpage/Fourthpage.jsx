import React from "react";
import Card from "../Cards/Card";
import micro from "../../Image/Microsoft_logo.svg.png";
import google from "../../Image/googleicon.svg";


const Fourthpage = () => {
  return (
    <>
      <div className=" w-full p-10">
        <div>
          <h1 className="text-2xl text-center ">PARTNERS</h1>
          <div className="flex justify-center">
            <div className="w-12 h-1 mt-3 bg-red-700 mb-4"></div>
          </div>
        </div>
        <div>
          <h1 className="flex justify-center text-center text-5xl mb-5 ">
            Leverage our in-depth platform expertise <br /> and technology
            partnership
          </h1>
        </div>
        <div className="flex mt-32 justify-center">
          <Card
            imgSrc={micro}
            title="Benefit from our extensive platform expertise and valuable technology partnership with Microsoft. Our in-depth knowledge and collaboration with Microsoft allow us to deliver exceptional solutions tailored to your needs. Whether leveraging their cutting-edge technologies or accessing their resources, our partnership ensures that you receive the highest level of innovation and support."
          />
          <Card
            imgSrc={google}
            title="Unlock the full potential of our services through our strategic partnership with Google. As a trusted Google partner, we have deep insights into their platform and access to their advanced tools and resources. By harnessing the power of Google's technology, we provide innovative solutions that drive growth and enable you to stay ahead in the ever-evolving digital landscape. Trust in our expertise and the strength of our Google partnership to achieve remarkable results"
          />
        </div>

        
      </div>
    </>
  );
};

export default Fourthpage;
