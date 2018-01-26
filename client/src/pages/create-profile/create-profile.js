import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { input,FormBtn } from "../../components/Form";
import API from "../../Utils/API";
import "./create-profile.css";
import {Input} from "react-materialize";

class createProfile extends Component {

  state = {
		artistName: "",
		bio: "",
		tags: "",
		links: "",
    links2: "",
    links3: "",
    links4: "",
    links5: "",
    links6: "",
		coverphoto: "",
    facebook:"",
    soundcloud:"",
    services: "",
    likes: ""
	}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveBio({
        artistName: this.state.artistName,
        bio: this.state.bio,
        tags: this.state.tags,
        links: this.state.links,
        links2: this.state.links2,
        links3: this.state.links3,
        links4: this.state.links4,
        links5: this.state.links5,
        links6: this.state.links6,
        coverphoto: this.state.coverphoto,
          image: this.state.image,
        facebook: this.state.facebook,
        soundcloud: this.state.soundcloud,
        services: this.state.services,
        likes: this.state.likes
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
        window.location.href="/profile";
  }

  render() {
    return (
      <div className="container small-container">
          <Jumbotron className="jumbo">
            <h1>Create a Profile</h1>
          </Jumbotron>

          <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s4">
                    <i className="material-icons prefix">child_care</i>
                    <input
                        value={this.state.artistName}
                        onChange={this.handleInputChange}
                        name="artistName"
                     id="icon_prefix" type="text" className="validate"/>
                    <label for="icon_prefix">Artist Name</label>
                  </div>
                  <div className="input-field col s4">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                        value={this.state.image}
                        onChange={this.handleInputChange}
                        name="image"
                    id="icon_account" type="tel" className="validate"/>
                    <label for="icon_account">Image Link</label>
                  </div>
                  <div className="input-field col s4">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                        value={this.state.coverphoto}
                        onChange={this.handleInputChange}
                        name="coverphoto"
                    id="icon_account" type="tel" className="validate"/>
                    <label for="icon_account">Coverphoto Link</label>
                  </div>
                </div>
              </form>
            </div>

            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                  <i className="material-icons prefix">comment</i>
                    <textarea className="textarea"
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                        name="bio"
                        placeholder="Bio"
                    id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1"></label>
                  </div>
                </div>
              </form>
            </div>

            <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <Input
                          icon="fingerprint"
                          label="Tags"
                          value={this.state.tags}
                          onChange={this.handleInputChange}
                          name="tags"
                       id="icon_prefix" type="select" className="validate">
                       <option value='Musician'>Musician</option>
                       <option value='Photographer'>Photographer</option>
                       <option value='Artist'>Artist</option>
                       <option valur='Writer'>Writer</option>
                       </Input>

                    </div>
                    <div className="input-field col s6">
                      <i className="material-icons prefix">fingerprint</i>
                      <input
                          value={this.state.services}
                          onChange={this.handleInputChange}
                          name="services"
                       id="icon_prefix" type="text" className="validate"/>
                      <label for="icon_prefix">Services</label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                        <i className="material-icons prefix">cloud_circle</i>
                        <input
                            value={this.state.links}
                            onChange={this.handleInputChange}
                            name="links"
                         id="icon_prefix" type="text" className="validate"/>
                        <label for="icon_prefix">Sound Cloud Link</label>
                      </div>
                      <div className="input-field col s4">
                        <i className="material-icons prefix">cloud_circle</i>
                        <input
                            value={this.state.links2}
                            onChange={this.handleInputChange}
                            name="links2"
                        id="icon_account" type="tel" className="validate"/>
                        <label for="icon_account">Sound Cloud Link</label>
                      </div>
                      <div className="input-field col s4">
                        <i className="material-icons prefix">cloud_circle</i>
                        <input
                            value={this.state.links3}
                            onChange={this.handleInputChange}
                            name="links3"
                         id="icon_prefix" type="text" className="validate"/>
                        <label for="icon_prefix">Sound Cloud Link</label>
                      </div>
                    </div>
                  </form>
                </div>


                <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <i className="material-icons prefix">child_care</i>
                          <input
                              value={this.state.facebook}
                              onChange={this.handleInputChange}
                              name="facebook"
                           id="icon_prefix" type="text" className="validate"/>
                          <label for="icon_prefix">Facebook Link</label>
                        </div>
                        <div className="input-field col s6">
                          <i className="material-icons prefix">account_circle</i>
                          <input
                              value={this.state.soundcloud}
                              onChange={this.handleInputChange}
                              name="soundcloud"
                          id="icon_account" type="tel" className="validate"/>
                          <label for="icon_account">Sound Cloud Page Link</label>
                        </div>
                      </div>
                    </form>
                  </div>

            <form>
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
