import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import Card from "./Card";

const TopCreator = () => {
  const cardData = [
    {
      img: card1,
      youtubeUrl: "NkDtaXvzt-I",
      desc: "How to plan your retirement with crypto?",
    },
    {
      img: card2,
      youtubeUrl: "-kmxV_JO7eY",
      desc: "Why are there limited Bitcoin?",
    },
    {
      img: card3,
      youtubeUrl: "9fyVLvY3P14",
      desc: "How does Uniswap actually work?",
    },
    {
      img: card4,
      youtubeUrl: "kYeFSwvt1sQ",
      desc: "How to spot crypto projects to invest in?",
    },
  ];

  return (
    <section className="flex flex-col h-full justify-center items-center py-16 border-b border-stone-800">
      <div className="flex flex-col justify-center items-center w-full h-full gap-2 ">
        <h2 className="text-stone-200 text-2xl">
          Top Crypto Creators and Projects to Follow
        </h2>
        <p className="text-stone-600 text-base">
          Answers to your crypto doubts, straight from the experts
        </p>
      </div>
      <div className="flex flex-wrap justify-center py-10">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default TopCreator;
