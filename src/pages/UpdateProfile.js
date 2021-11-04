import React from 'react'
import styled from "@emotion/styled";
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Footer } from '../components/Footer';
import { Button } from '../components/UI/Button';
import { CardProfile } from '../components/CardProfile';
import { Labelittle } from '../components/UI/Labels';

const StyledDiv = styled.div`
    width: 100vh;
    height: 100vh;
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
  return (
    <StyledDiv>
      <BackHistory>
        <button>
          <ArrowIcon />
        </button>
        {"My Profile"}
      </BackHistory>
      <div className="container">
        <Labelittle>
          {"Update personal details"}
        </Labelittle>
        <CardProfile />
      </div>
      <Button text="Update" />
      <Footer />
    </StyledDiv>
  )
}