import React, { Component } from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard, 
  MDBCardText,
  MDBCardTitle,
  MDBCardBody
} from "mdbreact";

export class Guide extends Component {
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
                  <h3>Getting Started</h3>

                  <h4>
                    <b>Streamer</b>
                  </h4>
                  <p>Please navigate to the Profile page via the Navigation Bar in order to set your stream key and stream ID. This will allow you to broadcast to audiences. In order to stream, you must use valid broadcasting service like OBS and configure your stream settings accordingly. Never share your stream key with anyone.</p>
                  <h4>
                    <b>User</b>
                  </h4>
                  <p>You can view anybody's broadcast on this site. Navigate to the Streams section of our website and simply just enter the person's email you would like to view.</p>
                </center>
              </MDBCard>
            </MDBContainer>
          </div>
        );
    }
}

export default Guide
