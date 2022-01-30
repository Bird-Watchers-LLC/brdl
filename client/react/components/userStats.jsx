import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';


const mapStateToProps = (state) => ({
  mode: state.responses.mode,
  seenBirds: state.birds.seenBirds,
  localBirds: state.birds.localBirds,
  testSeenBirds: state.responses.testSeenBirds,
  testLocalBirds: state.responses.testLocalBirds
});

const mapDispatchToProps = dispatch => ( {
  updateSeenBirdsActionCreator: (payload) => dispatch(actions.updateSeenBirdsActionCreator(payload)),
  updateLocalBirdsActionCreator: (payload) => dispatch(actions.updateLocalBirdsActionCreator(payload)),
} );

class UserStats extends Component {
  constructor (props) {
    super(props)

    this.getBirds = this.getBirds.bind(this);
  }

  getBirds() {
    if (this.props.mode === 'dev') {

      this.props.updateSeenBirdsActionCreator(this.props.testSeenBirds);
      this.props.updateLocalBirdsActionCreator(this.props.testLocalBirds);

    } else if (this.props.mode === 'prod'){

      const url = `http://localhost:3000/community/everyone?username=${this.props.username}&location=${this.props.location}`

      fetch(url, {method: 'GET', header: {'Access-Control-Allow-Origin': ' * ', 'Content-Type': 'application/json' }})
        .then(data => data.json())
        .then((data) => {
          this.props.updateSeenBirdsActionCreator(data.seenBirds);
          this.props.updateLocalBirdsActionCreator(data.birds);
        })
        .catch(err => console.log(err));

    } else console.log('Mode must be prod or dev in ./client/reducers/responsesReducer.js');
  }

  componentDidMount() {
    this.getBirds();
  }

  render () {
    const display = [];
    if (this.props.localBirds instanceof Array) {
      const totalSeenBirds = this.props.seenBirds.length,
        totalBirdsInArea = this.props.localBirds.length,
        seenBirdNames = this.props.seenBirds.reduce((acc, curr) => {
          acc[curr.sciBirdName] = true;
          return acc;
        }, {})
      let seenBirdsInThisArea = 0;

      this.props.localBirds.forEach((bird, ind) => {
        let seen = 'Has not been seen.';
        if (bird.sciBirdName in seenBirdNames) {
          seenBirdsInThisArea++;
          seen = 'Has been seen.';
        }
        display.push(<p key={`cM${ind}`}>{`${bird.sciBirdName} is in the area. ${seen}`}</p>)
      })

      display.unshift(<h2>{`You have seen ${totalSeenBirds}.\nYou have seen ${seenBirdsInThisArea} out of ${totalBirdsInArea} in the area`}</h2>)
    } else display.push(<h1 key='oops'>Error with localBirds</h1>);

    return (
      <div key='cMD'>
        {display}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStats);