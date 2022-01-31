import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions.js';


const mapStateToProps = (state) => ({
  mode: state.responses.mode,
  seenBirds: state.birds.seenBirds,
  localBirds: state.birds.localBirds,
  lat: state.textField.lat,
  long: state.textField.long,
  testSeenBirds: state.responses.testSeenBirds,
  testLocalBirds: state.responses.testLocalBirds
});

const mapDispatchToProps = dispatch => ( {
  updateSeenBirdsActionCreator: (payload) => dispatch(actions.updateSeenBirdsActionCreator(payload)),
  updateLocalBirdsActionCreator: (payload) => dispatch(actions.updateLocalBirdsActionCreator(payload)),
  updateLocationActionCreator: (payload) => {
    console.log('hit action with', payload)
    dispatch(actions.updateLocationActionCreator(payload))
  }
} );

class UserStats extends Component {
  constructor (props) {
    super(props)

    this.getBirds = this.getBirds.bind(this);
    // this.getBirdImages = this.getBirdImages.bind(this);
  }

  getBirds(locInfo) {

    if (this.props.mode === 'dev') {
      console.log('Loc', this.props.lat, this.props.long)// delete
      this.props.updateSeenBirdsActionCreator(this.props.testSeenBirds);
      this.props.updateLocalBirdsActionCreator(this.props.testLocalBirds);
      console.log('Location', this.props.lat, this.props.long);// delete
      console.log('state', this.props)// delete
      // this.getBirdImages(this.props.testLocalBirds);

    } else if (this.props.mode === 'prod'){

      const url = `http://localhost:3000/community/everyone?username=${this.props.username}&lat=${this.props.lat}&long=${this.props.long}`

      fetch(url, {method: 'GET', header: {'Access-Control-Allow-Origin': ' * ', 'Content-Type': 'application/json' }})
        .then(data => data.json())
        .then((data) => {
          this.props.updateSeenBirdsActionCreator(data.seenBirds);
          this.props.updateLocalBirdsActionCreator(data.birds);
          // this.getBirdImages(data.birds);
        })
        .catch(err => console.log(err));

    } else console.log('Mode must be prod or dev in ./client/reducers/responsesReducer.js');
  }

  // getBirdImages(birds) {
  //   console.log('birds', birds);
  //   for (let ind = 0; ind < 1; ind ++) {
  //     const url = `https://serpapi.com/search.json?q=${birds[ind].sciBirdName}&tbm=isch&ijn=0&api_key=a1e062b7f426e91cf08f091ba3753a8ce04019b3ca9c52c4886c818b9920ae8a`;
  //     fetch(url, {method: 'GET', header: {'Access-Control-Allow-Origin': ' * ', 'Content-Type': 'application/json' }})
  //       .then(iamge => image.json())
  //       .then(image => {
  //         console.log(image)
  //       })
  //   }
  // }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((loc) => {
      const lat = String(Math.floor(loc.coords.latitude * 100) / 100),
        long = String(Math.floor(loc.coords.longitude * 100) / 100),
        locInfo = {};

      locInfo.lat = lat;
      locInfo.long = long;

      this.props.updateLocationActionCreator(locInfo);
      this.getBirds();
    })
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

      display.unshift(<h2 key='h2US'>{`You have seen ${totalSeenBirds}.\nYou have seen ${seenBirdsInThisArea} out of ${totalBirdsInArea} in the area`}</h2>)
    } else display.push(<h1 key='oops'>Error with localBirds</h1>);

    return (
      <div key='cMD'>
        {display}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStats);