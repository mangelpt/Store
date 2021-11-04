import { Loading } from "../components/UI/Loading";
import styled from "@emotion/styled";
import background from "../assets/images/background.png"

const Background = styled.div`
  height: 100vh;
  width: 414px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
`

export default function Load() {
  return (
    <Background>
      <Loading />
    </Background>
  )
}