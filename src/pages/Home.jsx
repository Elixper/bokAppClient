import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/global.css";
import "./../styles/Home.css";
import Button from "./../components/Base/Button"

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <img className="logo" src={process.env.PUBLIC_URL + '/bokLogo.png'} alt="booklogo" />
          <h1 className="purpletitle">ENJOY THE READ</h1>
          <p className="interlignSmall spaceButt">
            Randomly discover new books to love,
            <br />
            talented new authors stories ... <br />
            Want to gain more visibility as an author ? <br />
            Add your creation to our database !
          </p>
          
         
            <NavLink to="/random-settings"><Button primary>LET'S GO</Button></NavLink>
          
        </div>

        <div className="right">
          <div className="buttons"> 
          <NavLink to="/signup"> <Button tertiary>SIGN UP</Button></NavLink>
            <NavLink to="/signin">
              <Button tertiary>LOG IN</Button>
            </NavLink>
           
          </div>
          <img className="bookHome" src={process.env.PUBLIC_URL + '/illusBooks.png'} alt="" />
          {/*mettre en bg parlx */}
          
        </div>
      </div>
    );
  }
}

export default Home;
