import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';

const mapStateToProps = (state) => ({ 
  mode: state.responses.mode,
  testMessages: state.responses.testMessages,
  friendMessages: state.messages.friendMessages 
});


const mapDispatchToProps = dispatch => ( {
  updateFriendMessagesActionCreator: (payload) => dispatch(actions.updateFriendMessagesActionCreator(payload)),
} );

class FriendSitings extends Component {
  constructor (props) {
    super(props)

    this.getFriendMessages = this.getFriendMessages.bind(this);
  }

  getFriendMessages() {
    const url = `http://localhost:3000/Friend/everyone?username=${this.props.username}`

    if (this.props.mode === 'dev') this.props.updateFriendMessagesActionCreator(this.props.testMessages);
    else if (this.props.mode === 'prod') {
      fetch(url, {method: 'GET', header: {'Access-Control-Allow-Origin': ' * ', 'Content-Type': 'application/json' }})
        .then(data => data.json())
        .then((data) => this.props.updateFriendMessagesActionCreator(data.messages))
        .catch(err => console.log(err));
    } else console.log('Mode must be prod or dev in ./client/reducers/responsesReducer.js');
  }

  componentDidMount() {
    this.getFriendMessages();
  }

  render () {
    const display = [];

    if (this.props.friendMessages instanceof Array) {
      this.props.friendMessages.forEach((mess, ind) => {
        display.push(<p key={`fM${ind}`}>{`${mess.username} saw a ${mess.sciBirdName} in ${mess.location.area} around ${mess.timeStamp}`}</p>)
      })
    } else display.push(<h1 key='oopsy'>Error with friendMessages</h1>);

    return (
      <div key='fMD'>
        {display}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendSitings);