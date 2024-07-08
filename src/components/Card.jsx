import { FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "./style.css";
import { Clapperboard } from "lucide-react";

const Card = ({ card }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="relative m-2 border border-stone-800 rounded-2xl overflow-hidden">
      {showVideo ? (
        <div className="relative w-full h-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${card.youtubeUrl}`}
            allowFullScreen
            title={card.desc}
          ></iframe>
          <div className="absolute font-medium top-2 right-2 size-10 rounded-full bg-black/50 border border-stone-600 flex justify-center items-center p-2 z-10 text-amber-100">
            <RxCross2
              className="text-white cursor-pointer"
              size={24}
              onClick={() => setShowVideo(false)}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="relative w-full h-full group">
            <img
              src={card.img}
              alt={card.desc}
              className="w-full h-full object-cover hover:opacity-50 transition-all ease-in-out duration-200"
            />
            <div
              onClick={() => setShowVideo(true)}
              className="play-button absolute inset-0 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 size-14 rounded-full bg-black/50  cursor-pointer border border-stone-600 flex justify-center items-center p-2"
            >
              <FaPlay className="text-white" size={20} />
            </div>
          </div>
          <div className="absolute font-medium top-2 right-2 size-10 rounded-full bg-black/30 border border-stone-600 flex justify-center items-center p-2 z-10 text-amber-100">
            <Clapperboard />
          </div>
          <div className="absolute font-normal bottom-0 w-full p-2 z-10 text-amber-100 backdrop-blur-lg bg-gradient-to-t from-amber-100/50 via-transparent to-transparent text-[24px] px-2 leading-8">
            {card.desc}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
