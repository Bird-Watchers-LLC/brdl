import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';
import UserStats from '../components/userStats.jsx';

const mapDispatchTopProps = dispatch => ({
  changePageActionCreator: payload => dispatch(actions.changePageActionCreator(payload)),
  // changeToCommunityPageActionCreator: () => dispatch(actions.changeToCommunityPageActionCreator()), // Replaced by the one above it
});

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <button key='cB' onClick={() => this.props.changePageActionCreator('community')}>Community</button> */}
        <h1>Profile Page</h1>
        <UserStats />
      </div>
    );
  }
}

export default connect(null, mapDispatchTopProps)(ProfileContainer);
