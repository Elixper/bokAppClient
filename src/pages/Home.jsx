import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../components/Base/Title";
import "./../styles/global.css";
import "./../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <img className="logo" src={process.env.PUBLIC_URL + '/bokLogo.png'} alt="booklogo" />
          <h1 className="Title">ENJOY THE READ</h1>{/* <Title/> */}
          <p>
            Randomly discover new books to love,<br/>
            talented new authors
            stories ... <br/>
            Want to gain more visibility as an author ? <br/>Add your
            creation to our database !
          </p>
          <button><NavLink to="/random-settings">LET'S GO</NavLink></button>
        </div>

<div className="right">
  <button> <NavLink to="/signin">LOG IN</NavLink></button>
  <button><NavLink to="/signup">SIGN UP</NavLink></button>
  <img src={process.env.PUBLIC_URL + '/illusBooks.png'} alt=""/>{/*mettre en bg parlx */}
</div>

      </div>
    );
  }
}

export default Home;
