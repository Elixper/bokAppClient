import React, { Component } from "react";
import { withRouter, Redirect, NavLink } from "react-router-dom";
import NavMain from "../components/NavMain";
import Container from "../components/Base/Container";
import ButtonGrid from "../components/Items/ButtonGrid"
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
        <button>Art</button>
        <button>Fantasy </button>
        <button>Horror</button>
        <button>Fiction</button>
        <button>Crime</button>

        <button><NavLink to="/your-suggestion">Let's go for a read</NavLink></button>
      <ButtonGrid></ButtonGrid>
      <Container>
        <img></img>
        <button>NEW AUTHORS ONLY</button>
        <button>WELL-KNOWN AUTHORS</button>
        <button>BOTH OF THEM</button>
      </Container>
      <Container>
        <img></img>
        <button>Short Read : less than 100 pages</button>
        <button>200 pages and more</button>
        <button>400 pages and more</button>
      </Container>


        </div>
    );
  }
}

export default RandomSettings;
