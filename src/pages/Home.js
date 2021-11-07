import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/UI/Navbar";
import { SearchBar } from "../components/UI/SearchBar";
import { FoodCard } from "../components/UI/FoodCard";
import { AxiosIndexProducts } from "../services/AxiosProduct";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

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
  margin-bottom: 160px;

  a {
    text-decoration: none;
    color: #333333;
  }
`;

const Head = styled.div`
  width: 100%;
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
  const [tabSelected, setTabSelected] = useState("italian");
  const categories = ["italian", "mexican", "snack", "soups", "sushi"];
  const [value, setValue] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (value !== "") {
      setTimeout(() => { setRedirect(true) }, 2000);
    }
  }, [value]);

  useEffect(() => {
    const data = async () => {
      const response = await AxiosIndexProducts();
      setProducts(response);
    }
    data();
  }, []);

  return (
    <Page>
      {redirect  && <Redirect to={`/search/${value}`} />}
      <Head>
        <SearchBar 
          value={value}
          search={setValue}
        />
        <Navbar
          categories={categories}
          selected={tabSelected}
          toggleSelected={setTabSelected}
        />
      </Head>
      <List>
        {products && products.filter((product) => product.category === tabSelected).map((product) => (
          <Link to={`/foods/${product.id}/description`} key={product.id}>
            <FoodCard
              key={product.id}
              image={product.picture_url}
              name={product.name}
              price={product.price} 
            />
          </Link>
        ))}
      </List>
      <Footer />
    </Page>
  );
}