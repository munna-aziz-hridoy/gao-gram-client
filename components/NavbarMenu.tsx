import React, { useState } from "react";

import Container from "./styledComponents/Container";

import logo from "../assets/logo.png";

import { BiHeart } from "react-icons/bi";

type Props = {};

type Menu = {
  id: Number;
  name: String;
  link: String;
};

const menu: Menu[] = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    name: "Shop",
    link: "shop",
  },
  {
    id: 3,
    name: "Contact",
    link: "contact",
  },
  {
    id: 4,
    name: "About",
    link: "about",
  },
];

const NavbarMenu = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>(menu[0].name as string);

  return (
    <nav className="bg-primaryAcent h-20 border-gray-200  lg:px-10 md:px-4 px-3 shadow ">
      <div className="flex flex-wrap justify-between items-center mx-auto h-full">
        <div className="flex justify-start items-center gap-5 md:w-1/2">
          <a href="/" className="flex items-center -mt-2">
            <img src={logo.src} className="mr-3 h-9" alt="Flowbite Logo" />
          </a>
          <ul
            className={`flex flex-col absolute md:static w-full bg-primaryAcent  border border-gray-100 md:flex-row md:space-x-8 md:text-sm md:font-medium md:border-0 ${
              openMenu ? "top-28" : "-top-[500px]"
            }  left-0 px-3 md:mt-5 duration-300`}
          >
            <div className="w-full flex items-center mb-5 mt-1 md:hidden">
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-[100%]  text-gray-900  rounded-[2px] border-l border-t border-b border-green-300 sm:text-sm  focus:border-primary h-12"
                placeholder="Search..."
              />
              <button className="w-[90px] bg-secondary  border-r border-t border-b border-green-300 text-white h-12">
                Search
              </button>
            </div>
            {menu.map((item) => {
              const { id, name, link } = item;
              return (
                <li
                  onClick={(event: React.MouseEvent<HTMLElement>) =>
                    setActiveMenu(name as string)
                  }
                >
                  <a
                    // href={`${link}`}
                    className={`block py-2 px-3     rounded-[2px] md:bg-transparent ${
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
        </div>
        <div className="flex md:order-2 justify-end md:w-1/2">
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
            <span className="sr-only">Search</span>
          </button>
          <div className="hidden relative md:block md:w-full">
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
            <div className="flex md:w-full justify-between">
              <div className="w-full flex items-center">
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 pl-10 w-[97%]  text-gray-900  rounded-[2px] border-l border-t border-b border-green-300 sm:text-sm  focus:border-primary h-12"
                  placeholder="Search..."
                />
                <button className="w-[90px] bg-secondary  border-r border-t border-b border-green-300 text-white h-12">
                  Search
                </button>
              </div>
              <p className="flex justify-center items-center text-3xl font-bold text-primary mx-3">
                <BiHeart />
              </p>
            </div>
          </div>
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
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
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
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
