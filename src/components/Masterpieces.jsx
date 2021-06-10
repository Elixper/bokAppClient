import React, { Component } from 'react'
import "./../styles/NothingYet.css"

 class Masterpieces extends Component {
    render() {
        return (
            <div>
                <div className="parent">

                   
                 <div className="brother">

                     <h1>Empty fav/ need to log / form</h1>
                     
                     </div>   



                <div className="sister">

                <img className="close"src={process.env.PUBLIC_URL + 
                    "/icons/close.svg"} alt="close" />

                    <img className="books" src={process.env.PUBLIC_URL + 
                        "/icons/nosha.svg"} alt="books" />
                    
                    </div> 
                 
                    
                </div>
            </div>
        )
    }
}

export default Masterpieces