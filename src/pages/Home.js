import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/UI/Navbar";
import { SearchBar } from "../components/UI/SearchBar";
import { FoodCard } from "../components/UI/FoodCard";
import { AxiosIndexProducts } from "../services/AxiosProduct";

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
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tabSelected, setTabSelected] = useState("italian");

  useEffect(() => {
    const data = async () => {
      const response = await AxiosIndexProducts();
      setProducts(response);
    }
    data();
    console.log(products);
    const arr = [];
    products.map((product) => !arr.includes(product.category) && arr.push(product.category));
    console.log(arr.sort());
    setCategories(arr.sort());
  }, []);

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
        {products.filter((product) => product.category === tabSelected).map((product) => (
          <FoodCard
            key={product.id}
            image={product.picture_url}
            name={product.name}
            price={product.price} 
          />
        ))}
      </List>
      <Footer />
    </Page>
  );
}