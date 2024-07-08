import React from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Countdown completed!</span>;
  } else {
    return (
      <div className="flex flex-row gap-8 justify-center items-center w-full p-4 border border-stone-800 rounded-lg bg-neutral-950">
        <span className="flex flex-col justify-center items-center text-4xl text-stone-400 font-medium">
          {days}{" "}
          <span className="text-base font-normal text-stone-600">Days </span>
        </span>
        <span className="flex flex-col justify-center items-center text-4xl text-stone-400 font-medium">
          {hours}{" "}
          <span className="text-base font-normal text-stone-600">Hrs </span>
        </span>
        <span className="flex flex-col justify-center items-center text-4xl text-stone-400 font-medium">
          {minutes}{" "}
          <span className="text-base font-normal text-stone-600">Mins </span>
        </span>
        <span className="flex flex-col justify-center items-center text-4xl text-stone-400 font-medium">
          {seconds}{" "}
          <span className="text-base font-normal text-stone-600">Sec</span>
        </span>
      </div>
    );
  }
};

const CountdownTimer = () => {
  const targetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
