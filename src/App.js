import React from "react";
import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History } from "./pages/HistoryPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Profile } from "./pages/Profile";
import Load from "./pages/Load";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { SelectFood } from "./pages/SelectFood"; 
import { UpdateProfile } from "./pages/UpdateProfile";

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

  main {
    display: flex;
    justify-content: center;
    width: 100vw;
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
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/description" component={SelectFood} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/updateprofile" component={UpdateProfile}/>
        </Switch>
      </Router>
    </main>

  );
}

export default App;
