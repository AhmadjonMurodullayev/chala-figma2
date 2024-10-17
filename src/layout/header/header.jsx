import React from "react";
import Sms from "../../assets/icons/sms";
import Phone from "../../assets/icons/phone";
import Modul from "../../assets/icons/modul";
import Like from "../../assets/icons/like";
import User from "../../assets/icons/user";
import Korzinka from "../../assets/icons/korzinka";
import Navbar from "./navbar";
export default function Header() {
  return (
    <div className="w-full bg-[#7E33E0] h-[50px] max-w-[1540px] m-auto ">
      <div className="flex justify-between items-center h-full max-w-[1200px] m-auto">
        <div className="flex justify-between gap-[48px]">
          <div className="flex items-center  gap-[10px]">
            <Sms />
            <h3 className="text-white">mhhasanul@gmail.com</h3>
          </div>
          <div className="flex items-center  gap-[10px]">
            <Phone />
            <h3 className="text-white">mhhasanul@gmail.com</h3>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="flex items-center gap-1">
            <h4 className="text-white font-semibold">English</h4>
            <Modul />
          </div>
          <div className="flex items-center gap-1 ">
            <h4 className="text-white font-semibold">USD</h4>
            <Modul />
          </div>
          <div className="flex items-center gap-1">
            <h4 className="text-white font-semibold">Login</h4>
            <User />
          </div>
          <div className="flex items-center gap-1 ">
            <h4 className="text-white font-semibold">Wishlist</h4>
            <Like />
          </div>
          <div className="mx-3">
            <Korzinka />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] m-auto">
        <Navbar />
      </div>
    </div>
  );
}
