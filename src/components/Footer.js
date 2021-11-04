import styled from '@emotion/styled'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BackHistory } from './UI/BackHistory'
import { ButtonHistory } from './UI/ButtonHistory'
import { ArrowIcon, CartIcon, HistoryIcon, HomeIcon, UserIcon } from './UI/Icons'

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
      {/*  component test */}
      <ButtonHistory />

      <BackHistory >
        <button>
          <ArrowIcon />
        </button>
        {"my Profile"}
      </BackHistory>

      <BackHistory justify="space-between" >
        <button >
          <ArrowIcon
          />
        </button>
        <Link to="Cart">
          <CartIcon />
        </Link>
      </BackHistory>
      {/* :::::::::::::::::::::::: */}
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
