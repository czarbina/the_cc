import React from "react";
import { Navbar, NavItem } from 'react-materialize';
import { Link } from "react-router-dom";
import "./Nav.css";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import axios from "axios";
import ReactModal from 'react-modal';
  

class Nav extends React.Component { 

    constructor () {
    super();
    this.state = {
      showModal: false,
      username: "",
      password: ""
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  // shouldCloseOnOverlayClick () {
  //   this.setState({ showModal: false })
  // }

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
    // e.preventDefault();
    var state = this.state;
    axios.get("user/login", {
      params: state
    }).then(function(response, err){
      if(response.data[0]){
        if(response.data[0].username === state.username){
          window.location.href = "/profile";
        } 
      } else{
        alert("Login Error. Please try again.");
      }
    });
  }


  render () {
    return (
      <div>
        <Navbar brand="the cc" right style={{paddingLeft:"20px"}} className="#7986cb indigo lighten-2"> 
          <NavItem>
            <Button
              onClick={this.handleOpenModal}
            >LOGIN</Button>

          </NavItem>
      
          <NavItem>
            <Link to="/browse">BROWSE</Link>
          </NavItem>
        </Navbar>

     <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Login"
           id="loginModal"
           className="Modal"
           overlayClassName="Overlay"
           // onRequestClose={this.handleCloseModal}
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



