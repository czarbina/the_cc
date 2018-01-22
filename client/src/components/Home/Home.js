import React from "react";
import "./Home.css";
import { Parallax, Background } from 'react-parallax';
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import ReactModal from 'react-modal';
import share from "./001-brush.png";
import connect from "./003-pencil.png";
import success from "./002-interface.png";
import axios from 'axios';

const painter = "http://sicklesmarket.com/sites/default/files/images/event/sickles-events-593.jpg";
const musician = "https://media.pulseradio.net/media/transfer/img/articleimage/2016-02/tech_house_main.png";
const graffiti = "https://www.olivet.edu/sites/default/files/images/page-blocks/trowel-paint.jpg";

class Home extends React.Component {

    constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
    axios.get('/register').then(() => {
      console.log("tadah");
    })
  }

  shouldCloseOnOverlayClick () {
    this.setState({ showModal: false })
  }

  // submitReg(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
  //   console.log(data);

  //   // fetch('', {
  //   //   method: 'POST',
  //   //   body: data,
  //   // });
  // }

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
          display: "-webkit-box",
          display: "-webkit-flex",
          display: "-ms-flexbox",
          display: "flex",
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
            <h5 className="header col s12 light">Join our creative community!</h5>
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
                  <Col s={6} className="input-field">
                    <input id="first_name" type="text" className="validate"></input>
                    <label for="first_name">First Name</label>
                  </Col>
                  <Col s={6} className="input-field">
                    <input id="last_name" type="text" className="validate"></input>
                    <label for="last_name">Last Name</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={12} className="input-field">
                    <input id="email" type="email" className="validate"></input>
                    <label for="email">Email</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={6} className="input-field">
                    <input id="username" type="text" className="validate"></input>
                    <label for="username">Username</label>
                  </Col>
                  <Col s={6} className="input-field">
                    <input id="password" type="password" className="validate"></input>
                    <label for="password">Password</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={6} className="input-field">
                    <input id="dob" type="text" className="validate"></input>
                    <label for="dob">Birthday (DDMMYYYY)</label>
                  </Col>
                  <Col s={6} className="input-field">
                    <input id="zipcode" type="text" className="validate"></input>
                    <label for="zipcode">Zipcode</label>
                  </Col>
                </Row>
                <Row>
                  <Col s={6}>
                    <Link to="/profile">
                    <Button
                      href="#!"
                      id="regBtn"
                      className="btn-large waves-effect waves-light #7986cb indigo lighten-2"
                      onClick={this.handleCloseModal}>SUBMIT</Button>
                      </Link>
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
            <img src={share}></img></h2>
            <h5 className="center">Exhibit and curate your work</h5>
            <p className="light">The Creative Collective serves as a gallery, a stage, a or a booking agent to help showcase your creative body of work on a virtual platform. Create and manage your art, music, videos, or writings through easy to build profiles.</p>
        </Col>

        <Col s={12} m={4}>
            <h2 className="center brown-text">
              <img src={connect}></img></h2>
            <h5 className="center">Connect and collaborate with other artists</h5>
            <p className="light">Need a drummer? Perhaps you can find the John Bohnham to your Jimmy Page in our vast network of musicians. Looking to collaboate with another mural artist on a large outdoor piece? Here's the place to find them.</p>
        </Col>

        <Col s={12} m={4}>
          <div className="icon-block">
            <h2 className="center brown-text">
            <img src={success}></img></h2>
            <h5 className="center">Book gigs and sell your work.</h5>
            <p className="light">You're a DJ? Use the calendar.. blablabla</p>
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
            }}>Perhaps a featured artist here.</h5>
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
          <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

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
            }}>Perhaps a catchy word or two here.</h5>
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
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </Col>
        <Col l={3} s={12}>
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </Col>
      </Row>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="brown-text text-lighten-3" href="#">Sabrina</a>
      </div>
    </div>
  </footer>
 </div>)
 }

};

export default Home;
