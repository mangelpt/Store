import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from "./pages/HistoryPage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import Load from "./pages/Load";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { SelectFood } from "./pages/SelectFood";

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
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/description" component={SelectFood} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </main>

  );
}

export default App;
