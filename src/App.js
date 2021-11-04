import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Load from "./pages/Load";
import { History } from "./pages/HistoryPage";
const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&family=Comic+Neue:wght@400;700&display=swap');

  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
  
  body {
    background-color: #F6F6F9;
    display: flex;
    justify-content: center;
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
          <Route exact path="/load" component={Load} />
        </Switch>
      </Router>
    </main>

  );
}

export default App;
