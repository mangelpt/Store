import styled from '@emotion/styled';
import { Link } from "react-router-dom";
import { ArrowIconRight } from "./Icons";

const StyledDiv = styled.div`
.link{
  padding: 15px 15px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin: auto;
  width: 75vw;
  color: #000;
  svg {
    width: 25px;
  }
}

`;
export const ButtonHistory = () => {
  return (
    <StyledDiv>
      <Link to="/history" className="link">
        History
        <ArrowIconRight />
      </Link>
    </StyledDiv>
  )
}

