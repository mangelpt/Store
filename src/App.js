import React from "react";
import { css, Global } from "@emotion/react";
import { CardProfile } from "./components/CardProfile";
const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&family=Comic+Neue:wght@400;700&display=swap');

  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
  
  body {
    background-color: #F6F6F9;
  }
  .iborrainputfile {
    font-size:16px; 
    font-weight:normal;
    font-family: 'Lato';
  }
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  
  .inputfile-5 + label {
      color: #c39f77;
  }

  .inputfile-5:focus + label,
  .inputfile-5.has-focus + label,
  .inputfile-5 + label:hover {
      color: #9f8465;
  }

  .inputfile-5 + label figure {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #c39f77;
      display: block;
      padding: 20px;
      margin: 0 auto 10px;
  }

  .inputfile-5:focus + label figure,
  .inputfile-5.has-focus + label figure,
  .inputfile-5 + label:hover figure {
      background-color: #9f8465;
  }

  .inputfile-5 + label svg {
      width: 100%;
      height: 100%;
      fill: #fff;
  }

`;

function App() {
  return (
    <main>
      <Global 
        styles={cssGlobal}
      />
      <CardProfile/>
    </main>
    
  );
}

export default App;
