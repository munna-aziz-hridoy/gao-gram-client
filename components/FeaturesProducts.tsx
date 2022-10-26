import React from "react";
import products from "../assets/productData";
import ProductCard from "./reuseable/ProductCard";
import Container from "./styledComponents/Container";

type Props = {};

const FeaturesProducts = (props: Props) => {
  return (
    <div className="py-24">
      <Container>
        <h2 className="font-semibold text-lg lg:text-3xl text-primary uppercase text-center my-4 flex flex-col justify-center items-center gap-3 mb-16">
          ফীচার প্রোডাক্ট
          <div className="flex justify-end items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
            <span className="inline-block w-20 h-2 rounded-full bg-primary"></span>
          </div>
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 p-5
      "
        >
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturesProducts;
