import React, { Component } from "react";
import { Link, NavLink, Switch, Route, Redirect } from "react-router-dom";
import Button from "../components/Base/Button";
import axios from "axios";
import NavMain from "../components/NavMain";
import "./../styles/Random.css";
import "./../styles/global.css";
import api from "../api/apiHandler";

const { service } = api;

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksFromApi: [],
      sujet: this.props.sujet,
      saveList: [null],
    };
  }

// ONLY FOR RANDOM SUBJECT 

  handleClick = (sujet) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${sujet}&filter=paid-ebooks&langRestrict=en&maxResults=20&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
      )
      .then((response) => {
        console.log("i'm the sujet" , response);
        this.setState({
          booksFromApi: response.data.items,
          sujet: sujet,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


// ADD TO MY LIST, FAV BOOKS

  handleSave = (data) => {
    service
      .post("/bookFromData/add-list", {data})
      .then((result) => {
        console.log("hello,i'm the data" , result.data[0]._id);
        this.setState({
          saveList: [...this.state.saveList, data],
        });
      });
  };


  componentDidMount() {
    service
      //populate googleApi data
      .get("/bookFromData")
      .then((result) => {
        console.log("i'm the get" , result.data[0]._id);
        this.setState({
          saveList: result.data,
        });
        console.log("i'm the savelist", this.state.saveList)
      })
      .catch((error) => console.log(error));
    // ga("send", "event", "Book List", "Add to favorites");
  }

  //   saveList = (data) => {
  //     this.setState({
  // saveList : [... this.state.saveList, data]
  //     })
  //   }

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&langRestrict=en&maxResults=20&&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
  //     )
  //     .then((response) => {
  //       // console.log(response.data)
  //       this.setState({
  //         booksFromApi: response.data.items,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  componentWillUnmount() {
    // this.axiosCancelSource.cancel("Axios request canceled.");
  }

  render() {
    const booksFromArray = this.state.booksFromApi
      .sort(() => Math.random() - Math.random())
      .find(() => true);

    return (
      <div>
        <NavMain />
        <div className="all">
          <div className="choices">
            <Button tertiary>
              {" "}
              <div className="butt" onClick={() => this.handleClick("history")}>
                History
              </div>
            </Button>
            <Button tertiary>
              {" "}
              <div className="butt" onClick={() => this.handleClick("fiction")}>
                Fiction
              </div>
            </Button>
            <Button tertiary>
              {" "}
              <div className="butt" onClick={() => this.handleClick("romance")}>
                Romance
              </div>
            </Button>
            <Button tertiary>
              {" "}
              <div className="butt" onClick={() => this.handleClick("art")}>
                Art
              </div>
            </Button>
            <Button tertiary>
              {" "}
              <div
                className="butt"
                onClick={() => this.handleClick("children")}
              >
                Children
              </div>
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
                <p> {booksFromArray.volumeInfo.publishedDate}</p>
                <p> {booksFromArray.volumeInfo.pageCount} pages</p>
                <div className="containsummary">
                <p className="summary">
                  {booksFromArray.volumeInfo.description}{" "}
                </p>
                </div>
                {/* <p>{booksFromArray.volumeInfo.categories} </p> */}
                {/* {!booksFromArray.saleInfo && ( 
                   <p>{booksFromArray.saleInfo?.listPrice?.amount}€</p>
                   <p>{booksFromArray.saleInfo.listPrice.amount}</p>
                   )} 
                {!booksFromArray.saleInfo && ( 
                  <Link to={{ pathname: `${booksFromArray.saleInfo?.buylink}` }} target="_blank">Buy</Link>
                
                 <a href={booksFromArray.saleInfo.buylink}>Buy This Book</a>
                )} */}
                <a href={booksFromArray.saleInfo?.buyLink}>Buy</a>
              </div>
              <img
                className="pointer"
                src={process.env.PUBLIC_URL + "/icons/next.svg"}
                alt="nextIcon"
                onClick={() =>
                  this.state.sujet && this.handleClick(this.state.sujet)
                }
              />

              <img
                className="pointer"
                src={process.env.PUBLIC_URL + "/icons/emptyHeart.svg"}
                alt="heart"
                onClick={() => this.handleSave()}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
