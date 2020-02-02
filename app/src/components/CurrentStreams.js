import React, { Component } from "react";
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
import Chatbox from "./Chatbox";

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

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  fetchStatusHandler(response) {
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  }
  updateInfo() {
    if (this.state.email == "") {
      alert("please enter a valid email");
      return;
    }
    let currentComp = this;
    // fire.auth().onAuthStateChanged(function(user) {
    // if (user) {
    var found = 0;
    var userRef = db.collection("users").doc(this.state.email);
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
          let yes = "https://stream.mux.com/" + doc.data().playbackID + ".m3u8";

          fetch(yes)
            .then(responseJson => {
              if (responseJson.ok) {
              currentComp.setState({
                streamURL: yes
              });
              // console.log("allow it");
              // Do something with the response
              } else {
                alert("Stream is currently offline!");
                currentComp.setState({
                  streamTitle: "OFFLINE",
                  streamDescription: "OFFLINE",
                  streamCategory: "OFFLINE",
                    streamURL:
                      "https://pixabay.com/videos/download/video-7070_large.mp4"
                });
                return;
              }
            })
            .catch(error => {
              // alert("Stream is currently offline!");
              // currentComp.setState({});
            });
          // fetch(yes, {
          //   method: "GET"
          // })
          //   .then(this.handleErrors)
          //   // .then(response => console.log("ok"))
          //   .catch(error => console.log(error));

          // fetch(yes)
          //   .then(this.fetchStatusHandler)
          //   // .then(function(response) {
          //   //   return response.blob();
          //   // })
          //     // .then(function(blob) {
          //     //   alert(blob.size);
          //     // })
          //   .catch(function(error) {
          //     alert(error);
          //   });
          // fetch(yes, {
          //  method: "GET"}).then(function(){
          //    alert("yay");
          //  })
          //  .catch(error => {
          //    alert(error) });

          // }
        } catch (error) {
          alert("Something went wrong");
          // console.log("We getting an error: ", error); // ADD back later
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

    /*var blah = "";
           blah += "https://stream.mux.com/";
           blah += this.state.playbackID;
           blah += ".m3u8";
           console.log(blah);
           this.setState({streamURL: blah});
           this.render();*/

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
          <MDBCard style={{ padding: "20px" }}>
            <center>
              <MDBBtn color="green" type="button" onClick={this.updateInfo}>
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
                // validate
                error="wrong"
                success="right"
                required
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
        <MDBContainer>
          <div className="w-85 p-20">
          <MDBCard
            style={{
              // display: "flex",
              // justifyContent: "center",
              alignItems: "left"
              // height: "10vh"
            }}
          >
            <Chatbox />
          </MDBCard>
          </div>
        </MDBContainer>
        /
      </div>
    );
  }
}

export default CurrentStreams;
