import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";
import "./../../styles/global.css";


class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    biography: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/random-settings" />;
    }

    return (
      <form className="containerform" onSubmit={this.handleSubmit}>
        <p>AJOUTER PHOTO ICI</p>
         <label htmlFor="username">User name</label>
        <input
          onChange={this.handleChange}
          value={this.state.username}
          type="username"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        <label htmlFor="biography">Biography</label>
        <input
          onChange={this.handleChange}
          value={this.state.biography}
          type="biography"
          id="biography"
          name="biography"
        />
        <button className="submit">Submit</button>
        
      </form>
      
    );
  }
}

export default withRouter(withUser(FormSignup));
