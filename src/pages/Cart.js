import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer';
import { TotalPrice } from '../components/TotalPrice';
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Button } from '../components/UI/Button';
import { FoodCart } from '../components/UI/FoodCart';
import { useOrderContext } from '../contexts/OrderContext';
import { Redirect } from "react-router-dom";

const StyledDiv = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
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
  const [foods, setFoods] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setFoods(orderData.foods);
  }, [orderData.foods]);

  function ToCheckout () {
    setRedirect(true);
  }

  return (
    <StyledDiv>
      {redirect && <Redirect to={"/checkout"} />}
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
          id={food.id}
          name={food.name}
          price={food.price}
          image={food.picture}
          count={food.count}
        />)}
      </div>
      <TotalPrice pricetotal={
        (foods.reduce((acc, food) => acc + food.price * food.count, 0))/100
      } />
      <Button text="Checkout" prefix="foot" fnc={ToCheckout}/>
      <Footer />
    </StyledDiv>
  );
}

