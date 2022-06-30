import React, {useState} from 'react';
import {Navbar} from "../components";
import {Hero} from "../components";

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <Navbar toggle={toggle}/>
            <Hero />
        </>
    );
};

export default Homepage;
