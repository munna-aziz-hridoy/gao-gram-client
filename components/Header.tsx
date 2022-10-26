import React from "react";
import { BiMoney } from "react-icons/bi";

import { FaPhoneAlt, FaStoreAlt, FaUser } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

import Container from "./styledComponents/Container";
import bdIcon from "../assets/bd-flag.ico";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[40px]  bg-white flex justify-between items-center border-b-[1px] border-[#f1f1f1] lg:px-10 md:px-4">
      <div className="w-full flex justify-between items-center h-full px-5">
        <div className="flex items-center gap-3">
          <p className="text-sm font-semibold flex items-center gap-2 text-lightGray">
            <FaStoreAlt className="text-xl" />
            <span>ভেন্ডর লগইন</span>
          </p>
        </div>
        <div className="flex  gap-4 items-center">
          <div className="text-sm font-semibold hidden sm:flex items-center text-lightGray">
            <BiMoney className="text-xl mr-2" />
            <span>টাকা</span>
          </div>
          <div className="sm:inline-block hidden w-[0.5px] h-[23px] bg-green-600"></div>
          <p className="text-sm font-semibold flex items-center gap-2 text-lightGray">
            <FaUser className="text-xl" />
            <span>একাউন্ট</span>
          </p>
          <div className="sm:inline-block hidden w-[0.5px] h-[23px] bg-green-600"></div>
          <p className="text-sm font-semibold  items-center gap-2 text-lightGray hidden sm:flex">
            <img width={24} src={bdIcon.src} alt="" />
            <span>বাংলা</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
