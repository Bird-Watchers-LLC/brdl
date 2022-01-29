import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor(props) {
    super(props);
    
  }

  handleOnSubmit () {

  }

  handleUsernameChange () {

  }

  handlePasswordChange () {

  }


  render() {
    return (
      <div>
        <h1>New to brdl? Create an account!</h1>
        <form action="" onSubmit={}>
          <label htmlFor="username">
            Create a username <input type="text" id="username" name='password'/>
          </label>
          <label htmlFor="password">
            <input type="text" id='password' name='password'/>
          </label>
        </form>
      </div>
    );
  }
}

export default SignUp;
