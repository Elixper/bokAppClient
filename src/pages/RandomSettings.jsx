import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavMain from "../components/NavMain";
import Button from "../components/Base/Button"
import axios from "axios";
// import Container from "../components/Base/Container";
// import ButtonGrid from "../components/Items/ButtonGrid";

// import Container from "../components/Base/Container";
// import ButtonGrid from "../components/Items/ButtonGrid"
// import apiHandler from "../../api/apiHandler";
// import { withUser } from "../Auth/withUser";

class RandomSettings extends Component {
  state = {
    genres: [],
  };

  handleClick = (sujet) =>{
    // this.setState(prevState => {
    //   console.log(prevState.sujet);
    //   console.log(sujet);
    //   return {
    //     urlSubject: prevState.sujet
    //   };
    // });
    axios
      .get(
        // `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest`
        `https://www.googleapis.com/books/v1/volumes?q=subject:${sujet}&filter=paid-ebooks&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}` )
      .then((response) => {
        // console.log(response);
        this.setState({
          test: response.data.items,
          // urlSubject : response
        });
    
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    // if (this.props.context.user) {
    //   return <Redirect to="/" />;
    // }

    return (

      
     <div>
 {/* <NavMain/> */}

         <Button secondary onClick={() => this.handleClick("fiction")}>Fiction</Button>
         <Button secondary onClick={() => this.handleClick("romance")}>Romance</Button>
         <Button secondary onClick={() => this.handleClick("art")}>Art</Button>
         <Button secondary onClick={() => this.handleClick("history")}>History</Button>
         <Button primary><NavLink to="/your-suggestion">Let's go for a read</NavLink></Button>

      
       {/* <div ClassName="flex">
       <Button secondary>Art</Button>
       <Button secondary>Fantasy</Button>
       <Button secondary>Horror</Button>
       <Button secondary>Fiction</Button>
       <Button secondary>Crime</Button>
       </div> */}
        {/* <Button secondary>NEW AUTHORS ONLY</Button>
       <Button secondary>WELL-KNOWN AUTHORS</Button>
       <Button secondary>BOTH OF THEM</Button> */}


      {/* <Button secondary>Short Read : less than 100 pages</Button>
       <Button secondary>200 pages and more</Button>
       <Button secondary>400 pages and more</Button> */}

       <img src={process.env.PUBLIC_URL + '/GenreBooks.png'} height={200} alt="boklogo"></img>
       {/* <img src={process.env.PUBLIC_URL + '/yoursuggestion.png'} height={200} alt="boklogo"></img>
       <img src={process.env.PUBLIC_URL + '/typeofReader.png'} height={200} alt="boklogo"></img> */}


      {/* <ButtonGrid></ButtonGrid>
        {/* <button><NavLink to="/your-suggestion">Let's go for a read</NavLink></button>
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
      </Container> */}
       






</div>

    );
  }
}

export default RandomSettings;
