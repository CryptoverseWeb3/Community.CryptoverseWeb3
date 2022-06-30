import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';
import {Link as ScrollLink} from "react-scroll";
import img from "../../assets/footer-bg2.png";

export const BackgroundImage = styled.div`
  background-image: url(${img});
  background-color: #010606FF;
  margin-top: 0;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

`;

export const FooterContainer = styled.footer`
  background: #080a10;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: #f1f1f1;
`;

export const FooterRouterLink = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #ff8100;
    transition: .3s ease-out;
    font-size: 15px;
  }
`;

export const FooterScrollLink = styled(ScrollLink)`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #ff8100;
    transition: .3s ease-out;
    font-size: 15px;
  }
`;

export const FooterRedirectLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #ff8100;
    font-size: 15px;

    transition: .3s ease-out;
  }
`;


export const FooterSocialLinks = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #ff8100;
    font-size: 15px;
    transition: .3s ease-out;

  }
`;
export const FooterSocialLinksTwitter = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #1d9bf0;
    font-size: 15px;
    transition: .3s ease-out;

  }
`;
export const FooterSocialLinksGithub = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #afafaf;
    font-size: 15px;
    transition: .3s ease-out;

  }
`;
export const FooterSocialLinksDiscord = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #5865f2;
    font-size: 15px;
    transition: .3s ease-out;

  }s
`;
export const FooterSocialLinksLinktree = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;

  &:hover {
    color: #1fbd3a;
    font-size: 15px;
    transition: .3s ease-out;

  }
`;


export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
  color: #fff;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(RouterLink)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  :hover {
    color: #ff8100;
    font-size: 1.6rem;
    transition: .3s ease-out;

  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #ffffff;
    transition: .3s ease-out;
    font-size: 30px;
  }
`;

export const SocialIconLinkTwitter = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #1d9bf0;
    transition: .3s ease-out;
    font-size: 30px;
  }
`;

export const SocialIconLinkGithub = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #f0f6fc;
    transition: .3s ease-out;
    font-size: 30px;
  }
`;

export const SocialIconLinkDiscord = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #5865f2;
    transition: .3s ease-out;
    font-size: 30px;
  }
`;
export const SocialIconLinkInstagram = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #b83993;
    transition: .3s ease-out;
    font-size: 30px;
  }
`;