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
  MDBCardBody,
  MDBIcon
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
              <MDBCard style={{ padding: "20px" }}>
                <center>
                  <h2>Getting Started</h2>
                  <p>
                    <i>
                      First and foremost, welcome to Live&Learn, we are so happy
                      to have you on board. Here at Live&Learn, we provide you a platform for you to broadcast seamlessly and share deeper connections with others.  
                    </i>
                  </p>
                  <h4>
                    <MDBIcon icon="headset" />
                    <b>Streamer</b>
                  </h4>
                  <p>
                    Please navigate to the Profile page via the Navigation Bar
                    in order to set your stream key and stream ID. This will
                    allow you to broadcast to audiences. In order to stream, you
                    must use valid broadcasting service like OBS and configure
                    your stream settings accordingly. Never share your stream
                    key with anyone. You can also update your stream
                    information, like your stream title, description, and
                    category on the Profile page.
                  </p>
                  <h4>
                    <MDBIcon icon="book" />
                    <b>User</b>
                  </h4>
                  <p>
                    We welcome you to indulge yourself in spending time and
                    relaxing on our site. You can view anybody's broadcast on
                    this site. Navigate to the Streams section of our website
                    and simply just enter the person's email you would like to
                    view. Feel free to chat with others online and treat each
                    other with respect! There is a broadcast for everyone to
                    enjoy here.
                  </p>
                  <h2>
                    <MDBIcon icon="street-view" />
                    The Rules
                  </h2>
                  <p>
                    Don't challenge or attack others. The discussions and
                    comments are meant to stimulate conversation not to create
                    contention. Let others have their say, just as you may.
                    Don't post commercial messages on any discussion list,
                    resource library entry, or other area where others might see
                    it. Contact people directly with product and service
                    information if you believe it would help them. Use caution
                    when discussing products. Information posted on the lists
                    and in the libraries is available for all to see, and
                    comments are subject to libel, slander, and antitrust laws.
                    All defamatory, abusive, profane, threatening, offensive, or
                    illegal materials are strictly prohibited. Do not post
                    anything that you would not want the world to see or that
                    you would not want anyone to know came from you. Please note
                    carefully all items listed in the disclaimer and legal rules
                    below, particularly regarding the copyright ownership of
                    information posted. Remember that other participants have
                    the right to reproduce postings to this site unless you
                    specify otherwise. Post your message or documents only to
                    the most appropriate lists or libraries. Do not spam several
                    lists or libraries with the same message. All messages must
                    add to the body of knowledge. We reserve the right to reject
                    any message for any reason.
                  </p>
                </center>
              </MDBCard>
            </MDBContainer>
          </div>
        );
    }
}

export default Guide
