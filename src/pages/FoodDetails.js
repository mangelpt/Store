import styled from '@emotion/styled';
import React from 'react'
import { FoodDetail } from '../components/FoodDetail'
import { Footer } from '../components/Footer';
import { BackHistory } from '../components/UI/BackHistory';
import { Button } from '../components/UI/Button';
import { ArrowIcon } from '../components/UI/Icons';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 15px;
.container{
  flex: 2;
  display: flex;
  justify-content: center;
}
`;

export const FoodDetails = () => {
  return (
    <StyledDiv>
      <BackHistory>
        <button>
          <ArrowIcon />
        </button>
      </BackHistory>

      <div className="container">
        <FoodDetail
          name="test"
          price="1243"
          description="Lorem Ipsum has been the industry's 
        standard dummy text ever since 
        the 1500s, when an unknown printer 
        took a galley of type and scrambled
         it to make a type specimen book."
          picture_url="https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/meal.jpg"
        />
      </div>

      <Button text="Add to cart"></Button>

      <Footer />

    </StyledDiv>
  )
}
