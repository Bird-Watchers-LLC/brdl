import React, { Component } from 'react';
import LogoIcon from '../../../assets/img/brdl-logo-2-b.png';
import LogoText from '../../../assets/img/brdl-logo-2-c.png';

const mapStateToProps = state => ({});

const mapStateToDispatch = dispatch => ({});

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div className="nav-logo-container">
          <a href="#">
            <img className="nav-logo nav--icon" src={LogoIcon} />
          </a>
          <a href="#">
            <img className="nav-logo nav--text" src={LogoText} />
          </a>
        </div>
        <div className="nav-nav-container">
          <ul>
            <li>
              <a href="#" onClick={this.props.navigationActions.changeToSignUpPageActionCreator}>
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" onClick={this.props.navigationActions.changeToLoginPageActionCreator}>
                Login
              </a>
            </li>
            <li>
              <a href="#" onClick={this.props.navigationActions.changeToCommunityPageActionCreator}>
                Community
              </a>
            </li>
            <li>
              <a href="#" onClick={this.props.navigationActions.changeToProfilePageActionCreator}>
                My Profile
              </a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
