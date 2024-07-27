import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex  justify-between md:justify-around h-16 items-center">
      <p className="text-lg font-bold ">
        Homie
        <span className="bg-orange-600 py-0.5 px-2 rounded text-white">
          Hub
        </span>
      </p>
      <ul className="flex md:w-64 text-sm justify-around">
      <li className="md:hidden w-24 text-[12px] py-1 bg-slate-900  text-sm text-white rounded-2xl flex justify-center  items-center">
          Register{" "}
          <span>
            <ChevronRight className="h-4" />
          </span>{" "}
        </li>
        <li className="hidden md:block bg-slate-200 px-5 py-3 rounded-3xl text-[12px]">
            <Link href='/login'>Login</Link>
            {" "} / {" "}
            <Link href='/signup'>Signup</Link>
        </li>
        <li className="hidden md:block bg-yellow-200 px-5 py-3 rounded-3xl text-[12px]">
          Download App
        </li>
      </ul>
    </div>
  );
};

export default Nav;
