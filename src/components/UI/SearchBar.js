import { BackHistory } from "./BackHistory";
import { CartIconBar, SearchIconBar } from "./Icons";
import { Input } from "./Input";
import styled from "@emotion/styled";
import { useLocation, Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";

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
  const location = useLocation();
  return (
    <BackHistory justify="space-between">
      <Search>
        <BtnIcon>
          {location.pathname.split("/")[1] === "search" ?
            <Link to="/home"><ArrowIcon /></Link> :
            <Link to={`/search/${props.value}`}>
              <SearchIconBar />
            </Link>}
        </BtnIcon>
        <Input
          type="text"
          name="food"
          placeholder="Search"
          value={props.value}
          onChange={(e) => props.search(e.target.value)}
        />
      </Search>
      <Link to="/cart">
        <CartIconBar />
      </Link>
    </BackHistory>
  );
}