import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { Footer } from '../components/Footer';
import { TotalPrice } from '../components/TotalPrice';
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Button } from '../components/UI/Button';
import { CheckoutCard } from '../components/UI/CheckoutCard';
import { Link, Redirect } from 'react-router-dom';
import { useOrderContext } from '../contexts/OrderContext';
import { AxiosShowUser } from '../services/AxiosUser';

const StyledDiv = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.container{
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
    margin-top: 13px;
    font-size: 20px;
    align-self: flex-start;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
  }

  span{
    align-self: center;
    width: 315px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
  
    button{
      border: none;
      color: #FA4A0C;
      font-weight:bold;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
`;
export function Checkout() {
  const orderData = useOrderContext();
  const foods = orderData.foods;
  const [disableInput, setDisableInput] = useState(true);
  const [infouser, SetInfouser] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    AxiosShowUser().then(datauser => SetInfouser(datauser));
  },[])

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    SetInfouser({ ...infouser, [name]: value });
  };

  function handleDisable () {
    setDisableInput(!disableInput);
  }

  return (
    <StyledDiv>
      {console.log(infouser)}
      <BackHistory>
        <Link to="/cart">
          <ArrowIcon />
        </Link>
        Checkout
      </BackHistory>
      <div className="container">
        <h3>Delivery</h3>
        <span>
          <p>Address details </p>
          <button onClick={handleDisable}>change</button>
        </span>
        <CheckoutCard 
          name = {infouser.name}
          address = {infouser.address}
          phone = {infouser.phone}
          onChange = {handleFormChange}
          disabled = {disableInput}
        />
      </div>
      <TotalPrice pricetotal={
        (foods.reduce((acc, food) => acc + food.price * food.count, 0))/100
      } />
      <Button prefix="foot" text="Complete Order" />
      <Footer />
    </StyledDiv>
  );
}
