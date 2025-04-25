import React from "react";
import Banner from "./components/Banner";
import Exclusive from "./components/Exclusive";
import Experiences from "./components/Experiences";
import PopularCategories from "./components/PopularCategories";
import Suppliers from "./components/Suppliers";
import Support from "./components/Support";
import Works from "./components/Works";

export default function App() {
  return (
    <div>
      <Banner />
      <Suppliers />
      <Exclusive />
      <Experiences />
      <Works />
      <PopularCategories />
      <Support />
    </div>
  );
}
