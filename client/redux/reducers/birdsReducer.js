import * as types from '../constants/actionTypes';

const initialState = {
  seenBirds: [],
  localBirds: []
};

const birdsReducer = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case types.UPDATE_SEEN_BIRDS:
      return {
        ...stateCopy,
        seenBirds: action.payload,
      };

    case types.UPDATE_LOCAL_BIRDS:
      return {
        ...stateCopy,
        localBirds: action.payload,
      };

    default:
      return stateCopy;
  }
};

export default birdsReducer;