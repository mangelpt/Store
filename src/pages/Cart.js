import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer';
import { TotalPrice } from '../components/TotalPrice';
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Button } from '../components/UI/Button';
import { FoodCart } from '../components/UI/FoodCart';
import { useOrderContext } from '../contexts/OrderContext';

const StyledDiv = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 10px;
margin-bottom: 174px;

.container{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
`;
export function Cart() {
  const orderData = useOrderContext();
  const [foods, setFoods] = useState(orderData.foods);

  return (
    <StyledDiv>
      <BackHistory >
        <button>
          <ArrowIcon />
        </button>
        Cart
      </BackHistory>
      <div className="container">
        {foods.map((food) =>
          <FoodCart
          key={food.id}
          name={food.name}
          price={food.price}
          image={food.picture}
          count={food.count}
        />)}
      </div>
      <TotalPrice pricetotal={12.35} />
      <Button text="Checkout" prefix="foot"/>
      <Footer />
    </StyledDiv>
  );
}

