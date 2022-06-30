import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterRouterLink,
    FooterScrollLink,
    FooterRedirectLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink, FooterSocialLinks,
} from './FooterElements';

import {
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaDiscord,
} from 'react-icons/fa';

import {animateScroll as scroll} from "react-scroll";

const toggleHome = () => {
    scroll.scrollToTop();
};

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            {[
                                {to: 'about', title: 'About',},
                                {to: 'services', title: 'Services',},
                                {to: 'community', title: 'Community',},
                                {to: 'contribute', title: 'Contribute',},
                            ].map(({to, title}) => (
                                <FooterScrollLink
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >
                                    {title}
                                </FooterScrollLink>
                            ))}
                    </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterRouterLink to="https://linktr.ee/cryptoverseweb3">Contact</FooterRouterLink>
                            <FooterRouterLink to="https://linktr.ee/cryptoverseweb3">Feedback</FooterRouterLink>
                            <FooterRouterLink to="https://discord.gg/WhDry9FWE7">Support (Discord)</FooterRouterLink>
                            <FooterRouterLink to="https://linktr.ee/cryptoverseweb3">Sponsorships</FooterRouterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterSocialLinks href="https://www.twitter.com/cryptoverseweb3" target={"_blank"}> Twitter </FooterSocialLinks>
                            <FooterSocialLinks href="https://www.github.com/cryptoverseweb3" target={"_blank"}> GitHub </FooterSocialLinks>
                            <FooterSocialLinks href="https://discord.gg/WhDry9FWE7" target={"_blank"}> Discord </FooterSocialLinks>
                            <FooterSocialLinks href="https://www.linktree.com/cryptoverseweb3" target={"_blank"}> All Community Links </FooterSocialLinks>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Free Courses </FooterLinkTitle>
                            <FooterRedirectLink href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg" target={"_blank"}> Intro to Cryptoverse </FooterRedirectLink>
                            <FooterRedirectLink href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg" target={"_blank"}> What is Web3 </FooterRedirectLink>
                            <FooterRedirectLink href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg" target={"_blank"}> Future of Web3 </FooterRedirectLink>
                            <FooterRedirectLink href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg" target={"_blank"}> Cryptoverse Web3 </FooterRedirectLink>
                        </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Videos </FooterLinkTitle>
                        <FooterRouterLink to="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg"> About Community </FooterRouterLink>
                        <FooterRouterLink to="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg"> How to Join Community </FooterRouterLink>
                        <FooterRouterLink to="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg"> How to Contribute to the Community </FooterRouterLink>
                    </FooterLinkItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        Cryptoverse Web3
                    </SocialLogo>
                    <WebsiteRights> © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.twitter.com/cryptoverseWeb3" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.github.com/cryptoverseWeb3" target="_blank" aria-label="Github">
                            <FaGithub/>
                        </SocialIconLink>
                        <SocialIconLink href="https://discord.gg/WhDry9FWE7" target="_blank" aria-label="Discord">
                            <FaDiscord/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/cryptoverseWeb3" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
</FooterContainer>
)
    ;
};

export default Footer;
