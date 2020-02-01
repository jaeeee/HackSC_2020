import React, { Component } from "react";
import fire from "../config/firebase";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
export class LandingPage extends Component {
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        Hello there sir.
        <MDBBtn onClick={this.logout}>Logout</MDBBtn>
      </div>
    );
  }
}

export default LandingPage;
