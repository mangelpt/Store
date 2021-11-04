import styled from "@emotion/styled";
import { Counter } from "./Counter";

const CartItem = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  width: 315px;
  height: 62px;
  background: #FFFFFF;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  position: relative;
  margin-bottom: 12px;
`;

const ItemImage = styled.img`
  height: 62px;
  width: 62px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 8px;
`

const ItemName = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`

const ItemPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #FA4A0C;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export function FoodCart(props) {
  return (
    <CartItem>
      <ItemImage src={props.image} alt={props.name} />
      <ItemDescription>
        <ItemName>{props.name}</ItemName>
        <ItemPrice>{props.price}<Counter /></ItemPrice>
      </ItemDescription>
    </CartItem>
  );
}