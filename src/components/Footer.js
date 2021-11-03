import styled from '@emotion/styled'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonWhite } from './UI/Buttons'
import { ArrowIconRight, HistoryIcon, HomeIcon, UserIcon } from './UI/Icons'

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
      <ButtonWhite> History <ArrowIconRight /> </ButtonWhite>
      <StyledFooter>
        <NavLink to="/home">
          <HomeIcon />
        </NavLink>
        <NavLink to="/user">
          <UserIcon />
        </NavLink>
        <NavLink to="/history">
          <HistoryIcon />
        </NavLink>
      </StyledFooter>
    </>
  )
}
