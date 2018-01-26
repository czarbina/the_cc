import React from "react";
import "./Home.css";
import { Parallax } from 'react-parallax';
import { Button, Row, Col } from 'react-materialize';
import axios from "axios";
import ReactModal from 'react-modal';
import share from "./001-brush.png";
import connect from "./003-pencil.png";
import success from "./002-interface.png";

const painter = "http://sicklesmarket.com/sites/default/files/images/event/sickles-events-593.jpg";
const musician = "https://media.pulseradio.net/media/transfer/img/articleimage/2016-02/tech_house_main.png";
const graffiti = "https://www.olivet.edu/sites/default/files/images/page-blocks/trowel-paint.jpg";

ReactModal.setAppElement('#root');

class Home extends React.Component {

    constructor () {
    super();
    this.state = {
      showModal: false,
      name: "",
      email: "",
      username: "",
      password: "",
      password_conf: "",
      zipcode: "",
      dob: ""

    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
    }

  shouldCloseOnOverlayClick () {
    this.setState({ showModal: false })
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  autoLogin = (userInfo) => {
    axios.get("user/login", {
      params: userInfo
    }).then(function(res){
      window.location.href = "/profile";
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("Heeey1");
    if (this.state.password===this.state.password_conf) {
    axios.post('/user/newUser', this.state)
          .then((result) => {
            console.log(result);
            this.setState({ showModal: false });

            const newUserAutoLogin = {
              username: result.data.username,
              password: result.data.password
            };

            this.autoLogin(newUserAutoLogin);

        });

    // Write a route in userBioRoutes.js with this name.  It should, first, check the user
    //bio table for a matching username.  if username doesn't exist, create it.  If it does exist,
    //respond with an error
    //!!!! update login function to add authToken to userBio table
    axios.post("bio/newBio", this.state).then((response) => {
      console.log(response);
    });
      }

      else {
        alert("Nawwwww!");
        this.setState({ showModal: true });

      }

      this.setState({name: "",
      email: "",
      username: "",
      password: "",
      password_conf: "",
      zipcode: "",
      dob: ""});
    }

  render () {

    return (
  <div>

  <Parallax
    bgImage={painter}
    bgWidth="100%"
    bgHeight="500"
    strength={500}
  >
    <div className="parallax-container"
        style={{
          minHeight: "380px",
          lineHeight: 0,
          height: "auto",
          color: "#ffffffff",
          WebkitBoxAlign: "center",
          WebkitAlignItems: "center",
          msFlexAlign: "center",
          alignItems: "center",
          width: "auto"
        }}>
    <div className="section no-pad-bot" style={{width: "100%"}}>
      <div className="container" style={{ height: 500 }}>
        <h1 style={{color:"#7986cb"}} className="header center">Share. Connect. Succeed.</h1>
          <Row className="center">
            <h5 className="header col s12 light">Join our creative community!!</h5>
          </Row>
          <Row className="center">
            <Button
            style={{zIndex:0}}
            id="reg-button"
            onClick={this.handleOpenModal}
            className="btn-large waves-effect waves-light #7986cb indigo lighten-2">Sign up</Button>

          <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Registration"
           id="modal1"
           className="Modal"
           overlayClassName="Overlay"
           onRequestClose={this.handleCloseModal}

        >
            <div className="modal-content">
              <h4 style={{color:"#7986cb", textAlign: "center"}}>Registration</h4>
              <form className="col s12" onSubmit={this.submitReg}>


                <Row>
                  <Col s={12} className="input-field">
                    <input
                      name="name"
                      type="text"
                      className="validate"
                      value={this.state.name}
                      onChange={this.onChange}>
                    </input>
                    <label for="name">Name</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} className="input-field">
                    <input
                      name="email"
                      type="email"
                      className="validate"
                      value={this.state.email}
                      onChange={this.onChange}>
                    </input>
                    <label for="email">Email</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} className="input-field">
                    <input
                      name="username"
                      type="text"
                      className="validate"
                      value={this.state.username}
                      onChange={this.onChange}>
                    </input>
                    <label for="username">Username</label>
                  </Col>
                  <Col s={6} className="input-field">
                    <input
                      name="password"
                      type="password"
                      className="validate"
                      value={this.state.password}
                      onChange={this.onChange}>
                    </input>
                    <label for="password">Password</label>
                  </Col>
                  <Col s={6} className="input-field">
                    <input
                      name="password_conf"
                      type="password"
                      className="validate"
                      value={this.state.password_conf}
                      onChange={this.onChange}>
                      </input>
                    <label for="password">Password</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={6} className="input-field">
                    <input
                      name="dob"
                      type="text"
                      className="validate"
                      value={this.state.dob}
                      onChange={this.onChange}>
                    </input>
                    <label for="dob">Birthday (DDMMYYYY)</label>
                  </Col>
                  <Col s={6} className="input-field">
                    <input
                      name="zipcode"
                      type="text"
                      className="validate"
                      value={this.state.zipcode}
                      onChange={this.onChange}></input>
                    <label for="zipcode">Zipcode</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={6}>

                    <Button
                      href="#!"
                      id="regBtn"
                      className="btn-large waves-effect waves-light #7986cb indigo lighten-2"
                      type="submit"
                      onClick={this.onSubmit}>SUBMIT</Button>
                  </Col>
                </Row>
              </form>
            </div>
          </ReactModal>
          </Row>
        </div>
      </div>
    </div>
  </Parallax>

  <div className="container">
    <div className="section">
      <Row>
        <Col s={12} m={4}>
            <h2 className="center brown-text">
            <img src={share} alt=""></img></h2>
            <h5 className="center">Exhibit and curate your work</h5>
            <p className="light">The Creative Collective serves as a gallery, a stage, or a booking agent to help showcase your creative body of work on a virtual platform. Create and manage your art, music, videos, or writings through easy to build profiles.</p>
        </Col>

        <Col s={12} m={4}>
            <h2 className="center brown-text">
              <img src={connect} alt=""></img></h2>
            <h5 className="center">Connect and collaborate with other artists</h5>
            <p className="light">Need a drummer? Perhaps you can find the John Bohnham to your Jimmy Page in our vast network of musicians. Looking to collaboate with another mural artist on a large outdoor piece? Here's the place to find them.</p>
        </Col>

        <Col s={12} m={4}>
          <div className="icon-block">
            <h2 className="center brown-text">
            <img src={success} alt=""></img></h2>
            <h5 className="center">Book gigs and sell your work.</h5>
            <p className="light">You're a DJ? Musician? Have a gallery opening soon? Use our calendar tool to let event bookers know when you're free or to alert others of any upcoming gigs you have in the pipeline.</p>
          </div>
        </Col>
      </Row>
    </div>
  </div>

  <Parallax
    bgImage={musician}
    bgHeight="500"
    strength={500}
  >
    <div className="parallax-container"
      style={{
        minHeight: "380px",
        lineHeight: 0,
        height: "auto",
        color: "#ffffffff",
        WebkitBoxAlign: "center",
        WebkitAlignItems: "center",
        msFlexAlign: "center",
        alignItems: "center",
        width: "auto"
    }}>
      <div className="section no-pad-bot" style={{width: ""}}>
        <div className="container" style={{ height: 450, width: "100%"}}>
          <Row className="center" style={{width: ""}}>
            <h5 className="header col s12 light"
              style={{
                marginLeft: "auto",
                left: "auto",
                right: "auto"
            }}></h5>
          </Row>
        </div>
      </div>
    </div>
  </Parallax>

  <div className="container">
    <div className="section">
      <Row>
        <Col s={12} className="center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p className="center-align light"></p>

        </Col>
      </Row>
    </div>
  </div>

  <Parallax
    bgImage={graffiti}
    bgHeight="500"
    strength={500}
  >
    <div className="parallax-container"
      style={{
        minHeight: "380px",
        lineHeight: 0,
        height: "auto",
        color: "#ffffffff",
        WebkitBoxAlign: "center",
        WebkitAlignItems: "center",
        msFlexAlign: "center",
        alignItems: "center",
        width: "auto"
    }}>
      <div className="section no-pad-bot" style={{width: ""}}>
        <div className="container" style={{ height: 450, width: "100%"}}>
          <div className="row center" style={{width: ""}}>
            <h5 className="header col s12 light" style={{marginLeft: "auto",
              left: "auto",
              right: "auto"
            }}>If you would like to join our community, go ahead and make a profile.  We are growing every day and our community could be the perfect platform to get your work out there.  You never know who might see it.  Let's all grow together.  </h5>
          </div>
        </div>
      </div>
    </div>
  </Parallax>

  <footer className="page-footer #7986cb indigo lighten-2">
    <div className="container">
      <Row>
        <Col l={6} s={12}>
          <h5 className="white-text">About us</h5>
          <p className="grey-text text-lighten-4">We're a network of creative types that also happen to be friends. This site will provide a hub
          where we are able to put our work out there for consumption, hire, and hopefully inspiration -  encouraging other artists to do the same.</p>
        </Col>
        <Col l={3} s={12}>
          <h5 className="white-text">Our Friends</h5>
          <ul>
            <li><a className="white-text" href="https://soundcloud.com/" target="_blank">Soundcloud</a></li>
            <li><a className="white-text" href="https://boomkat.com/" target="_blank">Boomkat</a></li>
            <li><a className="white-text" href="https://mixcloud.com/" target="_blank">Mixcloud</a></li>
            <li><a className="white-text" href="https://beatport.com/" target="_blank">Beatport</a></li>
          </ul>
        </Col>
        <Col l={3} s={12}>
          <h5 className="white-text">Resources</h5>
          <ul>
            <li><a className="white-text" href="https://thequietus.com/" target="_blank">The Quietus</a></li>
            <li><a className="white-text" href="https://www.ableton.com/en/live/learn-live/" target="_blank">Learn Ableton</a></li>
            <li><a className="white-text" href="https://hypem.com/" target="_blank">The Hype Machine</a></li>
            <li><a className="white-text" href="https://codeacademy.com" target="_blank">Learn to Code!</a></li>
          </ul>
        </Col>
      </Row>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="brown-text text-lighten-3" href="/">Sabrina</a>
      </div>
    </div>
  </footer>
 </div>)
 }

};

export default Home;
