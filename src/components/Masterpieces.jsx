import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import "./../styles/NothingYet.css";

const { service } = apiHandler;

class Masterpieces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      masterpieces: [],
    };
  }

  handleDelete = (id) => {
    apiHandler
      .deleteBokBook(id)
      .then((result) => {
        this.setState({
          masterpieces: this.state.masterpieces.filter(
            (book) => book._id !== id
          ),
        });
      })
      .catch((err) => console.log(err));
  };
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
                  <img
                    className="books1"
                    src={masterpiece.image}
                    alt={masterpiece.title}
                  />
                </Link>
                <h1>{masterpiece.title}</h1>
                <h2>Category: {masterpiece.genre}</h2>
                <h4>{masterpiece.description}</h4>
                <h4>{masterpiece.pseudoAuthor}</h4>
                <h4>{masterpiece.author._id}</h4>
                <div>
                  <button onClick={() => this.handleDelete(masterpiece._id)}>
                    Delete
                  </button>
                  {/* <Link to={`/masterpieces/edit/${masterpiece._id}`}>Edit</Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Masterpieces;
