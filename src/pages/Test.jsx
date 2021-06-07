import React from "react";
import axios from "axios";

export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [],
      // urlSubject : '',
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    
    // Changing state
    this.setState({urlSubject : 'fiction'})
  }

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&orderBy=newest`
        // `https://www.googleapis.com/books/v1/volumes?q=subject:${this.state.urlSubject}&filter=paid-ebooks&orderBy=newest`
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          test: response.data.items,
        });
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
        <button >Fiction</button>
        <button>Romance</button>
        <button onClick={this.handleClick}>Art</button>

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

