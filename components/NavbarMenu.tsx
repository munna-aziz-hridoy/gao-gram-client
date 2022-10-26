import React, { useState } from "react";

import Container from "./styledComponents/Container";

import logo from "../assets/logo.png";

import { BiHeart, BiPhoneOutgoing } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { FaCartArrowDown } from "react-icons/fa";

type Props = {};

type Menu = {
  id: Number;
  name: String;
  link: String;
};

const menu: Menu[] = [
  {
    id: 1,
    name: "হোম পেজ",
    link: "home",
  },
  {
    id: 2,
    name: "শপ",
    link: "shop",
  },
  {
    id: 3,
    name: "কন্টাক",
    link: "contact",
  },
  {
    id: 4,
    name: "আমাদের জানুন",
    link: "about",
  },
];

const NavbarMenu = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>(menu[0].name as string);

  return (
    <nav className="bg-primaryAcent z-50  border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto h-full py-3 lg:px-10 md:px-4 px-3">
        <div className="flex justify-start items-center gap-5 ">
          <Link href="/" className="flex items-center -mt-2">
            <Image
              height={42}
              width={84}
              src={logo.src}
              className="mr-3"
              alt="gao-gram logo"
            />
          </Link>
        </div>
        <div className="w-3/4 hidden md:flex items-center">
          <form className="w-full">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Your Email
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="বাংলায় সার্স করুন"
                required
              />
              <button
                type="submit"
                className="text-white text-base absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded px-4 py-[6px] "
              >
                সার্স করুন
              </button>
            </div>
          </form>

          {/* <input
            type="text"
            id="search-navbar"
            className="block p-2 pl-10 w-[97%]  text-gray-900  rounded-[2px] border-l border-t border-b border-gray-100 sm:text-sm  focus:border-primary h-12"
            
          />
          <button className="w-[90px] bg-secondary  border-r border-t border-b border-green-300 text-white h-12">
            
          </button> */}
        </div>
        <div className="flex md:order-2 justify-end ">
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              setOpenMenu(!openMenu)
            }
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100  text-sm p-2.5 mr-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">সার্স করুন</span>
          </button>

          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              setOpenMenu(!openMenu)
            }
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white md:hidden bg-green-300 hover:bg-primary focus:bg-primary rounded-[2px]"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="hidden md:flex md:w-full justify-between">
            <p className="flex justify-center items-center text-3xl font-bold text-gray-600 mx-3 relative">
              <FaCartArrowDown />
              <span className="absolute  w-5 h-5 rounded-full bg-primary text-[12px] font-semibold flex justify-center items-center text-white top-4 -right-1">
                ৩
              </span>
            </p>
            <p className="flex justify-center items-center text-3xl font-bold text-gray-600 mx-3 relative">
              <BiHeart />
              <span className="absolute  w-5 h-5 rounded-full bg-primary text-[12px] font-semibold flex justify-center items-center text-white top-4 -right-1">
                ৩
              </span>
            </p>
          </div>

          {/* <div className="block relative md:hidden md:w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="lg:px-10 md:px-4 px-3 bg-white border-t border-b  border-gray-200 z-50">
        <div className="flex justify-between items-center py-4">
          <ul
            className={`flex flex-col absolute md:static w-full  border border-gray-100 md:flex-row md:space-x-8 md:text-sm md:font-medium md:border-0 bg-white md:bg-transparent ${
              openMenu ? "top-28" : "-top-[500px]"
            }  left-0 px-3  duration-300`}
          >
            <div className="w-full flex items-center mb-5 mt-1 md:hidden">
              <form className="w-full">
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Your Email
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="বাংলায় সার্স করুন"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white text-base absolute right-2.5 bottom-2.5 bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded px-4 py-2 "
                  >
                    সার্স করুন
                  </button>
                </div>
              </form>
            </div>
            {menu.map((item) => {
              const { id, name, link } = item;
              return (
                <li
                  // key={id}
                  onClick={(event: React.MouseEvent<HTMLElement>) =>
                    setActiveMenu(name as string)
                  }
                >
                  <a
                    // href={`${link}`}
                    className={`block py-2 px-3     rounded-[2px] md:bg-transparent  ${
                      activeMenu === name
                        ? "md:text-primary bg-primary text-white"
                        : "text-gray-600"
                    } md:p-0 cursor-pointer `}
                    aria-current="page"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <p className="text-sm font-semibold text-gray-500 flex justify-start items-center gap-2 min-w-[250px]">
              <BiPhoneOutgoing className="text-xl" />
              <span>হটলাইন:</span>
              <span className="text-primary">+৮৮ ১২৩-৪৫৬-৭৮৯০</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
