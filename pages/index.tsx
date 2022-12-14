import type { NextPage } from "next";
import Head from "next/head";
import BannerSlider from "../components/BannerSlider";
import Cart from "../components/Cart";
import CategorySidebar from "../components/CategorySidebar";
import FeatureCard from "../components/FeatureCard";
import FeaturesProducts from "../components/FeaturesProducts";
import Footer from "../components/Footer";

import Header from "../components/Header";
import NavbarMenu from "../components/NavbarMenu";
import NewProducts from "../components/NewProducts";
import Newsletter from "../components/Newsletter";
import Container from "../components/styledComponents/Container";
import TopCategories from "../components/TopCategories";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gao Gram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* font */}

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Tiro+Bangla&display=swap"
          rel="stylesheet"
        ></link>

        {/* font */}

        <script src="../path/to/flowbite/dist/flowbite.js" defer></script>
        <script
          src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"
          defer
        ></script>
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" defer />
      </Head>
      <div className="sticky top-0">
        {/* Header */}
        <Header />
        {/* Navbar */}
        <NavbarMenu />
        {/* Sidebar */}
      </div>
      <CategorySidebar />

      <Cart />

      <Container>
        {/* banner section */}

        <div className="flex flex-col lg:flex-row gap-5 my-10 lg:h-[452px]">
          <div className="w-full lg:w-[70%] h-full">
            <BannerSlider />
          </div>

          <div className="w-full lg:w-[30%] flex flex-col gap-4 h-full justify-center">
            <FeatureCard bg="#90ff9061" />
            <FeatureCard bg="#ffbe574f" />
            <FeatureCard bg="#fff" />
          </div>
        </div>
      </Container>

      <TopCategories />

      {/* feature products */}

      <FeaturesProducts />

      {/* new product */}

      <NewProducts />

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;
