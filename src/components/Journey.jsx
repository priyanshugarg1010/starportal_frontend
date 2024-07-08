import React, { useEffect } from "react";
import database from "../assets/database.png";
import { CiBitcoin } from "react-icons/ci";
import { BiSolidUpArrow } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import { airdropTaskData, taskData } from "./data";
import { CircleCheck, Clock3, ArrowRight, Info } from "lucide-react";
import cat1 from "../assets/cat1.png";
import cat2 from "../assets/cat2.png";
import star from "../assets/star.png";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg3 from "../assets/svg3.svg";
import svg4 from "../assets/svg4.svg";
import svg5 from "../assets/svg5.svg";
import apps from "../assets/apps.gif";
import { FaDiscord } from "react-icons/fa6";
import CountdownTimer from "./CountdownClock";

const Journey = () => {
  return (
    <section className="flex justify-center flex-col items-center -mt-20 overflow-hidden">
      <div className="flex flex-row justify-center gap-40 relative">
        <div className="flex flex-col pb-10 relative z-50 w-full h-full">
          <div className="absolute top-20 -left-32">
            <img src={svg1} alt="" />
          </div>
          <div className="">
            <img src={svg2} className="absolute top-36 left-40" alt="" />
          </div>
          <div className="flex flex-row justify-center relative items-center gap-5 w-[350px] rounded-t-2xl border-stone-800/30 border  bg-neutral-900/50 pl-1 pt-1 pr-6 hover:bg-neutral-900 duration-200 ">
            <div className="absolute top-3 right-3">
              <BiSolidUpArrow color="grey" />
            </div>
            <div className="w-28 overflow-hidden bg-neutral-800 h-32 rounded-2xl p-1 border border-stone-600">
              <img
                src={database}
                alt="database img"
                className="object-cover h-full w-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-start py-6 items-start h-full gap-2 ">
              <div className="border-b border-stone-600 border-dashed py-2">
                <h2 className="text-stone-200 text-base">Basics of Crypto</h2>
                <p className="text-stone-600 text-[10px] ">
                  The safest and easiest place to start <br /> your crypto
                  journey!{" "}
                </p>
              </div>
              <div className="bg-neutral-800 rounded-full w-fit py-1 px-2 text-[10px] text-stone-300 flex justify-center flex-row items-center">
                {" "}
                <CiBitcoin color="yellow" /> 1490XPs
              </div>
            </div>
          </div>

          <div className="max-h-[260px] overflow-y-auto relative bg-neutral-900 py-2 px-6 w-[350px] flex flex-col items-center rounded-b-2xl ">
            {taskData.map((task, index) => (
              <div
                key={index}
                className="flex flex-row justify-start relative items-center gap-5 w-[300px] p-1 rounded-2xl bg-neutral-800 duration-200 mt-1.5"
              >
                <div className="w-24 overflow-hidden h-16">
                  <img
                    src={task.img}
                    alt={task.title}
                    className="object-cover h-16 w-20 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col w-full pr-2 justify-start items-start h-full gap-2">
                  <div className="border-b border-stone-600 border-dashed py-2">
                    <h2 className="text-stone-200 text-sm tru ncate h-5 overflow-hidden">
                      #{index + 1}: {task.title}
                    </h2>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <span className="text-stone-400 text-[10px]">
                      {task.tasks} tasks
                    </span>
                    <div className="bg-neutral-950 border border-stone-600 flex justify-center items-center rounded-full h-[10px] w-[130px]">
                      <div className="bg-neutral-800 h-[6px] rounded-full w-[126px]"></div>
                    </div>
                    <CiCircleCheck color="grey" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center relative items-center gap-5 bg-transparent mt-20">
          <div className="flex justify-start items-start flex-col gap-2">
            <div className="w-full flex ml-10 ">
              <CircleCheck fill="grey" width={30} height={30} />
            </div>
            <div className="w-28 overflow-hidden bg-neutral-900 h-32 rounded-2xl p-1 border border-stone-600">
              <img
                src={cat1}
                alt="database img"
                className="object-cover h-full w-full rounded-2xl"
              />
            </div>
            <h2 className="text-stone-300 text-[12px]">
              Intract Certified: Learner NFT
            </h2>
            <p className="text-stone-600 text-[10px] ">
              Your crypto black-belt <br /> certificate{" "}
            </p>
            <div className="bg-neutral-800 rounded-md w-fit py-1.5 border border-stone-800 px-10 text-[10px] text-stone-300 flex justify-center flex-row items-center">
              {" "}
              <button>claim</button>
            </div>
          </div>
        </div>
      </div>
      {/*
      
      here start the second part 
      */}
      <div className="flex flex-row justify-center gap-40 relative">
        <div className="">
          <img
            src={svg5}
            alt=""
            className="absolute -left-[140px] top-[260px] scale-75"
          />
        </div>
        <div className="flex flex-row mt-2 pb-10 z-50 w-full h-full relative">
          <div className="flex mt-56 flex-col mr-40 justify-center relative items-center gap-5 bg-transparent ">
            <div className="flex justify-start items-start flex-col gap-2">
              <div className="w-full flex ml-10 ">
                <CircleCheck fill="grey" width={30} height={30} />
              </div>
              <div className="w-28 overflow-hidden bg-neutral-900 h-32 rounded-2xl p-1 border border-stone-600">
                <img
                  src={cat2}
                  alt="database img"
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>
              <h2 className="text-stone-300 text-[12px]">
                Intract Certified: Earner NFT
              </h2>
              <p className="text-stone-600 text-[10px] ">
                Your proof of <br />
                airdrop expertise{" "}
              </p>
              <div className="bg-neutral-800 rounded-md w-fit py-1.5 border border-stone-800 px-10 text-[10px] text-stone-300 flex justify-center flex-row items-center">
                {" "}
                <button>claim</button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="">
              <img
                src={svg4}
                alt=""
                className="absolute top-0 right-[330px] w-2/3 h-2/3"
              />
            </div>
            <div className="">
              <img
                src={svg3}
                alt=""
                className="absolute scale-[1.4] -top-[170px] -right-[120px]"
              />
            </div>
            <div className="flex flex-row justify-center relative items-center gap-5 w-[350px] rounded-t-2xl border-stone-800/30 border  bg-neutral-900/50 pl-1 pt-1 pr-6 hover:bg-neutral-900 duration-200 ">
              <div className="absolute top-3 right-3">
                <BiSolidUpArrow color="grey" />
              </div>
              <div className="w-28 overflow-hidden bg-neutral-800 h-32 rounded-2xl p-1 border border-stone-600">
                <img
                  src={star}
                  alt="database img"
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-start py-6 items-start h-full gap-2 ">
                <div className="border-b border-stone-600 border-dashed py-2">
                  <h2 className="text-stone-200 text-base">
                    {" "}
                    Introduction to Airdrops
                  </h2>
                  <p className="text-stone-600 text-[10px] ">
                    Your best bet to make it big in crypto!
                  </p>
                </div>
                <div className="bg-neutral-800 rounded-full w-fit py-1 px-2 text-[10px] text-stone-300 flex justify-center flex-row items-center">
                  {" "}
                  <CiBitcoin color="yellow" /> 1490XPs
                </div>
              </div>
            </div>

            <div className="max-h-[260px] overflow-y-auto relative bg-neutral-900 py-2 px-6 w-[350px] flex flex-col items-center rounded-b-2xl ">
              {airdropTaskData.map((task, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-start relative items-center gap-2 w-[300px] p-1 rounded-2xl bg-neutral-800 duration-200 mt-1.5"
                >
                  <div className="w-24 overflow-hidden h-16">
                    <img
                      src={task.img}
                      alt={task.title}
                      className="object-cover h-16 w-20 rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col w-full pr-2 justify-start items-start h-full gap-2">
                    <div className="border-b border-stone-600 border-dashed py-2">
                      <h2 className="text-stone-200 text-sm tru ncate h-5 overflow-hidden">
                        #{index + 1}: {task.title}
                      </h2>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <span className="text-stone-400 text-[10px]">
                        {task.tasks} tasks
                      </span>
                      <div className="bg-neutral-950 border border-stone-600 flex justify-center items-center rounded-full h-[10px] w-[130px]">
                        <div className="bg-neutral-800 h-[6px] rounded-full w-[126px]"></div>
                      </div>
                      <CiCircleCheck color="grey" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 relative">
        <div className="p-4 bg-neutral-800/50 flex flex-col w-80 rounded-xl ">
          <div className="border-b-2 border-stone-600 border-dashed flex flex-row justify-start gap-2 items-center pb-4">
            <Clock3 color="orange" size={14} />
            <h4 className="text-stone-400 text-base ">Rewards unlocks in</h4>
          </div>
          <div className="flex flex-row justify-start gap-2 items-center pt-4">
            <CountdownTimer />
          </div>
        </div>
        <div className="p-4 bg-neutral-800/50 flex flex-col w-80 rounded-xl ">
          <img src={apps} alt="" className="rounded-lg" />

          <div className="">
            <div className="border-b-2 border-stone-600 border-dashed flex flex-row justify-between gap-2 items-center py-4">
              <h4 className="text-stone-500 text-base ">Exclusive Community</h4>
              <h4 className="text-stone-500 text-base flex flex-row justify-center items-center gap-2">
                <FaDiscord fill="purple" /> Earndrop
              </h4>
            </div>
            <div className="flex flex-col justify-center py-4 items-center gap-2">
              <span className="text-stone-500 text-xs flex flex-row justify-between w-full items-center gap-2">
                Complete all Essential quests
                <CiCircleCheck color="grey" />
              </span>
              <span className="text-stone-500 text-xs flex flex-row justify-between w-full items-center gap-2">
                Complete at least 1 Alpha Hub quest today
                <CiCircleCheck color="grey" />
              </span>
            </div>
            <button className="text-stone-400 text-base flex flex-row justify-center bg-neutral-800 rounded-lg py-2  w-full items-center gap-3">
              Claim Now <ArrowRight stroke="grey" />
            </button>
          </div>
        </div>
        <div className="absolute bg-neutral-800/50 left-96 top-5 border border-stone-600 rounded-lg">
          <div className="p-4  flex flex-col w-80 border-b border-dashed border-stone-800">
            <h4 className="text-stone-400 text-sm flex flex-row justify-start w-full items-center gap-3">
              Reward Info <Info stroke="grey" size={18} />
            </h4>
          </div>
          <div className="py-4 pl-4 pr-7 text-stone-500 text-sm flex flex-col gap-5">
            <p className=" text-stone-300">
              Free access to paid KOL (crypto earning) communities!
            </p>

            <p>
              Win access to exclusive earning communities of some of the the
              greatest earners in crypto for a month, every 24 hours. Get access
              to unmatched insights, a close-knit community of the best airdrop
              earners, and more.
            </p>
            <p>
              To win: make sure you've connected your Twitter and Discord
              accounts - and follow our criteria!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
