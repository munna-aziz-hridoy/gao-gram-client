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
      className={`bg-white fixed SidebarHeight shadow-lg w-[320px] bottom-0 ${
        cartOpen ? "right-0" : "-right-[320px]"
      } duration-500`}
    >
      <h2 className="text-white bg-secondary p-5 rounded-[2px] text-center uppercase font-bold">
        Shopping Cart
      </h2>
      <div className="relative">
        <div className="p-4 w-full max-w-md bg-white">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Products
            </h5>
            <span className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              Price
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
                    <img
                      className="w-8 h-8 rounded-full"
                      src={productOne.src}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={productThree.src}
                      alt="Bonnie image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $3467
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={productTwo.src}
                      alt="Michael image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Michael Gough
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $67
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={productOne.src}
                      alt="Lana image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Lana Byrd
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $367
                  </div>
                </div>
              </li>
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={productThree.src}
                      alt="Thomas image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Thomes Lean
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $2367
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
