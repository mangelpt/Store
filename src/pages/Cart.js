import styled from '@emotion/styled'
import React from 'react'
import { Footer } from '../components/Footer';
import { TotalPrice } from '../components/TotalPrice';
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Button } from '../components/UI/Button';
import { FoodCart } from '../components/UI/FoodCart';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 10px;
.container{
  flex: 2;
}
`;
export function Cart() {
  return (
    <StyledDiv>
      <BackHistory >
        <button>
          <ArrowIcon />
        </button>
        Cart
      </BackHistory>
      <div className="container">
        <FoodCart name="veggie tomato" price={15.45} />
        <FoodCart name="veggie tomato" price={15.45} />
      </div>
      <TotalPrice pricetotal={12.35} />
      <Button text="Checkout" />
      <Footer />
    </StyledDiv>
  );
}