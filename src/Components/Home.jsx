import React from "react";
import Pizza from "../assets/Pizza.png";
import Abstract from "../assets/Abstract.png";
function Home() {
  return (
    <>
      <div>
        {/* <div className="relative">
          <img className="block mx-auto" src={Pizza} alt="Group-1" border="0" />
          <img
            src={Abstract}
            alt="Abstract"
            className="absolute top-0 left-0  "
          />
        </div> */}
        <div>
          <img
            className="block mx-auto relative"
            src={Pizza}
            alt="Group-1"
            border="0"
          />
          <img
            src={Abstract}
            alt="Abstract"
            className="absolute top-0 left-[100px]  "
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#0E2368] text-[38px] flex flex-col justify-center items-center">
            Discover the <span className="text-[#E23744]">Best </span>Food and
            Drinks
          </h1>
          <p className="text-[11px]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="bg-[#E23744] py-[12px] px-[30px] text-white rounded-[30px]">
            Explore Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
