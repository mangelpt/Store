import styled from "@emotion/styled";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/UI/Navbar";
import { SearchBar } from "../components/UI/SearchBar";

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export function Home() {
  const categories = ["Italian", "Mexican", "Snacks", "Sauces"];
  const [tabSelected, setTabSelected] = useState("Italian");

  return (
    <Page>
      <SearchBar></SearchBar>
      <Navbar
        categories={[...categories]}
        selected={tabSelected}
        toggleSelected={setTabSelected}
      />
      <Footer></Footer>
    </Page>
  );
}