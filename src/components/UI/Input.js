import styled from "@emotion/styled"

const Inpt = styled.input`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    border: 0;
    width: 314px;
    height: 27px;
    background: white;
    ::placeholder {
        color: gray;
    }
`

export function Input( {type, name, placeholder} ) {
  return (
    <Inpt
        type={type}
        name={name}
        placeholder={placeholder} 
    ></Inpt>
    
  )
}