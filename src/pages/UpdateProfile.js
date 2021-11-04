import React from 'react'
import styled from "@emotion/styled";
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Footer } from '../components/Footer';
import { Button } from '../components/UI/Button';
import { CardProfile } from '../components/CardProfile';
import { Labelittle } from '../components/UI/Labels';

const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    gap: 38px;
    .container{
    flex: 2;
    }
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
      <Labelittle>
        {"Update personal details"}
      </Labelittle>
      <CardProfile />
      <Button text="Update"></Button>
      <Footer />
    </StyledDiv>
  )
}