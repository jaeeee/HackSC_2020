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
import ReactPlayer from "react-player";
import NavBar from './NavBar';
import Chatter from './Chat';
export class LandingPage extends Component {
         constructor(props) {
           super(props);
           this.state = { apiResponse: "default testAPI state" };
          //  this.callAPI = this.callAPI.bind(this);
           this.logout = this.logout.bind(this);
         }

        //  callAPI() {
        //    console.log("sup");
        //    fetch("http://localhost:9000/testAPI")
        //      .then(() => alert("passed thru")) // testing
        //      .then(res => res.text()) //testing
        //      .then(res => this.setState({ apiResponse: res }))
        //      // console.log(res)
        //      .catch(error => alert(error));
        //  }

        //  callAPI() {
        //    fetch("http://localhost:9000/streamLive")
        //      .then(res => res.text())
        //      .then(res => this.setState({ apiResponse: res }));
        //  }

         componentWillMount() {
          //  this.callAPI();
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
                       <h3>
                         Free interactive live streams for educators and
                         students
                       </h3>
                       {/* <ReactPlayer
                         url="https://stream.mux.com/VOyYAIXDgyPVGylxN00GJ01edJAhBUlAkS.m3u8"
                         playing="true"
                       /> */}
                       <Chatter />
                       <p>
                         {/* Welcome to EducateMe - the first free and live education platform for instructors and students. */}
                       </p>
                     </center>
                     <MDBBtn onClick={this.logout}>Logout</MDBBtn>
                   </MDBCard>
                 </MDBContainer>

                 {/* <p className="App-intro">{this.state.apiResponse}</p> */}
               </div>
             </div>
           );
         }
       }

export default LandingPage;
