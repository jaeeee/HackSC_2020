import React, { Component } from "react";
// import Router from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

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
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
export class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "default testAPI state" };
    this.callAPI = this.callAPI.bind(this);
    this.logout = this.logout.bind(this);
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(() => alert("passed thru"))// testing
          .then(res => res.text()) //testing
          .then(res => this.setState({ apiResponse: "yes" }))
          .catch(error => alert(error));
  }

  componentWillMount() {
      this.callAPI();
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh"
      // }}
      >
        <Router>
          <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">EducateMe</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">PlaceHolder</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Bruh</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            {/* </MDBCollapse> */}
          </MDBNavbar>
        </Router>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <MDBContainer>
            <MDBCard>
              <center>
                <h1>EducateMe</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </center>
              <MDBBtn onClick={this.logout}>Logout</MDBBtn>
            </MDBCard>
          </MDBContainer>

          <p className="App-intro">

            {this.state.apiResponse}
          </p>

        </div>
      </div>
    );
  }
}

export default LandingPage;
