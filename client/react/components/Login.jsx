import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-container" key="lic">
        <header>
          <h1>Already have an accnt?</h1>
          <p>Sign in and get brdlng!</p>
        </header>
        {this.props.validUser === false ? <p>Incorrect username or password</p> : <p></p>}
        <form action="" onSubmit={e => this.handleAccountSubmit(e)}>
          <label htmlFor="username">
            <p>Create a username:</p>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="enter username"
              onChange={this.props.usernameChangeActionCreator}
            />
          </label>
          <label htmlFor="password">
            <p>Create a password:</p>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="enter password"
              onChange={this.props.passwordChangeActionCreator}
            />
          </label>
          <label htmlFor="full-name">
            <p>Full Name:</p>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="enter full name"
              onChange={this.props.fullNameChangeActionCreator}
            />
          </label>
          <button className="create-account-btn" type="submit" value="Create account">
            Create account
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
