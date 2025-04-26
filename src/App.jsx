import React from "react";
import Banner from "./components/Banner";
import Exclusive from "./components/Exclusive";
import Experiences from "./components/Experiences";
import PopularCategories from "./components/PopularCategories";
import Suppliers from "./components/Suppliers";
import Support from "./components/Support";
import Works from "./components/Works";
import useLenis from "./hooks/useLenis";

export default function App() {
  useLenis();
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
