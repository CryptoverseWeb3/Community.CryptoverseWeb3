import React from 'react';
import {
   Hero, Info, Footer,
} from "../components";


import {aboutData, communityData, contributeData} from "../components/Info/Data";

const Homepage = () => {
    return (
        <>
            <Hero/>
            <Info {...aboutData}/>
            <Info {...communityData}/>
            <Info {...contributeData}/>
            <Footer/>
        </>
    );
};

export default Homepage;
