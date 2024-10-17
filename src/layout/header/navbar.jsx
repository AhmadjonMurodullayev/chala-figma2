import React from "react";
import logo from "../../assets/logo.svg";
import Sorch from "../../assets/icons/sorch";

export default function Navbar() {
  return (
    <div className="w-full h-[70px] flex justify-between items-center">
      <div className="flex  items-center gap-12">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="hidden md:flex gap-[35px]">
          <li className=" hover:text-red-500">Home</li>
          <li className=" hover:text-red-500">Pages</li>
          <li className=" hover:text-red-500">Products</li>
          <li className=" hover:text-red-500">Blog </li>
          <li className=" hover:text-red-500">Shop </li>
          <li className=" hover:text-red-500">Contact </li>
        </ul>
      </div>
      <div className="flex items-center border-[#E7E6EF] border-[1px] ">
        <input type="text" className="px-7" />
        <div>
          <button className="bg-red-500 px-4 py-2 ">
            <Sorch />
          </button>
        </div>
      </div>
    </div>
  );
}
