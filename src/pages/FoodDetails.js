import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react'
import { FoodDetail } from '../components/FoodDetail'
import { Footer } from '../components/Footer';
import { BackHistory } from '../components/UI/BackHistory';
import { Button } from '../components/UI/Button';
import { ArrowIcon } from '../components/UI/Icons';
import { useLocation } from "react-router-dom";
import { AxiosProductsId } from '../services/AxiosProduct';
import { Link, Redirect } from 'react-router-dom';
import { useOrderContext } from '../contexts/OrderContext';

const StyledDiv = styled.div`
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
margin-bottom: 174px;
`;

export const FoodDetails = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const orderData = useOrderContext();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const data = async () => {
      const response = await AxiosProductsId(location.pathname.split("/")[2]);
      setProduct(response);
    }
    data();

    return setProduct(null);
  }, [location]);

  function handleClick() {
    const food = {
      id: product.id,
      name: product.name,
      price: product.price,
      picture: product.picture_url,
      count: 1,
    }
    orderData.addFood(food);
  }
  
  function ToCart () {
    setRedirect(true);
  }

  return (
    <StyledDiv>
      {redirect && <Redirect to={"/cart"} />}
      <BackHistory>
        <Link to="/home">
          <ArrowIcon />
        </Link>
      </BackHistory>
      {product &&
      <div className="container">
        <FoodDetail
          name={product?.name}
          price={product?.price / 100}
          description={product?.description}
          picture_url={product?.picture_url}
        />
      </div>
      }
      {product && orderData.foods.filter(item => item.id === product.id).length === 0 ?
        <Button text="Add to cart" prefix="foot" fnc={handleClick}/> :
        <Button text="Go to cart" prefix="foot" fnc={ToCart}/>
      }
      <Footer />
    </StyledDiv>
  )
}
