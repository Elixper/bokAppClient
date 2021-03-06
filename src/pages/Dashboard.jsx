import React, { Component } from "react";
import {NavLink,Switch,Redirect} from "react-router-dom"
import ProtectedRoute from "./../components/ProtectedRoute";
import NavMain from "../components/NavMain";
import FavItem from "../components/FavItem";
import NewBookForm from "../components/Forms/NewBookForm";
import Masterpieces from "../components/Masterpieces";

import Button from "../components/Base/Button"
import "./../styles/Random.css";
import "./../styles/global.css";


class Dashboard extends Component {
  state = {
    displayList: true,
    displayForm: false,
    displayCreations: false,
   
  };

 

  render() {

    return (
      <div>
        <NavMain/>
        <div className="all">
        <div className="choices">
        <Button secondary><NavLink to="/dashboard/my-list">My favorite books</NavLink></Button>
        <Button secondary><NavLink to="/dashboard/create">Create a masterpiece</NavLink></Button>
        <Button secondary><NavLink to="/dashboard/my-masterpieces">My masterpieces</NavLink></Button>
       
        </div>
        <Switch>
          <ProtectedRoute exact path="/dashboard/my-list"component={FavItem}></ProtectedRoute>
          <ProtectedRoute exact path="/dashboard/create"component={NewBookForm}></ProtectedRoute>
          <ProtectedRoute path="/dashboard/my-masterpieces"component={Masterpieces}></ProtectedRoute>
         
          <Redirect from="/dashboard" to="/dashboard/my-list"/>
        </Switch></div>
        {/*//on click => state components de Dashbord changent de state aka true/false*/}

      </div>
    );
  }
}

export default Dashboard;
