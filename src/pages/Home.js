import styled from "@emotion/styled";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/UI/Navbar";
import { SearchBar } from "../components/UI/SearchBar";
import { FoodCard } from "../components/UI/FoodCard";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  margin-top: 134px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 130px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f9;
  position: fixed;
  top: 0;
  z-index: 3;
`;

export function Home() {
  const categories = ["Italian", "Mexican", "Snacks", "Soups", "Sushi"];
  const [tabSelected, setTabSelected] = useState("Italian");

  return (
    <Page>
      <Head>
        <SearchBar />
        <Navbar
          categories={[...categories]}
          selected={tabSelected}
          toggleSelected={setTabSelected}
        />
      </Head>
      <List>
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </List>
      <Footer />
    </Page>
  );
}