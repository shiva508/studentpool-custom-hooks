import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MainNavigation from "../components/layout/MainNavigation";
import AllQuotes from "../components/pages/AllQuotes";
import NewQuote from "../components/pages/NewQuote";
import QuoteDetail from "../components/pages/QuoteDetail";

const QuotsAppContainer = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
      </Switch>
    </Layout>
  );
};
export default QuotsAppContainer;
