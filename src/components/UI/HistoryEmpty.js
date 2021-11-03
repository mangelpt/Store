import styled from "@emotion/styled";
import { CalendarIcon } from "./Icons";

export function HistoryEmpty() {

  const ContainerHistoryEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 100px;
      height: 100px;
      fill: #C7C7C7;
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
    <ContainerHistoryEmpty>
      <CalendarIcon />
      <h1>No history yet</h1>
    </ContainerHistoryEmpty>
  );
}
