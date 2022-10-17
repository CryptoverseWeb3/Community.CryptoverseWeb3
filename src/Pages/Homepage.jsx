import React from "react";
import { Hero, Info, Footer } from "../components";

import {
  aboutData,
  communityData,
  contributeData,
} from "../components/Info/Data";
import Projects from "../components/Projects/Projects";
const Homepage = () => {
  return (
    <>
      <Hero />
      <Info {...aboutData} />
      <Info {...communityData} />
      <Projects />
      <Info {...contributeData} />
      <Footer />
    </>
  );
};

export default Homepage;
