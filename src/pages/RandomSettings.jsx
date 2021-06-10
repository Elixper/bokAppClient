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
      saveList: [],
    };
  }

  handleClick = (sujet) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${sujet}&filter=paid-ebooks&langRestrict=en&maxResults=20&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
      )
      .then((response) => {
        this.setState({
          booksFromApi: response.data.items,
          sujet: sujet,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // componentDidMount(){
  //   service
  //     //populate googleApi data
  //     .get("/bookFromData")
  //     .then((result) => {
  //       console.log(result.data);
  //       this.setState({
  //         saveList: result.data,
  //       });
  //     })
  //   .catch(error=>console.log(error))
    // ga("send", "event", "Book List", "Add to favorites");
  // }
  handleSave = (data) => {
   service
    .post("/user/dashboard/add-list", {}, {withCredentials: true})
    .then((result) => {
        console.log(result.data);
        this.setState({
            saveList : [... this.state.saveList, data]
                })
    } )
      }

//   saveList = (data) => {
//     this.setState({
// saveList : [... this.state.saveList, data]
//     })
//   }

  componentDidMount() {
    
    axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&langRestrict=en&maxResults=20&&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}`
      )
      .then((response) => {
        console.log("axios Api" ,response.data)
        this.setState({
          booksFromApi: response.data.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
//j'ai dû arréter les tests parce que tooManyRequest
      service
        //populate googleApi data
        .get("/bookFromData")
        .then((result) => {
          console.log("fetch ggl id and populate ",result.data);
          this.setState({
            saveList: result.data,
          });
        })
        .catch((error) => console.log(error));
    }


  // handleSave = (data) => {
  //   service
  //     .post("/dashboard/add-list", {}, { withCredentials: true })
  //     .then((result) => {
  //       console.log("handle save ",result.data);
  //       this.setState({
  //         saveList: [...this.state.saveList, data],
  //       });
  //     });
  // };

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

  // componentWillUnmount() {
  //  this.axiosCancelSource.cancel("Axios request canceled.");
  // }

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
            <div className="bigcontainer fixed">
              
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
                <div className="inlineinfos">
                <h2> {booksFromArray.volumeInfo.authors}</h2>
                <p> {booksFromArray.volumeInfo.publishedDate}</p>
                <p> {booksFromArray.volumeInfo.pageCount} pages</p>
                </div>
                <p className="summary">
                  {booksFromArray.volumeInfo.description}
                </p>
                {/* <p>{booksFromArray.volumeInfo.categories} </p> */}
                {/* {!booksFromArray.saleInfo && ( 
                   <p>{booksFromArray.saleInfo?.listPrice?.amount}€</p>
                   <p>{booksFromArray.saleInfo.listPrice.amount}</p>
                   )} 
                {!booksFromArray.saleInfo && ( 
                  <Link to={{ pathname: `${booksFromArray.saleInfo?.buylink}` }} target="_blank">Buy</Link>
                
                 <a href={booksFromArray.saleInfo.buylink}>Buy This Book</a>
                )} */}
                {/* <a href={booksFromArray.saleInfo?.buyLink}>Buy</a> */}
              </div>
              <div className="actionsicons">
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
                src={process.env.PUBLIC_URL + "/icons/noFavoritePossible.png"}
                alt="heart"
                onClick={() => this.handleSave()}
              />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
