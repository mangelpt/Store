import React from "react";
import { css, Global } from "@emotion/react";
import { Labels } from "./components/UI/Labels";
import { Input } from "./components/UI/Input";

const cssGlobal = css`
  
  @import url('https://fonts.googleapis.com/css2?family=Inter&family=Lato&family=Source+Code+Pro&display=swap');
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
    </main>
  );
}

export default App;
