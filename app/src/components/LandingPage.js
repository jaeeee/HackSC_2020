import React, { Component } from "react";
// import Router from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import fire, { db } from "../config/firebase";
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
  MDBDropdownItem,
  MDBIcon,
  MDBListGroupItem,
  MDBBadge
} from "mdbreact";
import ReactPlayer from "react-player";
import NavBar from './NavBar';
import Chatter from './Chat';
import Dashboard from "./Dashboard";
export class LandingPage extends Component {
         constructor(props) {
           super(props);
           //  this.componentDidMount();
           //  this.callAPI = this.callAPI.bind(this);
          //  this.logout = this.logout.bind(this);
          //  this.handleChange = this.handleChange.bind(this);
          //  this.submitQuestion = this.submitQuestion.bind(this);
          //  this.componentDidMount = this.componentDidMount.bind(this);
          //  this.state = {
            //  apiResponse: "default testAPI state",
            //  question: "",
            //  questions: [],
            //  upvotes: []
          //  };
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
                   <MDBCard style={{ padding: "20px" }}>
                     <center>
                       <h1>Live&Learn</h1>
                       <h3>
                         Free interactive live streams for educators and
                         students
                       </h3>
                       {/* <Dashboard /> */}
                       {/* <ol> */}
                       {/* <ul class="list-group"> */}

                       {/* <ReactPlayer
                         url="https://stream.mux.com/VOyYAIXDgyPVGylxN00GJ01edJAhBUlAkS.m3u8"
                         playing="true"
                       /> */}
                       {/* <Chatter /> */}
                       <p>
                         {/* <Chatter /> */}
                         {/* Welcome to EducateMe - the first free and live education platform for instructors and students. */}
                       </p>
                     </center>
                     {/* <MDBBtn onClick={this.logout}>Logout</MDBBtn> */}
                   </MDBCard>
                 </MDBContainer>

                 {/* <p className="App-intro">{this.state.apiResponse}</p> */}
               </div>
             </div>
           );
         }
       }

export default LandingPage;
