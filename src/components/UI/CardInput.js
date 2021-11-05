import styled from "@emotion/styled"
import { Lbl } from "./Labels"
import  {Input} from "./Input"

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    height:55px;
    gap:5px;
    border-bottom: 1px solid black;
    
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 55px;
  color: black;
  background: #ffffff;
  border: none;
  box-sizing: border-box;
  ::placeholder {
    color: black;
    opacity: 0.5
  }
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  border: 0;
  outline: none;
  border-bottom: 1px solid black;
`;

export function CardInput({textlabel, name, type, placeholder,value,handleaxios}) {
  return (
    <>
    <ContainerInput>
      <Lbl>{textlabel}</Lbl>
      <Input type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleaxios}
      >
      </Input>
    </ContainerInput>  
    </>
  )
}