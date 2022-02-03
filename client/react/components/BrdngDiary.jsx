import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';

class BrdingDiary extends Component {
  constructor(props){
    super(props)
  }






  render(){
    return(
      <div className="component-container">
      {/* <button key='cB' onClick={() => this.props.changePageActionCreator('community')}>Community</button> */}
      <h1 className="profile-header">Brding Diary</h1>
    </div>
    )
  }
}


export default BrdingDiary;