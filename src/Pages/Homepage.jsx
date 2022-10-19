import React from "react";
import { Hero, Info, Footer } from "../components";
import Jobs from "../Jobs/Jobs";

import {
  aboutData,
  communityData,
  contributeData,
  jobsAndInternship,
} from "../components/Info/Data";

import { jobExample1, jobExample2 } from "../Jobs/Data";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Info {...aboutData} />
      <Info {...communityData} />
      <Info {...contributeData} />
      <div style={{ height: "500px" }}>
        <Info {...jobsAndInternship} />
      </div>
      <Jobs {...jobExample1} />
      <Jobs {...jobExample2} />
    </>
  );
};

export default Homepage;
