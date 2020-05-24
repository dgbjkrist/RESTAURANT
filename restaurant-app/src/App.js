import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantsList from "./components/RestaurantsList";
import RestaurantCreate from "./components/RestaurantCreate";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { Logout } from "./components/Logout";
import { Protected } from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Protected exact path="/list" component={RestaurantsList} />
          <Protected exact path="/create" component={RestaurantCreate} />
          <Protected exact path="/update/:id" component={RestaurantUpdate} />
          <Route exact path="/search" component={RestaurantSearch} />
          <Route exact path="/logout" component={Logout} />
          <Route path="/login" render={(props) => <Login {...props} />}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
