import React, { Component } from "react";
// import { withRouter, Redirect, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavMain from "../components/NavMain";

// import apiHandler from "../../api/apiHandler";
// import { withUser } from "../Auth/withUser";

class RandomResult extends Component {
  state = {
    livreX: [],
  };

  render() {
    // if (this.props.context.user) {
    //   return <Redirect to="/" />;
    // }

    return (
             <div>
                 <NavMain/>
      
<p>I'm a result</p>
        <button><NavLink to="/signin">Add to fav if logged in</NavLink></button>
        <button>Next suggestion</button>

        </div>
    );
  }
}

export default RandomResult;