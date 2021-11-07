import styled from '@emotion/styled'
import React from 'react'
import { NavLink, BrowserRouter as Router, Link } from 'react-router-dom'
import { HistoryIcon, HomeIcon, UserIcon } from './UI/Icons'
import { useHistory } from "react-router";

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
  div{
    cursor: pointer;
  }
`;

export const Footer = () => {
  const history = useHistory();
  const gotoProfile = () => {
    history.push('/profile')
  }
  const gotoHome = () => {
    history.push('/home')
  }
  const gotoHistory = () => {
    history.push('/history')
  }

  return (
    <>
      <StyledFooter>
        <Router>
         <div id="home" onClick={gotoHome}>
            <HomeIcon />
          </div>
          <div  id="profile"  onClick={gotoProfile}>
            <UserIcon/>
          </div>
          <div  id="history"  onClick={gotoHistory}>
            <HistoryIcon />
          </div>
        </Router>
      </StyledFooter>
    </>
  )
}
