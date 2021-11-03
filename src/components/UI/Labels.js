import styled from "@emotion/styled"

const Lbl = styled.label`
  font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #B8B8BB;
`

export function Labels( {text} ) {
  return (
    <Lbl>{text}</Lbl>
  )
}