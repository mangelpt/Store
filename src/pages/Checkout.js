import styled from '@emotion/styled'
import React from 'react'
import { Footer } from '../components/Footer';
import { TotalPrice } from '../components/TotalPrice';
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Button } from '../components/UI/Button';
import { CheckoutCard } from '../components/UI/CheckoutCard';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 10px;
span{
  width: 85vw;
  display: flex;
  justify-content: space-between;
  button{
    border: none;
    color: #FA4A0C;
    font-weight:bold;
    background-color: transparent;
    cursor: pointer;
  }
}
h3{
  font-size: 20px;
  align-self: flex-start;
  margin-left: calc(100VW - 380px);
  margin-bottom: 15px;
}
.container{
  flex: 2;
}
`;
export function Checkout() {
  return (
    <StyledDiv>
      <BackHistory >
        <button>
          <ArrowIcon />
        </button>
        Checkout
      </BackHistory>
      <h3>Delivery</h3>
      <span>
        <p>Address details </p>
        <button>change</button>
      </span>
      <div className="container">
        <CheckoutCard />
      </div>
      <TotalPrice pricetotal={12.35} />
      <Button text="Complete Order" />
      <Footer />
    </StyledDiv>
  );
}
