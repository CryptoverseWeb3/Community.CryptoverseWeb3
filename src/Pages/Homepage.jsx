import React from "react";
import {
    Hero, Info, Footer, Jobs, Projects
} from "../components";

import {
    aboutData,
    eventsData,
    communityData,
    contributeData,
    jobsAndInternship,
} from "../components/Info/Data";

import {jobExample1, jobExample2} from "../Jobs/Data";

import Events from "../Events/Events";

const Homepage = () => {
    return (
        <>
            <Hero/>
            <Info {...aboutData} />
            <Info {...communityData} />
            <Info {...contributeData} />
            <Projects/>
            <div style={{height: "500px"}}>
                <Info {...eventsData} />
            </div>
            <Events/>
            <div style={{height: "500px"}}>
                <Info {...jobsAndInternship} />
            </div>
            <Jobs {...jobExample1} />
            <Jobs {...jobExample2} />
            <br></br>
            <br></br>
            <Footer/>̥
        </>
    );

};

export default Homepage;
