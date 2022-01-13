import React, { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/outline";

function Feeds({ image, date, title, description }) {
  // UseState to change Like and Effect animation on button when clicked

  const [like, setLike] = useState(false);
  const [effect, setEffect] = useState(false);

  // function to handle button Click
  const handleClick = () => {
    setLike(!like);
    setEffect(true);
  };

  return (
    <div className="bg-white pb-4 outline outline-1 outline-gray-300 md:w-128 rounded-sm ">
      <h2 className="bg-white font-semibold pt-2 ml-5 font-sans">{title}</h2>
      <h5 className="text-gray-500 ml-5 mb-4 mt-1 text-xs">{`Brought to you by NASA's Astronomy Photo of the Day (APOD) API`}</h5>
      <div className="flex flex-col ">
        <Image
          src={image}
          alt={title}
          width="600"
          height="400"
          className="rounded"
          objectFit="fill"
        />
        <button
          className="ml-5 my-2 w-2"
          type="button"
          onClick={handleClick}
          onAnimationEnd={() => setEffect(false)}
        >
          <HeartIcon
            className={` ${effect && "animate-wiggle"} h-8 w-8 ${
              like
                ? "fill-red-600 "
                : " text-white stroke-black hover:stroke-gray-500"
            }`}
          />
        </button>
      </div>
      <div className="flex space-x-4 ">
        <CalendarIcon className="h-7 ml-5 stroke-gray-700" />
        <h4 className="py-1">{date}</h4>
      </div>
      <p className="italic font-sans line-clamp-6 px-5 text-base">
        {description}
      </p>
    </div>
  );
}

export default Feeds;
