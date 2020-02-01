import React, { Component } from 'react';
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

export class NavBar extends Component {
    render() {
        return (
          <div>
            {/* // <div> */}
            <MDBNavbar color="indigo" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text">EducateMe</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="../">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  {/* <Link to="/streams">About Me</Link> */}

                  <MDBNavLink to={"/streams"}>Streams</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/categories">Categories</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/profile">Profile</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/guide">Guide</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              {/* </div> */}
              {/* </div> */}
            </MDBNavbar>
          </div>
        );
    }
}

export default NavBar
