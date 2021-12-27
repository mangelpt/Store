import React, { useEffect } from 'react'
import styled from "@emotion/styled";
import { BackHistory } from '../components/UI/BackHistory';
import { ButtonHistory } from '../components/UI/ButtonHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Footer } from '../components/Footer';
import { Button } from '../components/UI/Button';
import { CardPersonalDetails } from '../components/CardPersonalDetails';
import { Labelittle } from '../components/UI/Labels';
import { AxiosShowUser } from '../services/AxiosUser';
import { useHistory } from 'react-router';

const StyledDiv = styled.div`
    width: 100vw;
    height: 84vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    .container{
    flex: 2;
    display: flex;
    flex-direction: column;
    .optionChange{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        a {
          text-decoration: none;
          font-family: Source Sans Pro;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 20px;
          cursor: pointer;
          color: #FA4A0C;

        }
      }
    }
    margin-top: 20px;
`

export function Profile() {

  const [infuser, SetInfuser] = React.useState([]);
  const history = useHistory();

  useEffect(() => {
    async function GetData() {
      const data = await AxiosShowUser();
      SetInfuser(await data);
    }
    GetData().then( );
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("token");
    history.push("/login");
  }

  function backHome() {
    history.push("/home");
  }

  return (
    <StyledDiv>
      <BackHistory>
        <button onClick={backHome}>
          <ArrowIcon />
        </button>
        {"My Profile"}
      </BackHistory>
      <div className="container">
        <div className="optionChange">
          <Labelittle>{"Personal details"}</Labelittle>
          <a href="/updateprofile">change</a>
        </div>
        <CardPersonalDetails
          name={infuser.name}
          email={infuser.email}
          phone={infuser.phone}
          address={infuser.address}
          avatar_url={infuser.avatar_url}
        />
        <ButtonHistory />
      </div>
      <Button text="Logout" fnc={handleLogout} />
      <Footer selected={"profile"} />
    </StyledDiv>
  );
}