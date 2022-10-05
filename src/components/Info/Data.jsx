import carSvg from '../../assets/images/svg-1.svg';
import piggyBankSvg from '../../assets/images/piggyBank.svg';
// import secureDataSvg from '../../assets/images/secure_data.svg';
import contributeSvg from '../../assets/images/undraw_developer_activity_re_39tg.svg';
import communitySvg from '../../assets/images/undraw_work_chat_re_qes4.svg';
import coursesSvg from '../../assets/images/undraw_programming_re_kg9v.svg';
import logo_thecyberworld from '../../assets/1.png';
import {FaGithub} from "react-icons/fa";
import {IconsSpacing} from "../Buttons/ButtonElements";
import {IconsSpacing2} from "../Buttons/ButtonElements";
import {Symbol} from "./InfoElements";
// import {CgCommunity} from "react-icons/ca";
// import {MdOutlineVideoLibrary} from "react-icons/md";
// import {FcCollaboration} from "react-icons/fc";
// import {BiGitPullRequest} from "react-icons/bi";
// import {BiNews} from "react-icons/bi";
import {BsCollectionPlayFill, BsFillPlayFill} from "react-icons/bs";

const GSymbol = () => {
    return (
        <Symbol>></Symbol>
    )
}

export const aboutData = {
    id: 'about',
    idTo: 'community',
    buttonType: 'scroll',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Cryptoverse Web3 Community',
    headline: 'About CryptoverseWeb3',
    description: <p>
        <GSymbol/> We help new folks to get into Web3 field.<br/><br/>
        <GSymbol/> We resolve folk's issues, doubts relates to Web3 .<br/><br/>
        <GSymbol/> Open-source projects.
    </p>,
    buttonLabel: 'Get started',
    buttonLabel2: 'Contribute',
    buttonLabel3: 'Join',
    imgStart: false,
    img: logo_thecyberworld,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const coursesData = {
    id: 'courses',
    idTo: 'freeCourses',
    buttonType: 'link',
    link: "/freeCourses",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Free Courses',
    headline: 'Cyber Security Courses',
    description: <p>
        We provide free resources related web development and Web3. <br/>
        You can start your cyber-security journey today with our free courses.
    </p>,
    buttonLabel: <> Explore <IconsSpacing2> <BsFillPlayFill/> </IconsSpacing2>  </>,
    imgStart: true,
    img: coursesSvg,
    alt: 'coursesSvg',
    dark: false,
    primary: false,
    darkText: true,
};

export const communityData = {
    id: 'community',
    idTo: 'community',
    buttonType: 'Link',
    link: "https://discord.com/invite/WhDry9FWE7",
    link2: "https://www.linktree.com/cryptoverseWeb3",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Join our Community',
    headline: 'Over 100,000 members',
    description: 'We help new folks get started into Web development and Web3 field and guided them properly. ' +
        'We also resolve folk\'s doubts relates to Web Development.',
    buttonLabel: 'Join now',
    imgStart: false,
    img: communitySvg,
    alt: 'Secure data',
    dark: true,
    primary: true,
    darkText: false,
};

export const contributeData = {
    id: 'contribute',
    idTo: 'contribute',
    buttonType: 'link',
    link: 'https://github.com/cryptoverseWeb3',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contribute to CryptoverseWeb3',
    headline: 'Open Source Projects',
    description: 'We also help new folks get started into open-source world and guided them about open-source. ' +
        'We have open-source projects, where you can contribute to it.',
    buttonLabel: <> <IconsSpacing> <FaGithub/> </IconsSpacing> Contribute now </>,
    imgStart: false,
    img: contributeSvg,
    alt: 'Secure data',
    dark: true,
    primary: true,
    darkText: false,
};