import styled from "@emotion/styled";

export function FoodDetail(props) {

  const Container = styled.div`
    width: 75vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ContainImage = styled.div`
    width: 241px;
    height: 241px;
    border-radius: 50%; 
    background: url(${props.picture_url}); 
    background-size: cover; 
  `;

  const NameDish = styled.p`
    width: 100%;
    height: fit-content;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    color: #333333;
    margin-top: 50px;
  `;

  const Price = styled.p`
    width: 80px;
    height: 35px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    color: #FA4A0C;
    margin-top: 10px;
  `;

  const TitleDescription = styled.p`
    width: 89px;
    height: 23px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
    margin-top: 27px;
    `;

  const Description = styled.p`
    width: 297px;
    height: fit-content;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
    margin-top: 4px;
  `;

  return (
    <Container>
      <ContainImage></ContainImage>
      <NameDish>{props.name}</NameDish>
      <Price>{`$${props.price}`}</Price>
      <div>
        <TitleDescription>Description</TitleDescription>
        <Description>{props.description}</Description>
      </div>
    </Container>
  );
}