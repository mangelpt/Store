import styled from "@emotion/styled";
import logo from "../../assets/images/logo.svg";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 367px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  border-radius: 0 0 30px 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Slogan = styled.p`
  font-weight: 600;
  font-size: 10px;
  line-height: 86.84%;
  letter-spacing: 0.05em;
  color: #FA4A0C;
`;

const Tab = styled.div`
  width: 134px;
  color: #000000;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    border-bottom: 3px solid #FA4A0C
  }
`;

const TabLogin = styled(Tab)`
  ${props => props.prefix === "login" && `
    border-bottom: 3px solid #FA4A0C
  `}
`

const TabSignup = styled(Tab)`
  ${props => props.prefix === "signup" && `
    border-bottom: 3px solid #FA4A0C
  `}
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 39px;
  gap: 48px;
  justify-content: center;
`;

const HeroImage = styled.img`
  margin-top: 140px;
`;

export function Hero (props) {
  return (
    <HeroContainer>
      <LogoContainer>
        <HeroImage src={logo} alt="logo" />
        <Slogan>Food for Everyone</Slogan>
      </LogoContainer>
      <TabContainer>
        <TabLogin prefix={props.prefix}>Login</TabLogin>
        <TabSignup prefix={props.prefix}>Sign-up</TabSignup>
      </TabContainer>
    </HeroContainer>
  );
}