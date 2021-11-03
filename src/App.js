import React from "react";
import { css, Global } from "@emotion/react";

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
    </main>
    
  );
}

export default App;
