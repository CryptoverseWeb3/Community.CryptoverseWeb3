import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function SideDropdown(props) {
  const itemList = [
    {title: "Item 1", url: 'Item 1'},
    {title: "Item 2", url: 'Item 2'},
    {title: "Item 3", url: 'Item 3'},
    {title: "Item 4", url: 'Item 4'},
  ]

  const Item = styled.ul`
    height: 32px; 
    &:hover {
      cursor : pointer;
    }
  `

  const mobStyle = {
    justifyContent: 'center',
    margin: '0px auto 10px',
    textAlign: "center",
    width: '20em', padding: 6, border: '1px solid grey', borderRadius: '5px',
    color: 'white'
  };
  const dStyle = {
    width: 200, padding: 6, borderRadius: 8, background: '#101417',
    border: '1px solid #101417', color: 'white', position: 'absolute', left: 132, top: -6
  };

  return (
    <div style={props.sidebar ? mobStyle : dStyle}>
        <li>
            {
                itemList.map(i => (
                  <Item>
                    <Link style={{textDecoration: 'none', color:'white' }} to={i.url}> {i.title} </Link >
                  </Item>
                ))
            }
        </li>
    </div>
  )
};
