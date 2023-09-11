import React from "react";
import Pizza from "../assets/Pizza.png";
import Abstract from "../assets/Abstract.png";
// import BG from "../assets/BG.png";
import Graphic from "../assets/BG.png";
import deliveryTruck from "../assets/delivery-truck.png";

function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row h-screen md:justify-between md:ms-[5vw]">
        {/* image of pizzA */}
        <div className="relative md:w-[60vw] lg:w-[40vw] md:order-last ">
          <img
            src={Graphic}
            id="pizza"
            className="absolute right-0 top-0  md:w-[50vw]"
          />
          <button
            className="border border-3 right-6 top-6 rounded-full p-3 px-5 absolute border-white text-white"
            style={{
              color: "#fff",
            }}
          >
            Get In Touch
          </button>
        </div>
        {/* discover the best food section */}
        <div>
          <img
            src={deliveryTruck}
            className="hidden md:block w-16 h-12 my-12 ms-5 "
          />
          <div className="mt-[59vh] md:mt-[20vh] md:w-[50vw] flex flex-col justify-around font-bold items-center w-auto p-4 pt-2 h-[45vh] text-center md:text-left">
            <h1 className="headi text-na  vy text-4xl md:text-5xl md:my-4 w-[70vw] md:w-[25vw] md:self-start text-navy ">
              Discover the <span className="text-peach">Best </span>Food and
              Drinks
            </h1>
            <p className="text-md  font-normal md:w-[30vw] md:my-6 md:self-start text-[#444957]">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button
              className=" bg-peach py-[12px] px-[30px] rounded-[30px] md:self-start headi font-semibold"
              style={{
                color: "#fff",
              }}
            >
              Explore Now!
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
