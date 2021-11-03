import styled from "@emotion/styled";

export function CartEmpty() {

  const ContainerCartEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 100px;
      height: 100px;
    }
    .iconcart {
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
    <ContainerCartEmpty>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          class="iconcart"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <h1>No order yet</h1>
    </ContainerCartEmpty>
  );
}
