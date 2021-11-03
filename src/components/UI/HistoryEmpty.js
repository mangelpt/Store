import styled from "@emotion/styled";

export function HistoryEmpty() {

  const ContainerHistoryEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 100px;
      height: 100px;
    }
    .iconhistory {
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
      <svg
        width="108"
        height="119"
        viewBox="0 0 108 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="iconhistory"
          d="M95.4167 11.8333H89.5V0H77.6667V11.8333H30.3333V0H18.5V11.8333H12.5833C6.075 11.8333 0.75 17.1583 0.75 23.6667V106.5C0.75 113.008 6.075 118.333 12.5833 118.333H95.4167C101.925 118.333 107.25 113.008 107.25 106.5V23.6667C107.25 17.1583 101.925 11.8333 95.4167 11.8333ZM95.4167 106.5H12.5833V47.3333H95.4167V106.5ZM12.5833 35.5V23.6667H95.4167V35.5H12.5833ZM24.4167 59.1667H83.5833V71H24.4167V59.1667ZM24.4167 82.8333H65.8333V94.6667H24.4167V82.8333Z"
          fill="#C7C7C7"
        />
      </svg>
      <h1>No history yet</h1>
    </ContainerHistoryEmpty>
  );
}
