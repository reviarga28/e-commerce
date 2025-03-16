"use client";

import React, { useState } from "react";
import Buttons from "../Buttons";
import { ArrowRight, X } from "lucide-react";

export default function TopNav() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      {!hidden && (
        <div
          className={`flex items-center justify-between w-full bg-gray-800 transition-all duration-500 p-2 md:p-3 lg:p-4 ${
            hidden ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="flex justify-center items-center md:gap-[20vw] text-white mx-auto">
            <div className="flex gap-2">
              <div>
                <h1 className="-rotate-3 text-black bg-[#F3DE6D] py-0.5 px-3 text-sm md:text-base lg:text-lg">
                  Black
                </h1>
              </div>
              <h2 className="text-lg md:text-xl font-semibold">Friday</h2>
            </div>
            <div className="flex justify-center items-center gap-1 text-sm md:text-base">
              <h1 className="text-[13px] sm:text-lg">Up to</h1>
              <span className="text-[17px] sm:text-3xl text-yellow-300">59%</span>
              <h2 className="text-[13px] sm:text-lg">OFF</h2>
            </div>
            <div>
              <Buttons
                text="SHOP NOW"
                icon={<ArrowRight size={13} />}
                className="bg-yellow-300 text-black px-2 py-1 md:px-3 md:py-2 rounded-[2px] transition duration-300 ease-in-out hover:bg-amber-200 hover:-translate-y-1 hover:scale-110 cursor-pointer text-xs md:text-sm lg:text-base"
              />
            </div>
          </div>
          <div>
            <div
              onClick={() => setHidden(true)}
              className="bg-gray-600 items-center p-1 rounded-[2px] cursor-pointer transition duration-300 hover:bg-gray-500"
            >
              <X size={16} className="text-white" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
