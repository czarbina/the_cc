import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../Utils/API";

class createProfile extends Component {

  state = {
		artistName: "",
		bio: "",
		tags: "",
		links: "",
		coverphoto: ""
	};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveBio({
        artistName: this.state.artistName,
        bio: this.state.bio,
        tags: this.state.tags,
        links: this.state.links,
        coverphoto: this.state.coverphoto
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">

            <Jumbotron>
              <h1>Create a Profile</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.artistName}
                onChange={this.handleInputChange}
                name="artistName"
                placeholder="artistName (required)"
              />
              <Input
                value={this.state.tags}
                onChange={this.handleInputChange}
                name="tags"
                placeholder="tags"
              />
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio (required)"
              />
              <Input
                value={this.state.links}
                onChange={this.handleInputChange}
                name="links"
                placeholder="links"
              />
              <Input
                value={this.state.coverphoto}
                onChange={this.handleInputChange}
                name="coverphoto"
                placeholder="coverphoto link"
              />
              <FormBtn
                disabled={!(this.state.artistName)}
                onClick={this.handleFormSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>

      </div>
    );
  }
}

export default createProfile;
