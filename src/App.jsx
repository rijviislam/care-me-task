import React from "react";
import Banner from "./components/Banner";
import Experiences from "./components/Experiences";
import Suppliers from "./components/Suppliers";
import Works from "./components/Works";

export default function App() {
  return (
    <div>
      <Banner />
      <Suppliers />
      <Experiences />
      <Works />
    </div>
  );
}
