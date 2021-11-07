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
import ProtectedRoute from "./components/routes/ProtectedRoutes";
import OrderProvider from "./contexts/OrderContext";

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
          <ProtectedRoute  path="/profile" component={Profile} />
          <ProtectedRoute  path="/home" component={Home} />
          <ProtectedRoute  path="/history" component={History} />
          <OrderProvider>
            <ProtectedRoute  path="/foods/:id/description" component={FoodDetails} />
            <ProtectedRoute  path="/cart" component={Cart} />
            <ProtectedRoute  path="/checkout" component={Checkout} />
          </OrderProvider>
          <ProtectedRoute  path="/updateprofile" component={UpdateProfile} />
          <ProtectedRoute  exact path="/search/:query?" component={Results} />
        </Switch>
      </Router>
    </main>

  );
}

export default App;
