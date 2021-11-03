import React from "react";
import { css, Global } from "@emotion/react";
import { Footer } from "./components/Footer";
const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'

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
      <Footer />
    </main>
  );
}

export default App;
