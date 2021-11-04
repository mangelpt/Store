import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Load from "./pages/Load";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&family=Comic+Neue:wght@400;700&display=swap');

  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
  
  body {
    background-color: #F6F6F9;
  }

  main {
    display: flex;
    justify-content: center;
    width: 100vw
  }
`;

function App() {
  return (

    <main>
      <Global
        styles={cssGlobal}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Load} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </main>
    
  );
}

export default App;
