import React, {useState} from 'react';
import {Navbar} from "../components";
import {Hero} from "../components";
import {Info} from "../components";

import {aboutData, communityData, contributeData} from "../components/Info/Data";

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar toggle={toggle}/>
            <Hero />
            <Info {...aboutData}/>
            <Info {...communityData}/>
            <Info {...contributeData}/>
        </>
    );
};

export default Homepage;
