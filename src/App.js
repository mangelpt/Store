import React from "react";
import { css, Global } from "@emotion/react";
import { SearchEmpty } from "./components/UI/SearchEmpty";
import { HistoryEmpty } from "./components/UI/HistoryEmpty";
import { CartEmpty } from "./components/UI/CartEmpty";
import { Footer } from "./components/Footer";
import { Hero } from "./components/UI/Hero";
import { TotalPrice } from "./components/TotalPrice";

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&family=Comic+Neue:wght@400;700&display=swap');

  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
  
  body {
    background-color: #F6F6F9;
  }
`;

function App() {
  return (

    <main>
      <Global
        styles={cssGlobal}
      />
      <Hero prefix={"login"}/>
      <SearchEmpty/>
      <HistoryEmpty/>
      <CartEmpty/>
      <Footer />
      <TotalPrice pricetotal={25.76}/>
    </main>
    
  );
}

export default App;
