import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineSpotify } from "react-icons/ai";
import { AiOutlineDiscord } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-stone-500 py-10 px-20">
      <div className="container mx-auto flex flex-row justify-between text-start items-start pr-40 border-b pb-10 border-stone-800">
        <div
          className="text-start mb-6 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <h1 className="text-2xl font-bold text-stone-200">intract.</h1>
          <p className="mt-2 text-sm">
            We are your personal guide for exploring <br /> web3 projects &
            earning 100x rewards
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-sm">
            <h2 className="text-base font-semibold uppercase text-stone-200 mb-3">
              Explore
            </h2>
            <ul>
              <li className="mb-1.5 hover:text-stone-300">
                <a href="#" className="hover:underline">
                  Quests
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Communities
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Alpha Hub
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="text-base font-semibold uppercase text-stone-200 mb-3">
              Earn
            </h2>
            <ul>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Refer & Earn
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Leaderboard
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Achievements
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="text-base font-semibold uppercase text-stone-200 mb-3">
              About
            </h2>
            <ul>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Product Roadmap
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Sign up Program
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Growth Community
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="text-base font-semibold uppercase text-stone-200 mb-3">
              Support
            </h2>
            <ul>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Create your quest
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1.5 hover:text-stone-300 ">
                <a href="#" className="hover:underline">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-between text-start items-start pr-40 border-b py-10 border-stone-800">
        <p className="text-sm">
          <span className="text-stone-400 font-semibold ">Disclaimer: </span>
          Crypto Products, Virtual Digital Assets, and NFTs are unregulated and
          can be highly risky. There may be no regulatory recourse for any loss
          from such transactions. We advise the viewer to proceed with caution.
          Nothing in this website or any communication published by us amounts
          to, is intended to be, or should be construed as investment or
          purchase advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
      </div>
      <div className="container mx-auto flex flex-row justify-between text-start items-start pr- pt-10 ">
        <span className="text-stone-200 font-normal">
          CREATED BY{" "}
          <span className="underline underline-offset-2">INTRACT</span>
        </span>

        <div className="flex flex-row justify-center gap-5 items-center">
          <div className="size-10 rounded-md bg-neutral-900 flex justify-center items-center">
            <IoLogoTwitter fill="blue" stroke="blue" />
          </div>
          <div className="size-10 rounded-md bg-neutral-900 flex justify-center items-center">
            <AiOutlineDiscord
              fill="skyblue"
              stroke="skyblue"
              height={24}
              width={24}
            />
          </div>
          <div className="size-10 rounded-md bg-neutral-900 flex justify-center items-center">
            <FaTelegramPlane fill="blue" stroke="blue" />
          </div>
          <div className="size-10 rounded-md bg-neutral-900 flex justify-center items-center">
            <AiOutlineSpotify fill="green" stroke="green" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
