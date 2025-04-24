import React from "react";
import Banner from "./components/Banner";
import Exclusive from "./components/Exclusive";
import Experiences from "./components/Experiences";
import Suppliers from "./components/Suppliers";

export default function App() {
  return (
    <div>
      <Banner />
      <Suppliers />
      <Exclusive />
      <Experiences />
    </div>
  );
}
