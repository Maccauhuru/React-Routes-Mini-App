import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";
import Portfolioitem from "../components/Portfolioitem";
import ContactPage from "../components/ContactPage";
import PageNotFound from "../components/PageNotFound";


const AppRouter = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/portfolio" component={PortfolioPage} exact={true} />
          <Route path="/portfolio/:id" component={Portfolioitem} />
          <Route path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
