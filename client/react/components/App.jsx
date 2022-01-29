import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';

const mapStateToProps = (state) => ( { page: state.page } );


const mapDispatchToProps = dispatch => ( {
  changeToLoginPageActionCreator: () => dispatch(actions.changeToLoginPageActionCreator()),
  changeToSignUpPageActionCreator: () => dispatch(actions.changeToSignUpPageActionCreator())
} );


class App extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const display = [<h1 key='title'>brdl</h1>]
    if (this.props.page === 'signUp') {
      display.push(<SignUp />)
      // display.push(<h2 key='signUp'>Sign Up</h2>);
      // display.push(<button key='lB' onClick={this.props.changeToLoginPageActionCreator}>Have an account?</button>)
    }
    else if (this.props.page === 'login') {
      display.push(<Login />)
      // display.push(<h2 key='login'>Login</h2>);
      // display.push(<button key='sB' onClick={this.props.changeToSignUpPageActionCreator}>Need an account?</button>)
    }
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);