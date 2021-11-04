import styled from "@emotion/styled";
import { Logo } from "./Logo";
import loading from "../../assets/images/loading.png"

const LoadContainer = styled.div`
  height: 158px;
  width: 262px;
  display: flex;
  flex-direction: column;
  padding: 86px 0 0 0;
  gap: 26.08px;
  align-items: center;
  background: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
`

const Circle = styled.img`
  height: 28px;
  width: 28px;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export function Loading() {
  return (
    <LoadContainer>
      <Logo />
      <Circle src={loading} alt="loading" />
    </LoadContainer>
  )
};