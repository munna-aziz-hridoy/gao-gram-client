import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import banner4 from "../assets/banner-4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Head from "next/head";

type Props = {};

const BannerSlider = (props: Props) => {
  const sliderImages = [banner1, banner2, banner3, banner4];

  return (
    <>
      <Head>
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" defer />
      </Head>

      <div
        id="indicators-carousel"
        className="relative h-full"
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-96 lg:h-full overflow-hidden rounded-lg ">
          {/* <!-- Item 1 --> */}
          {sliderImages.map((item, index) => (
            <div
              key={index}
              className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 -z-10"
              data-carousel-item=""
            >
              <img
                src={item.src}
                className="absolute block  w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full"
                alt="..."
              />
            </div>
          ))}
          {/* <!-- Item 2 --> */}
          {/* <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full -z-10"
            data-carousel-item=""
          >
            <img
              src="https://images.unsplash.com/photo-1665501341371-130a1632fd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
          {/* <!-- Item 3 --> */}
          {/* <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full -z-10"
            data-carousel-item=""
          >
            <img
              src="https://images.unsplash.com/photo-1665501341371-130a1632fd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
          {/* <!-- Item 4 --> */}
          {/* <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full -z-10"
            data-carousel-item=""
          >
            <img
              src="https://images.unsplash.com/photo-1665501341371-130a1632fd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
          {/* <!-- Item 5 --> */}
          {/* <div
            className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full -z-10"
            data-carousel-item=""
          >
            <img
              src="https://images.unsplash.com/photo-1665501341371-130a1632fd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div> */}
        </div>
        {/* <!-- Slider indicators --> */}

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {sliderImages.map((item, index) => (
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800 mx-2"
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={`${index}`}
            ></button>
          ))}{" "}
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default BannerSlider;
