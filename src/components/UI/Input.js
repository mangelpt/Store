import styled from "@emotion/styled"

const Inpt = styled.input`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    border: 0;
    width: 200px;
    height: 27px;
    background: white;
    ::placeholder {
        color: black;
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