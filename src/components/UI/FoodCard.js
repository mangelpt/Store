import styled from "@emotion/styled";

const Food = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 156px;
  height: 250px;
  position: relative;
`;

const FoodDescription = styled.div`
  margin-top: 38px;
  padding: 92px 13px 0 13px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 130px;
  height: 212px;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  justify-content: center;
  text-align: center;
`

const FoodName = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #333333;
  margin: 0;
`
const FoodPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #FA4A0C;
  margin: 0;
`

const FoodImg = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
`

export function FoodCard(props) {
  return (
    <Food>
      <FoodImg src={props.image} alt={props.name} />
      <FoodDescription>
        <FoodName>{props.name}</FoodName>
        <FoodPrice>{`$${props.price}`}</FoodPrice>
      </FoodDescription>
    </Food>
  );
}