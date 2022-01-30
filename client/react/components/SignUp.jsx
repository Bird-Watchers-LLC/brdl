import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';

const mapStateToProps = state => ({
  username: state.textField.username,
  password: state.textField.password,
});

const mapDispatchToProps = dispatch => ({
  usernameChangeActionCreator: () => dispatch(actions.usernameChangeActionCreater(event)),
  passwordChangeActionCreator: () => dispatch(actions.passwordChangeActionCreater(event)),
  fullNameChangeActionCreator: () => dispatch(actions.fullNameChangeActionCreater(event)),
});

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>New to brdl? Create an account!</h1>
        <form action="">
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
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
