import React from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import { Button, Card, Row, Col, Icon } from 'react-materialize';
import axios from 'axios';

class Login extends React.Component {
  render () {
    return (
            <div>
              <h4 style={{color:"#7986cb", textAlign: "center"}}>Registration</h4>
              <form className="col s12" >
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

                    <Button
                      href="#!"
                      id="regBtn"
                      className="btn-large waves-effect waves-light #7986cb indigo lighten-2"
                >SUBMIT</Button>
                      </Link>
                  </Col>
                </Row>
              </form>
            </div>
          );
  };
};

export default Login;
