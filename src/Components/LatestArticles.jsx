import React from "react";
import grilledtomatoes from "../assets/grilled-tomatoes.png";
import snack from "../assets/snacks.png";
import postworkout from "../assets/postWorkout.png";
function LatestArticles() {
  return (
    <>
      <div className="w-[271px] ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[#0E2368] text-[28px] font-bold">
            Latest Articles
          </h1>
          <div className="text-[#000000] rounded-4 border border-black py-[4px] px-[33px]">
            <img src={grilledtomatoes} alt="image" />
            <h2>Grilled Tomatoes at Home</h2>
            <p>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley....
            </p>
            <button className="text-[#000000] rounded-full border border-black py-[4px] px-[33px]">
              Read More
            </button>
          </div>
          <div className="text-[#000000] rounded-4 border border-black py-[4px] px-[33px]">
            <img src={snack} alt="image" />
            <h2>Snacks for Travel</h2>
            <p>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley....
            </p>
            <button className="text-[#000000] rounded-full border border-black py-[4px] px-[33px]">
              Read More
            </button>
          </div>
          <div className="text-[#000000] rounded-4 border border-black py-[4px] px-[33px]">
            <img src={postworkout} alt="image" />
            <h2>Post-workout Recipes</h2>
            <p>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley....
            </p>
            <button className="text-[#000000] rounded-full border border-black py-[4px] px-[33px]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestArticles;
