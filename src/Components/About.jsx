import React from "react";
import "../vars.css";
import choppingboard from "../assets/choppingboard.png";
function About() {
  return (
    <>
      <main className="bg-[#F0F1F7]   text-center mt-7 ">
        <div className="md:mx-[10vw] flex justify-around">
          <img
            src={choppingboard}
            alt="choppingboard"
            className="hidden md:block w-[30vw] lg:w-[20vw]"
          />
          <div className=" flex flex-col justify-center items-center p-6 md:text-left  md:items-start  md:w-[40vw]">
            <h1 className="heading md:mx-0 font-p font-semibold ">About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <button className="bg-peach text-[#FFFFFF] rounded-full py-[4px] px-[33px] m-[25px] md:mx-0">
              Read More
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
