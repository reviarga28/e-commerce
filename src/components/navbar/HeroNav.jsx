import { Facebook, Heart, Instagram, ShoppingBag, ShoppingCart, Twitter, UserRound, Youtube } from "lucide-react";
import React from "react";
import Selects from "../Selects";
import Inputs from "../Inputs";

export default function HeroNav() {
  return (
    <div className="bg-[#1B6392]">
      {/* TOP */}
      <div className="border-b border-gray-400 py-3 px-4">
        <div className="block lg:flex md:flex text-center justify-center  md:justify-between items-center text-white">
          <div>
            <h1>Welcome to Clicon online eCommerce store.</h1>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-2 items-center border-e pr-4">
              <h2 className="font-light text-sm sm:text-md">Follow us:</h2>
              <div className="flex gap-1 ">
                <Twitter color="white" size={16} />
                <Facebook color="white" size={16} />
                <Youtube color="white" size={16} />
                <Instagram color="white" size={16} />
              </div>
            </div>
            <div>
              <Selects />
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
  <div className="flex py-4 justify-around items-center lg:gap-[26vh] text-white">
    {/* LOGO */}
    <div className="flex gap-1 justify-center items-center">
        <div className="flex justify-center items-center w-10 h-10 bg-white rounded-[50%]">
            <div className="bg-white border-4 border-[#1B6392] w-5 h-5 rounded-[50%]"></div>
        </div>
        <h1>REPSTORE</h1>
    </div>
    {/* search */}
    <div>
        <Inputs type="search" placeholder="Search" className="placeholder:text-white w-[25vw]"/>
    </div>
    {/* icon */}
    <div className="flex gap-5">
        <ShoppingCart color="white" size={19}/>
        <Heart color="white" size={19}/>
        <UserRound color="white" size={19}/>
    </div>
  </div>
    </div>
  );
}
