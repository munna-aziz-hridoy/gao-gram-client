import { NextPage } from "next";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Cart from "../../components/Cart";
import CategorySidebar from "../../components/CategorySidebar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavbarMenu from "../../components/NavbarMenu";
import Container from "../../components/styledComponents/Container";
import StickyMenu from "../../components/reuseable/StickyMenu";
import img from "../../assets/productThree.jpeg";

const ProductDetails: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);
  return (
    <div>
      <Head>
        <title>Gao Gram</title>
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" defer />
      </Head>
      <StickyMenu />

      <Cart />

      <Container>
        <div className="OthersContent">
          <div className="my-8 p-4">
            <h2 className="text-primary text-3xl font-bold uppercase my-8">
              Product Details
            </h2>
            <a
              href="#"
              className="flex flex-col items-center bg-white rounded border shadow-md md:flex-row hover:bg-gray-100 gap-5"
            >
              <div className="w-full">
                <img
                  className="object-cover w-full h-96 rounded-t md:h-auto  md:rounded-none md:rounded-l w-full"
                  src={img.src}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductDetails;
