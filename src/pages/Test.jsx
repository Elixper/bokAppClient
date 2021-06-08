import React from "react";
import axios from "axios";

// import { NavLink } from "react-router-dom";
// import Button from "./../components/Base/Button";


export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
      // urlSubject : '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  

  // handleClick(sujet) {
  //   // Changing state => pass param => the
  //   console.log(sujet);
  //  return {urlSubject: prevState.sujet}
  // }

  handleClick = (sujet) =>{
    // this.setState(prevState => {
    //   console.log(prevState.sujet);
    //   console.log(sujet);
    //   return {
    //     urlSubject: prevState.sujet
    //   };
    // });
    axios
      .get(
        // `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest`
        `https://www.googleapis.com/books/v1/volumes?q=subject:${sujet}&filter=paid-ebooks&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}` )
      .then((response) => {
        // console.log(response);
        this.setState({
          test: response.data.items,
          // urlSubject : response
        });
    
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  componentDidMount() {
    //   const wesh=[Art,Fiction,Romance];
    axios
      .get(
        // `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest`
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest&key=${process.env.REACT_APP_GOOGLE_BOOK_TOKEN}` )
      .then((response) => {
        // console.log(response);
        this.setState({
          test: response.data.items,
          // urlSubject : response
        });
    
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

//   componentDidUpdate(prevState) {
//     const { urlSubject } = this.state;
//     if(urlSubject !== prevState.urlSubject){
//         console.log('update state!');
//         // this.setState({ urlSubject});
//     }

// }
 
// componentDidUpdate(prevProps, prevState){
//  prevState.urlSubject
// }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.counter !== prevState.counter) {
  //     if (this.state.counter === 10) {
  //       setTimeout(() => {
  //         this.setState({ shoes: ["Requin", ...this.state.shoes] });
  //       }, 3000);
  //     }
  //   }
  // }
  //   render() {
  //     return (
  //       <div>
  //         {/* <pre>{JSON.stringify(this.props, null, 4)}</pre> */}
  //         {this.state.test.map((booksFromArray, index) => {
  //           //console.log(this.state.test[0]);
  //           booksFromArray.volumeInfo.imageLinks && console.log(booksFromArray.volumeInfo.imageLinks);
  //           return (
  //             <div key={index}>

  //               {booksFromArray.volumeInfo.imageLinks && (<img
  //                 src={booksFromArray.volumeInfo.imageLinks.thumbnail}
  //                 alt="book cover"
  //               />)}

  //               {!booksFromArray.volumeInfo.imageLinks && (<img
  //                 src={process.env.PUBLIC_URL + '/COVER.jpg'}
  //                 alt="book cover"
  //               />)}

  //               <h1> {booksFromArray.volumeInfo.title}</h1>
  //               <p>{booksFromArray.volumeInfo.description} </p>
  //             </div>
  //             );
  //         })}
  //       </div>
  //     );
  //   }
  // }

  render() {
    const booksFromArray = this.state.test
      .sort(() => Math.random() - Math.random())
      .find(() => true);

    return (
      <div>
      {/* peut_etre un link  a la place de button */}
        <button onClick={() => this.handleClick("history")}>History</button>
        <button onClick={() => this.handleClick("fiction")}>Fiction</button>
        <button onClick={() => this.handleClick("romance")}>Romance</button>
        <button onClick={() => this.handleClick("art")}>Art</button>
        <button onClick={() => this.handleClick("history")}>History</button>
       

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
            <p>{booksFromArray.saleInfo?.listPrice?.amount}</p>
            <a href={booksFromArray.saleInfo?.buylink}>Buy This Book</a>
          </div>
        )}
      </div>
    );
  }
}
