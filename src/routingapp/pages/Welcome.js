import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/news">
        <Dashboard></Dashboard>
      </Route>
    </section>
  );
};

export default Welcome;
