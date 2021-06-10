import React, { Component } from "react";
import { buildFormData } from "../../formDataUtils";
import apiHandler from "../../api/apiHandler";
import "./../../styles/NewBookForm.css";
import "./../../styles/global.css"

const bokState = {
  title: "",
  pseudoAuthor: "",
  description: "",
  genre: "",
  link: "",
  httpResponse: null,
  error: null,

};

export default class NewBookForm extends Component {
  state = bokState;

  bokBookCover = React.createRef();

  handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    const key = event.target.id;
    console.log(key);
    this.setState({ [key]: value });
  };

  submit = (event) => {
    event.preventDefault();
    if (!this.state.genre) {
      this.setState({ error: "You didn't choose any genre!" }, () => {
        this.timeOut = setTimeout(() => {
          this.setState({ error: null });
        }, 1000);
      });
      console.log("cou");
      return;
    }
    const formData = new FormData();
    console.log(formData);
    const { httpResponse, ...data } = this.state;
    buildFormData(formData, data);
    formData.append("image", this.bokBookCover.current.files[0]);

    apiHandler
      .addBokBook(formData)
      .then((data) => {
        console.log(data);
        this.setState({
          
          ...bokState,
          httpResponse: {
            status: "success",
            message: "Masterpiece successfully added.",
          },
          // isSubmitted: true,
        });
        console.log('submit');
        this.timeOut = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          httpResponse: {
            status: "failure",
            message: "An error occured, try again later.",
          },
        });
        this.timeOut = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 1000);
      });
  };

  render() {
    return (
      <div>
        <form className="containerformbook" onSubmit={this.submit}>
          <h1>Add Your Masterpiece in Bok</h1>
          
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={this.handleChange}
              placeholder="Title"
            />
          

            <label htmlFor="pseudoAuthor">
              <em>"Nom de Plume"</em>
            </label>
            <input
              id="pseudoAuthor"
              name="pseudoAuthor"
              onChange={this.handleChange}
              type="text"
              placeholder="What is your 'nom de plume' ? "
            />
          

          
            <label htmlFor="description">
              A few words about your chef d'oeuvre
            </label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={this.handleChange}
            />
          

            <label htmlFor="genre">Genre</label>
            <select onChange={this.handleChange} name="genre" id="genre">
              <option value="" disabled>
                Select your genre
              </option>
              <option value="Art">Art</option>
              <option value="Biography">Biography</option>
              <option value="Business">Business</option>
              <option value="Children">Children</option>
              <option value="Comics">Comics</option>
              <option value="Cooking">Cooking</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Manga">Manga</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Romance">Romance</option>
              <option value="ScienceFiction">Science Fiction</option>
            </select>
          
        
            <label htmlFor="link"> Link of your book</label>
            <input
              onChange={this.handleChange}
              id="link"
              name="link"
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
            />
          
<div>
          <label htmlFor="image">Upload image</label>
            <input
              onChange={this.handleChange}
              id="image"
              type="file"
              name="image"
              ref={this.bokBookCover}
            />
          
</div>
          <button className="submit">Submit!!</button>
        </form>
      </div>
    );
  }
}
