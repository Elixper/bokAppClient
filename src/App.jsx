import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Test from "./pages/Test";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RandomSettings from "./pages/RandomSettings";
import RandomResult from "./pages/RandomResult";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import NewBookForm from "./components/Forms/NewBookForm";
import Profile from "./pages/Profile";

function App() {
  return (
   
    <div className="App">
      <NavMain/>
      <Switch>
      <Route exact path="/test" component={Test} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/random-settings" component={RandomSettings} />
        <Route exact path="/your-random" component={RandomResult} />
        <Route exact path="/your-suggestion" component={RandomResult} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/add-your-masterpiece" component={NewBookForm} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
