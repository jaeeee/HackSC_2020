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
export class Profile extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.updateInfo = this.updateInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateKey = this.generateKey.bind(this);
    //  this.logout = this.logout.bind(this);
    this.state = {
      //  budget: "",
      //  bio: "",
      //  focus: "",
      //  display_budget: "",
      // Name: "",
      streamKey: "",
      streamDescription: "",
      playbackID: "",
      streamTitle: "",
      streamCategory: ""
    };
  }
  handleChange(e) {
    console.log(e.target.value);
    // console.log(e.target.name);
    if (this._isMounted) {
      this.setState({ [e.target.name]: e.target.value });
    }
    //    console.log(this.state.name);
  }

  updateInfo(e) {
    var docRef = db.collection("users").doc(fire.auth().currentUser.email);
    docRef
      .update({
        // Name: this.state.Name,
        streamKey: this.state.streamKey,
        playbackID: this.state.playbackID,
        streamTitle: this.state.streamTitle,
        streamDescription: this.state.streamDescription,
        streamCategory: this.state.streamCategory
      })
      .then(function() {
        alert("UPDATE DONE");
      })
      .catch(function(error) {
        alert("something went wrong..");
      });
  }

  // fetch('/streamLive', { method: 'POST'}).then((res) => res.json()).then(console.log).catch(console.error)
  generateKey = () => {
    if (this.state.streamKey != null) {
      alert("You already have a stream key.");
      return;
    }
    // callAPI() {
    fetch("http://localhost:9000/streamLive", {
      method: "POST"
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          streamKey: data.stream_key,
          playbackID: data.playbackid
        })
      );
    this.updateInfo();
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;

    let currentComp = this;

    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        var found = 0;
        var userRef = db.collection("users").doc(fire.auth().currentUser.email);
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
                email: doc.data().email,  
                streamKey: doc.data().streamKey,
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
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          // margin: ""
        }}
      >
        <MDBContainer>
          <MDBCard style={{padding:"20px"}}>
            <center>
              <h3>Stream Configurations</h3>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p> */}
              {/* <MDBInput
                value={this.state.Name}
                onChange={this.handleChange}
                label="email"
                //  icon="envelope"
                group
                name="email"
                type="text"
                //  validate
                error="wrong"
                success="right"
                // required
                 disabled
              /> */}
              <MDBInput
                value={this.state.streamTitle}
                onChange={this.handleChange}
                label="Stream Title"
                //  icon="envelope"
                group
                name="streamTitle"
                type="text"
                //  validate
                error="wrong"
                success="right"
                required
                //  disabled
              />
              <MDBInput
                value={this.state.streamDescription}
                onChange={this.handleChange}
                label="Stream Description"
                //  icon="envelope"
                group
                name="streamDescription"
                type="text"
                //  validate
                error="wrong"
                success="right"
                required
                //  disabled
              />
              <MDBInput
                value={this.state.streamCategory}
                onChange={this.handleChange}
                label="Stream Category"
                //  icon="envelope"
                group
                name="streamCategory"
                type="text"
                //  validate
                error="wrong"
                success="right"
                required
                //  disabled
              />
              <MDBInput
                value={this.state.streamKey}
                onChange={this.handleChange}
                label="Stream Key"
                //  icon="envelope"
                group
                name="streamKey"
                type="text"
                //  validate
                error="wrong"
                success="right"
                disabled
                //  disabled
              />
              <MDBInput
                value={this.state.playbackID}
                onChange={this.handleChange}
                label="Playback ID"
                //  icon="envelope"
                group
                name="playbackID"
                type="text"
                //  validate
                error="wrong"
                success="right"
                disabled
                //  disabled
              />

              <div className="text-center py-4 mt-3">
                <MDBBtn color="primary" type="button" onClick={this.updateInfo}>
                  <MDBIcon icon="edit" />
                  Update Info
                </MDBBtn>
                <MDBBtn
                  color="warning"
                  type="button"
                  onClick={this.generateKey}
                >
                  <MDBIcon icon="key" />
                  Generate Key
                </MDBBtn>
                <MDBBtn color="success" type="button" onClick={this.logout}>
                  Logout
                </MDBBtn>
              </div>
            </center>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

export default Profile;
