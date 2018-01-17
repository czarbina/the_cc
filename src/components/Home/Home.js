import React from "react";
import { Parallax, Background } from 'react-parallax';
import { render } from 'react-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Modal } from 'react-materialize';

const painter = "http://sicklesmarket.com/sites/default/files/images/event/sickles-events-593.jpg";
const musician = "https://media.pulseradio.net/media/transfer/img/articleimage/2016-02/tech_house_main.png";
const graffiti = "https://www.olivet.edu/sites/default/files/images/page-blocks/trowel-paint.jpg";

const Home = props => (
  <div>
    <Navbar brand="the cc" right style={{paddingLeft:"20px"}} className="#7986cb indigo lighten-2"> 
      <NavItem href="/login">Login</NavItem>
        <ul id="nav-mobile" className="side-nav">
          <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </Navbar>

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
          <div className="row center">
            <h5 className="header col s12 light">Join our creative community!</h5>
          </div>
          <div className="row center">
            <a href="#modal1" id="reg-button" 
            className="btn-large waves-effect waves-light #7986cb indigo lighten-2">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </Parallax>

  <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Registration</h4>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate"></input>
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"></input>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label for="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              This is an inline input field:
              <div className="input-field inline">
                <input id="email" type="email" className="validate"></input>
                <label for="email" data-error="wrong" data-success="right">Email</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green waves-light btn">SUBMIT</a>
      </div>
    </div>  

  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
            <h5 className="center">Exhibit and curate your work</h5>
            <p className="light">The Creative Collective serves as a gallery, a stage, a or a booking agent to help showcase your creative body of work on a virtual platform. Create and manage your art, music, videos, or writings through easy to build profiles.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
            <h5 className="center">Connect and collaborate with other artists</h5>
            <p className="light">Need a drummer? Perhaps you can find the John Bohnham to your Jimmy Page in our vast network of musicians. Looking to collaboate with another mural artist on a large outdoor piece? Here's the place to find them.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
            <h5 className="center">Book gigs and sell your work.</h5>
            <p className="light">You're a DJ? Use the calendar.. blablabla</p>
          </div>
        </div>
      </div>
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
          <div className="row center" style={{width: ""}}>
            <h5 className="header col s12 light" 
              style={{
                marginLeft: "auto",
                left: "auto",
                right: "auto"
            }}>Perhaps a featured artist here.</h5>
          </div>
        </div>
      </div>
    </div>
  </Parallax>

  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>
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
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">About us</h5>
          <p className="grey-text text-lighten-4">We're a network of creative types that also happen to be friends. This site will provide a hub
          where we are able to put our work out there for consumption, hire, and hopefully inspiration -  encouraging other artists to do the same.</p>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="brown-text text-lighten-3" href="#">Sabrina</a>
      </div>
    </div>
  </footer>
 </div> 
);

export default Home;


