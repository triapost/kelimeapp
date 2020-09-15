import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, Login, Register } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
