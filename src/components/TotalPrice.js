import styled from "@emotion/styled";

export function TotalPrice({ pricetotal }) {

  const ContainerPrice = styled.div`
    width: 75vw;
    height: fit-content;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    p{
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: #333333;
    }
    label{
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      color: #333333;
    }
  `;

  return (
    <ContainerPrice>
      <p>Total:</p>
      <label>{`$${pricetotal}`}</label>
    </ContainerPrice>
  );
};