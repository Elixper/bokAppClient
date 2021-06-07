import React, { Component } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import NavMain from "../components/NavMain";
// import apiHandler from "../../api/apiHandler";
// import { withUser } from "../Auth/withUser";

class RandomSettings extends Component {
  state = {
    genres: [],
  };

  render() {
    // if (this.props.context.user) {
    //   return <Redirect to="/" />;
    // }

    return (
     <div>
       <NavMain/>
        <button>Genre 1</button>
        <button>Genre </button>
        <button>Genre 1</button>
        <button>Genre 1</button>
        <button>Genre 1</button>

        <button><NavLink to="/your-suggestion">Let's go for a read</NavLink></button>
        </div>
    );
  }
}

export default RandomSettings;
