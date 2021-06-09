import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Button from "../components/Base/Button";
import axios from "axios";
import NavMain from "../components/NavMain";
import "./../styles/Random.css";
import "./../styles/global.css";

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
      sujet:this.props.sujet,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (sujet) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${sujet}&filter=paid-ebooks&langRestrict=en&maxResults=20&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
      )
      .then((response) => {
        this.setState({
          test: response.data.items,
          sujet:sujet,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&langRestrict=en&maxResults=20&&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
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
        <NavMain />
        <div className="all">
          <div className="choices">
            <Button tertiary> <div className="butt" onClick={() => this.handleClick("history")}>
              History</div>
            </Button>
            <Button tertiary> <div className="butt" onClick={() => this.handleClick("fiction")}>
              Fiction</div>
            </Button>
            <Button tertiary> <div className="butt" onClick={() => this.handleClick("romance")}>
              Romance</div>
            </Button>
            <Button tertiary> <div className="butt" onClick={() => this.handleClick("art")}>
              Art</div>
            </Button>
            <Button tertiary> <div className="butt" onClick={() => this.handleClick("children")}>
              Children</div>
            </Button>
          </div>

          {booksFromArray && (
            <div className="bigcontainer">
              {booksFromArray.volumeInfo.imageLinks && (
                <img
                  className="cover"
                  src={booksFromArray.volumeInfo.imageLinks.thumbnail}
                  alt="book cover"
                />
              )}

              {!booksFromArray.volumeInfo.imageLinks && (
                <img
                  className="cover"
                  src={process.env.PUBLIC_URL + "/COVER.jpg"}
                  alt="book cover"
                />
              )}
              <div className="infosright">
                <h1> {booksFromArray.volumeInfo.title}</h1>
                <h2> {booksFromArray.volumeInfo.authors}</h2>
                <p className="summary">
                  {booksFromArray.volumeInfo.description}{" "}
                </p>
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
                <img src={process.env.PUBLIC_URL + "/icons/next.svg"} alt="nextIcon" onClick={()=>this.handleClick(this.state.sujet)} />

                 <img
                  src={process.env.PUBLIC_URL + "/icons/noFavoritesPossible.svg"}
                  alt="heart"
                  // onClick={}
                />
            </div>
          )}
        </div>
      </div>
    );
  }
}
