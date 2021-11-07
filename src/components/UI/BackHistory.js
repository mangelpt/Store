import React from 'react'
import styled from '@emotion/styled';

const StyledDiv = styled.div`
width: 80%;
display: flex;
height: fit-content;
font-size: 20px;
font-weight: 600;
margin: 10px auto;
padding: 10px 10%;
gap: 70px;
button{
  border: none;
  background-color: transparent;
  cursor: pointer;
}
svg{
  width: 20px;
  color: #000;
}
`;
export const BackHistory = ({ justify, children }) => {
  return (
    <StyledDiv style={{ justifyContent: `${justify}` }} >
      {children}
    </StyledDiv>
  )
}
