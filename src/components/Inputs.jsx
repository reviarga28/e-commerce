"use client";
import { Input } from "@/components/ui/input";

export default function Inputs(props) {
  const {type, placeholder, className} = props;
  return <Input type={type} placeholder={placeholder} className={className} />;
}
