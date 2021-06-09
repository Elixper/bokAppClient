import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { withUser } from "../components/Auth/withUser";
// import apiHandler from "../api/apiHandler";
import FavItems from "../components/FavItem"
import NewBookForm from "../components/Forms/EditBookForm"
import Masterpieces from "../components/Masterpieces"

import Button from "../components/Base/Button"


class NavDashboard extends Component {
    state = {
      displayView: [],
    };
  
    render() {
  
      return (
  
        
       <div>

<FavItems/>
<NewBookForm/>
<Masterpieces/>
  </div>
  
      );
    }
  }
  
  export default NavDashboard;