import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AxiosIndexProducts } from '../services/AxiosProduct';
import { Redirect, useLocation, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { FoodCard } from '../components/UI/FoodCard';
import { SearchBar } from '../components/UI/SearchBar';

const StyledDiv = styled.div`
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
`;

const List = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 130px;

  a {
    text-decoration: none;
    color: #333333;
  }
`;

export const Results = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [value, setValue] = useState(location.pathname.split("/")[2]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    value !== "" && setRedirect(true);
    const data = async () => {
      const response = await AxiosIndexProducts();
      const result = response.filter(food => 
        food.name.toLowerCase().includes(value.toLowerCase()));
      setResults(result);
    }
    const timerId = setTimeout(data, 1000);

    return () => clearTimeout(timerId);
  }, [value]);


  return (
    <StyledDiv>
      {redirect  && <Redirect to={`/search/${value}`} />}
      <SearchBar 
        value={value}
        search={setValue}
      />
      <p>
        Found {results.length} results
      </p>
      <List>
        {results?.map((product) => (
          <Link to={`/foods/${product.id}/description`} key={product.id}>
            <FoodCard
              key={product.id}
              image={product.picture_url}
              name={product.name}
              price={product.price} 
            />
          </Link>
        ))}
      </List>
      <Footer />
    </StyledDiv>
  )
}
