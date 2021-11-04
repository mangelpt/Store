import styled from "@emotion/styled";
import logo from "../../assets/images/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 10px;
    line-height: 86.84%;
    letter-spacing: 0.05em;
    color: #FA4A0C;
  }

  img {
    ${props => props.prefix==="hero" &&
    `margin-top: 140px `} 
  }
`;

export function Logo(props) {
  return (
    <LogoContainer prefix={props.prefix}>
      <img src={logo} alt="logo" />
      <p>Food for Everyone</p>
    </LogoContainer>
  );
}