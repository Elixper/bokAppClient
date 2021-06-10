import React, { Component } from "react";
import Button from "../Button";
import UploadWidget from "../UploadWidget";
import FeedBack from "../FeedBack";
import apiHandler from "../../api/apiHandler";
import withUser from "../Auth/withUser";

import "../../styles/form.css";

class FormProfile extends Component {
  state = {
    user: null,
    tmpUrl: "",
    httpResponse: null,
    isLoading: true,
  };

  imageRef = React.createRef();

  componentDidMount() {
    apiHandler
      .getUser()
      .then((data) => {
        this.setState({ user: data, isLoading: false });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          httpResponse: {
            status: "failure",
            message: "Something bad happened, please try again later",
          },
        });
      });
  }

  handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    this.setState({ user: { ...this.state.user, [key]: value } });
  };

  isValidInput = (key) => {
    if (this.state.user[key] === "") {
      return false;
    } else return true;
  };

  checkError = () => {
    for (const key in this.state.user) {
      if (this.state[key] === "") {
        return true;
      }
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData();

    for (const key in this.state.user) {
      if (key === "profileImg") continue;
      fd.append(key, this.state.user[key]);
    }

    if (this.imageRef.current.files[0]) {
      fd.append("profileImg", this.imageRef.current.files[0]);
    }

    apiHandler
      .updateUser(fd)
      .then((data) => {
        this.props.context.setUser(data);
        this.setState({
          httpResponse: {
            status: "success",
            message: "Profile successfully updated.",
          },
        });

        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 2000);
      })
      .catch((error) => {
        this.setState({
          httpResponse: {
            status: "failure",
            message:
              "Something bad happened while updating your profile, try again later",
          },
        });

        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 2000);
      });
  };

  // handleFileSelect = (temporaryURL) => {
  //   // Get the temporaryURL from the UploadWidget component and
  //   // set the state so we can have a visual feedback on what the image will look like :)
  //   this.setState({ tmpUrl: temporaryURL });
  // };

  render() {
    // const { user } = this.state;
    const { httpResponse } = this.state;

    if (this.state.isLoading) return <div>Loading...</div>;

    return (
      <section className="form-section">
        <form autoComplete="off" className="form" onSubmit={this.handleSubmit}>
          <h1 className="header">Edit profile</h1>

          <div className="form-group">
            <label htmlFor="profileImg">Upload image</label>
            <input
              onChange={this.handleChange}
              id="profileImg"
              type="file"
              name="profileImg"
              ref={this.imageRef}
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">User Name : </label>
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.user.username}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              value={this.state.user.email}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="biography">Your Bio : </label>
            <input
              id="biography"
              name="biography"
              type="text"
              value={this.state.user.biography}
            />
          </div>

          <Button primary disabled={this.checkError()}>
            Save
          </Button>
        </form>
      </section>
    );
  }
}

export default withUser(FormProfile);
