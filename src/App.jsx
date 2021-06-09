import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RandomSettings from "./pages/RandomSettings";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import NewBookForm from "./components/Forms/NewBookForm";
import Profile from "./pages/Profile";

function App() {
  return (
   
    <div className="App">
    
      <Switch>
     
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/random-settings" component={RandomSettings} /> 
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/add-your-masterpiece" component={NewBookForm} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
