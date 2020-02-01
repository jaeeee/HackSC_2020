import React, { Component } from 'react';
import Main from './components/Main';
import fire from './config/firebase';
import {db} from './config/firebase';

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
        <Main/>
      </div>
    )
  }

  componentDidMount() {
    this.authListener();
    // let currentComp = this;
  }

  authListener() {
    
  }

}



export default App;
