import { ArrowRight } from "lucide-react";
import React from "react";

export default function Buttons(props) {
    const {icon, text, className} = props
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <h1 className="text-[10px] font-semibold">{text}</h1>
      {icon}
    </div>
  );
}
