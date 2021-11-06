import styled from "@emotion/styled"

const Bttn = styled.button`
  background: #FA4A0C;
  border-radius: 30px;
  padding: 12px 16px;
  height: 70px;
  width: 310px;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  text-align: center;
  border: none;
  cursor: pointer;
  
  ${props => props.prefix==="foot" && `
    position: fixed;
    bottom: 104px;
  `} 

  &:focus {
    outline: none;
  }
`

export function Button(props) {
  return (
    <Bttn onClick={props.fnc} prefix={props.prefix}>{props.text}</Bttn>
  )
}
