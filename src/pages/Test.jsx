import React, { Component } from 'react'
import axios from 'axios';


export default class Test extends Component {
    state = {
        test:[],
    }
    componentDidMount(){
        axios
        .get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest')
        .then((response) => {
          this.setState({
            books: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    
    }
    render() {
        return (
            <div>
        {this.state.books.map((booksFromArray,index) => {
            console.log(this.state.books);
          return  (
          <p key={index}> books={booksFromArray.title}</p>
          )
        })}
            </div>
        )
    }
}
