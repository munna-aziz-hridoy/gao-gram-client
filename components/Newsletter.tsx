import React from "react";
import Container from "./styledComponents/Container";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="w-full bg-primary p-5">
      <Container>
        <div className="flex flex-col gap-5 justify-center items-center py-10">
          <p className="text-secondary font-bold text-xl shadow px-10 py-3 rounded shadow-secondary bg-primaryAcent">
            সাবস্ক্রাইবারদের জন্য{" "}
          </p>
          <h2 className="text-white font-bold text-4xl">ফ্রি ডেলিভারি </h2>

          <div className="mb-6 w-2/3">
            <div className="flex">
              <input
                type="text"
                placeholder="আপনার ইমেইল"
                className="block p-4 w-full text-black bg-orange-200 rounded-l border border-secondary  focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                className="rounded-r bg-secondary text-white px-6"
                type="submit"
                value="সাইন আপ"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
