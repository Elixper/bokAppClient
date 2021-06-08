import React from "react";
import axios from "axios";

// import { NavLink } from "react-router-dom";
// import Button from "./../components/Base/Button";

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (sujet) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${sujet}&filter=paid-ebooks&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
      )
      .then((response) => {
        this.setState({
          test: response.data.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
      )
      .then((response) => {
        this.setState({
          test: response.data.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const booksFromArray = this.state.test
      .sort(() => Math.random() - Math.random())
      .find(() => true);

    return (
      <div>
        <button onClick={() => this.handleClick("history")}>History</button>
        <button onClick={() => this.handleClick("fiction")}>Fiction</button>
        <button onClick={() => this.handleClick("romance")}>Romance</button>
        <button onClick={() => this.handleClick("art")}>Art</button>

        {booksFromArray && (
          <div>
            {booksFromArray.volumeInfo.imageLinks && (
              <img
                src={booksFromArray.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
              />
            )}

            {!booksFromArray.volumeInfo.imageLinks && (
              <img
                src={process.env.PUBLIC_URL + "/COVER.jpg"}
                alt="book cover"
              />
            )}

            <h1> {booksFromArray.volumeInfo.title}</h1>
            <p>{booksFromArray.volumeInfo.description} </p>
            <p>{booksFromArray.volumeInfo.categories} </p>
            {!booksFromArray.saleInfo && (
              // <p>{booksFromArray.saleInfo?.listPrice?.amount}</p>
              <p>{booksFromArray.saleInfo.listPrice.amount}</p>
            )}
            {!booksFromArray.saleInfo && (
              // <a href={booksFromArray.saleInfo?.buylink}>Buy This Book</a>
              <a href={booksFromArray.saleInfo.buylink}>Buy This Book</a>
            )}
          </div>
        )}
      </div>
    );
  }
}
