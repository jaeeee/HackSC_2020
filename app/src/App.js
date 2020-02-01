import React, { Component } from 'react';
import "./App.css";
import Main from './components/Main';
import fire from './config/firebase';
import {db} from './config/firebase';
import Login from './components/Login';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
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
import NavBar from './components/NavBar';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      name: ""
    };
    this.authListener = this.authListener.bind(this);
  }
  render() {
    return (
      <div>
        
          {/* </MDBCollapse> */}
        {/* /</div></MDBNavbar> */}
        {this.state.user ? <NavBar /> : "" }
        {this.state.user ? 
        // <MDBNavbar color="indigo" dark expand="md">
        //   <MDBNavbarBrand>
        //     <strong className="white-text">EducateMe</strong>
        //   </MDBNavbarBrand>
        //   <MDBNavbarToggler onClick={this.toggleCollapse} />
        //   {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
        //   <MDBNavbarNav left>
        //     <MDBNavItem active>
        //       <MDBNavLink to="#!">Home</MDBNavLink>
        //     </MDBNavItem>
        //     <MDBNavItem>
        //       {/* <Link to="/streams">About Me</Link> */}

        //       <MDBNavLink to={"/streams"}>Streams</MDBNavLink>
        //     </MDBNavItem>
        //     <MDBNavItem>
        //       <MDBNavLink to="/categories">Categories</MDBNavLink>
        //     </MDBNavItem>
        //     <MDBNavItem>
        //       <MDBNavLink to="/profile">Profile</MDBNavLink>
        //     </MDBNavItem>
        //   </MDBNavbarNav>
        //   </MDBNavbar>>
        <Main /> : <Login />}
        {/* <MDBBtn onClick={this.logout}>Logout</MDBBtn> */}
      </div>
    );
  }

  componentDidMount() {
    this.authListener();
    // let currentComp = this;
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // alert("There is a user logged in");
          this.setState({ user });
          localStorage.setItem("user", user.uid);
      } else {
        // alert("There is no user logged in");
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    })
    
  }

}



export default App;
