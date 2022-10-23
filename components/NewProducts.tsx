import Head from "next/head";
import React from "react";
import NewProductCard from "./reuseable/NewProductCard";

type Props = {};

import products from "../assets/productData";

const NewProducts = (props: Props) => {
  return (
    <>
      <div className="my-16">
        <h2 className="text-3xl font-bold text-secondary text-center">
          নতুন পণ্য
        </h2>

        {/* tabs */}

        <div className="my-10 flex justify-center items-center">
          <ul className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 text-[12px] md:text-base lg:text-lg font-semibold">
            <li className="text-primary">নতুন প্রডাক্ট</li>
            <li className="">বেস্ট সেলার</li>
            <li className="">ফিচার্ড প্রডাক্ট</li>
            <li className="">দামাকা অফার</li>
          </ul>
        </div>

        {/* content */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center">
          {products.map((item, index) => (
            <NewProductCard key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProducts;
