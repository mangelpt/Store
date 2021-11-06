import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AxiosIndexProducts } from '../services/AxiosProduct';
import { Redirect, useLocation, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { FoodCard } from '../components/UI/FoodCard';
import { SearchBar } from '../components/UI/SearchBar';
import { SearchEmpty } from '../components/UI/SearchEmpty';

const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: relative;

  p.count{
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 27px;
    text-align: center;
  }

  div.center {
    position: absolute;
    top: 30vh;
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
      {results.length > 0 ?
        <>
          <p className="count">
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
        </>
        : <div className="center"><SearchEmpty /></div>
      }
      <Footer />
    </StyledDiv>
  )
}
