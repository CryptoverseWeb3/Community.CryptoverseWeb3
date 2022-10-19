import React from "react";
import {Hero, Info, Footer} from "../components";

import {
    aboutData,
    communityData,
    contributeData,
    jobsAndInternship,

} from "../components/Info/Data";
import {jobExample1, jobExample2} from "../Jobs/Data";

import Projects from "../components/Projects/Projects";

const Homepage = () => {
    return (
        <>
            <Hero/>
            <Info {...aboutData} />
            <Info {...communityData} />
            <Projects/>
            <Info {...contributeData} />
            <div style={{height: "500px"}}>
                <Info {...jobsAndInternship} />
            </div>
            <Jobs {...jobExample1} />
            <Jobs {...jobExample2} />
            <Footer/>
        </>
    );
};

export default Homepage;
