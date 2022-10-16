import React from "react";

import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

import Container from "./styledComponents/Container";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-[40px] bg-white flex justify-between items-center border-b-[1px] border-[#f1f1f1] lg:px-10 md:px-4">
      <div className="w-full flex justify-between items-center h-full">
        <div className="flex items-center gap-3">
          <div className="text-sm font-semibold flex items-center text-lightGray">
            <SocialIcon
              network="email"
              bgColor="transparent"
              fgColor="#747474"
            />
            <span className="hidden sm:inline-block">gaogram@admin.com</span>
          </div>
          <div className="inline-block w-[2px] h-[23px] bg-green-600"></div>
          <p className="text-sm font-semibold flex items-center gap-2 text-lightGray">
            <FaPhoneAlt />
            <span>+880 123 4567 890</span>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold flex items-center gap-2 text-lightGray">
            <span>Login</span>
            <FaUser />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
