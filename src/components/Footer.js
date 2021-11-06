import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HistoryIcon, HomeIcon, UserIcon } from './UI/Icons'

const StyledFooter = styled.footer`
width: 75%;
padding: 35px 12.5%;
height: fit-content;
display: flex;
background-color: #f6f6f9;
justify-content:space-between;
svg{
  width: 30px;
  color: gray;
}
position: fixed;
bottom: 0;
z-index: 3;
`;

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <NavLink to="/home">
          <HomeIcon />
        </NavLink>
        <NavLink to="/profile">
          <UserIcon />
        </NavLink>
        <NavLink to="/history">
          <HistoryIcon />
        </NavLink>
      </StyledFooter>
    </>
  )
}
