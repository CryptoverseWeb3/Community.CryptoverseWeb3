import React, {useState} from 'react';
import {
    Navbar, Hero, Info, Footer,
} from "../components";


import {aboutData, communityData, contributeData} from "../components/Info/Data";

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar toggle={toggle}/>
            <Hero/>
            <Info {...aboutData}/>
            <Info {...communityData}/>
            <Info {...contributeData}/>
            <Footer/>
        </>
    );
};

export default Homepage;
