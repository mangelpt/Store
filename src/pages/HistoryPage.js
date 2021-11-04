import React from 'react'
import styled from "@emotion/styled";
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Footer } from '../components/Footer';
import { Collapse } from '../components/UI/CollapsiveCard';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
.container{
  flex: 2;
}
`;
export const History = () => {
  return (
    <StyledDiv>
      <BackHistory >
        <button>
          <ArrowIcon />
        </button>
        History
      </BackHistory>

      <div className="container">
        <Collapse
          date={'wed ,mar 17 2021'}
          amount={2}
          total={27.90}
          address="calle rosales 123 urb El jardin"
        />
        <Collapse
          date={'wed ,mar 17 2021'}
          amount={2}
          total={27.90}
          address="calle rosales 123 urb El jardin"
        />
        <Collapse
          date={'wed ,mar 17 2021'}
          amount={2}
          total={27.90}
          address="calle rosales 123 urb El jardin"
        />
      </div>
      <Footer />
    </StyledDiv>
  )
}
