import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';

const displayMessage = [];

const mapStateToProps = state => ({
  username: state.textField.username,
  password: state.textField.password,
  fullName: state.textField.fullName,
  validUser: state.textField.validUser,
  mode: state.responses.mode,
  signUpPost: state.responses.signUpPost,
});

const mapDispatchToProps = dispatch => ({
  usernameChangeActionCreator: () => dispatch(actions.usernameChangeActionCreator(event)),
  passwordChangeActionCreator: () => dispatch(actions.passwordChangeActionCreator(event)),
  fullNameChangeActionCreator: () => dispatch(actions.fullNameChangeActionCreator(event)),
  createAccountSubmitActionCreator: (e, mode, serverRes) =>
    dispatch(actions.createAccountSubmitActionCreator(e, mode, serverRes)), // remove server res argument when not needed
  changeToLoginPageActionCreator: () => dispatch(actions.changeToLoginPageActionCreator()),
  changeToProfilePageActionCreator: () => dispatch(actions.changeToProfilePageActionCreator()),
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleAccountSubmit = this.handleAccountSubmit.bind(this);
  }

  handleAccountSubmit(e, mode, serverRes) {
    e.preventDefault();
    // console.log(e, { mode }, { serverRes });
    let queryRes;

    if (this.props.mode === 'dev') {
      console.log('here');
      console.log(this.props.signUpPost.valid);
      if (this.props.signUpPost.valid) this.props.changeToProfilePageActionCreator();
      else this.props.createAccountSubmitActionCreator();
    } else {
      // queryRes = actual server query
      const url = `http://localhost:3000/gainAccess/?username=${this.props.username}&password=${this.props.username}&fullName=${this.props.fullName}`;
      const options = {
        method: 'POST',
        headers: {
          // 'Content-Type': 'text/html',
          // Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      };
      fetch(url, options)
        .then(res => {
          console.log('server response', res);
          return res.json();
        })
        .then(data => {
          console.log('dta', data);
          if (res.valid) this.props.changeToProfilePageActionCreator();
          else this.props.createAccountSubmitActionCreator();
        });
    }

    /*
    /gainAccess* 
  Get or Post
  /gainAccess?username=value&password=value
  { username: value, password: value }
  response = { valid: boolean }
  */

    // queryRes.valid = false;

    // console.log(queryRes);
  }

  render() {
    console.log(this.props.validUser);
    // if (this.props.validUser === false) displayMessage.push(<p>Incorrect username or password</p>);
    // console.log(displayMessage);
    // console.log(this.props);

    return (
      <div>
        <h1>New to brdl? Create an account!</h1>
        {this.props.validUser === false ? <p>Incorrect username or password</p> : <p></p>}
        <form action="" onSubmit={e => this.handleAccountSubmit(e)}>
          <label htmlFor="username">
            Create a username:
            <input
              type="text"
              id="username"
              name="password"
              onChange={this.props.usernameChangeActionCreator}
            />
          </label>
          <label htmlFor="password">
            Create a password:
            <input
              type="text"
              id="password"
              name="password"
              onChange={this.props.passwordChangeActionCreator}
            />
          </label>
          <label htmlFor="full-name">
            Full Name:
            <input
              type="text"
              id="full-name"
              name="full-name"
              onChange={this.props.fullNameChangeActionCreator}
            />
          </label>
          <input type="submit" value="Create account" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
