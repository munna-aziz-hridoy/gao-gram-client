import Image from "next/image";
import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

import productOne from "../assets/productOne.jpg";
import productTwo from "../assets/productThree.jpeg";
import productThree from "../assets/productTwo.webp";

type Props = {};

const Cart = (props: Props) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <div
      className={`bg-white fixed SidebarHeight z-50 shadow-lg md:w-[320px] w-[280px] bottom-0 ${
        cartOpen ? "right-0" : "md:-right-[320px] -right-[280px]"
      } duration-500`}
    >
      <h2 className="text-white bg-secondary p-5 rounded-[2px] text-center uppercase font-bold">
        শপিং কার্ট
      </h2>
      <div className="relative">
        <div className="p-4 w-full max-w-md bg-white">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              প্রডাক্ট সমূহ
            </h5>
            <span className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              দাম
            </span>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={30}
                      width={30}
                      src={productOne.src}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      পণ্যের নাম বাংলায়
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400 ">
                    ২*
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $৩২০
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={30}
                      width={30}
                      src={productThree.src}
                      alt="Bonnie image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      বানিয়া গ্রীন
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400 ">
                    ৫*
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $৩৪৫৬
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={30}
                      width={30}
                      src={productTwo.src}
                      alt="Michael image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      বাংলা টাইটেল
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400 ">
                    ১*
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $৬৮
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={30}
                      width={30}
                      src={productOne.src}
                      alt="Lana image"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      লানা বেয়ার্ড
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400 ">
                    ৪*
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $৩৯০
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={30}
                      width={30}
                      src={productThree.src}
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      থমাস লেন
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-400 ">
                    ৯*
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $২৩৮০
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setCartOpen(!cartOpen)
          }
          className="absolute w-[50px] h-[50px] rounded-[2px] shadow bg-primary flex justify-center items-center text-[30px] text-white top-[340px] -left-[50px] cursor-pointer"
        >
          <FaCartArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Cart;
