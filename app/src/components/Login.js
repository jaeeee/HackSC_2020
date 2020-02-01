import React, { Component } from "react";
import fire from '../config/firebase';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import SignUp from './SignUp';

export class Login extends Component {
         constructor(props) {
           super(props);
           this.login = this.login.bind(this);
           this.handleChange = this.handleChange.bind(this);
           this.signup = this.signup.bind(this);
           this.state = {
             email: "",
             password: "",
             showsignup: false
             //  isVerified: false
           };
         }
         login(e) {
           //    if (this.state.isVerified == true) {
           e.preventDefault();
           console.log(this.state.email);
           fire
             .auth()
             .signInWithEmailAndPassword(this.state.email, this.state.password)
             .then(u => {})
             .catch(error => {
               alert(error);
             });
           //    } else {
           //  alert("Please complete human verification.");
           //    }
         }

         handleChange(e) {
           // console.log(e.target.value);
           this.setState({ [e.target.name]: e.target.value });
         }

         signup(e) {
             this.setState({
                 showsignup: true
             });
         }

         render() {
           return (
             <MDBContainer>
               <MDBCard
                 style={{ width: "80rem", height: "25rem", padding: "50px" }}
               >
                 <form>
                   <p className="h5 text-center mb-4">Sign in</p>
                   <div className="grey-text">
                     <MDBInput
                       value={this.state.email}
                       onChange={this.handleChange}
                       label="Type your email"
                       icon="envelope"
                       group
                       name="email"
                       type="email"
                       validate
                       error="wrong"
                       success="right"
                     />
                     <MDBInput
                       value={this.state.password}
                       onChange={this.handleChange}
                       label="Type your password"
                       icon="lock"
                       group
                       name="password"
                       type="password"
                       validate
                     />
                   </div>
                   <div className="d-inline">
                     <MDBBtn type="submit" onClick={this.login}>
                       Login
                     </MDBBtn>
                   </div>
                   <div className="d-inline">
                     <MDBBtn color="indigo" onClick={this.signup}>
                       SignUp
                     </MDBBtn>
                     {this.state.showsignup ? <SignUp /> : null}
                   </div>
                 </form>
               </MDBCard>
             </MDBContainer>
           );
         }
       }

export default Login;
