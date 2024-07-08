import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import broadcast from "../assets/broadcast.svg";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm transition-all z-[100] sticky inset-x-0 top-0 w-full border-b border-stone-800 bg-black/20">
      <div className="flex overflow-hidden relative flex-row items-center px-28 justify-between w-full bg-bla ck h-16">
        <Link
          to="/"
          className="relative my-auto text-3xl text-stone-300 font-bold cursor-pointer"
        >
          intract.
        </Link>
        <div className="flex relative flex-a uto gap-6 justify-cen ter items-center max-w-[500px]">
          <Link
            to="/compass"
            className="grow my-auto text-base text-zinc-400 cursor-pointer hover:text-zinc-200"
          >
            Compass
          </Link>
          <Link
            to="/explore"
            className="grow my-auto text-base text-zinc-400 cursor-pointer hover:text-zinc-200"
          >
            Explore
          </Link>
          <Link
            to="/academy"
            className="grow my-auto text-base text-zinc-400 cursor-pointer hover:text-zinc-200"
          >
            Academy
            <span className="px-2 bg-primary text-xs py-0.5 rounded-xl font-light text-white ml-2">
              New
            </span>
          </Link>
          <Link
            to="/nfts"
            className="grow my-auto text-base text-zinc-400 cursor-pointer hover:text-zinc-200"
          >
            NFTs
          </Link>
          <Link
            to="/for-projects"
            className="grow my-auto text-base text-zinc-400 cursor-pointer hover:text-zinc-200"
          >
            For Projects
          </Link>
        </div>
        <div className="flex gap-2.5 lg:w-[440px] items-center px-3.5 py-2 rounded-3xl border border-solid bg-neutral-900/30 backdrop-blur-lg border-neutral-800">
          <Search stroke="#fff6" width={16} height={16} />
          <input
            className="bg-transparent flex-auto max-md:max-w-full focus:outline-none text-stone-300 placeholder:text-zinc-600"
            type="text"
            placeholder="Search for ecosystems, trending quests etc,."
          />
        </div>

        <div className="flex flex-row justify-between items-center gap-5">
          <div className="size-10 rounded-full flex justify-center items-center border border-solid border-[#FA8922]">
            <img src={broadcast} alt="broadcast icon" />
          </div>
          <button className="px-5 py-1 flex justify-center items-center bg-white rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
