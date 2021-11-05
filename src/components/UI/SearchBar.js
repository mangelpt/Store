import { BackHistory } from "./BackHistory";
import { CartIconBar, SearchIconBar } from "./Icons";
import { Input } from "./Input";
import styled from "@emotion/styled";

const Search = styled.div`
  width: 70%;
  display: flex;
  gap: 16px;
  align-items: center;
`

const BtnIcon = styled.button`
  padding: 0;
`

export function SearchBar(props) {

  return (
    <BackHistory justify="space-between">
      <Search>
        <BtnIcon>
          <SearchIconBar />
        </BtnIcon>
        <Input 
          type="text"
          name="food"
          placeholder="Search"
          value={props.value}
          onChange={(e) => props.search(e.target.value)}
        />
      </Search>
      <CartIconBar />
    </BackHistory>
  );
}