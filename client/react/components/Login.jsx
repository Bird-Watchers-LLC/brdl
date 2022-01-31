import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';

/*
loginGet: {
  valid: true,
},
*/

const mapStateToProps = state => ({
  loginGet: state.responses.loginGet,
  username: state.textField.username,
  password: state.textField.password,
  validLogin: state.textField.validLogin,
  mode: state.responses.mode,
});

const mapDispatchToProps = dispatch => ({
  changeToProfilePageActionCreator: () => dispatch(actions.changeToProfilePageActionCreator()),
  usernameChangeActionCreator: () => dispatch(actions.usernameChangeActionCreator(event)),
  passwordChangeActionCreator: () => dispatch(actions.passwordChangeActionCreator(event)),
  loginSubmitActionCreator: (e, mode, serverRes) =>
    dispatch(actions.loginSubmitActionCreator(e, mode, serverRes)),
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleAccountSubmit(e, mode, serverRes) {
    e.preventDefault();
    // console.log(e, { mode }, { serverRes });
    let queryRes;
    console.log(this.props);
    console.log(e, this.props.mode);

    if (this.props.mode === 'dev') {
      console.log('here');
      // this.props.loginGet.valid = false;
      console.log(this.props.loginGet.valid);
      if (this.props.loginGet.valid) this.props.changeToProfilePageActionCreator();
      else this.props.loginSubmitActionCreator();
    } else {
      // queryRes = actual server query
      const url = `http://localhost:3000/gainAccess/?username=${this.props.username}&password=${this.props.username}`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'text/html',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': ' * ',
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
          else this.props.loginSubmitActionCreator();
        });
    }
  }

  render() {
    return (
      <div className="login-container" key="lic">
        <header>
          <h1>Already have an accnt?</h1>
          <p>Sign in and get brdlng!</p>
        </header>

        <form action="" onSubmit={e => this.handleAccountSubmit(e)}>
          <label htmlFor="username">
            <p>Username:</p>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="enter username"
              onChange={this.props.usernameChangeActionCreator}
            />
          </label>
          <label htmlFor="password">
            <p>Password:</p>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="enter password"
              onChange={this.props.passwordChangeActionCreator}
            />
          </label>

          <button className="login-btn" type="submit" value="Create account">
            Get brdlng
          </button>
          {this.props.validLogin === false ? (
            <p className="validation-msg">Invalid username or password</p>
          ) : (
            <p className="hidden"></p>
          )}
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
