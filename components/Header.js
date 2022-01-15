import React from "react";
import Head from "next/head";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Header() {
  let headerIcon = [
    { id: "1", src: "https://img.icons8.com/ios-filled/50/000000/home.png" },
    { id: "2", src: "https://img.icons8.com/ios/50/000000/plus-2-math.png" },
    {
      id: "3",
      src: "https://img.icons8.com/ios/50/000000/facebook-messenger--v4.png",
    },
    { id: "4", src: "https://img.icons8.com/ios/50/000000/compass--v1.png" },
    { id: "5", src: "https://img.icons8.com/ios/50/000000/like--v1.png" },
    {
      id: "6",
      src: "https://img.icons8.com/material-rounded/24/000000/user.png",
    },
  ];

  return (
    <nav className="mb-4 fixed w-full top-0 z-50 bg-white flex items-center justify-around  p-2 lg:px-5 shadow-md">
      <Image
        src="/Spacestagram.PNG"
        alt="logo"
        width="140"
        height="40"
        className="cursor-pointer"
      />
      <div className="flex justify-between content-center">
        <div className="flex items-center rounded bg-gray-200 p-2 mr-20">
          <SearchIcon className=" h-4 text-gray-500 " />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink md:w-56 h-4"
          />
        </div>
        <div className="flex  justify-around">
          <div className="flex space-x-3 md:space-x-6 content-center justify-center mt-1">
            {headerIcon.map((icon) => (
              <img
                key={icon.id}
                className="cursor-pointer h-6 object-contain"
                src={icon.src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
