import React from "react";
import { css, Global } from "@emotion/react";
import "./App.css";

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'

  * {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

function App() {
  return (
    <Global 
      styles={cssGlobal}
    />
  );
}

export default App;
