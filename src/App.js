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
import { FoodDetails } from "./pages/FoodDetails";
import { UpdateProfile } from "./pages/UpdateProfile";
import { Results } from "./pages/Results";

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
    width: 100%;
    height: 100%;
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
          <Route path="/foods/:id/description" component={FoodDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/updateprofile" component={UpdateProfile} />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </main>

  );
}

export default App;
