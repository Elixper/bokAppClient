import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import { buildFormData } from "../../formDataUtils";

export default class EditBookForm extends Component {
  state = {
    httpResponse: null,
  };
  bokbookRef = React.createRef();

  handleChange = (evt) => {
    const value =
      evt.target.type === "file" ? evt.target.files[0] : evt.target.value;
    const key = evt.target.title;
    this.setState({ [key]: value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { httpResponse, ...data } = this.state;
    buildFormData(formData, data);

    apiHandler
      .updateBokbook(this.props.bokBook.id, formData)
      .then((data) => {
        this.props.totoCase(data);
        this.setState({
          httpResponse: {
            status: "success",
            message: "Bok succesully update.",
          },
        });
        this.timeoutId = setTimeout(() => {
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
        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 1000);
      });
  };

  render() {
    return (
      <div>
        <form ref={this.bokbookRef} onSubmit={this.submit}>
          <h1>Add Your Masterpiece in Bok</h1>

          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={this.handleChange}
              placeholder="Title"
              value={this.state.title || ""}
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
              placeholder="Change your author name? "
              value={this.state.pseudoAuthor || ""}
            />
          </div>

          <div className="description">
            <label htmlFor="description">
              A few words about your chef d'oeuvre
            </label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={this.handleChange}
              value={this.state.description || ""}
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
              value={this.image}
              ref={this.bokbookRef}
            />
          </div>
          <div className="link">
            <label htmlFor="link"> Link of your book</label>
            <input
              id="link"
              name="link"
              type="url"
              value={this.link}
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
            />
          </div>

          <button>Submit!!</button>
        </form>
      </div>
    );
  }
}
