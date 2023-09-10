import React from "react";

function About() {
  return (
    <>
      <div className="bg-[#F0F1F7] flex flex-col justify-center items-center p=[25px]">
        <h1 className="h-[35px] w-[120px] top-[948px] left-[127px] text-[#0E2368] text-[26px] font-bold">
          About Us
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button className="bg-[#E23744] text-[#FFFFFF] rounded-full py-[4px] px-[33px] m-[25px] ">
          Read More
        </button>
      </div>
    </>
  );
}

export default About;
