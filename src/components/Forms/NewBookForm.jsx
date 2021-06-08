import React, { Component } from "react";
import { buildFormData } from "../../formDataUtils";
import axios from "axios";
import apiHandler from "../../api/apiHandler";

const bokState = {
  title: "",
  pseudoAuthor: "",
  description: "",
  genre: "",
  link: "",
  isSubmitted: false,
};

export default class NewBookForm extends Component {
  state = bokState;

  bokBookCover = React.createRef();

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.key;
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
      return;
    }
    const formData = new FormData();
    const { httpResponse, ...data } = this.state;
    formDataUtils(buildFormData, data);
    formData.append("image", this.bokBookCover.current.files[0]);

    apiHandler
      .addBokBook(formData)
      .then((data) => {
        this.props.addBokBook(data);

        this.setState({
          ...bokState,
          httpResponse: {
            status: "success",
            message: "Masterpiece successfully added.",
          },
          isSubmitted: true,
        });
        this.timeOut = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 1000);
      })
      .catch((error) => {
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
        <form onSubmit={this.submit}>
          <h1>Add Your Masterpiece in Bok</h1>

          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={this.handleChange}
              placeholder="Title"
            />
          </div>
          <div className="pseudo">
            <label htmlFor="pseudoAuthor">
              {" "}
              <em>"Nom de Plume"</em>{" "}
            </label>
            <input
              id="pseudoAuthor"
              name="pseudoAuthor"
              onChange={this.handleChange}
              type="text"
              placeholder="What is your 'nom de plume' ? "
            />
          </div>

          <div className="description">
            <label htmlFor="description">
              {" "}
              A few words about your chef d'oeuvre{" "}
            </label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={this.handleChange}
            />
          </div>

          <div className="genre">
            <label htmlFor="genre">Genre</label>
            <select name="genre" id="genre">
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
          </div>
          <div className="image">
            <label htmlFor="image">Upload image</label>
            <input
              id="image"
              type="file"
              name="image"
              ref={this.bokBookCover}
            />
          </div>
          <div className="link">
            <label htmlFor="link"> Link of your book</label>
            <input
              id="link"
              name="link"
              type="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
            />
          </div>

          {/* <button>Submit!!</button> */}
        </form>
      </div>
    );
  }
}
