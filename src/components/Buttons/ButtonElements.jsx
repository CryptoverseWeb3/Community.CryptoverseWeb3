import styled from "styled-components";
import {Link as ScrollLink} from "react-scroll";
import {Link as RouterLink} from 'react-router-dom';

export const IconsSpacing = styled.span`
  margin: 5px 5px 0 0;
  display: inline;
  flex-direction: row;
`
export const IconsSpacing2 = styled.span`
  margin: 7px 0 0 3px;
  display: inline;
  flex-direction: row;
`
export const Button = styled(ScrollLink)`
  border-radius: 10px;
  margin-right: 20px; //border-radius: 50px;
  background: ${({primary}) => primary ? '#01BF71' : '#010606'};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => dark ? '#010606' : '#fff'};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => primary ? '#fff' : '#01BF71'};
  }
`

export const RouterButton = styled(RouterLink)`
  border-radius: 10px;
  margin-right: 20px; //border-radius: 50px;
  background: ${({primary}) => primary ? '#01BF71' : '#010606'};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => dark ? '#010606' : '#fff'};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => primary ? '#fff' : '#01BF71'};
  }
`

export const ButtonLink = styled.a`
  border-radius: 10px;
  margin-right: 20px; //border-radius: 50px;
  background: ${({primary}) => primary ? '#01BF71' : '#010606'};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => dark ? '#010606' : '#fff'};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => primary ? '#fff' : '#01BF71'};
  }
`