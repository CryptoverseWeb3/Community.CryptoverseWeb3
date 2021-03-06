import React, {useState} from 'react';
import Video from '../../assets/videos/video.mp4';

import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    BackgroundImage

} from './HeroElements';
import {Button} from '../Buttons/ButtonElements';


const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }


    return (
        <BackgroundImage>
            <HeroContainer id={"home"}>
                <HeroContent>
                    <HeroH1> Cryptoverse and Open-Source Made Easy. </HeroH1>
                    <HeroP>
                        Cryptoverse and Web3 is a field that is growing at an exponential rate.
                    </HeroP>

                    <HeroBtnWrapper>
                        <Button to={"about"} onMouseEnter={onHover} onMouseLeave={onHover} primary={"true"}
                                dark={"true"}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                        >
                            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </BackgroundImage>
    );
};

export default Hero;
