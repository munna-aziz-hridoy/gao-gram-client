import React from "react";

type Props = {
  bg: string;
};

const FeatureCard = ({ bg }: Props) => {
  return (
    <div
      style={{ background: `${bg}` }}
      className={`w-full h-[140px] py-3 px-2  rounded-lg border border-gray-200 shadow shadow-primaryAcent flex gap-2 items-center flex-row-reverse justify-end`}
    >
      <div>
        <h5 className="mb-2 sm:text-[18px] md:text-lg lg:text-xl text-base font-semibold tracking-tight text-gray-900 font-bangla">
          সকল পণ্যে ২৩% ডিসকাউন্ট
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Shop Now
        </p>
      </div>
      <div className="flex">
        <img
          height={140}
          width={160}
          className="rounded"
          src="https://static.toiimg.com/photo/msid-68976835/68976835.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureCard;
