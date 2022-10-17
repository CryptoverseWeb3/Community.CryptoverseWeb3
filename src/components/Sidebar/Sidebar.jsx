import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={"about"}>About</SidebarLink>
          <SidebarLink to={"newsletters"}>Newsletters</SidebarLink>
          <SidebarLink to={"community"}>Community</SidebarLink>
          <SidebarLink to={"projects"}>Projects</SidebarLink>
          <SidebarLink to={"join"}>Join</SidebarLink>
          <SidebarLink to={"subscribe"}>Subscribe</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={"/subscribe"}>Subscribe</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
