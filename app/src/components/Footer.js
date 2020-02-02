import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <center>
      <MDBFooter color="dark-green" className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <center>
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://github.com/jaeeee/HackSC_2020/"> Live&Learn </a>{" "}
              <MDBIcon icon="heart" />
              {/* Made at USC. */}
            </MDBContainer>
          </center>
        </div>
      </MDBFooter>
    </center>
  );
}

export default Footer;