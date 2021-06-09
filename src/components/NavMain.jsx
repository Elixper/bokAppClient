import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Button from "../components/Base/Button"



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
        <img src={process.env.PUBLIC_URL + '/bokLogo.png'} height={30} alt="boklogo"></img>
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/profile">
              <img className="pointer" src={process.env.PUBLIC_URL + "/icons/random.svg"} alt="nextIcon"/>
              </NavLink>
              </li>
              <li>
              <NavLink to="/profile">
              <img className="pointer" src={process.env.PUBLIC_URL + "/icons/bookicon.svg"} alt="nextIcon"/>
              </NavLink>
              </li>
              <li>
              <NavLink to="/profile">
              <img className="pointer" src={process.env.PUBLIC_URL + "/icons/idicon.svg"} alt="nextIcon"/>
              </NavLink>
              </li>
            <li>
              <NavLink to="/profile">
                {context.user && context.user.username}
              </NavLink>
            </li>
            <li>
              <p className="pointer" onClick={handleLogout}>Logout</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
            <Button cinq>
              <NavLink to="/signin">LOG IN</NavLink></Button>  
            </li>
            <li>
            <Button cinq>
              <NavLink to="/signup">SIGN UP</NavLink></Button>  
            </li>        
            </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
