import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import "./../styles/NothingYet.css"
import {withUser} from "../components/Auth/withUser"
const {service}= apiHandler

 class FavItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          userFavs: [],
        };
      }
      componentDidMount() {
        service
          .get("/https://www.googleapis.com/books/v1/volumes/volumeId")
          .then((response) => {
              console.log(response.data)
            this.setState({
              userFavs: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });

     
        }
      

      adduserFav = (userFav) => {
        const newuserFavs = [...this.state.userFavs, userFav];
    
        this.setState({
          userFavs: newuserFavs,
        });
    
    };
    render() {

        console.log(this.props)

        return (
            <div>
             <h1>List of google books I liked!</h1>

                <div className="parent">
                {this.state.userFavs.map((userFav) => {
              return (
    
                // {context.getUserBokBook===userFav.author.id} && (..)
                <div className="brother">

                  <Link to={`/userFavs/${userFav._id}`}>
                  <img className="books1" src={userFav.image} alt={userFav.title} />
                      </Link>
                  <h1>{userFav.title}</h1>
                  <h2>Category: {userFav.genre}</h2>
                  <h4>{userFav.description}</h4> 
                  <h4>{userFav.pseudoAuthor}</h4> 
                  <h4>{userFav.author._id}</h4>
                  </div>
         
              );
              
              })}
              


                 
                    
                </div>
            </div>
        )
    }
}

export default withUser(FavItem)


