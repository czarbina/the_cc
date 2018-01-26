import React from "react";
import { Navbar, NavItem } from 'react-materialize';
import { Link } from "react-router-dom";
import "./Nav.css";
import { Button, Row, Col } from 'react-materialize';
import axios from "axios";
import ReactModal from 'react-modal';


class Nav extends React.Component {

    constructor () {
    super();
    this.state = {
      showModal: false,
      username: "",
      password: "",
      loggedIn: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    var userToken = document.cookie.slice(10, document.cookie.length);
    axios.get("user/checkLogin", {authToken:userToken}).then(response => {
      if(response.data[0]){
        if(userToken === response.data[0].authToken){
          this.setState({loggedIn: true});
        }
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  handleOpenModal (e) {
    e.preventDefault();
    console.log("open");
    this.setState({ showModal: true });
  }

  handleCloseModal (e) {
    e.preventDefault();
    console.log("close");
    this.setState({ showModal: false });
    this.submitLog();
  }

  onChangeUsername = (e) => {
    e.preventDefault();
    this.setState({'username': e.target.value});
  }

    onChangePassword = (e) => {
    e.preventDefault();
    this.setState({'password': e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

  }

  submitLog = (e) => {
    var state = this.state;
    axios.get("user/login", {
      params: state
    }).then(response => {
      if(response.data[0]){
        if(response.data[0].username === state.username){
          this.setState({loggedIn: true});
          console.log(this.state);
          window.location.href = "/profile";
        }
      } else{
        alert("Login Error. Please try again.");
      }
    });
  }

  logout = (e) => {
    e.preventDefault();
    document.cookie = "authToken" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    console.log("logout function called");
    this.setState({'loggedIn': false});
    console.log(this.state);
    window.location.href = "/";
  }


  render () {
    return (
      <div>
        <Navbar id="thecc" brand="THE CC" right style={{paddingLeft:"20px"}} className="#7986cb indigo lighten-2 thecc">
          <NavItem>
            <Button
              className={this.state.loggedIn ? 'invisible' : 'navButton'}
              color="#841584"
              onClick={this.handleOpenModal}
            >LOGIN</Button>
          </NavItem>

          <NavItem>
            <Button
              className="navButton"
            ><Link to="/browse">BROWSE</Link>
            </Button>
          </NavItem>

          <NavItem>
            <Button
              className={this.state.loggedIn ? 'navButton' : 'invisible'}
              ><Link to="/profile">MY PROFILE</Link>
            </Button>
          </NavItem>

          <NavItem>
            <Button
              className={this.state.loggedIn ? 'navButton' : 'invisible'}
              ><Link to="/createProfile">EDIT PROFILE</Link>
            </Button>
          </NavItem>

          <NavItem>
            <Button
              className={this.state.loggedIn ? 'navButton' : 'invisible'}
              onClick={this.logout}
              >Logout
              </Button>
          </NavItem>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="/">Navbar Link</a></li>
          </ul>
        <a href="/Browse" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </Navbar>

     <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Login"
           id="loginModal"
           className="Modal"
           overlayClassName="Overlay"
           onRequestClose={this.handleCloseModal}
          >

            <div className="modal-content">
              <h4 style={{color:"#7986cb", textAlign: "center"}}>Login</h4>
              <form className="col s12" onSubmit={this.submitLog}>

                <Row>
                  <Col s={12} className="input-field">
                    <input
                      name="username"
                      type="text"
                      className="validate"
                      // value={this.state.username}
                      onChange={this.onChangeUsername}>
                    </input>
                    <label for="username">Username</label>
                  </Col>

                  <Col s={12} className="input-field">
                    <input
                      name="password"
                      type="password"
                      className="validate"
                      // value={this.state.password}
                      onChange={this.onChangePassword}>
                    </input>
                    <label for="password">Password</label>
                  </Col>
                </Row>

                <Row>
                  <Col s={12}>
                    <Button
                      href="#!"
                      id="regBtn"
                      className="btn-large waves-effect waves-light #7986cb indigo lighten-2"
                      type="submit"
                      onClick={this.handleCloseModal}>SUBMIT</Button>
                  </Col>
                </Row>

              </form>
            </div>
          </ReactModal>
   </div>
   )}
};

export default Nav;
