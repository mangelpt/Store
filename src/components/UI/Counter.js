import styled from "@emotion/styled"
import { useState } from "react";
import { useOrderContext } from "../../contexts/OrderContext";

export function Counter(props) {
  const orderData = useOrderContext();
  const [count, setCount] = useState(props.count)

  const ContainerCount = styled.div`
    width: 52px;
    height: 20px;
    background: #FA4A0C;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Num = styled.div`
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 2px;
  `;

  const SignsLeast = styled.p`
    font-family: "Comic Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    padding: 6px 7px;
    margin-bottom: 2px;
    cursor:pointer;
  `;

  const Signs = styled.p`
    font-family: "Comic Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 23px;
    text-align: center;
    color: #ffffff;
    padding: 6px 7px 8px 4px;
    margin-bottom: 2px;
    cursor: pointer;
  `;

  function handleClickLeast() {
    const minus = count - 1;
    if (minus > 0) {
      setCount(minus);
      orderData.changeCount(props.foodId, minus);
    } else {
      orderData.removeFood(props.foodId);
    }
  }

  function handleClickSum() {
    const plus = count + 1
    setCount(plus);
    orderData.changeCount(props.foodId, plus);
  }

  return (
    <ContainerCount>
      <SignsLeast onClick={() => handleClickLeast()}>-</SignsLeast>
      <Num>{count}</Num>
      <Signs onClick={() => handleClickSum()}>+</Signs>
    </ContainerCount>
  )
}