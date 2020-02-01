import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBModalBody,
  MDBCardBody
} from "mdbreact";
import { Link } from "react-router-dom";
import fire from "../config/firebase";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  handleChange(e) {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    // console.log("passed signup");
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
    fire
      .firestore()
      .doc(`/users/${this.state.email}`)
      .set({
        name: this.state.name,
        password: this.state.password
        // wallet: 1000
      });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "3vh",
          width: "1000px"
        }}
      >
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Sign up</p>
                      <div className="grey-text">
                        <MDBInput
                          value={this.state.name}
                          onChange={this.handleChange}
                          label="Your name"
                          icon="user"
                          group
                          name="name"
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                        />
                        <MDBInput
                          value={this.state.email}
                          onChange={this.handleChange}
                          label="Your email"
                          icon="envelope"
                          group
                          name="email"
                          type="email"
                          validate
                          error="wrong"
                          success="right"
                        />
                        {/* <MDBInput
                          label="Confirm your email"
                          icon="exclamation-triangle"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                        /> */}
                        <MDBInput
                          value={this.state.password}
                          onChange={this.handleChange}
                          label="Your password"
                          icon="lock"
                          group
                          name="password"
                          type="password"
                          validate
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn
                          color="orange"
                          type="submit"
                          onClick={this.signup}
                        >
                          Register
                        </MDBBtn>
                        <MDBBtn color="blue" type="submit" onClick="close">
                          Close
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
      </div>
    );
  }
}

export default SignUp;
