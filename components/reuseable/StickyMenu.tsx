import React from "react";
import CategorySidebar from "../CategorySidebar";
import Header from "../Header";
import NavbarMenu from "../NavbarMenu";

type Props = {};

const StickyMenu = (props: Props) => {
  return (
    <div className="sticky top-0">
      {/* Header */}
      <Header />
      {/* Navbar */}
      <NavbarMenu />
      {/* Sidebar */}
      <CategorySidebar />
    </div>
  );
};

export default StickyMenu;
