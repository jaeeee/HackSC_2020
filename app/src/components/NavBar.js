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
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";

export class NavBar extends Component {
    render() {
        return (
          <div>
            {/* // <div> */}
            <MDBNavbar color="" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text"> EducateMe</strong>{" "}
                <MDBIcon icon="apple-alt" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink to="../">
                    <MDBIcon icon="home" />
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  {/* <Link to="/streams">About Me</Link> */}

                  <MDBNavLink to={"/streams"}>
                    <MDBIcon icon="video" />
                    Streams
                  </MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="/categories">Categories</MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem>
                  <MDBNavLink to="/profile">
                    <MDBIcon icon="user-edit" />
                    Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/guide">
                    <MDBIcon icon="clipboard-list" />
                    Guide
                  </MDBNavLink>
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
