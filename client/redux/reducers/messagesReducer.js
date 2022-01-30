import * as types from '../constants/actionTypes';

const initialState = {
  communityMessages: [],
  friendMessages: []
};

const messagesReducer = (state = initialState, action) => {
  const stateCopy = { ...state };

  switch (action.type) {
    case types.UPDATE_FRIEND_MESSAGES:
      return {
        ...stateCopy,
        friendMessages: action.payload,
      };

    case types.UPDATE_COMMUNITY_MESSAGES:
      return {
        ...stateCopy,
        communityMessages: action.payload,
      };

    default:
      return stateCopy;
  }
};

export default messagesReducer;