"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export default function Selects() {
  return (
    <div className="relative w-[55px]">
      <select
        className="appearance-none w-full text-white focus:outline-none focus:ring-0 optional:font-light text-md sm:text-md"
      >
        <option value="eng" className="text-black text-sm">Eng</option>
        <option value="ind" className="text-black text-sm">Ind</option>
        <option value="Sgp" className="text-black text-sm">Sgp</option>
      </select>
      {/* Ikon dropdown custom */}
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
    </div>
  );
}
