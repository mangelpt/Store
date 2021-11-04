import styled from "@emotion/styled";

const Bar = styled.div`
  display: flex;
`

const Tab = styled.div`
  width: 87px;
  color: #9A9A9D;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  padding: 10px 0;

  ${props => props.selected && `
    color: #FA4A0C;
    border-bottom: 3px solid #FA4A0C;
  `}
`

export function Navbar({categories, selected, toggleSelected}) {
  function SelectTab (event) {
    toggleSelected(event.target.innerText);
  }

  return (
    <Bar>
      {categories.map(category => 
        <Tab
          selected={category === selected ? true : false }
          key={category}
          onClick={SelectTab}
        >{category}</Tab>
       )}
    </Bar> 
  )
}