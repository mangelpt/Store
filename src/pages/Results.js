import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { BackHistory } from '../components/UI/BackHistory';
import { FoodCard } from '../components/UI/FoodCard';
import { ArrowIcon, CartIcon } from '../components/UI/Icons';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 10px;
p{
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}
.container{
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2 ,1fr);
  grid-gap: 10px;
  grid-auto-rows: 250px;
}
`;
export const Results = () => {
  return (
    <StyledDiv>
      <BackHistory justify="space-around">
        <button>
          <ArrowIcon />
        </button>
        <input type="text" />
        <button>
          <Link to="cart">
            <CartIcon />
          </Link>
        </button>
      </BackHistory>

      <p>
        Found 3 results
      </p>

      <div className="container">
        <FoodCard
          image={""}
          name="test"
          price="15.56"
        />
        <FoodCard
          image={""}
          name="test"
          price="15.56"
        />
        <FoodCard
          image={""}
          name="test"
          price="15.56"
        />

      </div>
      <Footer />
    </StyledDiv>
  )
}
