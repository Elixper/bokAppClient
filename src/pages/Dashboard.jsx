import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import NavMain from "../components/NavMain";
import NavDashboard from "../components/NavDashboard"
// import FavItems from "../components/ListItems/FavItem"
// import NewBookForm from "../components/Forms/EditBookForm"
// import Masterpieces from "../components/Masterpieces"
// import Button from "../components/Base/Button"
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
<NavDashboard /> state=state ?
<h1>DASHBOARD</h1>
{/* <FavItems/>
<NewBookForm/>
<Masterpieces/> */}
</div>

    );
  }
}

export default Dashboard;

