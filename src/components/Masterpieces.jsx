import React, { Component } from 'react';
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import "./../styles/NothingYet.css"

const {service}= apiHandler

 class Masterpieces extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          masterpieces: [],
        };
      }
      componentDidMount() {
        service
          .get("/user/me/books")
          .then((response) => {
            this.setState({
              masterpieces: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });

        // service.get('user/my-account')
        //  .then(response => {
        //   console.log(response.data)
        //   this.setState({ message_user : response.data })
        //       })
        }
      

      addMasterpiece = (masterpiece) => {
        const newMasterpieces = [...this.state.masterpieces, masterpiece];
    
        this.setState({
          masterpieces: newMasterpieces,
        });
    
    };
    render() {
        return (
            <div>
                <div className="parent">
                {this.state.masterpieces.map((masterpiece) => {
              return (
    
                // {context.getUserBokBook===masterpiece.author.id} && (..)
                <div className="brother">

                  <Link to={`/masterpieces/${masterpiece._id}`}>
                  <img className="books1" src={masterpiece.image} alt={masterpiece.title} />
                      </Link>
                  <h1>{masterpiece.title}</h1>
                  <h2>Category: {masterpiece.genre}</h2>
                  <h4>{masterpiece.description}</h4> 
                  <h4>{masterpiece.pseudoAuthor}</h4> 
                  <h4>{masterpiece.author._id}</h4>
                  </div>
         
              );
              
              })}
              


                 
                    
                </div>
            </div>
        )
    }
}

export default Masterpieces