import React from 'react'
import axios from 'axios';


export default class Test extends React.Component {
  constructor(props){  
  super(props)
  
  this.state = {
        test: [],
    }
  }
    componentDidMount(){
      
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest' )
        .then((response) => {
          console.log(response);
          this.setState({
            test: response.data.items,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    
    }
    render() {
        return (
            <div>
               {/* <pre>{JSON.stringify(this.props, null, 4)}</pre> */}
        {this.state.test.map((booksFromArray,index) => {
            //console.log(this.state.test[0]);
            console.log(booksFromArray);
          return  (
          <p key={index}> toto : {booksFromArray.volumeInfo.title}</p>
          )
        })}

            </div>
        )
    }
}
