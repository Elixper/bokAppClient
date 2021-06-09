import React, { Component } from "react";
import {NavLink,Switch, Route,Redirect} from "react-router-dom"
import NavMain from "../components/NavMain";
// import NavDashboard from "../components/NavDashboard";
import FavItem from "../components/ListItems/FavItem";
import NewBookForm from "../components/Forms/NewBookForm";
import Masterpieces from "../components/Masterpieces";
import Button from "../components/Base/Button"
// import axios from "axios";
// import Container from "../components/Base/Container";
// import apiHandler from "../../api/apiHandler";
// import { withUser } from "../Auth/withUser";

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
        <Button secondary><NavLink to="/dashboard/my-list">My list</NavLink></Button>{" "}
        <Button secondary><NavLink to="/dashboard/create">Create a masterpiece</NavLink></Button>{" "}
        <Button secondary><NavLink to="/dashboard/my-masterpieces">My masterpieces</NavLink></Button>{" "}
        
        <Switch>
          <Route exact path="/dashboard/my-list"component={FavItem}></Route>
          <Route exact path="/dashboard/create"component={NewBookForm}></Route>
          <Route exact path="/dashboard/my-masterpieces"component={Masterpieces}></Route>
          <Redirect from="/dashboard" to="/dashboard/my-list"/>
        </Switch>
        {/*//on click => state components de Dashbord changent de state aka true/false*/}
        {/* <FavItems/>
<NewBookForm/>
<Masterpieces/> */}
      </div>
    );
  }
}

export default Dashboard;
