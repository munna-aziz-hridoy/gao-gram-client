import React from "react";
import products from "../assets/productData";
import ProductCard from "./reuseable/ProductCard";

type Props = {};

const FeaturesProducts = (props: Props) => {
  return (
    <div className="my-36">
      <h2 className="font-semibold text-lg lg:text-3xl text-primary uppercase text-center my-4">
        ফীচার প্রোডাক্ট
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8
      "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesProducts;
