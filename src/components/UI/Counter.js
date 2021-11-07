import styled from "@emotion/styled"
import { useState } from "react";

export function Counter(props) {
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
  `;

  function handleClickLeast() {
    const minus = count - 1;
    if (minus > 0) {
      setCount(minus);
      props.getCount(props.foodId, minus);
    } else {
      props.deleteFood(props.foodId);
    }
  }

  function handleClickSum() {
    const plus = count + 1
    setCount(plus);
    props.getCount(props.foodId, plus)
  }

  return (
    <ContainerCount>
      <SignsLeast onClick={() => handleClickLeast()}>-</SignsLeast>
      <Num>{count}</Num>
      <Signs onClick={() => handleClickSum()}>+</Signs>
    </ContainerCount>
  )
}