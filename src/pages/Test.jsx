import React from "react";
import axios from "axios";

// import { NavLink } from "react-router-dom";
// import Button from "./../components/Base/Button";


export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
      urlSubject : '',
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(sujet){
    
    // Changing state => pass param => the 
    this.setState({urlSubject : sujet})
    console.log(sujet)
  }

  
  componentDidMount() {
    //   const wesh=[Art,Fiction,Romance];
    axios
      .get(
        // `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest`
        `https://www.googleapis.com/books/v1/volumes?q=subject:${this.state.urlSubject}&filter=paid-ebooks&orderBy=newest&key=AIzaSyAkVkyu74n0QoSQrsOn_PVDH2A5v6-2tR4`
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          test: response.data.items,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

 
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
  const booksFromArray = this.state.test.sort(() => Math.random() - Math.random())
                                     .find(() => true);

  return (

      <div>
        {/* <NavLink to="/signin"> <Button secondary>FICTION</Button></NavLink> */}

        <button onClick={() => this.handleClick("fiction")}>Fiction</button>
        <button onClick={() => this.handleClick("romance")}>Romance</button>
        <button onClick={() => this.handleClick("art")}>Art</button>
        <button  onClick={this.routeChange}>Art</button>

          {booksFromArray &&
             <div>
              
              {booksFromArray.volumeInfo.imageLinks && (<img
                src={booksFromArray.volumeInfo.imageLinks.thumbnail}
                alt="book cover"
              />)} 
              
              {!booksFromArray.volumeInfo.imageLinks && (<img
                src={process.env.PUBLIC_URL + '/COVER.jpg'}
                alt="book cover"
              />)} 
    
              <h1> {booksFromArray.volumeInfo.title}</h1>
              <p>{booksFromArray.volumeInfo.description} </p>
              <p>{booksFromArray.volumeInfo.categories} </p>
            </div>
          }
      </div>
  );
};
}

