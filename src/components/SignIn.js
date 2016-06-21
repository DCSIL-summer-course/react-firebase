import React, { Component } from 'react';
import { render } from 'react-dom';

class SignIn extends Component {
  render(){
    return (
      <div>
        <input type="text" placeholder="Enter Your Name" />
        <input type="submit" value="Enter" />
      </div>
    );
  }
}

export default SignIn;
