import React from "react";

import categoryBra from "../assets/category-bra.png";
import categoryPanty from "../assets/category-panty.jpeg";
import categoryCosmetics from "../assets/category-cosmetics.jpg";
import Container from "./styledComponents/Container";

type Props = {};

interface Category {
  id: number;
  name: string;
  image: any;
}

const categories: Category[] = [
  { id: 1, name: "ব্রেসিয়ার", image: categoryBra },
  { id: 2, name: "প্যান্টি", image: categoryPanty },
  { id: 3, name: "কসমেটিক্স", image: categoryCosmetics },
];

const TopCategories = (props: Props) => {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-primary text-center">
          টপ ক্যাটাগরি
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 my-6">
          {categories.map((item) => (
            <div
              className="flex flex-col items-center gap-10 justify-center"
              key={item.id}
            >
              <img
                className="w-80 h-80 rounded-full p-8 bg-primaryAcent shadow-xl shadow-gray-200"
                src={item.image.src}
                alt="image description"
              />
              <p className="text-secondary font-semibold text-xl">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopCategories;
