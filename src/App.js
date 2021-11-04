import React from "react";
import { css, Global } from "@emotion/react";
import { CardProfile } from "./components/CardProfile";
import { SearchEmpty } from "./components/UI/SearchEmpty";
import { HistoryEmpty } from "./components/UI/HistoryEmpty";
import { CartEmpty } from "./components/UI/CartEmpty";
import { Footer } from "./components/Footer";
import { Hero } from "./components/UI/Hero";
import { TotalPrice } from "./components/TotalPrice";
import { CheckoutCard } from "./components/UI/CheckoutCard";
import { Loading } from "./components/UI/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

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
      {/* <CardProfile/>
      <Hero prefix={"login"}/>
      <SearchEmpty/>
      <HistoryEmpty/>
      <Loading />
      <CartEmpty/>
      <Footer />
      <CheckoutCard 
        name={"Margarita Flores"}
        address={"Calle de la Paz, 1"}
        phone={"+34 654 546 789"}
      />
      <TotalPrice pricetotal={25.76}/> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </main>
    
  );
}

export default App;
