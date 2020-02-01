import React, { Component } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { db } from "../config/firebase";
import fire from "../config/firebase";
import ReactPlayer from "react-player";

export class CurrentStreams extends Component {
    _isMounted = false;
         constructor() {
           super();
           this.updateInfo = this.updateInfo.bind(this);
          //  this.handleChange = this.handleChange.bind(this);
          //  this.generateKey = this.generateKey.bind(this);
           //  this.logout = this.logout.bind(this);
           this.state = {
            //  streamKey: "",
            email: "daniel.kwong.h@gmail.com",
             streamDescription: "",
             playbackID: "",
             streamTitle: "",
             streamCategory: "",
             streamURL: "",
           };
         }

        updateInfo() {
          var blah = "";
          blah = "https://stream.mux.com" + this.state.playbackID +  ".m3u8"; 
           this.setState({streamURL: blah});
           console.log(this.state.streamURL);
         }

          componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;

    let currentComp = this;
    // this.updateInfo();
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        var found = 0;
        var userRef = db.collection("users").doc("daniel.kwong.h@gmail.com");
        var username = fire.auth().currentUser.email;
        userRef.onSnapshot(
          {
            includeMetadataChanges: true
          },
          function(doc) {
            try {
              //    if (this._isMounted) {

              currentComp.setState({
                //  budget: doc.data().budget,
                //  bio: doc.data().bio,
                //  focus: doc.data().focus,
                //  name: doc.data().name
                // streamKey: doc.data().streamKey,
                streamDescription: doc.data().streamDescription,
                playbackID: doc.data().playbackID,
                streamTitle: doc.data().streamTitle,
                streamCategory: doc.data().streamCategory
              });
              // }
            } catch (error) {
              console.log("We getting an error: ", error); // ADD back later
              found = 0;
            }
          }
        );

        if (found == 1) {
          //console.log("does hit this")
        } else {
          currentComp.setState({
            budget: ["N/A"]
          });
        }
      }
    });
    this.updateInfo();
  }



         render() {
           return (
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
                     {/* <h3>Current streams here!</h3> */}
                     <h4>Title: {this.state.streamTitle}</h4>
                     <h5>Description: {this.state.streamDescription}</h5>
                     <h6>Category: {this.state.streamCategory}</h6>
                     <ReactPlayer
                       url= {this.state.streamURL}
                       playing="true"
                     />
                     <p></p>
                   </center>
                 </MDBCard>
               </MDBContainer>
             </div>
           );
         }
       }

export default CurrentStreams;
