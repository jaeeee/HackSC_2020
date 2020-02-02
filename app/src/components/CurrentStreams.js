import React, { Component } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import { db } from "../config/firebase";
import fire from "../config/firebase";
import ReactPlayer from "react-player";

export class CurrentStreams extends Component {
         _isMounted = false;
         constructor() {
           super();
           this.updateInfo = this.updateInfo.bind(this);
           this.handleChange = this.handleChange.bind(this);
           //  this.generateKey = this.generateKey.bind(this);
           //  this.logout = this.logout.bind(this);
           this.state = {
             //  streamKey: "",
             email: "",
             streamDescription: "",
             playbackID: "",
             streamTitle: "",
             streamCategory: "",
             streamURL: ""
           };
         }
         handleChange(e) {
          //  console.log(e.target.value);
           // console.log(e.target.name);
           if (this._isMounted) {
             console.log(e.target.name);
             this.setState({ [e.target.name]: e.target.value });
             console.log(e.target.value);
           }
              console.log(this.state.name);
         }

         updateInfo() {
                 let currentComp = this;
              // fire.auth().onAuthStateChanged(function(user) {
                // if (user) {
                  var found = 0;
                  var userRef = db
                    .collection("users")
                    .doc(this.state.email);
                  // var username = fire.auth().currentUser.email;
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

                  // if (found == 1) {
                  //   //console.log("does hit this")
                  // } else {
                  //   currentComp.setState({
                  //     budget: ["N/A"]
                  //   });
                  // }
                // }
              // });
              // this.updateInfo();
              // this.updateInfo();
           var blah = "";
           blah += "https://stream.mux.com/";
           blah += this.state.playbackID;
           blah += ".m3u8";
           console.log(blah);
           this.setState({streamURL: blah});
           this.render();
          //  this.componentWillUnmount();
          //  this.componentDidMount();
          //  var bruh = JSON.stringify(this.state.playbackID);
          //  console.log(this.state.playbackID);
          //  console.log(JSON.stringify(this.state.playbackID));
          //  blah = "https://stream.mux.com/" + bruh + ".m3u8";
          //  this.setState({ streamURL: blah });
          //  console.log(this.state.streamURL);
         }

         componentWillUnmount() {
           this._isMounted = false;
         }

         componentDidMount() {
           this._isMounted = true;  
         }
        //  componentDidMount() {
        //    this._isMounted = true;

        //    let currentComp = this;
        //    // this.updateInfo();
        //    fire.auth().onAuthStateChanged(function(user) {
        //      if (user) {
        //        var found = 0;
        //        var userRef = db
        //          .collection("users")
        //          .doc(this.statee.use);
        //        var username = fire.auth().currentUser.email;
        //        userRef.onSnapshot(
        //          {
        //            includeMetadataChanges: true
        //          },
        //          function(doc) {
        //            try {
        //              //    if (this._isMounted) {

        //              currentComp.setState({
        //                //  budget: doc.data().budget,
        //                //  bio: doc.data().bio,
        //                //  focus: doc.data().focus,
        //                //  name: doc.data().name
        //                // streamKey: doc.data().streamKey,
        //                streamDescription: doc.data().streamDescription,
        //                playbackID: doc.data().playbackID,
        //                streamTitle: doc.data().streamTitle,
        //                streamCategory: doc.data().streamCategory
        //              });
        //              // }
        //            } catch (error) {
        //              console.log("We getting an error: ", error); // ADD back later
        //              found = 0;
        //            }
        //          }
        //        );

        //        if (found == 1) {
        //          //console.log("does hit this")
        //        } else {
        //          currentComp.setState({
        //            budget: ["N/A"]
        //          });
        //        }
        //      }
        //    });
        //   //  this.updateInfo();
        //  }



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
                     <MDBBtn
                       color="green"
                       type="button"
                       onClick={this.updateInfo}
                     >
                       {/* <MDBIcon icon="video" /> */}
                       Load Stream
                     </MDBBtn>
                     <ReactPlayer url={this.state.streamURL} playing="true" />
                     <MDBInput
                       value={this.state.email}
                       onChange={this.handleChange}
                       label="Enter user's email"
                       //  icon="envelope"
                       group
                       name="email"
                       type="text"
                       //  validate
                       error="wrong"
                       success="right"

                       //  disabled
                     />
                     {/* <div className="text-center py-4 mt-3"> */}

                     {/* <h3>Current streams here!</h3> */}
                     <h4>Title: {this.state.streamTitle}</h4>
                     <h5>Description: {this.state.streamDescription}</h5>
                     <h6>Category: {this.state.streamCategory}</h6>

                     <p></p>
                   </center>
                 </MDBCard>
               </MDBContainer>
             </div>
           );
         }
       }

export default CurrentStreams;
