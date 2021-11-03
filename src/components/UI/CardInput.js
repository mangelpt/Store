import styled from "@emotion/styled"
import { Lbl } from "./Labels"
import  {Input} from "./Input"

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width:208px;
    height:50px;
`

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