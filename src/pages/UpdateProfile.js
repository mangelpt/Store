import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Footer } from '../components/Footer';
import { Button } from '../components/UI/Button';
import { CardProfile } from '../components/CardProfile';
import { Labelittle } from '../components/UI/Labels';
import { AxiosShowUser } from '../services/AxiosUser';

const StyledDiv = styled.div`
    width: 414px;
    height: 736px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 22px;
    .container{
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 38px;
    }
    margin-top: 50px;
    
`

export function UpdateProfile(){

  const [infouser, SetInfouser] = useState([]);

  useEffect(() => {
    AxiosShowUser().then(datauser => SetInfouser(datauser));
  },[])

  return (
    <StyledDiv>
      <BackHistory>
        <button>
          <ArrowIcon />
        </button>
        {"My Profile"}
      </BackHistory>
      <div className="container">
        <Labelittle>{"Update personal details"}</Labelittle>
        <CardProfile
          name={infouser.name}
          email={infouser.email}
          phone={infouser.phone}
          address={infouser.address}
          avatar_url={infouser.avatar_url}
        />
      </div>
      <Footer />
    </StyledDiv>
  );
}