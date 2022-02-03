import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrdngDiary from '../components/BrdngDiary.jsx';
 import * as actions from '../../redux/actions/actions.js';

 const mapDispatchToProps = dispatch => ({
  changePageActionCreator: payload => dispatch(actions.changePageActionCreator(payload)),
});

class BrdngDiaryContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-container">
        <h1>Brdng Diary</h1>
        <BrdngDiary />
      </div>
    );
  }
}


export default connect(null, mapDispatchToProps)(BrdngDiaryContainer);
