import React from "react";
import { css, Global } from "@emotion/react";
import { SearchEmpty } from "./components/UI/SearchEmpty";
import { HistoryEmpty } from "./components/UI/HistoryEmpty";
import { CartEmpty } from "./components/UI/CartEmpty";


const cssGlobal = css`
  
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  * {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

function App() {
  return (
    <main>
      <Global 
        styles={cssGlobal}
      />
      <SearchEmpty/>
      <HistoryEmpty/>
      <CartEmpty/>
    </main>
  );
}

export default App;
