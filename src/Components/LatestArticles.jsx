import React, { useState } from "react";
import grilledtomatoes from "../assets/grilled-tomatoes.png";
import snack from "../assets/snacks.png";
import postworkout from "../assets/postWorkout.png";
import "../vars.css";
import brocolli from "../assets/brocolli.png";
import crunchwrap from "../assets/crunchwrap.png";
import grillcorn from "../assets/grillcorn.png";
import chevronRight from "../assets/chevron-right.svg";
import chevronLeft from "../assets/chevron-left.svg";

const Card = ({ title, img, content }) => {
  return (
    <>
      <div className=" rounded-4 border border-black m-4 flex flex-col justify-center p-12 rounded-[26.7px]">
        <img src={img} alt="image" className="mb-9" />
        <h2 className="my-2 text-navy font-bold mx-[-1em] text-xl text-center mb-6">
          {title}
        </h2>
        <p className="mx-[-1em] mb-4">{content}</p>
        <button className="text-[#000000] rounded-full border border-black py-[4px] px-[33px] w-max mx-auto">
          Read More
        </button>
      </div>
    </>
  );
};

const articles = [
  [
    {
      title: "Grilled Tomatoes at Home",
      img: grilledtomatoes,
      content:
        " PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      title: "Snacks for Travel",
      img: snack,
      content:
        " PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      title: "Post-workout Recipes",
      img: postworkout,
      content:
        " PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
  ],
  [
    {
      title: "How To Grill Corn",
      img: grillcorn,
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
    },
    {
      title: "Crunchwrap Supreme",
      img: crunchwrap,
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
    },
    {
      title: "Broccoli Cheese Soup",
      img: brocolli,
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard... ",
    },
  ],
];

function LatestArticles() {
  const [page, setPage] = useState(0);

  return (
    <>
      <div className=" m-3 p-3 min-h-screen my-36 ">
        <h1 className="heading text-center">Latest Articles</h1>
        <div className="flex flex-col md:flex-row justify-center  ">
          {articles[page].map((article) => (
            <Card
              img={article.img}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`text-[#FFFFFF] rounded-full py-[4px] px-[5px] m-[5px] md:mx-0 ${
              page == 0 ? "opacity-50" : ""
            }`}
            onClick={() => setPage(0)}
          >
            <img src={chevronLeft} />
          </button>
          <p>{page + 1}/2</p>
          <button
            className={`text-[#FFFFFF] rounded-full py-[4px] px-[5px] m-[5px] md:mx-0 ${
              page == 1 ? "opacity-50" : ""
            }`}
            onClick={() => setPage(1)}
          >
            <img src={chevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}

export default LatestArticles;
