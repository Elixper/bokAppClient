import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Button from "../components/Base/Button";
import "../styles/NavMain.css";
import "../styles/NavUser.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <img
          className="logonav"
          src={process.env.PUBLIC_URL + "/bokLogo.png"}
          alt="boklogo"
        ></img>
      </NavLink>
      <div className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <NavLink to="/random-settings">
              <img
                className="pointer icons"
                src={process.env.PUBLIC_URL + "/icons/random.svg"}
                alt="nextIcon"
              />
            </NavLink>

            <NavLink to="/dashboard">
              <img
                className="pointer icons"
                src={process.env.PUBLIC_URL + "/icons/idicon.svg"}
                alt="nextIcon"
              />
            </NavLink>

            <NavLink to="/profile">
              <div className="userandicon">
                <img
                  className="pointer"
                  src={process.env.PUBLIC_URL + "/icons/bookicon.svg"}
                  alt="nextIcon"
                />
                {context.user && context.user.username}
              </div>
            </NavLink>

            <NavLink to="/">
              <img
                className="pointer"
                src={process.env.PUBLIC_URL + "/icons/logout.svg"}
                onClick={handleLogout}
                alt="logout"
              />
            </NavLink>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <div className="spacebutton">
              <Button cinq>
                <NavLink to="/signin">LOG IN</NavLink>
              </Button>
            </div>

            <Button cinq>
              <NavLink to="/signup">SIGN UP</NavLink>
            </Button>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default withUser(NavMain);
