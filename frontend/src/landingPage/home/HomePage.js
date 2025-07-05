import React from "react";
import Pricing from "./Pricing";
import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import Education from "./Education";
import OpenAccount from "../OpenAccount";


function HomePage() {
  return (
    <>
     
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    
    </>
  );
}

export default HomePage;
