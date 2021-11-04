import styled from "@emotion/styled"
import { Lbl } from "./Labels"
import  {Input} from "./Input"

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width:208px;
    height:50px;
    gap:5px;
    border-bottom: 1px solid;
`

export const TextArea = styled.textarea`
  width: 206px;
  min-height: 55px;
  color: black;
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  ::placeholder {
    color: black;
  }
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  border: 0;
  border-bottom: 1px solid;

`;

export function CardInput({textlabel, name, type, placeholder}) {
  return (
    <>
    <ContainerInput>
      <Lbl>{textlabel}</Lbl>
      <Input type={type}
          name={name}
          placeholder={placeholder}
      >
      </Input>
    </ContainerInput>  
    </>
  )
}