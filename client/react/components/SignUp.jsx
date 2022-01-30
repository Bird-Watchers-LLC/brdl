import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';

const mapStateToProps = state => ({
  username: state.textField.username,
  password: state.textField.password,
});

const mapDispatchToProps = dispatch => ({
  usernameChangeActionCreator: () => dispatch(actions.usernameChangeActionCreater(event)),
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
            Create a username{' '}
            <input
              type="text"
              id="username"
              name="password"
              onChange={this.props.usernameChangeActionCreator}
            />
          </label>
          <label htmlFor="password">
            <input type="text" id="password" name="password" />
          </label>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
