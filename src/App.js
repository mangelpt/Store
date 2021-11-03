import React from "react";
import { css, Global } from "@emotion/react";
import { FoodCard } from "./components/UI/FoodCard";

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

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
    </main>
  );
}

export default App;
