import React from "react";
import { Hero, Info, Footer } from "../components";
import Jobs from "../Jobs/Jobs";

import {
  aboutData,
  eventsData,
  communityData,
  contributeData,
  jobsAndInternship,
} from "../components/Info/Data";

import { jobExample1, jobExample2 } from "../Jobs/Data";
import Events from "../Events/Events";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Info {...aboutData} />
      <div style={{ height: "475px" }}>
        <Info {...eventsData} />
      </div>

      <Events />

      <Info {...communityData} />
      <Info {...contributeData} />
      <div style={{ height: "500px" }}>
        <Info {...jobsAndInternship} />
      </div>
      <Jobs {...jobExample1} />
      <Jobs {...jobExample2} />
      <br></br>
    </>
  );
};

export default Homepage;
