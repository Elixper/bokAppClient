import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import { withUser } from "../components/Auth/withUser";
// import apiHandler from "../api/apiHandler";
import FavItems from "../components/ListItems/FavItem"
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
<Button>My list</Button> {/*//on click => state components de Dashbord changent de state aka true/false*/}

<Button>Create a masterpiece</Button>
<Button>My masterpieces</Button>

<FavItems/>
<NewBookForm/>
<Masterpieces/>
  </div>
  
      );
    }
  }
  
  export default NavDashboard;