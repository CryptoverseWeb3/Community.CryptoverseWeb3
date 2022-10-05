import React, {useState} from 'react';
import styled from "styled-components";
import SideDropdown from './SideDropdown';
import { Link } from 'react-router-dom';
import { NavLinks } from '../Navbar/NavbarElements';

export default function Dropdown(props) {
  const menu = [
    {title: "Item 1", url: "/Item 1" },
    {title: "Item 2", url: ""},
    {title: "Item 3", url:"/Item 3" },
    {title: "Item 4", url: "/Item 4"},
    {title: "Item 5", url: "/Item 5"},
  ]

  const [sideDrop, setSideDrop] = useState(false);

  const sideDropHandler = (title)=> {
     props.sidebar ? 
     title === 'Item 2' && setSideDrop(!sideDrop) :
     title === 'Item 2' ? setSideDrop(true) : setSideDrop(false);
  }

  const Item = styled.ul`
    height: 32px; 
    position: relative;
    &:hover {
      cursor : pointer;
    }
  `


  const mobStyle = {width :'100%', padding: 6};
  const dStyle = {
    borderRadius: 8,
    background: '#101417',
    border: '1px solid #101417',
    width: 130,
    padding: 6,
    color: 'white',
    position: 'absolute',
    top: 80
  };



  return (
    <div style={props.sidebar ? mobStyle : dStyle}>
        <li>
            {
                menu.map(i => (
                  !props.sidebar ?
                  <Item onMouseEnter={() => sideDropHandler(i.title)}>
                    <Link style={{textDecoration: 'none', color:'white' }} to={i.url}> {i.title} </Link >
                    {i.title === 'Item 2' && sideDrop && <SideDropdown sidebar={false}/>}
                  </Item> : 
                  <>
                    <Item onClick={() => sideDropHandler(i.title)}>
                      {i.title !== 'Item 2' ?
                         <Link style={{textDecoration: 'none', color:'white' }} to={i.url}> {i.title} </Link > : 
                         <p style={{textDecoration: 'none', color:'white' }}> {i.title} </p > }
                    </Item>
                    {i.title === 'Item 2' && sideDrop && <SideDropdown sidebar={true}/>}
                  </>
                ))
            }
        </li>
    </div>
  )
}
