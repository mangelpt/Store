import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { BackHistory } from '../components/UI/BackHistory';
import { ArrowIcon } from '../components/UI/Icons';
import { Footer } from '../components/Footer';
import { Collapse } from '../components/UI/CollapsiveCard';
import { ShowOrders } from '../services/OrderProducts';
import { Link } from 'react-router-dom';
import { HistoryEmpty } from '../components/UI/HistoryEmpty';

const StyledDiv = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
.container{
  flex: 2;
}
`;
export const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      await ShowOrders().then(data => setHistory(data));
    }
    fetchHistory();
  }, [history])

  return (
    <StyledDiv>
      <BackHistory >
        <Link to="checkout">
          <ArrowIcon />
        </Link>
        History
      </BackHistory>
      {
        history === undefined || history.length <= 0 ?
          <HistoryEmpty /> :
          <div className="container">
            {history.map((order) => <Collapse
              id={order.id}
              date={order.date}
              amount={order.products.length}
              total={order.total}
              address={order.address}
              products={order.products}
            />)}
          </div>
      }
      <Footer />
    </StyledDiv>
  )
}
