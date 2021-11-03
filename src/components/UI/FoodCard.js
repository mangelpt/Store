import styled from "@emotion/styled";

const Food = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 92px 13px 0 13px;
  height: 212px;
  width: 156px;
  background: #FFFFFF;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  position: relative;
`;

const FoodDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

const FoodName = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #333333;
`
const FoodPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #FA4A0C;
`

const FoodImg = styled.img`
  position: absolute;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
`

export function FoodCard(props) {
  return (
    <Food>
      <FoodImg src={props.image} alt="food" />
      <FoodDescription>
        <FoodName>{props.name}</FoodName>
        <FoodPrice>{props.price}</FoodPrice>
      </FoodDescription>
    </Food>
  );
}