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
      {/*  component test */}
      {/* <ButtonHistory />
      <Collapse
        date={'wed ,mar 17 2021'}
        amount={2}
        total={27.90}
        address="calle rosales 123 urb El jardin"
      />
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
      </BackHistory> */}
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
