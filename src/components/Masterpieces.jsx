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
          .get("/book")
          .then((response) => {
            this.setState({
              masterpieces: response.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      addMasterpiece = (masterpiece) => {
        const newMasterpieces = [...this.state.masterpieces, masterpiece];
    
        this.setState({
          pokemons: newMasterpieces,
        });
    
    };
    render() {
        return (
            <div>
                <div className="parent">
                {this.state.masterpieces.map((masterpiece) => {
              return (
    
                // {context.getUserBokBook===masterpiece.author.id} && (
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
            //   );
              );
              
              })}
              

                     {/* <h1>Empty fav/ need to log / form</h1>
                     
                     </div>   
 */}


                <div className="sister">

                {/* <img className="close"src={process.env.PUBLIC_URL + 
                    "/icons/close.svg"} alt="close" /> */}

                    {/* <img className="books" src={process.env.PUBLIC_URL + 
                        "/icons/nosha.svg"} alt="books" /> */}
                    
                    </div> 
                 
                    
                </div>
            </div>
        )
    }
}

export default Masterpieces