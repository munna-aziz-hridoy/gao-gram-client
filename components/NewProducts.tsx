import Head from "next/head";
import React from "react";
import NewProductCard from "./reuseable/NewProductCard";

type Props = {};

import products from "../assets/productData";
import Container from "./styledComponents/Container";

const NewProducts = (props: Props) => {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <h2 className="text-3xl font-bold text-primary text-center flex flex-col justify-center items-center gap-3 mb-16">
          সকল প্রডাক্ট
          <div className="flex justify-end items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
            <span className="inline-block w-20 h-2 rounded-full bg-primary"></span>
          </div>
        </h2>

        {/* tabs */}

        <div className="my-10 flex justify-center items-center">
          <ul className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 text-[12px] md:text-base lg:text-lg font-semibold">
            <li className="text-secondary">নতুন প্রডাক্ট</li>
            <li className="">বেস্ট সেলার</li>
            <li className="">ফিচার্ড প্রডাক্ট</li>
            <li className="">দামাকা অফার</li>
          </ul>
        </div>

        {/* content */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center p-5 ">
          {products.map((item, index) => (
            <NewProductCard key={index} product={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NewProducts;
