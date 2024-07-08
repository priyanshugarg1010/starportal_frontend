import React, { useEffect } from "react";
import { MoveRight } from "lucide-react";
import intractAcademyBackground from "../assets/intract-academy-background.png";
import gif from "../assets/academy-animated-logo.gif";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../utils/util";
import { IoBookOutline } from "react-icons/io5";
import Crypto from "../assets/press.svg";
import TopCreator from "../components/TopCreator";
import Journey from "../components/Journey";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (tabName) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("tab", tabName);
    navigate({
      search: `?${queryParams.toString()}`,
    });
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (!queryParams.get("tab")) {
      queryParams.set("tab", "essentials");
      navigate({
        search: `?${queryParams.toString()}`,
      });
    }
  }, [location.search, navigate]);
  return (
    <div className="border-b border-stone-800 bg-neutral-950">
      <div className="relative h-[calc(100vh-64px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={intractAcademyBackground}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-10">
          <img src={gif} alt="logo gif" className="w-56 mix-blend-screen" />
          <p className="text-stone-500 text-center text-lg ">
            <span className="text-stone-200">Intract users </span>
            have together made more than{" "}
            <span className="text-stone-200">$100 million </span>
            in web3. <br /> Join them and{" "}
            <span className="text-stone-200">learn how to earn crypto! </span>
          </p>
          <button className="px-14 py-2 text-sm font-light text-white bg-primary rounded-md flex flex-row justify-between items-center gap-2 ">
            Get Started
            <MoveRight />
          </button>
        </div>
      </div>
      <Journey />
      <TopCreator />
      <div className="flex flex-col h-full justify-center items-center pt-20">
        <div className="flex flex-col justify-center items-center w-full h-full gap-2 ">
          <h2 className="text-stone-200 text-2xl">Crypto Dictionary</h2>
          <p className="text-stone-600 text-base">
            Your one-stop to catch up on all crypto terms
          </p>
        </div>

        <div className="border border-stone-800 h-full rounded-2xl w-4/5 relative overflow-hidden mt-8">
          <img src={Crypto} alt="press image" className="object-cover" />
          <div className="flex flex-row justify-between absolute bottom-0 items-center w-full p-5 ml-2 z-50">
            <div className="">
              <span className="text-stone-400 text-2xl">
                Web3 + Degen Glossary
              </span>
              <p className="text-stone-500">Your own crypto dictionary</p>
            </div>
            <div className="size-16 rounded-full bg-black/30 flex justify-center items-center">
              <IoBookOutline stroke="white" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-zinc-500/50"></div>
        </div>
      </div>
      <div className="sticky bottom-0 pb-10 pt-20 w-fit top-1/2 left-1/2 transform -translate-x-1/2">
        <div className="text-stone-200 bg-neutral-900/80 rounded-full border border-stone-800">
          <button
            className={cn("px-10 py-2 rounded-full hover:bg-neutral-800", {
              "bg-neutral-800":
                new URLSearchParams(location.search).get("tab") ===
                "essentials",
            })}
            onClick={() => handleButtonClick("essentials")}
          >
            Essentials
          </button>
          <button
            className={cn("px-10 py-2 rounded-full hover:bg-neutral-800", {
              "bg-neutral-800":
                new URLSearchParams(location.search).get("tab") === "alpha-hub",
            })}
            onClick={() => handleButtonClick("alpha-hub")}
          >
            Alpha Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
