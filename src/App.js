import React from "react";
import { css, Global } from "@emotion/react";
import { Counter } from "./components/UI/Counter";

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
      <Counter/>
    </main>
  );
}

export default App;
