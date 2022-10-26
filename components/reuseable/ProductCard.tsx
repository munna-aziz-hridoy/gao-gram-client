import React from "react";

type Props = {
  product: {
    name: string;
    price: number;
    description: string;
    id: number;
    vendor: string;
    image: any;
    vendorImage: any;
  };
};

const ProductCard = ({ product }: Props) => {
  const { name, description, price, image, vendor, vendorImage } = product;

  return (
    <div className="rounded shadow">
      <img className="w-full  h-64 rounded-t" src={image.src} alt="" />
      <div className="p-2">
        <p className="text-lg font-bold uppercase mt-3">{name}</p>
        <span className="font-semibold text-primary">Price: {price} TK</span>
        <div className="w-full h-[1px] bg-gray-300 mt-6 mb-3"></div>
        <p className="text-[14px] text-gray-500">
          {description.slice(0, 90)} ...
        </p>
        <div className="flex justify-between items-center my-3">
          <div className="flex items-center gap-3">
            <img
              className="w-[40px] h-[40px] rounded-full shadow-md"
              src={vendorImage.src}
              alt=""
            />

            <p className="text-[12px] font-semibold text-secondary">{vendor}</p>
          </div>
          <a
            href="#"
            className="text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300  rounded text-sm px-3 py-2 text-center font-semibold"
          >
            কার্ট এ অ্যাড করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
