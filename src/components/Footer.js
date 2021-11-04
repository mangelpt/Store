import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HistoryIcon, HomeIcon, UserIcon } from './UI/Icons'

const StyledFooter = styled.footer`
width: 75vw;
margin: 10px auto;
height: fit-content;
display: flex;
justify-content:space-between;
svg{
  width: 30px;
  color: gray;
}
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
