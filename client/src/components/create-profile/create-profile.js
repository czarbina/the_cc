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
    links2: "",
    links3: "",
		coverphoto: "",
    facebook:"",
    soundcloud:""
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
        links2: this.state.links2,
        links3: this.state.links3,
        coverphoto: this.state.coverphoto,
        facebook: this.state.facebook,
        soundcloud: this.state.soundcloud
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
                placeholder="Artist Name"
              />
              <Input
                value={this.state.tags}
                onChange={this.handleInputChange}
                name="tags"
                placeholder="Tags"
              />
              <TextArea
                value={this.state.bio}
                onChange={this.handleInputChange}
                name="bio"
                placeholder="Bio"
              />
              <Input
                value={this.state.links}
                onChange={this.handleInputChange}
                name="links"
                placeholder="Link (Soundcloud Embed src)"
              />
              <Input
                value={this.state.links2}
                onChange={this.handleInputChange}
                name="links2"
                placeholder="Link (Soundcloud Embed src)"
              />
              <Input
                value={this.state.links3}
                onChange={this.handleInputChange}
                name="links3"
                placeholder="Link (Soundcloud Embed src)"
              />
              <Input
                value={this.state.coverphoto}
                onChange={this.handleInputChange}
                name="coverphoto"
                placeholder="Image Link"
              />
              <Input
                value={this.state.soundcloud}
                onChange={this.handleInputChange}
                name="soundcloud"
                placeholder="Link to Soundcloud"
              />
              <Input
                value={this.state.facebook}
                onChange={this.handleInputChange}
                name="facebook"
                placeholder="Link to Facebook"
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
