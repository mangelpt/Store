import styled from "@emotion/styled";
import { SearchIcon } from "./Icons";

export function SearchEmpty() {

  const ContainerSearchEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 100px;
      height: 100px;
      fill: none;
      stroke: #C7C7C7;
    }
    h1 {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 35px;
      text-align: center;
      color: #333333;
    }
  `;

  return (
    <ContainerSearchEmpty>
      <SearchIcon />
      <h1>Item not found</h1>
    </ContainerSearchEmpty>
  );
}
