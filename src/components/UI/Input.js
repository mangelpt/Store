import styled from "@emotion/styled"

const Inpt = styled.input`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    width: 100%;
    height: 27px;
    background: white;
    border: none;
    background: none;
    outline: none;
    ::placeholder {
        color: black;
        opacity: 0.5
    }
`

export function Input( {type, name, placeholder,value,onChange, disabled} ) {
  return (
    <Inpt
        type={type}
        name={name}
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        disabled={disabled}
    ></Inpt>
  )
}