import styled from "@emotion/styled";

const Bar = styled.div`
  display: flex;
  width: 80%;
  padding: 0 10%;
  justify-content: left;
  overflow: scroll;
  flex-wrap: nowrap;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`

const Tab = styled.div`
  min-width: 87px;
  color: #9A9A9D;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    color: #FA4A0C;
    border-bottom: 3px solid #FA4A0C;
  }

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