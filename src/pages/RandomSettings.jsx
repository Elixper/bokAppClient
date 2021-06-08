import React, { Component } from "react";
import {NavLink,Switch, Route,Redirect} from "react-router-dom"
import Button from "../components/Base/Button"
import axios from "axios";
import FavItem from "../components/ListItems/FavItem";
import NewBookForm from "../components/Forms/NewBookForm";
import Masterpieces from "../components/Masterpieces";


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

    

       <img src={process.env.PUBLIC_URL + '/GenreBooks.png'} height={200} alt="boklogo"></img>
       
        <Button><NavLink onClick={() => this.handleClick("art")} to="/random/art">Art</NavLink></Button>{" "}
        <Button><NavLink to="/dashboard/create">Create a masterpiece</NavLink></Button>{" "}
        <Button><NavLink to="/dashboard/my-masterpieces">My masterpieces</NavLink></Button>{" "}
        
        <Switch>
          <Route exact path="/dashboard/my-list"component={FavItem}></Route>
          <Route exact path="/dashboard/create"component={NewBookForm}></Route>
          <Route exact path="/dashboard/my-masterpieces"component={Masterpieces}></Route>
          <Redirect from="/dashboard" to="/dashboard/my-list"/>
        </Switch>






</div>

    );
  }
}

export default RandomSettings;
