import React, { Component } from "react";
// import Router from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
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
import NavBar from './NavBar';
export class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "default testAPI state" };
    this.callAPI = this.callAPI.bind(this);
    this.logout = this.logout.bind(this);
  }

  callAPI() {
    console.log("sup");
      fetch("http://localhost:9000/testAPI")
          .then(() => alert("passed thru"))// testing
          // .then(res => res) //testing
          .then(res => this.setState({ apiResponse: res }))
          // console.log(res)
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
        {/* <Router> */}
       {/* <NavBar /> */}
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
